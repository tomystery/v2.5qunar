<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list" >
                <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                    <div class="button" @click="changeCity(item.name)">{{item.name}}</div>
                </div>
            </div>
        </div>
        <!-- 字母表 -->
        <div class="area" v-for="(items,key) of cities" 
        :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom"  @click="changeCity(item.name)"  v-for="item of items" :key="item.id">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default{
    name:"cityList",
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper);
    },
    methods:{
        changeCity(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }

    },
    watch:{
        letter(){
            if(this.letter){
                const el=this.$refs[this.letter][0]
                this.scroll.scrollToElement(el)
                    }
        }
       
    }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
    line-height: 1rem;
    height: 1rem;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .alpha-list {
    .alpha-item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>

