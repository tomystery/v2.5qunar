<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hot="hotCities" :cities="cities" ></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default{
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet

    },
    data(){
        return {
            cities:{},
            hotCities:[]
        }
    },
    methods:{
        getCityInfo(){
            axios.get('static/mock/city.json')
              .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
           res=res.data
           if(res.ret && res.data){
               res=res.data
               console.log(res)
               this.cities=res.cities
               this.hotCities=res.hotCities
           }
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>