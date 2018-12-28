<template>
<div>
    <div class="banner" @click="showGallaryClick">
        <img :src="bannerImg"/>
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe637;</span>{{this.gallaryImgs.length}}
            </div>
        </div>
    </div>
    <fade-animation>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
    </fade-animation>
</div>

</template>

<script>
import FadeAnimation from 'common/fade/FadeAnimation'
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:"DetailBanner",
    props:{
        bannerImg:String,
        sightName:String,
        gallaryImgs:Array
    },
    components:{
        FadeAnimation,
        CommonGallary
    },
    methods:{
        showGallaryClick(){
            
           this.showGallary=true
        },
        handleGallaryClick(){
            this.showGallary=false
        }
    },
    data(){
        return{
            showGallary:false
        }
    }
    
}
</script>

<style lang="stylus">
.banner
    position :relative
    overflow :hidden
    height:0
    padding-bottom :55%

    .banner-img
        width :100%

    .banner-info
        display :flex
        position :absolute
        left:0
        right :0px 
        bottom :0px 
        line-height :.6rem  
        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))

        .banner-title
            flex:1
            font-size :.32rem
            padding:0 .2rem
            color:#fff
        .banner-number
            margin-top:.14rem
            padding:0 .4rem
            height :.32rem
            border-radius:.2rem
            background:rgba(0,0,0,.8)
            font-size :.24rem  
            color:#fff  

            .banner-icon
                font-size :.24rem

</style>

