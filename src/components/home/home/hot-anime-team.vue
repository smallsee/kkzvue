<template>
  <div class="hot-anime-team">
    <header-title headerTitle="热门漫团" :more="true" moreText="漫团"></header-title>

    <ul class="clearfix">
      <li>
        <a href="#"><img src="./3.jpg" alt=""></a>
      </li>
      <li>
        <a href="#"><img src="./3.jpg" alt=""></a>
      </li>

      <li class="no-margin-right">
        <a href="#"><img src="./3.jpg" alt=""></a>
      </li>

      <li>
        <a href="#"><img src="./3.jpg" alt=""></a>
      </li>
      <li>
        <a href="#"><img src="./3.jpg" alt=""></a>
      </li>

      <li class="no-margin-right">
        <a href="#"><img src="./3.jpg" alt=""></a>
      </li>
    </ul>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  export default {
    components:{
      HeaderTitle,
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .hot-anime-team{
    ul{
      li{
        float: left;
        overflow: hidden;
        width: 75px;
        height: 75px;
        margin-right: 10px;
        margin-top: 10px;
        img{
          width: 100%;
        }
      }
    }
  }
</style>