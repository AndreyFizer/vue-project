import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './app.vue';
import routes from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-c5855.firebaseio.com/';

Vue.filter('currency', val => `$ ${val.toLocaleString()}`);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  store,
  router,
  render: r => r(App),
});
