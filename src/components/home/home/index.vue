<template>
  <div class="kkz-home" >
      <banner></banner>

      <div class="main w flex-row-between">
          <div class="main-left">
            <recommend></recommend>
            <hot-posts></hot-posts>
          </div>
          <div class="main-right">
            <hot-anime-team></hot-anime-team>
            <latest-topics></latest-topics>
          </div>
      </div>
  </div>
</template>

<script>
  import Banner from 'home/home/banner'
  import Recommend from 'home/home/recommend'
  import HotAnimeTeam from 'home/home/hot-anime-team'
  import latestTopics from 'home/home/latest-topics'
  import hotPosts from 'home/home/hot-posts'

  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components:{
      Banner,
      Recommend,
      HotAnimeTeam,
      latestTopics,
      hotPosts
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/variable";
  .kkz-home{
    box-sizing: border-box;
    padding-top: 10px;

    .main{
      margin-top: 20px;
      .main-left{
        width: 720px;
        height: auto;
      }
      .main-right{
        width: 250px;
        height: auto;
      }
    }
  }
</style>