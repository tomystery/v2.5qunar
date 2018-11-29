<template lang="html">
<div class="header">
  <div class="header-left">
    <span class="iconfont">&#xe667;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市/景点/游玩主题</div>
  <router-link to="/city">
    <div class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe600;</span>
    </div>
  </router-link>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>/* 对css做一个限制，不要影响其他组件 */
@import '~styles/varibles.styl'
.header
  display: flex
  background: $bdColor
  color: #fff
  line-height: .86rem
  font-size: .28rem

  .header-left
    width: .64rem
    float: left
    text-align: center
    .iconfont
      font-size: .4rem

  .header-input
    flex: 1
    background: #fff
    height: .64rem
    margin-top: .12rem
    /* margin-left: .2rem */
    border-radius: .1rem
    line-height: .64rem
    color: #ccc
    padding-left: .2rem

  .header-right
    min-width: 1.24rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
</style>
