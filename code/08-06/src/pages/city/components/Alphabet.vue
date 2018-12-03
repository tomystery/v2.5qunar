<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,key) of cities"
      :key="key" :ref="key"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed:{
      letters(){
          const letters=[]
          for(let i in this.cities){
              letters.push(i)
          }
          return letters
      }
  },
  data() {
    return {
      touchStatus: false
    };
  },
  methods: {
    handleLetterClick(e) {
      console.log(e.target.innerText);
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
         
        const startY = this.$refs["A"][0].offsetTop
        const touchY = e.touches[0].clientY-79
        const index = Math.floor((touchY - startY) / 20)
        if(index>=0 && index<this.letters.length){
            this.$emit('change',this.letters[index]) //向外触发change事件。
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  background: red;

  .item {
    list-style: none;
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>