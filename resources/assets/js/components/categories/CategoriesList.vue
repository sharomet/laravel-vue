<template>
  <ul class="list-group">
    <li class="list-group-item-action list-group-item" v-for="(category, index) of categories" :key="index">
      <router-link :to="{ name: 'products', params: { id: category._id }}">{{ category.name }}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data: function() {
      return {
        categories: []
      }
    },
    mounted() {
      this.getAllCategories();
    }
  }
</script>
