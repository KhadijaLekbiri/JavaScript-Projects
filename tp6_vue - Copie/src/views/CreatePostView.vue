<template>
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input type="text" v-model="title" id="title" required />
  
      <label for="body">Body</label>
      <textarea v-model="body" id="body" rows="4" required></textarea>
  
      <label for="tags">Tags</label>
      <input type="text" v-model="tags" id="tags" placeholder="Separate tags with commas" required />
  
      <button type="submit">Create Post</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const title = ref('');
      const body = ref('');
      const tags = ref('');
  
      const handleSubmit = async () => {
        const newPost = {
          title: title.value,
          body: body.value,
          tags: tags.value.split(',').map((tag) => tag.trim()),
        };
  
        await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPost),
        });
  
        this.$router.push('/');
      };
  
      return { title, body, tags, handleSubmit };
    },
  };
  </script>
  
  <style scoped>
  form {
    max-width: 500px;
    margin: 30px auto;
  }
  
  label {
    display: block;
    margin: 10px 0;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  </style>
  