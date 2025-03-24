<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    };
  },
  computed: {
    postId() {
      return this.$route.params.id;  // Get postId from the route params
    }
  },
  mounted() {
    // Fetch the post data using the postId
    this.fetchPostData();
  },
  methods: {
    async fetchPostData() {
      try {
        const response = await fetch(`http://localhost:3000/posts/${this.postId}`);
        const data = await response.json();
        this.post = data;  // Assign the fetched data to the post object
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    }
  }
};
</script>
