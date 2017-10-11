<template>
  <div class="kkz-shop">
    <div class="w flex-row-between">
      <div class="shop-box clearfix">

        <div class="tag">
          <header-title :headerTitle="'分类'"></header-title>

          <p class="word-break tag-item">
            <span class="tag-item_title">类型:</span>
            <span  class="tag-item_content" >全部</span>
            <template v-for="(item,index) in categoryData">
              <span  class="tag-item_content" >{{item.title}}</span>
            </template>
          </p>

        </div>

        <header-title :headerTitle="'该类商品'" ></header-title>


        <template v-for="(item,index) in data">
          <div  :class="{'no-margin-right': (index + 1)%4==0}" class="shop-item">

          <div class="thumb">
            <a :href="'/#/shop/' + item.id"><img v-lazy="item.thumb[0].url" alt="" ></a>
          </div>

          <div class="padding-5px">
            <div class="flex-row-between shop-info">
              <div class="money">
                ￥{{item.price}}

              </div>
              <span class="buy-num">92人付款</span>
            </div>

            <div class="info">
              <span class="is-send">包邮</span>
              <a :href="'/#/shop/' + item.id">{{item.title}}</a>
            </div>

            <div class="flex-row-between detail">

              <span class="shop-name">
                <i class="fa fa-bars"></i>
                {{item.user}}
              </span>

              <span class="address">
                东莞   京山
              </span>

            </div>

          </div>
        </div>
        </template>


        <div style="float: right;">
          <Page  show-elevator show-sizer :total="total" :page-size="pageSize" :current="1" @on-change="_changePage" @on-page-size-change="_changePageSize"></Page>
        </div>


      </div>
      <div class="other-box">
        <header-title :headerTitle="'全部动漫'" ></header-title>
        <image-title-cover textAlign="left" textFont="14px" :width="210" :height="120"></image-title-cover>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleCover from 'base/image-title-cover/image-title-cover'
  import {getShopList,getCategoryList} from 'api/shop';
  import {ERR_OK} from 'api/config';
  export default {
    data() {
      return {
        categoryData:[],
        data:[],
        dataTotal:[],
        total: 0,
        pageSize: 20,
      }
    },
    created() {
      this._getShopList();
      this._getCategoryList();
    },
    methods:{
      _getShopList() {
        getShopList().then((res) => {
          if (res.meta.errno === ERR_OK){
            this.dataTotal = res.data;
            this.data = this.dataTotal.slice(0,this.pageSize);
            this.total = res.data.length;
          }else{
            this.$Message.error(res.message);
          }
        })
      },
      _getCategoryList(){
        getCategoryList().then((res) => {
          if (res.meta.errno === ERR_OK){
            this.categoryData = res.data;
          }else{
            this.$Message.error(res.message);
          }
        })
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
      ImageTitleCover
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-shop{
    .shop-box{
      width: 750px;
      .tag{
        margin-bottom: 20px;
        .tag-item{
          margin-top: 10px;
          font-size: 14px;
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
      .shop-item{
        box-shadow: 2px 2px 2px #a5a3a3;
        border: 1px solid #eaeaea;
        background-color: white;
        width: 172px;
        height: 285px;
        margin-right: 20px;
        margin-bottom: 15px;
        float: left;
        .thumb{
          width: 100%;
          height: 180px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .shop-info{
          margin: 5px 0 5px 0;
          .money{
            font-size: 16px;
            color: #F40;
            font-weight: 700;
          }
          .buy-num{
            font-size: 12px;
            color: #888;
          }
        }
        .info{
          width: 100%;
          font-size: 13px;
          line-height: 20px;
          max-height: 40px;
          overflow: hidden;
          a{
            color: #4e4e4e;
            &:hover{
              color: #c34b69;
            }
          }
          .is-send{
            background-color: #F40;;
            padding: 1px 3px 1px 3px;
            font-size: 12px;
            color: white;
            margin-right: 5px;
          }
        }

        .detail{
          color: #888;
          margin-top: 10px;
          font-size: 13px;
          .shop-name{
            i{
              color: #F40;
            }
          }
          .address{

          }
        }

      }
    }
    .other-box{
      width: 210px;
    }
  }
</style>