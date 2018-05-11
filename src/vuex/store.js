import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'
import loader from './modules/loader.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	//定义状态
  state: {
    author : 'NiDun',
    content: "vuex-axios-weui 练习"
  },
  actions:actions,
  getters:{

  },
  mutations:mutations,
  modules:{
  	loader
  },
})

export default store