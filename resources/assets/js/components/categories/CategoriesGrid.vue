<template>
  <div class="row">
    <div class="col-md-4 col-sm-6 mb-3" v-for="category of categories">
      <div class="card h-100">
        <img class="card-img-top" :src="'/img/'+category.image" :alt="category.name">
        <div class="card-body">
          <h5 class="card-title">{{ category.name }}</h5>
          <p>{{ category.description.slice(0, 50)+'...' }}</p>
          <router-link :to="{ name: 'products', params: { id: category._id } }" class="btn btn-primary">Show Products</router-link>
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
      getAllCategories() {
        axios.get('/api/categories').then((res) => {
          this.categories = res.data;
        });
      }
    }
  }
</script>
