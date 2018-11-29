<template lang="html">
  <div>
    <div class="search">
      <input
       type="text"
       placeholder="输入城市名或者拼音"
       class="searchInput"
       v-model="keyword"
      >
    </div>
    <div
     class="content"
     ref="searchContentArea"
     v-show="keyword"
    >
      <ul>
        <li
         v-for="item in list"
         :key="item.id"
         class="resultItem border-bottom"
         @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="resultItem border-bottom" v-show="hasNoMatchItem">查无此地</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapActions } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoMatchItem () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (cityName) {
      // 更改数据
      // this.$store.dispatch('clickCityButton', cityName)
      this.clickCityButton(cityName)
      // 跳转页面
      this.$router.push('/')
    },
    ...mapActions(['clickCityButton'])
  },
  watch: {
    keyword () {
      // 函数节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        // 每次新建一个空数组，用于接受匹配项
        const resultList = []
        for (var i in this.cities) {
          this.cities[i].forEach((value) => { // 检查有无匹配项
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              // 如若有，自当加入数组中
              resultList.push(value)
            }
          })
        }
        // 更新data数组
        this.list = resultList
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchContentArea)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: .72rem
  padding: 0 .1rem
  background: $bdColor
  .searchInput
    box-sizing: border-box
    width: 100%
    height: .62rem
    padding: 0 .1rem
    line-height: .62rem
    text-align: center
    border-radius: .06rem
    color: #666
.content
  z-index: 1
  overflow: hidden;
  position: absolute;
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .resultItem
    line-height: .62rem
    padding-left: .2rem
    color: #666
    background: #fff
</style>
