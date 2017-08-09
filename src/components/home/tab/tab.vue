<template>
  <div class="kkz-tab">
    <div class="w flex-row-between">
      <div class="tab flex-row">

        <router-link tag="div" class="tab-item" to="/home">
          <span class="tab-link">主页</span>
        </router-link>

        <router-link tag="div" class="tab-item" to="/video">
          <span class="tab-link">视频</span>
        </router-link>

        <router-link tag="div" class="tab-item" to="/artisan">
          <span class="tab-link">文章</span>
        </router-link>

      </div>

      <div class="user">
        cc
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/variable";

  .kkz-tab{
    width: 100%;
    height: 40px;
    background: url(./header-background.gif);
    background-size: 100%,100%;
  }
  .tab{
    .tab-item{
      cursor: pointer;
      span{
        padding: 0 16px;
        line-height: 40px;
        color: $color-text-white;
      }
      &.router-link-active{
        background-color: $color-text-active-orange;
      }
      &:hover{
        background-color: $color-text-active-orange;
      }
    }
  }
</style>