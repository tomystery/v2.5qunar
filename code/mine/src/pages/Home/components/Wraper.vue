<template>
    <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id" >
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
    name:"HomeWraper",
    props:{
        list:Array
    },
    data(){
        return{
            swiperOption:{
                pagination: ".swiper-pagination",
                loop: true
            }
        }
    }
}

</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  height: 31.25vw;
}

.swiper-img {
  width: 100%;
}
</style>