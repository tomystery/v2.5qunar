<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
        <li v-for="item of list" :key="item.id">
            <router-link 
            :to=" '/detail/'   + item.id " 
            class="item border-bottom"
            >
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </li>
    </ul>
</div>

</template>

<script>
export default{
    name:"HomeRecommand",
    props:{
        list:Array
    },
    data(){
        return{

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