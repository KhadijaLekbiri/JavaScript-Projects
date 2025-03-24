<template>
    <div class="post-list">
      <SinglePost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script>
  import SinglePost from './SinglePost.vue';
  import { ref, onMounted } from 'vue';
  import { getPosts } from '../composables/getPosts';
  
  export default {
    components: {
      SinglePost,
    },
    setup() {
      const posts = ref([]);
      
      onMounted(async () => {
        posts.value = await getPosts();
      });
  
      return { posts };
    },
  };
  </script>
  
  <style scoped>
  .post-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  </style>
  