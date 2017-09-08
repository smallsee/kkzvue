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

        <router-link tag="div" class="tab-item" to="/art">
          <span class="tab-link">画板</span>
        </router-link>

        <router-link tag="div" class="tab-item" to="/article">
          <span class="tab-link">文章</span>
        </router-link>

        <router-link tag="div" class="tab-item" to="/shop">
          <span class="tab-link">周边</span>
        </router-link>

      </div>

      <div class="user flex-row">

        <template v-if="!isLogin">
          <router-link tag="div" class="tab-item" to="/login">
            <span class="tab-link">登陆</span>
          </router-link>

          <router-link tag="div" class="tab-item" to="/register">
            <span class="tab-link">注册</span>
          </router-link>
        </template>

        <template v-if="isLogin">
          <div class="tab-item">
            <span>{{user.name}}</span>
          </div>
          <div class="tab-item" @click="_logout">
            <span>登出</span>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('isLoginActive');
//      this.$store.dispatch('getUser');
//      if (JSON.parse(localStorage.getItem('kkzToken'))) {
////        console.log(JSON.parse(localStorage.getItem('kkzToken')));
//        this.isLogin = true;
//      }
    },
    methods:{
      _logout() {
        localStorage.removeItem('kkzToken');
        localStorage.removeItem('kkzUser');
        this.$store.dispatch('isLoginActive')
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin
      },
      user() {
        return this.$store.state.user
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/variable";

  .kkz-tab{
    width: 100%;
    height: 40px;
    background: url(./header-background.gif);
    background-size: 100%,100%;

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