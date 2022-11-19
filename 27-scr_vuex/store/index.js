// 该文件用于创建Vuex中最为核心的store
// 引入vue核心库
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
import countOption from './count'
import personOption from './person'
// 使用vuex插件
Vue.use(Vuex)



// 创建并导出store
export default new Vuex.Store({
    modules:{
        countAbout:countOption,
        personAbout:personOption
    }
})

