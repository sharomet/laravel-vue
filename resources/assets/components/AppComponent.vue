<template>
  <div>
    <!-- <preloader></preloader> -->
    <navComponent></navComponent>
    <router-view></router-view>
  </div>
</template>

<script>
  import preloader from './preloader';
  import navComponent from './NavComponent.vue';
  export default {
    components: {
      preloader,
      navComponent
    }
  }
</script>
