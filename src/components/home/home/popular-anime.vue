<template>
  <div class="popular-anime">
    <header-title headerTitle="人气番剧" :headerText="headerText"></header-title>

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
            text:'骑士&魔法'
          },
          {
            url:'#',
            text:'实教'
          },
          {
            url:'#',
            text:'狂堵'
          },
          {
            url:'#',
            text:'龙珠'
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