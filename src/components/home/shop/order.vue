<template>
  <div class="kkz-shop_order">
      <div class="w">

        <div class="address">
          <header-title :headerTitle="'快递地址'" ></header-title>

          <div class="flex-row-end change-address" @click="_changeAddress">
            <Button size="small" type="ghost" shape="circle">
              <span  class="icon"><Icon type="ios-location"></Icon></span>管理地址</Button>
          </div>

          <div class="address-item flex-row-between">



              <RadioGroup v-model="is_address" vertical>
                <Radio label="apple">
                  <span class="for_address">
                     <Icon type="ios-location"></Icon>
                      寄送到
                  </span>
                  <span>广东省 珠海市 金湾区 三灶镇 吉林大学珠海分校梅3 218（禤嘉海 收）13631297694默认地址</span>

                  <span class="change float-right">修改本地址</span>
                </Radio>

              </RadioGroup>



          </div>
        </div>

        <div class="order_detail">
          <header-title :headerTitle="'确认订单信息'" ></header-title>
          <div class="detail-info flex-row">

            <div class="info-item big">
              <span>店铺宝贝</span>
            </div>
            <div class="info-item middle">
              <span>商品属性</span>
            </div>
            <div class="info-item">
              <span>单价</span>
            </div>
            <div class="info-item">
              <span>数量</span>
            </div>
            <div class="info-item">
              <span>优惠</span>
            </div>
            <div class="info-item">
              <span>小计</span>
            </div>

          </div>


          <div class="detail-main flex-row">

            <div class="info-item big flex-row">
              <img v-lazy="data.thumb[0].url" alt="" width="62" height="62">
              <h3 class="title">{{data.title}}</h3>
            </div>
            <div class="info-item middle">
              <span>无</span>
            </div>
            <div class="info-item">
              <span class="price">￥ {{data.price}}</span>
            </div>
            <div class="info-item">
              <InputNumber size="small" :max="data.num" :min="0" v-model="trade_num"></InputNumber>
            </div>
            <div class="info-item">
              <span>无</span>
            </div>
            <div class="info-item">
              <span class="total">￥ {{data.price *  trade_num}}</span>
            </div>

          </div>


          <div class="buy flex-row-end">
            <Button @click="_postShopOrder"  size="large" type="warning" icon="ios-cart">提交订单</Button>
          </div>



        </div>
      </div>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleCover from 'base/image-title-cover/image-title-cover'
  export default {
    data() {
      return {
        shop_id : '',
        shop_num: '',
        data:[],
        trade_num:0,
        is_address: 'apple'
      }
    },
    methods:{
      _postShopOrder(){
      },
      _changeAddress(){
        console.log('ssss')
      }
    },
    created(){
      if (this.$route.params.data){
        this.data = this.$route.params.data;
        this.trade_num = this.$route.params.trade_num;
      }else{
        this.$router.push({ name: '周边'})
      }
    },
    components:{
      HeaderTitle,
      ImageTitleCover
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .kkz-shop_order{


    .ivu-radio-group{
      width: 100%;
      .for_address{
        i{
          font-size: 18px;
        }
        font-weight: bold;
        font-size: 14px;
        color: orangered;
      }
    }
    .change-address{
      margin-top: -30px;
      margin-bottom: 15px;
      .icon{
        margin-right: 5px;
      }
    }
    .address-item{
      font-size: 12px;
    }
    .order_detail{
      margin-top: 10px;
      .detail-info{
        margin-top: 10px;
        .info-item{
          width: 138px;
          font-size: 14px;
          padding: 5px 0;
          text-align: center;
          border-bottom: 2px solid rgba(60, 165, 206, 0.55);
          margin-right: 2px;

          &.big{
            width: 236px;

          }
          &.middle{
            width: 166px;

          }
        }
      }
      .detail-main{
        margin-top: 10px;
        .info-item{
          width: 138px;
          font-size: 14px;
          height: 72px;
          line-height: 55px;
          padding: 5px 0;
          text-align: center;
          margin-right: 2px;
          overflow: hidden;
          &.big{
            width: 236px;
            .title{
              margin: 10px 0 0 5px;
              line-height: 20px;
              max-height: 40px;
              overflow: hidden;
            }

          }
          &.middle{
            width: 166px;

          }
          .total{
            font-size: 18px;
            font-weight: bold;
            color: orangered;
          }
        }
      }
    }
    }
</style>