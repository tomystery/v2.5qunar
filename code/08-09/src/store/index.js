import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {//放公用的
        city: '北京'
    },
   /*  actions: {
        changeCity(ctx, city) {
            //接收2个参数，第一个上下文ctx,第二个传递过来的参数city
            ctx.commit('changeCity',city)
        }
    }, */
    mutations:{
        changeCity(state,city){
            state.city=city

        }
    }
})