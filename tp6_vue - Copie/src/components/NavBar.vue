<template>
    <nav>
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link to="/create">Add Post</router-link>
    </nav>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  nav {
    padding: 20px;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-around;
  }
  
  a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
  }
  
  a:hover {
    background-color: #555;
  }
  </style>
  