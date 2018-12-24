<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) of pages"  :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
      <img class="icon-img-content" :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
    </swiper-slide>
   </swiper>
</div>
</template> 

<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data (){
    return {
      swiperOption:{
        autoplay:false
      }
    }

  },
  computed:{
    pages () {
      const pages=[]
      this.list.forEach((item,index) => {
        const page = Math.floor(index/8) //判断是在第一页还是第二页
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages

    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container
  height :0
  padding-bottom:50%
.icons
  height :0
  padding-bottom :50%
  overflow:hidden
  .icon
    float:left
    width :25%
    padding-bottom:25%
    overflow :hidden
    position :relative
    height :0
    .icon-img
      position :absolute
      top:0
      left:0
      right :0px
      bottom:.44rem
      box-sizing :border-box
      padding:.1rem
      .icon-img-content
        height :100%
        display :block
        margin:0 auto
    .icon-desc
          position:absolute
          left :0
          right:0
          bottom:0
          height :.44rem
          line-height :.44rem
          color :$darkTextColor
          text-align :center
          ellipsis()
</style>