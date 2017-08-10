<template>
  <div>
    播放页面
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: []
      }
    },
    created() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>