import Vue from 'vue'
import Router from 'vue-router'

import Menu from '../components/menu/menu';
import Main from '../components/main/main';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/main',
        component: Main
    }, {
        path: '/menu',
        redirect: '/menu/mainMenu'
    }, {
        path: '/menu/:id',
        component: Menu,
        props: true
    }]
})
