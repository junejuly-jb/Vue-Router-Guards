import Vue from 'vue'
import VueRouter from 'vue-router'

//Import Components

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Userdashboard from './components/User/Userdashboard.vue'
import Admindashboard from './components/Admin/Admindashboard.vue'
import Default from './components/Default.vue'
import Admin_Profile from './components/Admin/Admin_Profile.vue'
import Admin_Transaction from './components/Admin/Admin_Transaction.vue'
import Admin_List from './components/Admin/Admin_List.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Default,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/userdashboard',
            component: Userdashboard,
            meta: {
                requiresAuth: true, userAuth: true, adminAuth: false
            }
        },
        {
            path: '/admindashboard',
            component: Admindashboard,
            meta: {
                requiresAuth: true, adminAuth: true, userAuth: false
            }
        },
        {
            path: '/admin_list',
            component: Admin_List,
            meta: {
                requiresAuth: true, adminAuth: true, userAuth: false
            }
        },
        {
            path: '/admin_profile',
            component: Admin_Profile,
            meta: {
                requiresAuth: true, adminAuth: true, userAuth: false
            }
        },
        {
            path: '/admin_transaction',
            component: Admin_Transaction,
            meta: {
                requiresAuth: true, adminAuth: true, userAuth: false
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
            next('/login')
        }
        else if (to.meta.adminAuth) {
            const usertype = window.localStorage.getItem('usertype')
            if (usertype == 'admin') {
                next()
            }
            else {
                next('/userdashboard')
            }
        }
        else if (to.meta.userAuth) { 
            const usertype = window.localStorage.getItem('usertype')
            if (usertype == 'user') { 
                next()
            }
            else {
                next('/admindashboard')
            }
        }
    }
    else if (to.meta.forVisitors) { 
        const token = window.localStorage.getItem('token')
        if (token) {
            const usertype = window.localStorage.getItem('usertype')
            if (usertype == 'admin') {
                next('/admindashboard')
            }
            else { 
                next('/userdashboard')
            }
        }
        else { 
            next()
        }
    }
    else { 
        next()
    }
})
export default router