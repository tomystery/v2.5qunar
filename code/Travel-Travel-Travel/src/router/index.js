import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


/* 异步组件，使得不再只是都打包在一个app.js的文件里面 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: ()=>import('@/pages/city/City')
    },
    {// 这是一个动态路由，前面写死，后面传进来一个参数放到id里面
      path: '/detail/:id',
      name: 'Detail',
      component: ()=>import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
