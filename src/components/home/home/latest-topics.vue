<template>
  <div class="latest-topics">
    <header-title headerTitle="最新专题" :more="true" moreText="专题"></header-title>

    <ul class="clearfix">
      <li>
        <image-title-cover textAlign="left" textFont="14px" :width="250" :height="150"></image-title-cover>
      </li>
      <li>
        <image-title-cover textAlign="left" textFont="14px" :width="250" :height="150"></image-title-cover>
      </li>
      <li>
        <image-title-cover textAlign="left" textFont="14px" :width="250" :height="150"></image-title-cover>
      </li>
    </ul>
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
  .latest-topics{

  }
</style>