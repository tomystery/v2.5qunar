<template>
  <div>
   <home-header></home-header>
   <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader, // 局部组件的用法，声明局部组件
    HomeSwiper
  }
}
</script>
