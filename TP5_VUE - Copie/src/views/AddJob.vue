<template>
  <form @submit.prevent="handleSubmit">
  
      <label for="jobTitle">Job Title:</label>
      <input type="text" v-model="titre" id="jobTitle" required>

      <br />

      <label for="salary">Salary:</label>
      <input type="number" v-model="salaire" id="salary" required>

      <label for="description">Description:</label>
      <textarea v-model="description" id="description" rows="4"></textarea>

      <button>Update Job</button>
  </form>
</template>

<script>
export default {
  data() {
      return {
          uri: `http://localhost:3000/jobs/`,
          titre: '',
          description: '',
          salaire: '',
          date_de_création: ''
      };
  },
  mounted() {
      fetch(this.uri)
          .then(res => res.json())
          .then(data => {
              this.titre = data.titre;
              this.salaire = data.salaire;
              this.description = data.description;
              this.date_de_création = data.date_de_création || '';
          })
          .catch(err => console.log(err));
  },
  methods: {
      handleSubmit() {
          const updatedJobData = {
              titre: this.titre,
              salaire: this.salaire,
              description: this.description,
              date_de_création: this.date_de_création
          };

          fetch(this.uri, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(updatedJobData)
          })
              .then(() => {
                  this.$router.push('/');
              })
              .catch(err => {
                  console.error('Error fetching job data:', err);
                  alert('Failed to fetch job data. Please try again later.');
              });

      }
  }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select, textarea {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
</style>
