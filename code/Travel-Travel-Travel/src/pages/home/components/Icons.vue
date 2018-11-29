<template lang="html">
<div class="iconsContainer">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <img :src="item.imgUrl" class="iconImage">
        <p>{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
  <div class="swiper-pagination"  slot="pagination"></div>
</div>
</template>

<script>
export default {
  name: 'HeaderIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      var page
      this.list.forEach((item, index) => {
        page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/packageStyle.styl'
.iconsContainer >>> .swiper-pagination-bullet
  width: 6px;
  height: 6px;
  margin-left: 9px;
.iconsContainer >>> .swiper-pagination-bullet-active
  background: rgba(0,175,190,.8);
.iconsContainer
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 0;
  padding-bottom: 3.8rem;
  margin-top: 0.05rem;
  .icon
    float: left;
    box-sizing: border-box;
    width: 2.07rem;
    height: 1.6rem;
    padding-top: .1rem;
    .iconImage
      display: block;
      margin: 0 auto;
      padding-top: .02rem;
      width: 1.1rem;
      height: 1.1rem;
    p
      text-align: center;
      margin-top: .1rem;
      padding-top: .02rem;
      font-size: .28rem;
      line-height: .28rem;
      font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
      color: #212121;
      ellipsis()
  .swiper-pagination
    position: absolute;
    bottom: .1rem;
    left: 3.88rem;

</style>
