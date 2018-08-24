import Vue from 'vue'
import App from './App'
import router from './router'

const isprod = process.env.NODE_ENV === 'production'

Vue.config.productionTip = isprod
Vue.config.performance = !isprod

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
