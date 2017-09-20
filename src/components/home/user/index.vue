<template>
  <div class="kkz-user">
    <div class="w">
      <div class="user_header">
        <div class="background_image">
          <img src="./cover_default.png" alt="" width="100%" height="100%">
        </div>
        <div class="user_info">
          <div class="thumb">
            <img src="./51535095_p0.jpg" alt="" width="100%" height="100%">
          </div>
          <h3 class="user_name">小海</h3>
          <p class="content">（签名）</p>
        </div>
      </div>


      <div class="layout-content">
            <Row>

              <i-col  span="4">
                <Menu  width="auto" >
                  <Submenu name="1">
                    <template slot="title">
                      <Icon type="ios-star"></Icon>
                      收藏
                    </template>

                    <MenuItem name="1-1">
                      <span class="user-item" @click="_clickUserCommit">
                        收藏的文章
                      </span>
                      <!--<router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/fav/article'">-->
                        <!--收藏的文章-->
                      <!--</router-link>-->
                    </MenuItem>

                    <MenuItem name="1-2">
                      <router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/fav/video'">
                        收藏的视频
                      </router-link>
                    </MenuItem>
                    <MenuItem name="1-3">
                      <router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/fav/art'">
                        收藏的画板
                      </router-link>
                    </MenuItem>
                  </Submenu>
                  <Submenu name="5">
                    <template slot="title">
                      <Icon type="chatbubble-working"></Icon>
                      评论
                    </template>
                    <MenuItem name="5-1">
                      <router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/commit/article'">
                        文章评论
                      </router-link>
                    </MenuItem>
                    <MenuItem name="5-2">
                      <router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/commit/video'">
                        视频评论
                      </router-link>
                    </MenuItem>
                    <MenuItem name="5-3">
                      <router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/commit/art'">
                        画板评论
                      </router-link>
                    </MenuItem>
                  </Submenu>
                  <Submenu name="2">
                    <template slot="title">
                      <Icon type="person-stalker"></Icon>
                      好友
                    </template>
                    <MenuItem name="2-1">
                      <router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/fan/star'">
                        关注
                      </router-link>
                    </MenuItem>
                    <MenuItem name="2-2">
                      <router-link class="user-item" tag="span"  :to="'/user/' + $route.params.id + '/fan/fan'">
                        粉丝
                      </router-link>
                    </MenuItem>
                  </Submenu>
                  <Submenu name="3">
                    <template slot="title">
                      <Icon type="email"></Icon>
                      消息
                    </template>
                    <MenuItem name="3-1">私信聊天</MenuItem>
                    <MenuItem name="3-2">系统消息</MenuItem>
                  </Submenu>
                  <Submenu name="4">
                    <template slot="title">
                      <Icon type="outlet"></Icon>
                      个人资料
                    </template>
                    <MenuItem name="4-1">个人资料</MenuItem>
                    <MenuItem name="4-2">修改资料</MenuItem>
                    <MenuItem name="4-3">修改密码</MenuItem>
                  </Submenu>
                </Menu>
              </i-col >


              <i-col offset="1"  span="19">
                <div class="layout-content-main">
                  <router-view></router-view>
                </div>
              </i-col >

            </Row>
          </div>

    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      _clickUserCommit(){
        this.$router.push({
          path: '/user/' + this.$route.params.id + '/fav/article'
        });
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-user{
    .user_header{
      margin-top: 20px;
      position: relative;
      width: 100%;
      height: 280px;
      .background_image{
        position: absolute;
        width: 100%;
        height: 280px;
        left: 0;
        top:0;
        z-index: -5;
      }
      .user_info{
        box-sizing: border-box;
        padding-top: 35px;
        margin: 0 auto;
        width: 400px;
        height: 280px;
        color: white;
        text-align: center;
        .thumb{
          margin: 0 auto;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .user_name{
            font-size: 22px;
            margin-bottom: 20px;
        }
      }
    }
    .layout-content{
      margin-top: 20px;
    }
    .layout-content-main{
      background-color: white;
      min-height: 200px;
    }
    .user-item{
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 10px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    }
    .ivu-menu-item{
      padding: 0;
    }
    .ivu-menu-item-selected{
      background-color: rgba(230, 230, 230, 0.4);
      color: #f55f10 !important;
      .router-link-exact-active router-link-active{
        color: #f55f10;
      }

    }
  }
</style>