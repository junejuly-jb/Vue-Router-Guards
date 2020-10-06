import vueProgressbar from "vue-progressbar"

export default function (Vue) { 
    Vue.auth = {
        setUserCredentials(user) {
            localStorage.setItem('user', user)
        },
        destroyUserCredentials() { 
            localStorage.removeItem('user')
        },
        setToken(token, usertype,) { 
            localStorage.setItem('token', token)
            localStorage.setItem('usertype', usertype)
        },
        getToken() { 
            var token = localStorage.getItem('token')
            var usertype = localStorage.getItem('usertype')
            var user = localStorage.getItem('user')
            if (!token || !usertype) {
                if (user) { 
                    this.destroyToken()
                    return null
                }
            }
            else { 
                return token
            }
        },
        destroyToken() { 
            localStorage.removeItem('token')
            localStorage.removeItem('usertype')
            localStorage.removeItem('user')
        }
    }

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })
}