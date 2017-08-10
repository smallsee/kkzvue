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

        <div class="video">

          <header-title headerTitle="全部动漫" ></header-title>
          <ul class="clearfix">

            <template v-for="(item,index) in data">
            <li style="float: left">
              <image-title-rate   width="172px" imgHeight="220px"
                    :isNoMarginRight="(index+1)%4 === 0 ? true : false"
                    :img="item.thumb"
                    :url="'video/'+item.id"
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
        <header-title headerTitle="新番更新时间" ></header-title>

        <div class="date-nav flex-row-around">
          <span class="date-item">周一</span>
          <span class="date-item">周二</span>
          <span class="date-item">周三</span>
          <span class="date-item">周四</span>
          <span class="date-item">周五</span>
          <span class="date-item">周六</span>
          <span class="date-item">周日</span>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleRate from 'base/image-title-rate/image-title-rate'
  import {getHomeVideoList,getTagList, getAkiraList} from 'api/video';
  import {ERR_OK} from 'api/config';

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

        date:"周一",
        newData: [],

        dataTotal:[],
        total: 0,
        pageSize: 12
      }
    },
    created() {
      this._getVideoList();
      this._getTagList();
      this._getAkiraList()
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
      _getVideoList() {
        getHomeVideoList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.dataTotal = res.data;
            this.data = this.dataTotal.slice(0,this.pageSize);
            this.total = this.dataTotal.length;

            this.dataTotal.forEach((item) => {
              if (item.is_new === true) {
                this.newData.push(item);
              }
            });
            console.log(this.newData[10].update_date)

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
           this.screenData = this.$_.intersection(this.akiraDataNow, this.tagDataNow)
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
          let dataTotal = this.dataTotal;
          dataTotal.forEach((item) => {

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
      ImageTitleRate
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/variable";
  .kkz-video{
    box-sizing: border-box;
    padding-top: 10px;

    .main{
      margin-top: 20px;
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
        .date-nav{
          .date-item{
            cursor: pointer;
            font-size: 12px;
            &:hover{
              color: $color-border-red-d;
            }
          }
        }
      }
    }
  }
</style>