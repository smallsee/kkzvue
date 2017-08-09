<template>
  <div>
    <tab></tab>
    <m-header></m-header>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <m-footer></m-footer>
    <Back-top></Back-top>
  </div>
</template>

<script>
  import MHeader from 'home/m-header/m-header'
  import MFooter from 'home/m-footer/m-footer'
  import Tab from 'home/tab/tab'

  export default {
    components: {
      MHeader,
      Tab,
      MFooter
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>