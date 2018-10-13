import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { connect } from './sdp'

//const api = process.env.NODE_ENV === 'production' ? 'http://756d1119-c231-4419-aa2e-733226de1c62.clouding.host:8089/' : 'http://localhost:8089/'
connect('ws://localhost:8888', store)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
