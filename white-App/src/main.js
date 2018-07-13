import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

import fastclick from 'fastclick'
import 'common/stylus/index.styl'

Vue.use(VueLazyLoad,{
  error:'http://placehold.it/375x175',
  loading:'http://placehold.it/375x175'
})
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
