<template>
  <div class="kkz-shop">
    <div class="w flex-row-between">
      <div class="shop-box clearfix">

        <div class="tag">
          <header-title :headerTitle="'分类'"></header-title>

          <p class="word-break tag-item">
            <span class="tag-item_title">类型:</span>
            <span  class="tag-item_content" >全部</span>

              <span class="tag-item_content">1</span>
              <span class="tag-item_content">2</span>
              <span class="tag-item_content">3</span>
              <span class="tag-item_content">4</span>
              <span class="tag-item_content">5</span>
              <span class="tag-item_content">6</span>

          </p>

        </div>

        <div class="shop-item">

          <div class="thumb">
            <img src="./header-background.gif" alt="" >
          </div>

          <div class="padding-5px">
            <div class="flex-row-between shop-info">
              <div class="money">
                ￥128

              </div>
              <span class="buy-num">92人付款</span>
            </div>

            <div class="info">
              <span class="is-send">包邮</span>2017新款秋季真皮男鞋子男士休闲鞋韩版潮流板鞋男asdasdsa
            </div>

            <div class="flex-row-between detail">

              <span class="shop-name">
                <i class="fa fa-bars"></i>
                小海店
              </span>

              <span class="address">
                东莞   京山
              </span>

            </div>

          </div>
        </div>
        <div class="shop-item">

          <div class="thumb">
            <img src="./header-background.gif" alt="" >
          </div>

          <div class="padding-5px">
            <div class="flex-row-between shop-info">
              <div class="money">
                ￥128

              </div>
              <span class="buy-num">92人付款</span>
            </div>

            <div class="info">
              <span class="is-send">包邮</span>2017新款秋季真皮男鞋子男士休闲鞋韩版潮流板鞋男asdasdsa
            </div>

            <div class="flex-row-between detail">

              <span class="shop-name">
                <i class="fa fa-bars"></i>
                小海店
              </span>

              <span class="address">
                东莞   京山
              </span>

            </div>

          </div>
        </div>
        <div class="shop-item">

          <div class="thumb">
            <img src="./header-background.gif" alt="" >
          </div>

          <div class="padding-5px">
            <div class="flex-row-between shop-info">
              <div class="money">
                ￥128

              </div>
              <span class="buy-num">92人付款</span>
            </div>

            <div class="info">
              <span class="is-send">包邮</span>2017新款秋季真皮男鞋子男士休闲鞋韩版潮流板鞋男asdasdsa
            </div>

            <div class="flex-row-between detail">

              <span class="shop-name">
                <i class="fa fa-bars"></i>
                小海店
              </span>

              <span class="address">
                东莞   京山
              </span>

            </div>

          </div>
        </div>
        <div class="shop-item no-margin-right">

          <div class="thumb">
            <img src="./header-background.gif" alt="" >
          </div>

          <div class="padding-5px">
            <div class="flex-row-between shop-info">
              <div class="money">
                ￥128

              </div>
              <span class="buy-num">92人付款</span>
            </div>

            <div class="info">
              <span class="is-send">包邮</span>2017新款秋季真皮男鞋子男士休闲鞋韩版潮流板鞋男asdasdsa
            </div>

            <div class="flex-row-between detail">

              <span class="shop-name">
                <i class="fa fa-bars"></i>
                小海店
              </span>

              <span class="address">
                东莞   京山
              </span>

            </div>

          </div>
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
  export default {
    components:{
      HeaderTitle,
      ImageTitleCover
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-shop{
    margin-top: 20px;
    .shop-box{
      width: 750px;
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