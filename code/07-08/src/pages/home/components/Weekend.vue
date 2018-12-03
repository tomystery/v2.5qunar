<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        >
        <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
        </div>
        </li>
    </ul>
</div>
</template>

<script>
export default{
    name:'HomeWeekend',
  data () {
      return {
          list:[
          {
            desc:"垂直过山车等挑战你的青春荷尔蒙",
            id:"0001",
            imgUrl:"http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
            title:"长隆欢乐世界",
          },
        {
            desc:"近期小伙伴们收藏最！多！的景点😊",
        id:"0002",
        imgUrl:"http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
        title:"长隆水上乐园",

        }
        ]
      }
              
}
}

</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-hieght:.8rem
    background:#eee
    text-indent:.2rem

.item-img-wrapper
    height:0
    overflow :hidden
    padding-bottom :33.9%

    .item-img
        width :100%
.item-info
    padding:.1rem
    .item-title
        line-height :.54rem
        font-size:.32rem
        ellipsis()
    .item-desc
        line-height :.4rem
        color:#ccc
        ellipsis()     


</style>