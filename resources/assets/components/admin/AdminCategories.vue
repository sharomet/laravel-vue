<template>
    <div class="container">
        <form @submit.prevent="create">
            <div class="form-group">
                <label for="name">Category name</label>
                <input id="name" type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
                <label for="description">Category Description</label>
                <textarea rows="4" class="form-control" v-model="description"></textarea>
            </div>
            <div class="form-group mb-0">
                <button type="submit" class="btn btn-primary">Create</button>
            </div>
        </form>

        <div class="row mt-3">
            <div class="col-12">
                <table class="table table-hover table-sm align-middle">
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(category, index) of categories" :key="index">
                                <td class="align-middle">{{ category.name }}</td>
                                <td class="align-middle">
                                    <button type="button" class="btn btn-danger btn-sm" @click="removeCategory(category._id)">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            categories: '',
            name: '',
            description: ''
        }
    },
    created() {
        this.getAllCategories();
    },
    methods: {
        create() {
            const token = localStorage.getItem('token');
            axios.post('/api/category?token=' + token, {
                name: this.name,
                description: this.description
            })
            .then(res => {
                this.name = '';
                this.description = '';
                this.categories.push(res.data.category);
                this.$toaster.success('Category Created');
            })
            .catch(err => this.$toaster.error(err.response.data.error));
        },

        removeCategory(id) {
            const token = localStorage.getItem('token');
            axios.delete('/api/category/'+ id +'?token=' + token)
            .then(res => {
                this.categories = this.categories.filter(function(item) { 
                    return item._id !== id;  
                });
                this.$toaster.success(res.data.message);
            })
            .catch(err => this.$toaster.error(err.response.data.error));
        }
    }
}
</script>
