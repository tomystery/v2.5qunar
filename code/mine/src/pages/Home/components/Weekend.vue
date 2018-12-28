<template>
<div>
    <div class="title">周末去那儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
           <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl"/>
           </div>
           <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
            </div>
        </li>
    </ul>
</div>

</template>

<script>
export default{
    name:"HomeWeekend",
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
    line-hieght:.8rem
    background:#eee
    text-indent:.2rem

.item-img-wrapper
    height:0
    overflow :hidden
    padding-bottom :33.4%

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