<template lang="html">
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont">&#xe667;</span>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  overflow: hidden;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  color: #fff;
  background: $bdColor;
  font-size: .4rem;
.header-left
  width: .64rem
  float: left
  text-align: center
  .iconfont
    font-size: .4rem
    color: #fff;

</style>
