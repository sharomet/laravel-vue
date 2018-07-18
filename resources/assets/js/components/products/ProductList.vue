<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <categories-list></categories-list>
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div class="col-12">
            <h1>{{ category.name }}</h1>
            <p>{{ category.description }}</p>
          </div>
          <div class="col-md-4 col-sm-6 mb-4" v-for="(product, index) of products" :key="index">
            <div class="card h-100">
              <router-link :to="{ name: 'product', params: { id: product._id } }">
                <img class="card-img-top" :src="'/img/'+product.image" :alt="product.name">
              </router-link>
              <div class="card-body p-2">
                <router-link :to="{ name: 'product', params: { id: product._id } }">
                  <h5 class="card-title font-weight-bold">{{ product.name }}</h5>
                </router-link>
                <h4><strong class="text-success">{{ '$'+product.price }}</strong></h4>
                <p>{{ product.description.slice(0, 50)+'...' }}</p>
                <router-link :to="{ name: 'product', params: { id: product._id } }" class="btn btn-primary btn-block">Show Detail</router-link>
              </div>
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
        products: [],
        category: ''
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getProductsById() {
        axios.get('/api/products/' + this.$route.params.id)
             .then(res => this.products = res.data)
             .catch(err => console.log('Error'));
      },
      getCategory() {
        axios.get('/api/category/' + this.$route.params.id)
             .then(res => this.category = res.data)
             .catch(err => console.log('Error'));
      },
      getData() {
        this.getProductsById();
        this.getCategory();
      }
    },
    watch: {
        '$route.params.id' (to, from) {
          this.getData();
        }
    }
  }
</script>
