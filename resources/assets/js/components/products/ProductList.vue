<template>
  <div class="row">
    <div class="col-lg-3">
      <categories-list></categories-list>
    </div>
    <div class="col-lg-9">
      <div class="row">
        <div class="col-md-4 col-sm-6 mb-3" v-for="product of products">
          <div class="card h-100">
            <img class="card-img-top" :src="'/img/'+product.image" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p>{{ product.description.slice(0, 50)+'...' }}</p>
              <a href="#" class="btn btn-primary">Show Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        products: []
      }
    },
    mounted() {
      this.getProductsById();
      console.log(this.data);
    },
    methods: {
      getProductsById() {
        axios.get('/api/products/'+this.$route.params.id).then((res) => {
          console.log(res.data);
          this.products = res.data;
        });
      }
    }
  }
</script>
