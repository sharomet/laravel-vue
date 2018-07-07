import Vue from 'vue';
import Router from './router';

require('./bootstrap');

window.Vue = require('vue');

Vue.component('app-component', require('./components/AppComponent.vue'));
Vue.component('nav-component', require('./components/NavComponent.vue'));

const app = new Vue({
    el: '#app',
    router: Router
});
