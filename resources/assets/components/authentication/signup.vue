<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="signup">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" v-model="password">
          </div>
          <div class="form-group mb-0">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      signup() {
        axios.post('/api/signup', {
          name : this.name,
          email: this.email,
          password: this.password
        },
        {
          headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
        .then(res => {
          this.name = '';
          this.email = '';
          this.password = '';
          this.$toaster.success(res.data.message);
        })
        .catch(err => this.$toaster.error(err.response.data.error));
      }
    }
  };
</script>
