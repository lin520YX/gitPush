import Vue from 'vue'
import Router from 'vue-router'

import Menu from '../components/menu/menu';
import Main from '../components/main/main';
import Login from '../components/login/login'
import MakeAccount from '../components/makeAccount/makeAccount'

Vue.use(Router)
    
export default new Router({
    routes: [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login,
    }, {
        path: '/main',
        component: Main,
    }, {
        path: '/menu',
        redirect: '/menu/mainMenuA'
    }, {
        path: '/menu/:id',
        component: Menu,
        props: true,
    }, {
        path:'/MakeAccount',
        component: MakeAccount
    }, {
        path:'/CheckAccount',
        component: Menu
    }, {
        path:'/askForHelp',
        component: Menu
    }, {
        path:'/howToSetParams',
        component: Menu
    }, {
        path:'/setInitialAccount',
        component: Menu
    }]
})
