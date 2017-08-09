<template>
  <div class="kkz-home" >
      <banner></banner>

      <div class="main w flex-row-between">
          <div class="main-left">

            <recommend></recommend>
            <hot-posts></hot-posts>
            <popular-anime></popular-anime>
            <china-anime></china-anime>
            <theater-movie></theater-movie>
            <latest-posts></latest-posts>
            <latest-inventory></latest-inventory>
            <latest-news></latest-news>
            <latest-cosplay></latest-cosplay>
          </div>
          <div class="main-right">

            <hot-anime-team></hot-anime-team>
            <latest-topics></latest-topics>
            <hot-search></hot-search>
            <latest-commit></latest-commit>
            <recommend-self-anime></recommend-self-anime>
            <quotation-anime></quotation-anime>

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
  import PopularAnime from 'home/home/popular-anime'
  import ChinaAnime from 'home/home/china-anime'
  import TheaterMovie from 'home/home/theater-movie'
  import HotSearch from 'home/home/hot-search'
  import LatestCommit from 'home/home/latest-commit'
  import RecommendSelfAnime from 'home/home/recommend-self-anime'
  import QuotationAnime from 'home/home/quotation-anime'

  import LatestPosts from 'home/home/latest-posts'
  import LatestInventory from 'home/home/latest-inventory'
  import LatestNews from 'home/home/latest-news'
  import LatestCosplay from 'home/home/latest-cosplay'

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
      hotPosts,
      PopularAnime,
      ChinaAnime,
      TheaterMovie,
      HotSearch,
      LatestCommit,
      RecommendSelfAnime,
      QuotationAnime,
      LatestPosts,
      LatestInventory,
      LatestNews,
      LatestCosplay
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