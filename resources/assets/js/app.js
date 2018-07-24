import Vue from 'vue';
import Toaster from 'v-toaster';
import Router from './router';
import store from './store';

import CategoryMixin from './mixins/CategoryMixin';
import isLoggedMixin from './mixins/LoginMixin';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(Toaster, {timeout: 5000});

Vue.component('app-component', require('../components/AppComponent.vue'));
Vue.component('categories-list', require('../components/categories/CategoriesList.vue'));

const app = new Vue({
    el: '#app',
    router: Router,
    store
});