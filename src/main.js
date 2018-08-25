import Vue from 'vue';
import router from './plugins/vue-router';
import './plugins/vuetify/vuetify';
import App from './App.vue';
import store from './plugins/vuex/index';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
