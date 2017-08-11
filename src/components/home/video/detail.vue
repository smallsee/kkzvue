<template>
  <div class="kkz-video_detail" >

    <div class="main w flex-row-between">

        <div class="main-left">


        <div class="video-info">
          <h4 class="title word-break">{{data.title}}
          <span>({{data.issue_date}})</span>
        </h4>

          <div class="flex-row">


            <div class="thumb">
              <img v-lazy="data.thumb" alt="">
            </div>

            <div class="info">

              <div class="info-wrapper">
                <span class="info_name">篇幅:</span>
                <span class="info_content">{{data.version}}/{{data.files_count}}</span>
              </div>

              <div class="info-wrapper">
                <span class="info_name">国家/地区:</span>
                <span class="info_content">{{data.address}}</span>
              </div>

              <div class="info-wrapper">
                <span class="info_name">语言:</span>
                <span class="info_content">{{data.language}}</span>
              </div>

              <div class="info-wrapper">
                <span class="info_name">类型:</span>
                <template v-for="(item,index) in data.tag">
                  <a href="#" class="info_content">{{item}}&nbsp;&nbsp;</a>
                </template>
              </div>

              <div class="info-wrapper">
                <span class="info_name">声优:</span>
                <template v-for="(item,index) in data.akira">
                  <a href="#" class="info_content">{{item}}&nbsp;&nbsp;</a>
                </template>
              </div>

              <div class="info-wrapper">
                <span class="info_name">简介:</span>
                <span class="info_content word-break">{{data.introduction}}</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div class="main-right">
                右
      </div>
    </div>


    <div class="main file-content">
      <div class="w flex-row-between">
        <div class="main-left">

          <div class="file">
            <header-title :headerTitle="'播放集数'"></header-title>
            <div class="file-info clearfix">

              <template v-for="(item,index) in fileData">
                <a :href="'/#/video/' + data.id + '?file=' + index" class="file float-left">{{index + 1}}.{{item.file_name}}</a>
              </template>

              <span class="float-left a-blue-pink file-show" v-if="showFile" @click="_changeFileShow">{{isShowAllFile ? '收起' : '展开'}}</span>

            </div>
          </div>

          <div class="recommend">
            <header-title :headerTitle="'相关推荐'"></header-title>

            <div class="flex-row-end change-recommend">
              <Button @click="_shuffleRecommend" size="small" type="ghost" shape="circle">
                <span class="icon"><Icon  type="refresh"></Icon></span>换一批</Button>
            </div>

            <ul class="clearfix">

              <template v-for="(item,index) in recommendDataShow">

                <li class="float-left">
                  <image-title-rate
                                        width="172px" imgHeight="220px"
                                      :isNoMarginRight="(index+1)%4 === 0 ? true : false"
                                      :img="item.thumb"
                                      :url="'/video/detail/'+item.id"
                                      :title="item.title"
                                      :id="item.id"
                                      @select="_changeData"

                  ></image-title-rate>
                </li>

              </template>

            </ul>
          </div>

        </div>
        <div class="main-right">右</div>
      </div>
    </div>


  </div>



</template>

<script>
  import {getShowVideoList,getRecommendVideoList,getHomeVideoList} from 'api/video'
  import ImageTitleRate from 'base/image-title-rate/image-title-rate'
  import {ERR_OK} from 'api/config';
  import HeaderTitle from 'base/header-title/header-title'
  export default {
    data() {
      return {
        isShowAllFile: false,
        data:[],
        fileData:[],
        fileShortData:[],
        fileLongData:[],
        fileNum: 12,
        dataTotal:[],
        recommend:{
          tagList: [],
          akiraList: []
        },
        recommendData:[],
        recommendDataShow:[],
        recommendNum: 4
      }
    },
    created() {
      this._getVideoData(this.$route.params.id);
      this._getVideoList();
    },
    methods:{
      _changeFileShow() {
        this.isShowAllFile = !this.isShowAllFile;

        if(this.isShowAllFile){
          this.fileData = this.fileLongData;
        }else{
          this.fileData = this.fileShortData;
        }

      },
      _changeData(id) {

        this.dataTotal.forEach((item) => {
          if (parseInt(item.id) === parseInt(id) ){
            this._getVideoData(id);
          }
        });

        setTimeout(() => {
          this._Recommend();
        },20);
//        this.$router.push({
//          path: `video/detail/` + id
//        });

      },
      _getVideoData(id) {
        getShowVideoList(id).then(res => {
          if (res.meta.errno === ERR_OK){
            this.data = res.data;
            this.recommend.tagList = res.data.tag;
            this.recommend.akiraList = res.data.akira;

            this.fileShortData = res.data.files.slice(0,this.fileNum),
            this.fileLongData = res.data.files;
            this.fileData = this.fileShortData
          }
        })
      },
      _getVideoList() {
        getHomeVideoList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.dataTotal = res.data;
            this._Recommend()
          }
        })
      },
      _Recommend() {
        let tagList = [];
        this.recommendData = [];
        this.recommend.tagList.forEach((item) => {
          if (item !== '番剧' ){
            tagList.push(item)
          }
        });

        this.dataTotal.forEach((item) => {
            if ( ( this.$_.intersection(item.tag, tagList) ).length > 0){
              this.recommendData.push(item);
            }

          if ( ( this.$_.intersection(item.akira, this.recommend.akiraList) ).length > 0){
            this.recommendData.push(item);
          }
        });

        this.recommendData = this.$_.union(this.recommendData);

        this._shuffleRecommend();
      },
      _shuffleRecommend(){

        this.recommendDataShow = this.$_.shuffle(this.recommendData).slice(0,this.recommendNum);
      }
    },
    components:{
      HeaderTitle,
      ImageTitleRate,
    },
    computed:{
      showFile() {
        return this.data.files_count > this.fileNum ? true : false;
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/variable";
  .kkz-video_detail{
    box-sizing: border-box;
    .main{
      margin-top: 20px;
      .main-left{
        width: 720px;
        height: auto;
        .title{
          margin-bottom: 20px;
          letter-spacing:1px;
          max-width: 600px;
          font-size: 22px;
          span{
            color: #888;
          }
        }
        .thumb{
          min-width: 145px;
          height: 200px;
          overflow: hidden;
          margin-right: 10px;
          img{
            width: 100%;
          }
        }
        .info{
          .info-wrapper{
            color: #232121;
            font-size: 14px;
            margin-bottom: 5px;
            .info_name{
              color: #888;
            }
            .info_content{
              line-height: 25px;
            }
            a{
              color: #118D93;
              &:hover{
                color: #dd5862;
              }
            }
          }
        }

        .file-info{
          margin-top: 20px;
          .file{
            border-radius: 8px;
            display: block;
            background-color: rgba(255, 255, 255, 0.45);
            border: 1px solid rgba(0, 0, 0, 0.12);
            padding: 8px 10px;
            font-size: 13px;
            margin: 0 10px 10px 0;
            color: #5a4a4a;
            &:hover{
              color: #dd5862;
              background-color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
      .main-right{
        width: 250px;
        height: auto;
      }
    }
    .file-show{
      line-height: 30px;
      cursor: pointer;
    }
    .file-content{
      background-color: #ffffff;
      .change-recommend{
        margin-top: -25px;
        margin-bottom: 15px;
      }
    }
  }
</style>

