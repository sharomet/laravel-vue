<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                  <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
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
