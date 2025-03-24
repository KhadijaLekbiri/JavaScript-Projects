<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'Add'}">Add Job</router-link>
    </nav>

    <div class="navigation-buttons">
      <button @click="redirect">Redirect</button>
      <button @click="back">Go Back</button>
      <button @click="forward">Go Forward</button>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobData: {},
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'home' });
    },
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    fetchJobData(id) {
      fetch(`http://localhost:3000/jobs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.jobData = data;
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    if (this.$route.name === 'Edit') {
      this.fetchJobData(this.$route.params.id);
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  background-color: #121212;
  color: #ffffff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
}

nav {
  width: 100%;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 10px;
  text-align: center;
}

nav a {
  color: #bb86fc;
  font-weight: bold;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 15px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  background-color: #bb86fc;
  color: #121212;
}

.navigation-buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.navigation-buttons button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #bb86fc;
  color: #121212;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigation-buttons button:hover {
  background-color: #3700b3;
}

form {
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  background-color: #1e1e1e;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

label {
  color: #bb86fc;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select, textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #bb86fc;
  border-radius: 5px;
  background-color: #121212;
  color: #ffffff;
}

button {
  background-color: #bb86fc;
  border: none;
  padding: 10px 20px;
  color: #121212;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3700b3;
}
</style>
