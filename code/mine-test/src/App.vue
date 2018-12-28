<template>
  <div id="app">
   <div @click="changeData" v-once>{{this.a}}</div>
   <p>{{html}}</p>
   <p v-html="html"></p>
   <button v-bind:disabled="isButtonDisabled">Button</button>
   <p>日历:{{date}}</p>
   <div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">njwkvnefjkn
   </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      a:1,
      html:'<b style="color:red">我是文本</b>',
      isButtonDisabled:true,
      isActive: true,
      hasError: true
    }
  },
  methods:{
    changeData(){
      this.a++
    }
  },
  computed:{
    date:function(){
      console.log('computed执行')
      return Date.now()
    }
  },
  beforeCreate:function(){
    console.log('beforecreate :' )
  },
  created:function(){
    console.log(' created a is'+ this.a)
  },
  beforeMount:function(){
    console.log('beforeMount:')
  },
  mounted:function(){
    console.log('mounted:')
  },
  beforeUpdate:function(){
    console.log('beforeUpdate')
  },
  updated:function(){
    console.log('updated')
  },
  beforeDestory:function(){
    console.log('beforeDestroy')
  },
  destroyed:function(){
    console.log('destroyed')
  }

}
</script>

<style>

</style>
