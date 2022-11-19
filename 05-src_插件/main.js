import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'

Vue.config.productionTip = false

// 使用插件
Vue.use(plugins,1,2,3,)
new Vue({
  // 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
