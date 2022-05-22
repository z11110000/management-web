import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import './plugins/element.js'
import * as echarts from "echarts";

Vue.config.productionTip = false


Vue.use(echarts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
