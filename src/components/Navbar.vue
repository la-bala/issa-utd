<script>
export default {
  data() {
      return {
          links: [
              {
                  to: '/',
                  name: 'Home'
              },
              {
                  to: '/about',
                  name: 'About'
              },
              {
                  to: '/contact',
                  name: 'Contact'
              },
              {
                  to: '/events',
                  name: 'Events'
              },
              {
                  to: '/blog',
                  name: 'Blog'
              },
          ]
      }
  },
  methods: {
    onPath(path) {
      if(path === '/') {
        return this.$route.path === path;
      } else {
        return this.$route.path.includes(path);
      }
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="mainNav">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="../assets/issalogo.png" alt="Logo" width="50" class="d-inline-block align-text-middle mx-1">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <div class="navbar-nav text-uppercase ms-auto py-4 py-md-0">
            <RouterLink v-for="link in links" :class="onPath(link.to) ? 'nav-link text-white' : 'nav-link'" v-bind:to="link.to">{{link.name}}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

