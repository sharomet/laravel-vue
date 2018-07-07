import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/HomeComponent';
import Post from './components/PostComponent';
import Login from './components/authentication/login';
import Registration from './components/authentication/registration';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/posts',
            name: 'post',
            component: Post,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration,
        },
    ],
});

export default router;
