<template lang="html">
  <div class="container">
    <div
     class="item"
     v-for="(item, index) in list"
     :key="index"
    >
      <div class="itemTittle border-bottom">
        <span class="itemTittleIcon"></span>
        {{item.title}}
      </div>
      <!-- 递归 -->
      <div v-if="item.children" class="itemChildren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.itemTittle
  line-height: .8rem;
  font-size: .32rem;
  padding: 0 .2rem;
  .itemTittleIcon
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
.itemChildren
  padding: 0 .2rem;
</style>
