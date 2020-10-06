<template>
    <div class="bg-light bg-gray-accent" id="sidebar-wrapper">
        <div class="sidebar-heading text-center text-white">Dev Ket</div>
        <div class="list-group list-group-flush">
            <router-link to="/admindashboard" class="list-group-item list-group-item-action bg-gray-accent text-white">Dashboard</router-link>
            <router-link to="/admin_profile" class="list-group-item list-group-item-action bg-gray-accent text-white">My Profile</router-link>
            <router-link to="/admin_transaction" class="list-group-item list-group-item-action bg-gray-accent text-white">Transactions</router-link>
            
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
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
