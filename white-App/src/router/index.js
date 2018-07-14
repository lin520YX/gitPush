import Vue from 'vue'
import Router from 'vue-router'

import Menu from '../components/menu/menu';
import Main from '../components/main/main';
import Login from '../components/login/login'
import MakeAccount from '../components/makeAccount/makeAccount'
import CheckAccount from '../components/echarts/test'
import AskForHelp from '../components/askForHelp/askForHelp'
import SetParams from '../components/setParams/setParams'
import PersonalCenter from '../components/personalCenter/personalCenter'

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
        component: CheckAccount
    }, {
        path:'/askForHelp',
        component: AskForHelp 
    }, {
        path:'/howToSetParams',
        component: SetParams
    }, {
        path:'/setInitialAccount',
        component: SetParams
    }, {
        path:'/personalCenter',
        component: PersonalCenter
    }]
})
