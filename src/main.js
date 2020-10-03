import Vue from 'vue'
import App from './App.vue'
import router from './router'

// copy vue cli 3 dari bootstap vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import css di folder asset, css
import './assets/css/main.css'
// import toast notif nya
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';


Vue.use(VueToast);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
