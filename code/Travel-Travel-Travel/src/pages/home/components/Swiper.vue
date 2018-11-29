<template lang="html">
  <div class="contaniner">
    <swiper :options="swiperOption" v-if="show">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    show () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.contaniner >>> .swiper-pagination-bullet-active
  background: #fff !important;
.contaniner >>> .swiper-wrapper
  transition-duration: 3000ms !important;
.contaniner >>> .swiper-pagination-bullet
  margin: -0.1rem 0.06rem !important;
  width: 0.12rem;
  height: 0.12rem;
.contaniner
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 27%;
  background: #eee;
img
  width: 100%;

</style>
