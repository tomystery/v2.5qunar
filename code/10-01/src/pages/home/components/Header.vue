<template>

  <div class="header">
    <div class="header-left"><div class="iconfont  back-icon">&#xe624;</div></div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题{{defaultcity}}
      </div>
    <div class="header-right"><router-link to="/city">{{this.city}}</router-link>
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
    ...mapState(['city']),
    defaultcity(){
      return this.$store.state.city
    }
  }
}

/* mapState是指我把vuex里的数据映射到我这个叫做city的计算属性里*/
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
    display :flex
    line-height :.86rem
    background:$bgColor
    color :#fff
    .header-left
        width :.64rem
        float:left
        .back-icon
          text-align:center
          font-size:.4rem
    .header-input
        flex:1
        height:.64rem
        line-height 0.64rem
        background:#fff
        margin-top:.12rem
        margin-left:.2rem
        padding-left:.2rem
        border-radius 0.1rem
        color:#ccc
    .header-right
        min-width :1.04rem
        padding:0 .1rem
        float:right
        text-align :center
        .arrow-icon
          font-size.24rem
        a
          color :#fff
</style>
