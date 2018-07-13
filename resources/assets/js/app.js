import Vue from 'vue';
import Router from './router';
import Toaster from 'v-toaster';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(Toaster, {timeout: 5000});

Vue.component('app-component', require('./components/AppComponent.vue'));
Vue.component('nav-component', require('./components/NavComponent.vue'));
Vue.component('categories-list', require('./components/categories/CategoriesList.vue'));
Vue.component('categories-grid', require('./components/categories/CategoriesGrid.vue'));

const app = new Vue({
    el: '#app',
    router: Router
});
