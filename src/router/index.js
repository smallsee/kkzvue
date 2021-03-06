import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import auth from 'common/js/auth'

//后台
import Admin from '@/components/admin/index'
import AdminVideo from '@/components/admin/video/index'
import AdminVideoCreate from '@/components/admin/video/create'
import AdminVideoUpdate from '@/components/admin/video/update'
import AdminArt from '@/components/admin/art/index'
import AdminArtCreate from '@/components/admin/art/create'
import AdminArtUpdate from '@/components/admin/art/update'
import AdminArticle from '@/components/admin/article/index'
import AdminArticleCreate from '@/components/admin/article/create'
import AdminArticleUpdate from '@/components/admin/article/update'
import AdminLogin from '@/components/admin/login/index'
import AdminCategory from '@/components/admin/category/index'
import AdminCategoryCreate from '@/components/admin/category/create'
import AdminCategoryUpdate from '@/components/admin/category/update'
import AdminShop from '@/components/admin/shop/index'
import AdminShopCreate from '@/components/admin/shop/create'
import AdminShopUpdate from '@/components/admin/shop/update'

//前台
import HomeApp from '@/components/home/index'
import Home from '@/components/home/home/index'
import Video from '@/components/home/video/index'
import VideoDetail from '@/components/home/video/detail'
import VideoShow from '@/components/home/video/show'
import Article from '@/components/home/article/index'
import ArticleShow from '@/components/home/article/show'
import Art from '@/components/home/art/index'
import ArtShow from '@/components/home/art/show'
import Login from '@/components/home/login/index'
import Register from '@/components/home/register/index'
import Search from '@/components/home/search/search'
import User from '@/components/home/user/index'
import UserFav from '@/components/home/user/fav'
import UserCommit from '@/components/home/user/commit'
import UserFan from '@/components/home/user/fan'
import UserInfo from '@/components/home/user/info'
import UserPassword from '@/components/home/user/password'
import UserThumb from '@/components/home/user/thumb'
import Shop from '@/components/home/shop/index'
import ShopShow from '@/components/home/shop/show'
import ShopOrder from '@/components/home/shop/order'



Vue.use(Router);


const router =  new Router({
  routes: [
    {
      path: '/',
      name: '前台主页',
      redirect: '/home',
      component: HomeApp,
      hidden: true,
      children: [
        { path: '/home', component: Home, name: '主页'},
        { path: '/video', component: Video, name: '视频',},
        { path: '/video/detail/:id', component: VideoDetail, name: '视频详情页',meta: { notKeepAlive: true }},
        { path: '/video/:id', component: VideoShow, name: '视频播放页',meta: { notKeepAlive: true }},
        { path: '/article', component: Article, name: '文章'},
        { path: '/article/:id', component: ArticleShow, name: '文章详情页',meta: { notKeepAlive: true }},
        { path: '/art', component: Art, name: '画板'},
        { path: '/art/:id', component: ArtShow, name: '画板详情页',meta: { notKeepAlive: true }},
        { path: '/shop', component: Shop, name: '周边'},
        { path: '/shop/:id', component: ShopShow, name: '周边详情页',meta: { notKeepAlive: true }},
        { path: '/order', component: ShopOrder, name: '周边结算页',meta: { notKeepAlive: true }},
        { path: '/user/:id', component: User, name: '用户面板',meta: { notKeepAlive: true },
          children: [
            { path: 'fav/:type', component: UserFav, name: '用户收藏页',meta: { notKeepAlive: true }},
            { path: 'commit/:type', component: UserCommit, name: '用户评论页',meta: { notKeepAlive: true }},
            { path: 'fan/:type', component: UserFan, name: '用户好友页',meta: { notKeepAlive: true }},
            { path: 'info', component: UserInfo, name: '用户个人资料',meta: { notKeepAlive: true }},
            { path: 'password', component: UserPassword, name: '用户密码',meta: { notKeepAlive: true }},
            { path: 'thumb', component: UserThumb, name: '用户头像',meta: { notKeepAlive: true }},
          ]
        },
      ]
    },
    {
      path: '/admin/login',
      name: '后台登陆',
      component: AdminLogin,
      hidden: true
    },
    {
      path: '/login',
      name: '前台登陆',
      component: Login,
      hidden: true
    },
    {
      path: '/register',
      name: '前台注册',
      component: Register,
      hidden: true
    },
    {
      path: '/search',
      name: '搜索',
      component: Search,
      hidden: true
    },
    {
      path: '/admin',
      name: '视频',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/admin/video', component: AdminVideo, name: '视频列表页',index:'1-1',},
        { path: '/admin/video/create', component: AdminVideoCreate, name: '视频添加页',index:'1-2',},
        { path: '/admin/video/update', component: AdminVideoUpdate, name: '视频修改页',index:'1-3', hidden: true },

      ]
    },
    {
      path: '/admin',
      name: '文章',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/admin/article', component: AdminArticle, name: '文章列表页',index:'2-1',},
        { path: '/admin/article/create', component: AdminArticleCreate, name: '文章添加页',index:'2-2',},
        { path: '/admin/article/update', component: AdminArticleUpdate, name: '文章修改页',index:'2-3', hidden: true},
      ]
    },
    {
      path: '/admin',
      name: '画板',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/admin/art', component: AdminArt, name: '画板列表页',index:'3-1',},
        { path: '/admin/art/create', component: AdminArtCreate, name: '画板创造页',index:'3-2',},
        { path: '/admin/art/update', component: AdminArtUpdate, name: '画板修改页',index:'3-3', hidden: true},
      ]
    },
    {
      path: '/admin',
      name: '周边分类',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/admin/category', component: AdminCategory, name: '分类列表页',index:'4-1',},
        { path: '/admin/category/create', component: AdminCategoryCreate, name: '分类创造页',index:'4-2',},
        { path: '/admin/category/update', component: AdminCategoryUpdate, name: '分类修改页',index:'4-3', hidden: true},
      ]
    },
    {
      path: '/admin',
      name: '周边',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/admin/shop', component: AdminShop, name: '周边列表页',index:'5-1',},
        { path: '/admin/shop/create', component: AdminShopCreate, name: '周边创造页',index:'5-2',},
        { path: '/admin/shop/update', component: AdminShopUpdate, name: '周边修改页',index:'5-3', hidden: true},
      ]
    }
  ]
})


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        name: '前台登陆'
      });
      next()
    } else {
      next()
    }
  } else {
    next()
  }

});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
});

export default router