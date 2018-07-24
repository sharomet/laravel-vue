import Vue from 'vue';

var categoryMixin = {
    methods: {
        getAllCategories() {
            axios.get('/api/categories')
                 .then(res => {
                    this.categories = res.data;
                    /*setTimeout(() => {
                        this.$store.state.preLoader = false
                    }, 1000);*/
                 })
                 .catch(err => console.log('Error'));
        }
    }
}

Vue.mixin(categoryMixin);

export default categoryMixin;