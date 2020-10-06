<template>
    <nav class="navbar navbar-expand-md bg-dark-mode">
        <span id="menu-toggle" class="point-me">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </span>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{user.name}}
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
      user: ''
    }
  },
  methods:{
    logout(){
      this.$auth.destroyToken()
      localStorage.removeItem('user')
      this.$router.push('/login')
    },
    getUserInfo(){
      var userDetails = JSON.parse(localStorage.getItem('user'))
      this.user = userDetails
    }
  },
  mounted(){
    this.getUserInfo()
  }
}
</script>