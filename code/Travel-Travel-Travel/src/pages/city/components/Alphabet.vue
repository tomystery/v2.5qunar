
<template lang="html">
<div class="alphabet">
  <ul class="list">
    <li
     class="item"
     v-for="item in alphaList"
     :key="item"
     :ref="item"
     @click="handleItemClick"
     @touchstart="handleTouchStart"
     @touchmove="handleTouchMove"
     @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    alphaList () {
      const alphaList = []
      for (let item in this.cities) { // 读属性
        alphaList.push(item)
      }
      return alphaList// 将cities对象变成一个数组
    }
  },
  methods: {
    handleItemClick (ev) {
      this.$emit('clickAlphabet', ev.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (ev) {
      if (this.touchStatus) {
        // 如果为真，就开始计算手指位置
        // 然后查看有无定时器，若有就清除，没有就创建一个定时器
        // 函数节流可以提升性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const currentY = ev.touches[0].clientY - 79
          var distance = currentY - this.startY
          const index = Math.floor(distance / 20)
          // 当手指超过字母条范围时，停止emit
          if (index >= 0 && index < this.alphaList.length) {
            this.$emit('touchChange', this.alphaList[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () { // 因为字母表最开始靠{}来渲染，所以什么都不会显示出来。当city页面ajax之后，cities就有内容了。
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bdColor
</style>
