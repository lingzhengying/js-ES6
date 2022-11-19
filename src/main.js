import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 将App组件放入容器中
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
}).$mount('#app')
