import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSplit from 'vue-split-panel'
Vue.use(VueSplit)

sync(store, router)

Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue();
window.$ = window.jQuery = require('jquery');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
