<template>
    <div>
        <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-content :categoryList="categoryList" ></detail-content>
    </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailContent from './components/Content'
export default{
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailContent
    },
    data(){
        return{
            bannerImg:'',
            categoryList:[],
            gallaryImgs:[],
            sightName:''
        }
    },
    methods:{
        getDetailInfo(){
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleDetailSucc)
        },
        handleDetailSucc(res){
            const data=res.data.data
            this.bannerImg=data.bannerImg
            this.categoryList=data.categoryList
            this.gallaryImgs=data.gallaryImgs
            this.sightName=data.sightName
        }
    },
    mounted(){
        this.getDetailInfo()
    }
}

</script>

<style lang="stylus">

</style>
