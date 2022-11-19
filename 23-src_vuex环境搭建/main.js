import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

// 引入store
import store from './store/index'

Vue.config.productionTip = false

Vue.use(vueResource)



const vm = new Vue({
  // 将App组件放入容器中
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
}).$mount('#app')
