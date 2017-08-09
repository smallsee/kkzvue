<template>
  <div class="latest-commit">
    <header-title headerTitle="最新评论" ></header-title>

    <commit></commit>
    <commit></commit>
    <commit></commit>
    <commit></commit>
    <commit></commit>
    <commit></commit>
    <commit></commit>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import Commit from 'base/commit/commit'
  export default {
    components:{
      HeaderTitle,
      Commit
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>