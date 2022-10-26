<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 0,
                    to: '/',
                    name: 'Home'
                },
                {
                    id: 1,
                    to: '/about',
                    name: 'About'
                },
                {
                    id: 2,
                    to: '/contact',
                    name: 'Contact'
                },
                {
                    id: 3,
                    to: '/calendar',
                    name: 'Calendar'
                },
            ]
        }
    },
    computed: {
        currentPath() {
            return this.$route.path;
        }
    }
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="mainNav">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="../assets/issalogo.png" alt="Logo" width="50" class="d-inline-block align-text-middle mx-1">
        <span>ISSA UTD</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <div class="navbar-nav text-uppercase ms-auto py-4 py-md-0">
            <RouterLink v-for="link in links" :class="link.to === currentPath ? 'nav-link text-white' : 'nav-link'" v-bind:to="link.to">{{link.name}}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

