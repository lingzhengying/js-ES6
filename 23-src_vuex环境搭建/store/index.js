// 该文件用于创建Vuex中最为核心的store
// 引入vuex
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用vuex插件
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {}

// 准备mutations-用于操作数据
const mutations = {}

// 准备states-用于存储数据
const state = {}

// 创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

