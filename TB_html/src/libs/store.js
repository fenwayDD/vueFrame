import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0,
		routes: [],
		tabRoutes: [],
		sliderRoutes: [],
	},
	getters: {

	},
	mutations: {
		increment (state, n) {
			state.count += n.num
		},
		getMenu (state, router) {
			let routes = router.options.routes;
			state.tabRoutes = [];
			state.sliderRoutes = [];
			state.routes = routes;
			if(routes && routes.length > 0){
				routes.forEach(function(route) {
					let tabObj = {
						title: route.meta.title,
						parent: route.meta.parent,
						path: route.path,
						expend: false
					};
					state.tabRoutes.push(tabObj);
					if(route && route.children.length > 0){
						route.children.forEach(function(child) {
							let sliderObj = {
								title: child.meta.title,
								parent: child.meta.parent,
								path: child.path
							};
							state.sliderRoutes.push(sliderObj);
						})
					}
				})
			}

		}
	},
	actions: {

	}
});

export default store;