<template>
  <div class="hot-anime-team">
    <header-title headerTitle="推荐漫单" :more="true" moreText="漫单"></header-title>

    <image-title-row></image-title-row>
    <image-title-row></image-title-row>
    <image-title-row></image-title-row>
    <image-title-row></image-title-row>
    <image-title-row></image-title-row>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleRow from 'base/image-title-row/image-title-row'
  export default {
    components:{
      HeaderTitle,
      ImageTitleRow
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>