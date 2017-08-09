<template>
  <div class="popular-anime">
    <header-title headerTitle="剧场电影" :headerText="headerText"></header-title>

    <ul class="clearfix">
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate></image-title-rate>
      </li>
      <li style="float: left">
        <image-title-rate :isNoMarginRight="true"></image-title-rate>
      </li>
    </ul>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import ImageTitleRate from 'base/image-title-rate/image-title-rate'
  export default {
    data() {
      return {
        headerText:[
          {
            url:'#',
            text:'你的名字'
          },
          {
            url:'#',
            text:'心灵想要大声呼喊'
          },
          {
            url:'#',
            text:'青鬼'
          },
          {
            url:'#',
            text:'声之形'
          },
        ]
      }
    },
    components:{
      HeaderTitle,
      ImageTitleRate
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>