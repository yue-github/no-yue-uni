import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		token:'状态管理储存Bearer-token',
		getter:'这是测试getters'
	},
    mutations: {
		doMutations(state,data){
			console.log(data);
			setTimeout(res=>{
				console.log(data);
			},2000)
		},
		doCommit(){
			console.log('hello doCommit');
		}
	},
    actions: {
		doActions(state,data){
			console.log(data);
		},
		doDispatch(){
			
		}
	},
	getters:{
		doGetters:state=>{
			return state.getter;
		}
	}
})

export default store