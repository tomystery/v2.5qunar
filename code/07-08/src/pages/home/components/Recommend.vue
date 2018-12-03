<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
        <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
        </div>
        </li>
    </ul>
</div>
</template>

<script>
export default{
    name:'HomeRecommend',
  data () {
      return {
          list:[
          {
            desc:"垂直过山车等挑战你的青春荷尔蒙",
            id:"0001",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1707/47/477416df92210439a3.img.jpg_200x200_b9e4ac2c.jpg",
            title:"长隆欢乐世界",
          },
        {
            desc:"近期小伙伴们收藏最！多！的景点😊",
        id:"0002",
        imgUrl:"http://img1.qunarzz.com/sight/p0/1707/ab/abb70c851caaa6d8a3.img.jpg_200x200_b902dd9e.jpg",
        title:"长隆水上乐园",

        },{
            desc:"近期小伙伴们收藏最！多！的景点😊",
            id:"0003",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg",
            title:"广州长隆旅游度假区"
        },
        {
            desc:"汇集了全球各种酷炫游乐科技",
            id:"0004",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1601/3d/3dc7f222d6bca6a790.img.jpg_200x200_e0bb3017.jpg",
            title:"广州花城汇MAG环球魔幻世界"

        },
        {
            desc:"帅的人都去过了😎，你还等什么~",
            id:"0005",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg",
            title:"白水寨"

        }
              ]
      }
              
}
}

</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    margin-top:.2rem
    line-hieght:.8rem
    background:#eee
    text-indent:.2rem
.item
    overflow :hidden 
    display :flex
    height 1.9rem
    .item-img
        width :1.7rem
        height:1.7rem 
        padding:.1rem 
    .item-info
        flex:1
        padding 0.1rem
        min-width:0
        .item-title
            line-height :.54rem
            font-size:.32rem
            ellipsis()
        .item-desc
            line-height :.4rem
            color:#ccc
            ellipsis()
        .item-button
            line-height:.44rem
            margin-top:.16rem
            background:#ff9300
            padding:0 .2rem
            border-radius:.06rem
            color:#fff        

</style>