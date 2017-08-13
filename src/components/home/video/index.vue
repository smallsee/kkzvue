<template>
  <div class="kkz-video" >

    <div class="main w flex-row-between">
      <div class="main-left">

        <div class="tag">
          <header-title headerTitle="分类"></header-title>


          <p class="word-break tag-item">
            <span class="tag-item_title">声优:</span>

            <Select @on-change="_changSelect" class="akira-select" v-model="akiraNow" filterable multiple size="large" >
              <Option  v-for="item in akiraData" :value="item.name" :key="item.name">{{ item.name }}</Option>
            </Select>
          </p>

          <p class="word-break tag-item">
            <span class="tag-item_title">类型:</span>
            <span :class="{active: !tagNow }" class="tag-item_content" @click="_changeTag('')">全部</span>
            <template v-for="(item,index) in tagData">

              <span :class="{active: tagNow == item.name }" class="tag-item_content" @click="_changeTag(item.name)">{{item.name}}</span>
            </template>
          </p>

        </div>

        <div class="kkz-video">

          <header-title headerTitle="全部动漫" ></header-title>
          <ul class="clearfix">

            <template v-for="(item,index) in data">

            <li style="float: left">
              <image-title-rate   width="172px" imgHeight="220px"
                    :isNoMarginRight="(index+1)%4 === 0 ? true : false"
                    :img="item.thumb"
                    :url="'/#/video/detail/'+item.id"
                    :title="item.title"
              ></image-title-rate>
            </li>

            </template>

          </ul>
          <div style="float: right;">
            <Page  show-elevator show-sizer :total="total" :page-size="pageSize" :current="1" @on-change="_changePage" @on-page-size-change="_changePageSize"></Page>
          </div>
        </div>

      </div>

      <div class="main-right">
        <div class="update-video">
          <header-title headerTitle="新番更新时间" ></header-title>
          <div class="kkz-weekDate">
            <div class="date-nav flex-row-around">
              <template v-for="(item,index) in week">
                <span :class="{active: weekNow == item.name }" class="date-item" @click="_changeWeek(item.name)">{{item.name}}</span>
              </template>
            </div>

            <template v-for="(item,index) in weekDataNow">
              <div class="dateVideo flex-row-between word-break">
                <router-link class="title" :to="{path: '/video/detail/'+item.id,params: { id: item.id }}">
                  {{item.title}}
                </router-link>
                <span class="now-num">第{{item.files_count}}话</span>
              </div>
            </template>
          </div>
        </div>

        <div class="hot-video">
          <header-title headerTitle="热门番剧" ></header-title>
          <template v-for="(item,index) in sortData">
              <image-title-row
                  :isBox="true"
                  :isFlexEnd="true"
                  :img="item.thumb"
                  :videoTitle="item.title"
                  :videoUrl="'/#/video/detail/' + item.id"
                  :num="item.see + '次观看'"
              ></image-title-row>
          </template>
        </div>

      </div>
    </div>



  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleRate from 'base/image-title-rate/image-title-rate'
  import {getHomeVideoList,getTagList, getAkiraList, getWeekList} from 'api/video';
  import {ERR_OK} from 'api/config';
  import ImageTitleRow from 'base/image-title-row/image-title-row'

  export default {
    data() {
      return {
        data: [],

        screenData:[],

        tagData: [],
        tagNow: "",
        tagDataNow: [],

        akiraData: [],
        akiraNow: [],
        akiraDataNow: [],

        week: [],
        weekNow:"周一",
        weekData: [],
        weekDataNow: [],

        dataTotal:[],
        sortData:[],
        sortPage:10,
        total: 0,
        pageSize: 16
      }
    },
    created() {
      this._getDay();
      this._getVideoList();
      this._getTagList();
      this._getAkiraList();
      this._getWeekList();
    },
    methods:{
      _refreshData(arr){
        this.data = arr.slice(0,this.pageSize);
        this.total = arr.length;
      },
      _getAkiraList(){
        getAkiraList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.akiraData = res.data;
          }
        })
      },
      _getDay() {
         this.weekNow = "周" + "日一二三四五六".split("")[new Date().getDay()];
      },
      _getWeekList(){
        getWeekList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.week = res.data;
          }
        })
      },
      _changeWeek(name){
        this.weekNow = name;
        this._getNowWeekData();
      },
      _getNowWeekData() {
        this.weekDataNow = [];
        this.weekData.forEach((item) => {
          if (this.$_.includes(item.update_date,this.weekNow)){
            this.weekDataNow.push(item);
          }
        })

      },
      _getVideoList() {
        getHomeVideoList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.dataTotal = res.data;
            this.data = this.dataTotal.slice(0,this.pageSize);
            this.total = this.dataTotal.length;

            this.dataTotal.forEach((item) => {
              if (item.is_new === true) {
                this.weekData.push(item);
              }
            });
            this._getNowWeekData();
            this.sortData = this.$_.orderBy(this.dataTotal, 'see', 'desc').slice(0,this.sortPage);
          }
        })
      },
      _getTagList() {
        getTagList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.tagData = res.data;
          }
        })
      },
      _refresh(){
        this.screenData = [];
        if (!this.akiraDataNow.length > 0 && !this.tagDataNow.length){
          this._refreshData(this.dataTotal);
        }else{
//          if (this.akiraDataNow.length > 0){
//            this._refreshData(this.akiraDataNow);
//          }
//          if (this.tagDataNow.length > 0){
//            this._refreshData(this.tagDataNow);
//          }
          this._refreshData(this.$_.union(this.akiraDataNow,this.tagDataNow));
        }
      },
      _dataRemake() {
         if (this.akiraDataNow.length > 0 && this.tagDataNow.length > 0){
           this.screenData = this.$_.intersection(this.akiraDataNow, this.tagDataNow);
           this._refreshData(this.screenData);

//           this.akiraDataNow.forEach((akira) => {
//             this.tagDataNow.forEach((tag) => {
//                 if (akira.title === tag.title){
//                   this.screenData.push(akira)
//                 }
//
//             });
//           });
//           this._refreshData([...new Set(this.screenData)]);
         }
      },
      _changSelect(){
        this.akiraDataNow = [];
        this._refresh();

        if(this.akiraNow.length > 0){
          let dataTotal = this.dataTotal;
          dataTotal.forEach((item) => {
            this.akiraNow.forEach((selfAkira) => {
              item.akira.forEach((akira) => {
                  if (selfAkira === akira){
                    this.akiraDataNow.push(item)
                  }
              });
            });
          });
          this._refreshData(this.$_.union(this.akiraDataNow));
          this._dataRemake();
        }
      },
      _changeTag(name=''){
        this.tagDataNow = [];
        this._refresh();
        this.tagNow = name;
        if(this.tagNow){

          this.dataTotal.forEach((item) => {

                item.tag.forEach((tag) => {
                  if (tag === this.tagNow){
                    this.tagDataNow.push(item)
                  }
                });
          });
          this._refreshData(this.tagDataNow);
          this._dataRemake();
        }
      },
      _changePageSize(even){
        this.pageSize = even;
      },
      _changePage(even){
        this.data = this.dataTotal.slice( (even-1)*this.pageSize , even*this.pageSize);
      },
    },
    components:{
      HeaderTitle,
      ImageTitleRate,
      ImageTitleRow
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/variable";
  .kkz-video{
    box-sizing: border-box;
    .main{
      .main-left{
        width: 720px;
        height: auto;
        .tag{
          .tag-item{
            margin-top: 10px;
            font-size: 12px;
            line-height: 15px;
            .akira-select{
              margin-left: 10px;
              width: 500px;
            }
          }
          .tag-item_content{
            cursor: pointer;
            line-height: 22px;
            margin-right: 5px;

            &.active{
              color: #c34b69;
            }
            &:hover{
              color: #c34b69;
            }

          }
        }
      }
      .main-right{
        width: 250px;
        height: auto;
        .kkz-weekDate{
          .date-nav{
            margin-bottom: 10px;
            .date-item{
              cursor: pointer;
              font-size: 12px;
              &:hover{
                color: $color-border-red-d;
              }
              &.active{
                color: #c34b69;
              }
            }
          }
          .dateVideo{
            border-bottom: 1px dashed rgba(80, 72, 72, 0.14);
            padding: 10px 0;
            font-size: 13px;

            .title{
              color: #118D93;
              line-height: 22px;
              text-decoration: none;
              cursor: pointer;
              &:hover{
                color: $color-border-red-d;
              }
            }
            .now-num{
              font-size: 12px;
              color: #999;
              margin: 5px 0;
            }
          }
        }



      }
    }
  }
</style>