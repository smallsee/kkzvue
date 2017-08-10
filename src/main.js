import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import iView from 'iview';
import _ from 'lodash';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import 'common/sass/index.scss'
import 'common/css/font-awesome.min.css'

Vue.prototype.$axios = axios;
Vue.prototype.$_ = _;

Vue.use(iView);
Vue.use(Vuex);
fastclick.attach(document.body);
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
});


const store = new Vuex.Store({
  state: {
    todo: ''
  },
  mutations: {
    get_todo_list (state, todo){
      state.todo = todo;
    }
  },
  actions: {
    geTodo(store){
      console.log('is_todo');
      store.commit('get_todo_list', '5555')
    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});



