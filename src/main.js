import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import vuetify from './plugins/vuetify';
import router from './router/router';
import store from './vuex/store';

Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
