<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <categories-list></categories-list>
            </div>
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <img class="card-img-top" :src="'/img/'+product.image" :alt="product.name">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h1>{{ product.name }}</h1>
                        <h3 class="text-primary">{{ '$' + product.price }}</h3>
                        <p>{{ product.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: ''
        }
    },
    mounted() {
        this.getProduct();
    },
    methods: {
        getProduct() {
            axios.get('/api/product/' + this.$route.params.id)
                 .then(res => this.product = res.data)
                 .catch(err => console.log('Error!'));
        }
    }
}
</script>
