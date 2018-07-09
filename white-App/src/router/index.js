import Vue from 'vue'
import Router from 'vue-router'

import Singer from '../components/Singer/Singer';
import Main from '../components/main/main';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/main',
			name:'main',
			component: Main
		}
		, {
			path: '/singer',
			name: 'singer',
			component: Singer
		}]
})
