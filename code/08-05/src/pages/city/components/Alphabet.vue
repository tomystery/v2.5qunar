<template>
    <div class="list">
        <li  class="item"  v-for="(item,key) of cities" :key="key">{{key}}</li>
    </div>
</template>

<script>
export default{
    name:'CityAlphabet', 
    props:{
        cities:Object
    }
}
</script>

<style lang="stylus" scoped>
.list
  display :flex
  flex-direction:column
  justify-content :center
  position :absolute
  top:1.58rem
  right:0
  bottom:0
  width:.4rem
  background:red
  .item
    list-style :none
    text-align :center
    line-height:.4rem
    color:$bgColor

</style>