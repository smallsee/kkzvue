<template>
  <div class="kkz-shop_show">
    <div class="flex-row-between w">
      <div class="shop-box clearfix">
        <header-title :headerTitle="'商品详细信息'" ></header-title>
        <div class="flex-row">
          <div class="images">

          <div class="thumb_shop">
            <img v-lazy="showImage" alt="">
          </div>

          <div class="thumb_hide flex-row">
            <template v-for="(item,index) in data.thumb" v-if="(index + 1 ) < 6">
              <div class="thumb" :class="{'active' : activeImage === index}">
                <img v-lazy="item.url" alt="" @click="_changeImage(index)">
              </div>
            </template>
          </div>
        </div>
          <div class="info">
            <h3 class="title">{{data.title}}</h3>
            <div class="price flex-row-between">
              <div class="money">价格 <span>￥ {{data.price}}</span> </div>
              <div class="shop_trade flex-row">
                <div class="commit flex-column-around">
                  <span>1</span>
                  <span>累计评论</span>
                </div>
                <div class="flex-column-around success_num">
                  <span>1</span>
                  <span>交易成功</span>
                </div>
              </div>
            </div>
            <div class="trade_num">
              <span>购买数量</span>
              <InputNumber size="small" :max="data.num" :min="0" v-model="trade_num"></InputNumber>
              <span class="leave_num">库存({{data.num}})</span>
            </div>

            <div class="buy">
              <Button size="large" type="ghost" @click="_buy">立刻购买</Button>
              <Button  size="large" type="warning" icon="ios-cart">加入购物车</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="other-box">
        <header-title :headerTitle="'其他推荐'" ></header-title>
        <image-title-cover :textAlign="'left'" :textFont="'14px'" :width="210" :height="120"></image-title-cover>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleCover from 'base/image-title-cover/image-title-cover'
  import {getShowShopList} from 'api/shop';
  import {ERR_OK} from 'api/config'
  export default {
    data() {
      return {
        trade_num: 0,
        data: [],
        showImage: '',
        activeImage: 0
      }
    },
    created() {
      this._getShopData(this.$route.params.id);
    },
    methods:{
      _buy() {
        this.$router.push({ name: '周边结算页', params: { data: this.data,trade_num: this.trade_num }})
      },
      _getShopData(id) {
        getShowShopList(id).then(res => {
          if (res.meta.errno === ERR_OK){
            this.data = res.data;
            this.showImage = res.data.thumb[0].url
          }
        })
      },
      _changeImage(index){
        this.showImage = this.data.thumb[index].url
        this.activeImage = index;
      }
    },
    components:{
      HeaderTitle,
      ImageTitleCover
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-shop_show{
    .shop-box{
      width: 750px;
      .images{
        width: 320px;
        height: 400px;
        overflow: hidden;

        .thumb_shop{
          width: 100%;
          height: 320px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .thumb_hide{
          margin-top: 10px;
          .thumb{
            cursor: pointer;
            &:hover{
              border: 1px solid red;
            }
            &.active{
              border: 1px solid black;
            }
            width: 60px;
            height: 60px;
            overflow: hidden;
            margin-right: 10px;
            img{
              width:100%;
              height: 100%;
            }
          }
        }
      }
      .info{
        width: 400px;
        margin-left: 30px;
        .title{
          width: 100%;
          max-height: 40px;
          overflow: hidden;
          line-height: 20px;
        }
        .price{
          box-sizing: border-box;
          background-color: #fef2e8;
          margin-top: 10px;
          padding: 5px;
          width: 100%;
          height: 60px;
          .money{
            line-height:50px;
            color: gray;
            font-size: 12px;
            span{
              margin-left: 15px;
              font-size: 20px;
              color: #F40;
              font-weight: bold;
            }
          }
        }
        .shop_trade{
          font-size: 12px;
          text-align: center;
          .commit{
            box-sizing: border-box;
            padding-right: 5px;
            border-right: 1px solid rgba(189, 184, 184, 0.58);
          }
          .success_num{
            box-sizing: border-box;
            padding-left: 5px;
          }
        }

        .trade_num{
          margin-top: 20px;
          font-size: 16px;
          span{
          margin-right: 20px;
          }
          .leave_num{
            margin-left: 10px;
          }
        }
      }
      .buy{
        margin-top: 20px;
        .ivu-btn{margin-right: 10px}
      }
    }
    .other-box{
      width: 210px;
    }
  }
</style>