<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
export default {
  name: "Home",
  components: {
    HomeHeader, // 局部组件的用法，声明局部组件
    HomeSwiper,
    HomeIcons
  }
};
</script>
