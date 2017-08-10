<template>
  <div class="kkz-header ">
    <div class="w flex-row-between">
    <div class="flex-row">

      <a href="#" class="logo">
        <img src="./logo1.png" alt="" height="40">
      </a>

      <a href="#" class="mascot">
        <img src="./icon64_maimeng.png" alt="" height="40">
      </a>

      <span class="purpose">一个高逼格的
        <a href="">动漫社区</a>
      </span>
    </div>

    <Input v-model="searchData" @on-enter="search" @on-click="search" icon="search" placeholder="请输入搜索内容..." style="width: 200px"></Input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchData: ''
      }
    },
    methods: {
      search() {
        console.log('search')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-header{
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    .logo{
      margin-right: 20px;
    }
    .mascot{
      margin-right: 50px;
    }
    .purpose{
      line-height: 40px;
      font-size: 14px;
    }

  }
</style>