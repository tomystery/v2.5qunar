<template lang="html">
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommended :list="recommendList"></home-recommended>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 连招：导入加注册
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommended from './components/Recommended.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommended,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeWholeSource () {
      axios.get('/static/mock/home.json?city=' + this.city).then(this.getHWSSuccess)
    },
    getHWSSuccess (msg) {
      msg = msg.data
      console.log(msg)
      console.log('ok1')
      if (msg.ret && msg.data) {
        console.log('ok2')
        msg = msg.data
        this.swiperList = msg.swiperList
        this.iconList = msg.iconList
        this.recommendList = msg.recommendList
        this.weekendList = msg.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeWholeSource()
  },
  activated () {
    // activated是keepalive标签新增的生命周期函数，他在页面被加载的时候调用
    // 使用一个属性来判断进入首页时，需要显示的城市是不是和以前是一样的
    // 如果是一样的，就不用进行axios请求了
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeWholeSource()
    }
  }
}
</script>

<style lang="css">
h1 {
  color: pink;
}
</style>
