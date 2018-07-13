<template>
  <div>
  <div class="row">
    <div class="col-lg-3">

      

    </div>
    <div class="col-lg-9">
      <div class="form-group">
        <input type="text" v-model="title" class="form-control">
      </div>
      <div class="form-group">
        <textarea rows="6" v-model="text" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="createPost">Create</button>
      </div>
    </div>


  </div>
  <div class="row">
    <div class="col-md-4" v-for="post in postdata">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <p>{{ post.text }}</p>
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
        postdata: [],
        title: '',
        text: ''
      }
    },
    mounted() {
      this.getAllPosts();
    },
    methods: {
      getAllPosts: function() {
        axios.get('/api/posts').then((res) => {
          this.postdata = res.data;
        });
      },
      createPost() {
        const data = {
          title: this.title,
          text: this.text
        };
        axios.post('/api/create', {
          body: data
        }).then(res => {
          this.postdata.push(res.data.body);
          this.title = '';
          this.text = '';
        }).catch(e => {
          console.log(e);
        });

      }
    }
  }
</script>
