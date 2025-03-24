<template>
    <div>
      <h2>Posts for tag: {{ tag }}</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
            <div v-if="post.tags.includes(tag)">
                <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
            </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tag'],
    data() {
      return {
        posts: {},
      };
    },
    mounted() {
        // Fetch the post data using the postId
        this.fetchPostData();
    },
    methods: {
        async fetchPostData() {
        try {
            const response = await fetch(`http://localhost:3000/posts`);
            const data = await response.json();
            this.posts = data;  // Assign the fetched data to the post object
        } catch (error) {
            console.error("Error fetching post data:", error);
        }
        }
    }
  };
  
  </script>
  