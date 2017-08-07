import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Video from '@/components/video/index'
import VideoCreate from '@/components/video/create'
import VideoUpdate from '@/components/video/update'
import Article from '@/components/article/index'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: '视频',
      component: Home,
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
      children: [
        { path: '/article', component: Article, name: '文章列表页',index:'2-1',},
      ]
    }
  ]
})
