const routers = [
	{
	    path: '',
	    meta: {
	        title: '职业',
		    parent: '1',
		    expend: false
	    },
		redirect: '/profession/mitsurugi',
	    component: (resolve) => require(['./index.vue'], resolve),
		children: [
			{
				path: '/profession/mitsurugi',
				meta: {
					title: '御剑',
					parent: '1-1'
				},
				component: (resolve) => require(['./views/profession/mitsurugi'], resolve)
			},
			{
				path: '/profession/dodge',
				meta: {
					title: '妙法',
					parent: '1-2'
				},
				component: (resolve) => require(['./views/profession/dodge'], resolve)
			}
		]
	},
	{
		path: '/news',
		meta: {
			title: '新闻',
			parent: '2',
			expend: false
		},
		redirect: '/news/mon',
		component: (resolve) => require(['./index.vue'], resolve),
		children: [
			{
				path: '/news/mon',
				meta: {
					title: '周一',
					parent: '2-1'
				},
				component: (resolve) => require(['./views/news/mon'], resolve)
			},
			{
				path: '/news/tur',
				meta: {
					title: '周二',
					parent: '2-2'
				},
				component: (resolve) => require(['./views/news/tur'], resolve)
			},
			{
				path: '/news/fri',
				meta: {
					title: '周五',
					parent: '2-3'
				},
				component: (resolve) => require(['./views/news/fri'], resolve)
			}
		]
	},
	{
		path: '/copy',
		meta: {
			title: '副本',
			parent: '3',
			expend: false
		},
		redirect: '/copy/cool',
		component: (resolve) => require(['./index.vue'], resolve),
		children: [
			{
				path: '/copy/cool',
				meta: {
					title: '清凉',
					parent: '3-1'
				},
				component: (resolve) => require(['./views/copy/cool'], resolve)
			},
			{
				path: '/copy/incubus',
				meta: {
					title: '梦魇',
					parent: '3-2'
				},
				component: (resolve) => require(['./views/copy/incubus'], resolve)
			}
		]
	},
	{
		path: '*',
		meta: {
			title: '404',
			parent: false,
			expend: false
		},
		hidden: true,
		component: (resolve) => require(['./views/404.vue'], resolve),
		children: []
	},
	{
		path: '/login',
		meta: {
			title: '登录',
			parent: false,
			expend: false
		},
		hidden: true,
		component: (resolve) => require(['./views/login.vue'], resolve),
		children: []
	}
];
export default routers;