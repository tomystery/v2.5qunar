<template lang="html">
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
     :cities="cities"
     :hotCities="hotCities"
     :letter="letter"
    ></city-list>
    <city-alphabet
    :cities="cities"
    @clickAlphabet="handleLetterChange"
    @touchChange="handleTouch"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityMsg () {
      axios.get('/static/mock/city.json').then(this.getCityMsgSuccess)
    },
    getCityMsgSuccess (msg) {
      console.log(msg)
      msg = msg.data
      if (msg.ret && msg.data) {
        msg = msg.data
        this.cities = msg.cities
        this.hotCities = msg.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    handleTouch (letter) {
      this.handleLetterChange(letter)
    }
  },
  mounted () {
    this.getCityMsg()
  }
}
</script>

<style lang="stylus" scoped>
</style>
