<template>
<div class="icons">
  <swiper>
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
  data () {
    return {
      iconList:[{
        id:'0001',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc:'景点门票,景点门票,景点门票'
      },{
        id:'0002',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc:'广州必游'
      },
      {
        id:'0003',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc:'动植物园'
      },
      {
        id:'0004',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/5e/c640ec3b7d7ae802.png',
        desc:'打卡圣地'
      },
      {
        id:'0005',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc:'珠江夜游'
      },
      {
        id:'0006',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc:'泡温泉'
      },
       {
        id:'0007',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc:'一日游'
      },{
        id:'0008',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc:'游乐场'
      },
      {
        id:'0009',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc:'玩转长隆'
      },{
        id:'0010',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc:'全部玩乐'
      }]
    }
  },
  computed:{
    pages () {
      const pages=[]
      this.iconList.forEach((item,index) => {
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
  background:green
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