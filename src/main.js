import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS


Vue.prototype.$axios = axios;

Vue.use(iView);
fastclick.attach(document.body);
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});



