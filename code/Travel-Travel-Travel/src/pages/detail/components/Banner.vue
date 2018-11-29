<template lang="html">
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" class="bannerImg">
      <div class="bannerInfo">
        <div class="bannerTitle">
          {{sightName}}
        </div>
        <div class="bannerNumber"><span class="iconfont bannerIcon">&#xe655;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <fade>
      <gallary :imgs="gallaryImgs" v-show="showGallary" @clickGallary="clickGallary"></gallary>
    </fade>
    </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import Fade from 'common/fadeAnimation/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    Gallary,
    Fade
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    clickGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .bannerImg
    width: 100%;
  .bannerInfo
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    /* 添加图片底部黑色渐变效果 */
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    .bannerTitle
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
      font-weight: bold;
    .bannerNumber
      padding: 0 .4rem;
      line-height: .32rem;
      height: .32rem;
      margin-top: .14rem;
      border-radius: .2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: .24rem;
      font-weight: bold;
      .bannerIcon
        font-size: .24rem;
</style>
