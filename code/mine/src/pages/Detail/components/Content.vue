<template>
<div class="content">
    <div>
        <div class="item" v-for="(item,index) of categoryList" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>{{item.title}}
            </div>
            <div class="item-children" v-if="item.children">
                <detail-content :categoryList="item.children"></detail-content>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name:"DetailContent",
    props:{
    categoryList:Array
    },
    data(){
        return{

        }
    }

    
}
</script>


<style lang="stylus" scoped>
.content
    min-height :50rem
.item-title-icon
    position:relative
    left:.06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
.item-title
    line-height:.8rem
    font-size :.32rem
    text-align :left
.item-children
    padding:0 .2rem

</style>

