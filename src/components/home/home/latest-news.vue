<template>
  <div class="latest-news">
    <header-title headerTitle="最新情报" :more="true" moreText="情报"></header-title>

    <ul class="clearfix">
      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0"></image-title-rate>
      </li>

      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0"></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0"></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0" :isNoMarginRight="true"></image-title-rate>      </li>


      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0"></image-title-rate>
      </li>

      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0"></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0"></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate width="172px" imgHeight="120px" maxHeight="26px" :isRate="false" titleMargin="10px 0" :isNoMarginRight="true"></image-title-rate>      </li>

    </ul>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleRate from 'base/image-title-rate/image-title-rate'
  export default {
    components:{
      HeaderTitle,
      ImageTitleRate
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>