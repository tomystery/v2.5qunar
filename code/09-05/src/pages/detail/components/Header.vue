<template>
<div>
  <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
  </router-link>
  <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link  to="/" >
      <div class="iconfont header-fixed-back">&#xe624;</div>
  </router-link>
    景点详情
  </div>
</div>    
</template>

<script>

export default {
   name:"DetailHeader",
   data(){
       return {
           showAbs:true,
           opacityStyle:{
               opacity:0
           }
       }
   },
   methods:{
       handleScroll(){
           const top=document.documentElement.scrollTop
           if(top>60 ){
               let opacity=top/140
               opacity = opacity >1 ? 1:opacity
              this.opacityStyle={ opacity}
               this.showAbs=false
           }else{
               this.showAbs=true
           }
           console.log(document.documentElement.scrollTop)
       }
   },
   /* 因为我们用了kep-alive,所以页面只要一被展示，activated这个钩子就会被执行 */
   activated(){
       window.addEventListener('scroll',this.handleScroll)
   },
   /* 这个的执行时间是页面即将被隐藏或者页面即将替换成新的页面的时候才会执行的 */
   deactivated(){
       window.removeEventListener('scroll',this.handleScroll)
   }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position :absolute
    left: 0.2rem
    top:.2rem
    width:.8rem
    height :.8rem
    border-radius:.4rem
    text-align:center
    line-height:.8rem
    background:rgba(0,0,0,.8)

    .header-abs-back
        color:#fff
        font-size:.4rem

.header-fixed
    z-inde:2
    position :fixed
    top:0
    left:0
    right:0
    overflow :hidden
    height $headerHeight
    line-height: $headerHeight
    text-align :center
    color:#fff
    background:$bgColor
    font-size:.32rem
    .header-fixed-back
        top:0
        left:0
        position :absolute
        width:.64rem
        text-align:center
        font-size:.4rem
        color:#fff        
</style>
