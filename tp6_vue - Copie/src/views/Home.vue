<template>
    <div class="home">
      <PostList></PostList>
      <TagCloud></TagCloud>
    </div>
  </template>
  
  <script>
  import PostList from '../components/PostList.vue';
  import TagCloud from '../components/TagCloud.vue';
  
  export default {
    components: {
      PostList,
      TagCloud,
    },
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    gap: 30px;
  }
  </style>
  