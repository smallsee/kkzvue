<template>
  <div class="hot-posts">
    <header-title headerTitle="热门帖子" :more="true" moreText="帖子"></header-title>

    <ul class="clearfix">
      <li>
        <image-title-cover textAlign="left" textFont="14px" :width="233" :height="150"></image-title-cover>
      </li>
      <li>
        <image-title-cover textAlign="left" textFont="14px" :width="233" :height="150"></image-title-cover>
      </li>
      <li>
        <image-title-cover :isNoMarginRight="true" textAlign="left" textFont="14px" :width="233" :height="150"></image-title-cover>
      </li>

      <li>
        <image-title-cover textAlign="left" textFont="14px" :width="233" :height="150"></image-title-cover>
      </li>
      <li>
        <image-title-cover textAlign="left" textFont="14px" :width="233" :height="150"></image-title-cover>
      </li>

      <li>
        <image-title-cover :isNoMarginRight="true" textAlign="left" textFont="14px" :width="233" :height="150"></image-title-cover>
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
  .hot-posts{
    ul{
      li{
        float: left;
      }
    }
  }
</style>