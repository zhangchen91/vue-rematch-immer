import Vue from 'vue'
import Router from 'vue-router'
import index from './pages/index'
import counter from './pages/Counter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    }
  ]
})
