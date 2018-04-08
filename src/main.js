// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import Axios from './axios/axios'
import router from './router'
import App from './App'

import wxApi from './wechat/weChat'

//自定义的微信 api
Vue.use(wxApi);

// 引入静态资源
require('./assets/style/common.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
