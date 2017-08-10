import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import auth from 'common/js/auth'

//后台
import Admin from '@/components/admin/index'
import AdminVideo from '@/components/admin/video/index'
import AdminVideoCreate from '@/components/admin/video/create'
import AdminVideoUpdate from '@/components/admin/video/update'
import AdminArticle from '@/components/admin/article/index'
import AdminLogin from '@/components/admin/login/index'

//前台
import HomeApp from '@/components/home/index'
import Home from '@/components/home/home/index'
import Video from '@/components/home/video/index'
import VideoDetail from '@/components/home/video/detail'
import VideoShow from '@/components/home/video/show'
import Artisan from '@/components/home/artisan/index'



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
        { path: '/artisan', component: Artisan, name: '文章'},
      ]
    },

    {
      path: '/admin/login',
      name: '后台登陆',
      component: AdminLogin,
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
      ]
    }
  ]
})


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      // next({
      //   name: '后台登陆'
      // })
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