<template lang="html">
  <div class="gallaryContainer" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(image, index) in imgs" :key="index">
          <img class="gallaryImg" :src="image">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // swiper只要发现父元素发生变化时就自动更新
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('clickGallary')
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallaryContainer >>> .swiper-container
  overflow: inherit;
.gallaryContainer
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: #000
  .wrapper
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallaryImg
      width: 100%;
    .swiper-pagination
      color: #fff;
      bottom: -1rem;
</style>
