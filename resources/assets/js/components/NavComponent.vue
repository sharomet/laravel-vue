<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div class="container">
    <router-link :to="{ name: 'home' }" class="navbar-brand">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'categories' }" class="nav-link">Categories</router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'post' }" class="nav-link">Posts</router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'registration' }" class="nav-link">Registration</router-link>
              </li>
          </ul>
      </div>
  </div>
</nav>
</template>

<script>
  export default {

  }
</script>
