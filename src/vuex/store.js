import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//定义状态
  state: {
    author : 'NiDun',
    content: "vuex-axios-weui 练习"
  }
})

export default store