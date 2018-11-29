<template>

  <div>
   <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader // 局部组件的用法，声明局部组件
  }
}
</script>
