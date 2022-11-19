import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
Vue.config.productionTip = false
// 应用全局插件
Vue.use(VueRouter)

const vm = new Vue({
  // 将App组件放入容器中
  render: h => h(App),
  router:router
}).$mount('#app')
