import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import Header from './components/Header';
import Footer from './components/Footer';

Vue.component('AppHeader', Header);
Vue.component('AppFooter', Footer);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
