<template>
  <div class="blog">
   <div>我是blog{{PostTitle}}</div>
   
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props:{
    PostTitle:String
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
