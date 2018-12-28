<template>
    <ul class="list">
        <li class="item" v-for="(item,key) in cities" 
            :key="key"
            :ref="key"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
         >
            {{key}}
        </li>
    </ul>
</template>

<script>
export default{
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    data(){
        return{
            timer:null,
            startY:0,
            touchStatus:false
        }

    },
    computed:{
        letters(){
            let letters=[]
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updated(){
      this.startY= this.$refs["A"][0].offsetTop
    },
    methods:{
        handleLetterClick(e){
           this.$emit("change",e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus=true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                const touchY=e.touches[0].clientY-79;
                const index=Math.floor((touchY-this.startY)/20)
                if(index>0 && index < this.letters.length)
                this.$emit("change",this.letters[index])
                },16)
            }
        },
        handleTouchEnd(e){
            this.touchStatus=false
        }
    }
}
</script>

 <style lang="stylus" scoped>
    .list
        top:1.58rem
        right :0
        bottom :0
        width:0.4rem
        position :absolute
        background:transparent
        display :flex
        flex-direction :column
        justify-content:center

        li
            color:#00bcd4
            text-align :center
            line-height :0.4rem
</style>

