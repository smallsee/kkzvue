<template>
  <div>
    <div class="kkz-top">
      <tab></tab>
      <m-header></m-header>
    </div>

    <div class="kkz-search-box">



    </div>


    <div>

      <keep-alive>
        <router-view v-if="!$route.meta.notKeepAlive"></router-view>
      </keep-alive>
      <router-view v-if="$route.meta.notKeepAlive"></router-view>

    </div>
    <m-footer></m-footer>
    <Back-top></Back-top>
  </div>
</template>

<script>
  import MHeader from 'home/m-header/m-header'
  import MFooter from 'home/m-footer/m-footer'
  import Tab from 'home/tab/tab'
  import Search from 'home/search/search'


  export default {
    data() {
      return {
        isShowSearch: false
      }
    },
    created() {
//      console.log(this.$route.meta.notKeepAlive)
    },
    components: {
      MHeader,
      Tab,
      MFooter,
      Search,
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-top{
    position: relative;
  }
  .kkz-search-box{
    position: relative;
  }
</style>