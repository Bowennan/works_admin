// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'babel-polyfill'
import vuelazy from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(iView)
Vue.use(vuelazy, {
	loading: require('./assets/loading.gif')
})
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
