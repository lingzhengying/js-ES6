// 该文件用于创建Vuex中最为核心的store
// 引入vuex
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用vuex插件
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {
    // jia(context,value){
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 1000);
    }
}

// 准备mutations-用于操作数据
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
}

// 准备states-用于存储数据
const state = {
    sum:0 //当前的和
}

// 创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

