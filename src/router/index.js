import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Video from '@/components/video/index'
import VideoCreate from '@/components/video/create'
import VideoUpdate from '@/components/video/update'
import Article from '@/components/article/index'
import Login from '@/components/login/index'
import iView from 'iview'
import auth from 'common/js/auth'

Vue.use(Router);


const router =  new Router({
  routes: [
    {
      path: '/login',
      name: '登陆',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      name: '视频',
      component: Home,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/video', component: Video, name: '视频列表页',index:'1-1',},
        { path: '/video/create', component: VideoCreate, name: '视频添加页',index:'1-2',},
        { path: '/video/update', component: VideoUpdate, name: '视频修改页',index:'1-3', hidden: true },

      ]
    },
    {
      path: '/',
      name: '文章',
      component: Home,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/article', component: Article, name: '文章列表页',index:'2-1',},
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        name: '登陆'
      })
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