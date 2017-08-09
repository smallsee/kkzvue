<template>
  <div class="hot-anime-team">
    <header-title headerTitle="热门搜索"></header-title>

    <div>
      <a-background text="小海"></a-background>
      <a-background text="fate"></a-background>
      <a-background text="声之形"></a-background>
      <a-background text="进击的巨人"></a-background>
      <a-background text="带着智慧型手机闯荡异世界"></a-background>
      <a-background text="狂赌"></a-background>
      <a-background text="东京食尸鬼"></a-background>
      <a-background text="史上最强"></a-background>
    </div>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ABackground from 'base/a-background/a-background'
  export default {
    components:{
      HeaderTitle,
      ABackground,
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .a-background{

  }
</style>