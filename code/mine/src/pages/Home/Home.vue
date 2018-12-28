<template>
<div>
    <home-header></home-header>
    <home-wrapper :list="swiperList"></home-wrapper>
    <home-icons :list="iconList"></home-icons>
    <home-recommand :list="recommendList"></home-recommand>
    <home-weekend :list="weekendList"></home-weekend>
</div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeWrapper from './components/Wraper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import HomeWeekend from './components/Weekend'
export default{
    name:'home',
    components:{
       HomeHeader,
       HomeWrapper,
       HomeIcons,
       HomeRecommand,
       HomeWeekend

    },
    data(){
        return{
            city:'',
            iconList:[],
            swiperList:[],
            weekendList:[],
            recommendList:[]
            
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){

            let data=res.data.data
            this.city=data.city
            this.swiperList=data.swiperList
            this.iconList=data.iconList
            this.recommendList=data.recommendList
            this.weekendList=data.weekendList
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>
<style lang="stylus" scoped>
</style>