import Vue from 'vue';
import axios from 'axios';
import VueIclient from '@supermap/vue-iclient';

import App from './App';
import router from './router';
import store from './store';

Vue.use(VueIclient);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
