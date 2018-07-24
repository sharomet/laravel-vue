<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <form autocomplete="off" @submit.prevent="signIn">
              <div class="form-group">
                <input type="email" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password">
              </div>
              <div class="form-group mb-0">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
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
      email: '',
      password: '',
    }
  },
  mounted() {
    //console.log(localStorage);
  },
  methods: {
    login() {
      let arr = [];
      /*if (this.email == "") {
        arr.push("Email is required");
      }
      if (this.password == "") {
        arr.push("Password is required");
      }
      if (arr.length > 0) {
        for (let message of arr) {
          this.$toaster.error(message);
        }
      } else {
        const data = {
          email: this.email,
          password: this.password
        };
        axios.post('/api/auth/login', { body: data })
             .then(res => console.log(res));
      }*/
    },

    signIn() {
        axios.post('/api/signin', {
                email: this.email, 
                password: this.password
              },
              {
                headers: {'X-Requested-With': 'XMLHttpRequest'}
              })
              .then(res => {
                const token = res.data.token;
                /*const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                console.log(JSON.parse(window.atob(base64)));*/
                localStorage.setItem('token', token);
              })
              .catch(err => this.$toaster.error(err.response.data.error));

        /*this.loginError = false;
        axios.post('/api/auth/login', {
            email: this.email,
            password: this.password
        }).then(response => {
            store.commit('loginUser')
            localStorage.setItem('token', response.data.access_token)
            this.$router.push({ name: 'categories' })
            console.log('done');
        }).catch(error => {
            this.loginError = true;
            console.log('error');
        });*/
    }

  }
};
</script>
