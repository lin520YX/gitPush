import Vue from 'vue'
import Router from 'vue-router'

import Singer from '../components/Singer/Singer';

Vue.use(Router)

export default new Router({
  routes: [{
    	path: '/singer',
    	name: 'singer',
    	component: Singer
    }]
})
