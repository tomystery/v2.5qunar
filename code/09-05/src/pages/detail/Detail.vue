<template>
<div>
   <detail-banner></detail-banner>
   <detail-header></detail-header>
   <div class="content">
       <detail-list :list="list"></detail-list>
   </div>
</div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default{
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            list:[{
                title:'成人票',
                children:[{
                    title:'成人三官联票',
                    children:[{
                        title:"成人三官联票 2"
                    }]
                },{
                    title:"5联票",
                     children:[{
                        title:"成人三官联票 2"
                    }]
                }]
            },{
                title:"学生票",
                children:[{
                    title:'成人三官联票',
                     children:[{
                        title:"成人三官联票 2"
                    }]
                },{
                    title:"5联票",
                     children:[{
                        title:"成人三官联票 2"
                    }]
                }]
            },{
                title:"儿童票",
                children:[{
                    title:'成人三官联票',
                     children:[{
                        title:"成人三官联票 2"
                    }]
                },{
                    title:"5联票",
                     children:[{
                        title:"成人三官联票 2"
                    }]
                }]
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
.content{
    height :50rem
}
</style>