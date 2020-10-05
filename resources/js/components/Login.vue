<template>
    <div>
        <navbar></navbar>
        <div class="d-flex justify-content-center align-items-center text-white" style="height: 80vh">
                <div class="bg-gray-accent py-4 card-login">
                    <div class="container">
                        <div class="mb-4">
                            <span class="login-header">
                                Login
                            </span>
                        </div>
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="">Email</label>
                                <input v-model="form.email" type="text" class="form-control input-dark">
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input v-model="form.password" type="password" class="form-control input-dark">
                            </div>
                            <div class="text-center">
                                <span class="text-danger">{{error}}</span>
                            </div>
                            <div class="text-right pt-5">
                                <button class="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                form: new Form({
                    email: '',
                    password: ''
                }),
                error: ''
            }
        },
        methods: {
            async login(){
                if(this.form.email == '' || this.form.password == ''){
                    this.error = '❌ input fields are empty'
                }
                else{
                    await this.form.post('api/login')
                    .then((res) => {
                        if(res.data.message = 'fail'){
                            this.error = 'No records found!'
                        }
                        if(res.data.usertype == 'admin'){
                            localStorage.setItem('token', res.data.token['accessToken'])
                            localStorage.setItem('usertype', res.data.usertype)
                            this.$router.push('/admindashboard')
                        }
                        else{
                            localStorage.setItem('token', res.data.token['accessToken'])
                            localStorage.setItem('usertype', res.data.usertype)
                            this.$router.push('/userdashboard')
                        }
                    })
                }
            }
        },
        mounted(){

        }
    }
</script>
<style>
.input-dark{
    background: #121212;
    border: #121212;
}
.input-dark:active{
    background: #121212 !important;
    color: white !important;
}
.input-dark:focus{
    background: #121212 !important;
    color: white !important;
}
.card-login{
    width: 30%;
}
@media screen and (min-width: 20px) and (max-width: 426px){
    .card-login{
        width: 75%;
    }
}
@media screen and (min-width: 427px) and (max-width: 767px){
    .card-login{
        width: 60%;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
    .card-login{
        width: 55%;
    }
}
</style>