<template>
  <div>
    <tab></tab>
    <m-header></m-header>

    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  import MHeader from 'home/m-header/m-header'
  import Tab from 'home/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>