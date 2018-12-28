import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import City from '@/pages/City/city'
import Detail from '@/pages/Detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/city',
      name: '城市',
      component: City
    },
    {
      path: '/detail/:id',
      name: '详情',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

