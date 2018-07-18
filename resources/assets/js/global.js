import Vue from 'vue';

var global = {
    methods: {
        getAllCategories() {
            axios.get('/api/categories')
                 .then(res => this.categories = res.data)
                 .catch(err => console.log('Error'));
        }
    }
}

export default global;