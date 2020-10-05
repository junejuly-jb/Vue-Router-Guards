<template>
    <div>
        <nav class="navbar navbar-expand-sm" id="nav">
            <div class="container">
                <router-link to="/" class="nav-link">Dev Ket</router-link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg" id="mainNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link mr-3 py-4 px-3" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mr-3 py-4 px-3" to="/register">Register</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
// export default {
//     data(){
//         return{
//             token: ''
//         }
//     },
//     methods:{
//         logout(){
//             console.log('clicked')
//             localStorage.removeItem('token')
//             localStorage.removeItem('usertype')
//             this.$router.push('/login')
//         }
//     }
// }
</script>