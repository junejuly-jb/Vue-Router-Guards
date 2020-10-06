<template>
    <div class="bg-light bg-gray-accent" id="sidebar-wrapper">
        <div class="sidebar-heading text-white">Dev Ket</div>
        <div class="list-group list-group-flush">
            <router-link to="/admindashboard" class="list-group-item list-group-item-action bg-gray-accent text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gauge mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="1" />
                <line x1="13.41" y1="10.59" x2="16" y2="8" />
                <path d="M7 12a5 5 0 0 1 5 -5" />
              </svg>
              Dashboard
            </router-link>
            <router-link to="/admin_profile" class="list-group-item list-group-item-action bg-gray-accent text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              My Profile
            </router-link>
            <router-link to="/admin_transaction" class="list-group-item list-group-item-action bg-gray-accent text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
              </svg>
              Transactions
            </router-link>
            
            <div class="wrapper center-block list-group-item list-group-item-action bg-gray-accent">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                    <a role="button" class="text-white" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Management
                    </a>
                </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in mt-4" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body bg-dark-mode py-2 px-2 rounded">
                      <router-link to="/admin_user_list" class="list-group-item list-group-item-action bg-gray-accent text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="9" cy="7" r="4" />
                          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        Users
                      </router-link>
                      <router-link to="/admin_store_list" class="list-group-item list-group-item-action bg-gray-accent text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <line x1="3" y1="21" x2="21" y2="21" />
                          <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                          <line x1="5" y1="21" x2="5" y2="10.85" />
                          <line x1="19" y1="21" x2="19" y2="10.85" />
                          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                        </svg>
                        Stores
                      </router-link>
                      <router-link to="/admin_list" class="list-group-item list-group-item-action bg-gray-accent text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <circle cx="12" cy="16" r="1" />
                          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                        </svg>
                        Admins
                      </router-link>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "./js/accordion.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>
<style>
.router-link-active{
    background: #121212 !important;
}
.wrapper{
    width:100%;
  }
  @media(max-width:992px){
   .wrapper{
    width:100%;
  } 
  }
  .panel-heading {
    padding: 0;
    border:0;
  }
  .panel-title>a, .panel-title>a:active{
    display:block;
    font-size:16px;
    word-spacing:3px;
    text-decoration:none;
  }
  .panel-heading  a:before {
     content: url(./icons/arrow-up.svg);
     float: right;
     transition: all 0.5s;
  }
  .panel-heading.active a:before {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      transform: rotate(180deg);
  } 
</style>
