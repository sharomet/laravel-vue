<template>
  <div>
    <div class="form-group">
      <input type="text" v-model="title" class="form-control" placeholder="Title">
    </div>
    <div class="form-group">
      <textarea name="name" v-model="fullText" rows="6" class="form-control" placeholder="text"></textarea>
    </div>
    <div class="form-group mb-0">
      <button class="btn btn-primary" v-on:click="test">Send</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: null,
        fullText: null
      }
    },
    methods: {

    }
  }
</script>
