<template lang="html">
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="buttonList">
          <div class="buttonWrapper">
            <div class="button">{{this.cityNow}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div
           class="buttonWrapper"
           v-for="item in hotCities"
           :key="item.id"
           @click="handleCityClick(item.name)"
          >
            <div class="button" title="item.spell">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <ul class="alphaList">
            <li
             class="alphaItem border-bottom"
             v-for="arrayItem in item"
             :key="arrayItem.id"
             @click="handleCityClick(arrayItem.name)"
            >{{arrayItem.name}}</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      cityNow: 'city'
    })
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
    letter () {
      if (this.letter) {
        var obj = this.$refs[this.letter][0]
        this.scroll.scrollToElement(obj)
      }
    }
  },
  mounted () {
    this.scroll = new Scroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .buttonList
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .buttonWrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .alphaList
      .alphaItem
        line-height: .76rem
        padding-left: .2rem
</style>
