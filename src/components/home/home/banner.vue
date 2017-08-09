<template>
  <div class="kkz-banner">
    <div class="mask-background">
      <img src="./1.jpg" alt="">
    </div>
    <div class="banner w flex-row-between">
      <div class="left">

        <!--这边也要改造-->
        <Carousel dots="none" autoplay v-model="banner_item" :on-change="bannerChange">
          <Carousel-item>
            <image-title-cover :width="430" :height="300"></image-title-cover>
          </Carousel-item>
          <Carousel-item>
            <image-title-cover :width="430" :height="300"></image-title-cover>
          </Carousel-item>
          <Carousel-item>
            <image-title-cover :width="430" :height="300"></image-title-cover>
          </Carousel-item>
          <Carousel-item>
            <image-title-cover :width="430" :height="300"></image-title-cover>
          </Carousel-item>
        </Carousel>
      </div>

      <!--后期改为组件-->
      <ul class="right clearfix">
        <li class="float-left">
          <image-title-cover textFont="12px"></image-title-cover>
        </li>
        <li class="float-left">
          <image-title-cover textFont="12px"></image-title-cover>
        </li>
        <li class="float-left">
          <image-title-cover textFont="12px" :isNoMarginRight="true"></image-title-cover>
        </li>

        <li class="float-left">
          <image-title-cover textFont="12px"></image-title-cover>
        </li>
        <li class="float-left">
          <image-title-cover textFont="12px"></image-title-cover>
        </li>
        <li class="float-left">
          <image-title-cover textFont="12px" :isNoMarginRight="true"></image-title-cover>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import ImageTitleCover from 'base/image-title-cover/image-title-cover'
  export default {
    data() {
      return {
        banner_item: 0
      }
    },
    methods: {
      bannerChange(oldValue, value) {
        console.log(oldValue,value)
      }
    },
    components:{
      ImageTitleCover
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/variable";
  .kkz-banner{
    .mask-background{
      position: absolute;
      overflow: hidden;
      filter: blur(10px);
      z-index: -2;
      margin-top: -10px;
      height: 320px;

    }
    .banner{
      margin-top: 10px;
      .left{
        width: 430px;
        .banner-item{
          position: relative;
          width: 430px;
          height: 300px;
          overflow: hidden;
          img{
            width: 100%;
          }
          h3{
            position: absolute;
            text-align: center;
            color: $color-text-white;
            width: 430px;
            bottom: 0;
          }
        }

      }
      .right{
        width: 530px;
      }
    }
  }
</style>