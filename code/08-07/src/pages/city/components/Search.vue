<template lang="html">
  <div>
    <div class="search">
      <input
       type="text"
       placeholder="输入城市名或者拼音"
       class="searchInput"
      
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'CitySearch'
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
