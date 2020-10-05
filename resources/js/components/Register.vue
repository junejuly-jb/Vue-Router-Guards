<template>
    <div>
        <navbar></navbar>
        <div class="d-flex justify-content-center align-items-center text-white" style="height: 80vh">
            <div class="bg-gray-accent py-4 card-login">
                <div class="container">
                    <div class="mb-4">
                        <span class="login-header">
                            Register
                        </span>
                    </div>
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" v-model="form.name" class="form-control input-dark"
                            :class="{ 'is-invalid': form.errors.has('name') }">
                            <has-error :form="form" field="name"></has-error>
                        </div>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="text" v-model="form.email" class="form-control input-dark"
                            :class="{ 'is-invalid': form.errors.has('email') }">
                            <has-error :form="form" field="email"></has-error>
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" v-model="form.password" class="form-control input-dark"
                            :class="{ 'is-invalid': form.errors.has('password') }">
                            <has-error :form="form" field="password"></has-error>
                        </div>
                        <div class="form-group">
                            <label for="">Confirm Password</label>
                            <input type="password" v-model="form.confirm_password" class="form-control input-dark">
                        </div>
                        <div class="pt-2 text-center">
                            <small class="text-danger">
                                {{error}}
                            </small>
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
                    name: '',
                    email: '',
                    confirm_password: '',
                    password: '',
                }),
                error: ''
            }
        },
        methods:{
            async register(){
                if(this.form.password != this.form.confirm_password){
                    this.error = '❌ Password mismatch'
                    console.log(this.error)
                }
                else{
                    this.error = ''
                    await this.form.post('api/register')
                    .then((res) => {
                        this.$router.push('/login')
                    })
                    .catch((err) => {
                        console.log(err)
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