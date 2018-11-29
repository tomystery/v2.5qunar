<template lang="html">
  <div class="detail">
    <detail-banner
     :sightName="sightName"
     :bannerImg="bannerImg"
     :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailMsg () {
      // 带参数的axios有两种写法
      // 写法一
      // axios.get('/static/mock/detail.json?id=' + this.$route.params.id)
      // 写法二
      axios.get('/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailMsgSucc)
    },
    getDetailMsgSucc (msg) {
      msg = msg.data
      if (msg.ret && msg.data) {
        msg = msg.data
        this.sightName = msg.sightName
        this.bannerImg = msg.bannerImg
        this.gallaryImgs = msg.gallaryImgs
        this.categoryList = msg.categoryList
      }
    }
  },
  // mounted () {
  //   this.getDetailMsg()
  // },
  activated () {
    this.getDetailMsg()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem;
</style>
