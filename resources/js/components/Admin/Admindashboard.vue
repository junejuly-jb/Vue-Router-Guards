<template>
    <div class="d-flex" id="wrapper">

        <!-- Sidebar -->
        <sidebar></sidebar>
        

        <!-- Page Content -->
        <div id="page-content-wrapper">

            <!-- navbar when logged in -->
            <nav-auth></nav-auth>

            <div class="container-fluid">
                    Sample Content
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