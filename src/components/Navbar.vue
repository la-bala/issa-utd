<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="../assets/issalogo.png" alt="Logo" width="50" class="d-inline-block align-text-middle">
        <span>ISSA UTD</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <div class="navbar-nav text-uppercase ms-auto py-4 py-md-0">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="/about">About</RouterLink>
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
            <RouterLink class="nav-link" to="/calendar">Calendar</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

