<template>
  <div class="row">
    <div class="col-md-4 col-sm-6 mb-4" v-for="(category, index) of categories" :key="index">
      <div class="card h-100">
        <router-link :to="{ name: 'products', params: { id: category._id } }" v-if="category.image">
          <img class="card-img-top" :src="'/img/'+category.image" :alt="category.name">
        </router-link>
        <div class="card-body p-2">
          <h5 class="card-title font-weight-bold"><router-link :to="{ name: 'products', params: { id: category._id } }">{{ category.name }}</router-link></h5>
          <p class="mb-0">{{ category.description.slice(0, 50)+'...' }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data: function() {
      return {
        categories: []
      }
    },
    mounted() {
      this.getAllCategories();
    },
    methods: {
    }
  }
</script>
