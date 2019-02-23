<template>
  <div class="hello">
   <blog-post :post-title="msg"></blog-post>
   
  </div>
</template>

<script>
import BlogPost from './BlogPost'
export default {
  name: 'HelloWorld',
  components:{
    BlogPost
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
