import Vue from 'vue'
import VueRouter from 'vue-router'

//Import Components

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Userdashboard from './components/User/Userdashboard.vue'
import Admindashboard from './components/Admin/Admindashboard.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/userdashboard',
            component: Userdashboard
        },
        {
            path: '/admindashboard',
            component: Admindashboard
        }
    ]
})

export default router