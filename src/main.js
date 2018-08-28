import Vue from 'vue'
import App from './App.vue'
import VueDragscroll from 'vue-dragscroll'
import VueRouter from 'vue-router'
// import Flickity from 'vue-flickity'

import {routes} from './routes'

Vue.use(VueDragscroll)
Vue.use(VueRouter)
// Vue.use(Flickity)

const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
