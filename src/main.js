// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import Axios from './axios/axios'
import router from './router'
import App from './App'

import wxApi from './wechat/weChat'

import Loading from './plugin/Loading' 

// import VueWeui from './wechat/weUi'


//自定义的微信 api
Vue.use(wxApi);


Vue.use(Loading);

// 引入静态资源
require('./assets/style/common.css')
require('./assets/style/loading.less')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
