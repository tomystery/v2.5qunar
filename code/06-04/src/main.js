// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // index.html上的div元素
  router, // router:router
  components: { App }, // es6的写法 {App:App} 局部组件
  template: '<App/>' // 模版里面直接把这个局部组件渲染出来
})
