

const state = {
	loadStatue: false,
	loadMsg:''
}

const mutations = {
	SHOWLOADING(state) {
		state.loadStatue = true;
	},
	HIDELOADING(state) {
		state.loadStatue = false;
	}
}

const getters = {
	getLoadStatue(state){
		return state.loadStatue;
	}
}

const actions = {
	showloader:({commit}) =>{
		commit('SHOWLOADING')
	},
	hideloader:({commit}) =>{
		commit('HIDELOADING')
	}
}

export default {
	state,
	mutations,
	getters,
	actions
}