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

        <div class="file-info clearfix">

          <template v-for="(item,index) in data.files">
            <a :href="'/#/video/' + data.id + '?file=' + index" class="file float-left">{{index + 1}}.{{item.file_name}}</a>
          </template>

        </div>

      </div>
        <div class="main-right">
                  右
        </div>
    </div>


  </div>
</template>

<script>
  import {getShowVideoList} from 'api/video'
  export default {
    data() {
      return {
        data:[]
      }
    },
    created() {
      this._getVideoData(this.$route.params.id);
    },
    methods:{
      _getVideoData(id) {
        getShowVideoList(id).then(res => {
          this.data = res.data;
        })
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
  }
</style>

