<template>
  <div class="recommend">
    <header-title headerTitle="动漫FM独家推荐" ></header-title>
    <ul class="clearfix">
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate :isNoMarginRight="true"></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate :isNoMarginRight="true"></image-title-rate>
      </li>
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