import Vue from 'vue'
import App from './App.vue'
import VueDragscroll from 'vue-dragscroll'
import VueRouter from 'vue-router'

import {routes} from './routes'

Vue.use(VueDragscroll)
Vue.use(VueRouter)

const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
