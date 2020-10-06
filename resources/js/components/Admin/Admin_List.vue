<template>
    <div class="d-flex" id="wrapper">

        <!-- Sidebar -->
        <sidebar></sidebar>
        

        <!-- Page Content -->
        <div id="page-content-wrapper">

            <!-- navbar when logged in -->
            <nav-auth></nav-auth>

            <div class="container text-white">
                    LIST OF ADMINS
                    <hr class="bg-gray-accent">
                    <button class="btn btn-primary d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 11h6m-3 -3v6" />
                        </svg> &nbsp; Add Admin 
                    </button>
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
      "./js/sidebar.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>