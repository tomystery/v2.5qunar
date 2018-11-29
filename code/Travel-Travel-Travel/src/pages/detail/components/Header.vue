<template lang="html">
  <div class="container">
    <router-link tag="div" to="/" class="headerAbs" v-show="showAbs">
      <span class="iconfont">&#xe667;</span>
    </router-link>
    <div class="headerFixed" v-show="!showAbs" :style="headerFixedStyle">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont">&#xe667;</span>
        </div>
      </router-link>
      {{sightName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      headerFixedStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 先计算滚动了多少，一旦超过60，就隐藏abs，显示bar
      const scrolledDistance = document.documentElement.scrollTop
      if (scrolledDistance > 60) {
        var opacity = scrolledDistance / 140
        opacity = opacity > 1 ? 1 : opacity
        this.headerFixedStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 因为我们使用了keepalive标签包裹app.vue，就多了这个钩子函数
    // 当页面被显示时监听滚动事件，一旦发生滚动便执行handleScroll方法
    // 这是绑定了全局事件，会影响其他组件
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 当我们离开页面时需要清除全局事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.headerAbs
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  border-radius: .4rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  line-height: .8rem;
  text-align: center;
  .iconfont
    font-size: .4rem
.headerFixed
  z-index: 2
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
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
