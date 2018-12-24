<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg" />
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe637;</span>{{this.gallaryImgs.length}}
            </div>
        </div>
    </div>
    <fade-animation>
    <common-gallery :imgs="gallaryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </fade-animation>
</div>    
</template>

<script>
import commonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array,
    },
    data () {
        return {
            showGallery:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1803/2f/2fbc7020db4a7a16a3.water.jpg_350x240_a4fe79e0.jpg','http://img1.qunarzz.com/sight/p0/1803/cc/ccc894b4d48fbb7ba3.water.jpg_350x240_923d4f74.jpg']
        }

    },
    components:{
        commonGallery,
        FadeAnimation //引入之后再注册一下，这样在页面里面就可以用了
    },
    methods:{
        handleBannerClick(){
            this.showGallery=true
        },
        handleGalleryClose(){
            this.showGallery=false
        }
    }
}
</script>

<style lang="stylus" scoped>
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
