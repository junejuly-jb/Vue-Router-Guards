window.Vue = require('vue');

import Router from './routes.js'
import { Form, HasError, AlertError } from 'vform' 
import VueProgressBar from 'vue-progressbar'
import VueResource from 'vue-resource'
import Vue from 'vue';
import Auth from './auth.js'

Vue.use(VueResource)
Vue.use(Auth)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('navbar', require('./components/Layouts/Navbar.vue').default);
Vue.component('sidebar', require('./components/Layouts/Sidebar.vue').default);
Vue.component('nav-auth', require('./components/Layouts/NavbarAuth.vue').default);
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

window.Form = Form

const app = new Vue({
    el: '#app',
    router: Router
});


