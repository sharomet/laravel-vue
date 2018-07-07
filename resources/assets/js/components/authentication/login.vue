<template>
  <div>
    <div class="form-group">
      <input type="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="password">
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      login() {
        const data = {
          email: this.email,
          password: this.password
        }
        axios.post('/api/login', { body: data })
            .then(res => console.log(res.data));
      }
    }
  }
</script>
