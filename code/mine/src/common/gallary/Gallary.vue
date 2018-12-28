<template>
 <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
             <swiper :options="swiperOption">
                 <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <div>
                    <img :src="item" class="swiper-img"/>
                    </div>
                 </swiper-slide>
                 <div class="swiper-pagination" slot="pagination"></div>
             </swiper>
             
        </div>
    </div>
</template>

<script>
export default {
    name:"Gallary",
    props:{
        imgs:Array
    },
    data(){
        return{
             swiperOption: {
                pagination: ".swiper-pagination",
                paginationType:'fraction',
                observeParents:true,
                observer:true
            },
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-pagination
    overflow :inherit

.container >>> .swiper-container
    overflow :inherit
.container
    display :flex
    flex-direction:column
    justify-content :center
    position :fixed
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    z-index:99

    .wrapper
        height:0
        width:100%
        padding-bottom:100%
        background-color color

        .swiper-img
            width:100%

        .swiper-pagination
            color :#fff 
            bottom:-1rem   
</style>

