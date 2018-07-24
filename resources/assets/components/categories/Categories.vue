<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ pageTitle }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <categories-list></categories-list>
      </div>
      <div class="col-lg-9">
        <CategoriesGrid></CategoriesGrid>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoriesGrid from './CategoriesGrid'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'pageTitle'
      ]),
    },
    mounted() {
      this.$store.state.pageTitle = 'Categories';
    },
    methods: {
    },
    components: {
      CategoriesGrid
    }
  }
</script>
