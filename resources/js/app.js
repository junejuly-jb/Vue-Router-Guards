// require('./bootstrap');
window.Vue = require('vue');

import Axios from 'axios'
import Router from './routes.js'
import { Form, HasError, AlertError } from 'vform' 


Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('navbar', require('./components/Layouts/Navbar.vue').default);
Vue.component('sidebar', require('./components/Layouts/Sidebar.vue').default);
Vue.component('nav-auth', require('./components/Layouts/NavbarAuth.vue').default);

window.Form = Form
Window.Axios = Axios

const app = new Vue({
    el: '#app',
    router: Router
});
