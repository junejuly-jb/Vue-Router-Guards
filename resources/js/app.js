// require('./bootstrap');
window.Vue = require('vue');

import Router from './routes.js'
import { Form, HasError, AlertError } from 'vform' 


Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('navbar', require('./components/Layouts/Navbar.vue').default);

window.Form = Form

const app = new Vue({
    el: '#app',
    router: Router
});
