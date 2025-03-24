<template>
    <form @submit.prevent="handleSubmit">
    
        <label for="jobTitle">Job Title:</label>
        <input type="text" v-model="Job.titre" id="jobTitle" required>

        <br />

        <label for="salary">Salary:</label>
        <input type="number" v-model="Job.salaire" id="salary" required>

        <label for="description">Description:</label>
        <textarea v-model="Job.description" id="description" rows="4"></textarea>

        <button>Update Job</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            uri: `http://localhost:3000/jobs/${this.id}`,
            Job: {
                titre: '',
                salaire: '',
                description: '',
                date_de_création: ''
            }
        };
    },
    async mounted(){
    await this.fetchJob();
    },
    // methods: {
    // async fetchJob(){
    //   try{
    //       const response = await fetch(uri);
    //       this.job = await response.json();
    //   }
    //   catch (error) {
    //       console.error("Error fetching jobs:", error);
    //   }
    // },},
    // mounted() {
    //     fetch(this.uri)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.titre = data.titre;
    //             this.salaire = data.salaire;
    //             this.description = data.description;
    //             this.date_de_création = data.date_de_création || '';
    //         })
    //         .catch(err => console.log(err));
    // },
    methods: {
        async fetchJob(){
      try{
          const response = await fetch(this.uri);
          this.Job = await response.json();
      }
      catch (error) {
          console.error("Error fetching jobs:", error);
      }
    },
        handleSubmit() {
            const updatedJobData = {
                titre: this.Job.titre,
                salaire: this.Job.salaire,
                description: this.Job.description,
                date_de_création: this.Job.date_de_création
            };

            fetch(this.uri, {
                method: 'PATCH',
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
    margin: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
}
</style>
