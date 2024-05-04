import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import axios from "axios";
import UniqueId from 'vue-unique-id';
Vue.use(UniqueId);

axios.defaults.withCredentials = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')





