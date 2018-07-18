import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/HomeComponent';
import Post from './components/PostComponent';
import Categories from './components/categories/Categories';
import Products from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import Login from './components/authentication/login';
import Registration from './components/authentication/registration';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/posts', name: 'post', component: Post},
        {path: '/categories', name: 'categories', component: Categories},
        {path: '/products/:id', name: 'products', component: Products},      
        {path: '/product/:id', name: 'product', component: ProductDetail},
        {path: '/login', name: 'login', component: Login},
        {path: '/registration', name: 'registration', component: Registration},
    ],
});

export default router;
