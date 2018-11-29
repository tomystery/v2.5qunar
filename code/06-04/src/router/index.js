import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({ // 导出去的就是路由配置项
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/list',
      name: '列表',
      component: List
    }
  ]
})
