<template>
  <div class="popular-anime">
    <header-title headerTitle="国产精品" :headerText="headerText"></header-title>

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
            text:'一人之下'
          },
          {
            url:'#',
            text:'镇魂街'
          },
          {
            url:'#',
            text:'狐妖小红娘'
          },
          {
            url:'#',
            text:'狩梦人'
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