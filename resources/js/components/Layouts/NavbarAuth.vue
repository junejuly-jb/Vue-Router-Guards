<template>
    <nav class="navbar navbar-expand-lg bg-dark-mode">
        <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">User Settings</a>
                <a class="dropdown-item" href="#">Change Password</a>
                <div class="dropdown-divider"></div>
                <span class="dropdown-item point-me" @click="logout">Logout</span>
              </div>
            </li>
          </ul>
        </div>
    </nav>
</template>
<script>
export default {
  data(){
    return{
      user: []
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('usertype')
      this.$router.push('/login')
    },
    async getUserInfo(){
      await Axios.get('api/profile')
      .then((res) => {
        this.user = res.data.data
      })
    }
  }
}
</script>