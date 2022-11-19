import Vue from 'vue'
import App from './App.vue'
// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI组件库全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button,DatePicker,Upload,Row} from 'element-ui';

Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component('d-date-picker', DatePicker);
Vue.component('u-upload', Upload);
Vue.component('r-row', Row);

// 应用ElementUI
// Vue.use(ElementUI);

new Vue({
  // 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
