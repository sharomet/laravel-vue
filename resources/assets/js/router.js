import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/HomeComponent';
import Post from '../components/PostComponent';
import Categories from '../components/categories/Categories';
import Products from '../components/products/ProductList';
import ProductDetail from '../components/products/ProductDetail';
import Login from '../components/authentication/login';
import Signup from '../components/authentication/signup';

import AdminCategories from '../components/admin/AdminCategories';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/posts', name: 'post', component: Post},
        {path: '/categories', name: 'categories', component: Categories},
        {path: '/products/:id', name: 'products', component: Products},      
        {path: '/product/:id', name: 'product', component: ProductDetail},
        {path: '/login', name: 'login', component: Login, meta: { requiresAuth: false }},
        {path: '/signup', name: 'signup', component: Signup},
        {path: '/admin/categories', name: 'adminCategories', component: AdminCategories, meta: { requiresAuth: true }},
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(m => m.meta.requiresAuth) && localStorage.getItem('token') === null) {
        return next('/login');
    } else {
        return next();
    }
});

export default router;
