<template>
    <div class="single-post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body.substring(0, 50) }}...</p>
      <div>
        <router-link :to="`/post/${post.id}`">Read More</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object,
    },
  };
  </script>
  
  <style scoped>
  .single-post {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
  }
  
  .single-post h2 {
    color: #333;
  }
  
  .single-post p {
    color: #555;
  }
  
  .single-post a {
    color: #007bff;
  }
  </style>
  