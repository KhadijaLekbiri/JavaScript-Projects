<template>
  <form>
    <input type="text" v-model="input_titre" placeholder="Title" style="width: 300px;">
    <input type="text" v-model="input_salaire" placeholder="Salaire" style="width: 300px;">
  </form>
  <div v-if="emp">
    
  </div>
  <div v-for="job in filtered_nom" :key="job.id">
    <div>
      <h3>{{ job.titre }}</h3>

      <div v-if="detailsShown.has(job.id)">
        {{ job.description }}
        <h5>{{ job.salaire }}</h5>
      </div>
      <!-- <button @click="toggleDetails(job.id)">Modifier</button> -->
      <router-link :to="{name: 'Edit', params: {id: job.id}}">
        <button>Edit Job</button>
      </router-link>
      <button @click="deleteJob(job.id)">Supprimer</button>
      <router-link :to="{name: 'jobdetails', params: {id: job.id}}">
        <button>Details</button>
    </router-link>
    </div> 

    <!-- <EditJob :job="emploi"></EditJob> -->
  </div>
  <button>Add Job</button>
</template>

<script>

export default {
  name: 'FilterNav',
  data() {
    return {
      input_titre: '',
      input_salaire: '',
      detailsShown: new Set(), // Tracks which job details are shown
      deletedJobs: new Set(),
      emp: [],
      
    };
  },
  methods: {
    toggleDetails(jobId) {
      if (this.detailsShown.has(jobId)) {
        this.detailsShown.delete(jobId); // Hide details if already shown
      } else {
        this.detailsShown.add(jobId); // Show details for the selected job
      }
    },
    deleteJob(jobId){
      let confi = prompt("Voulez-vous vraiment supprimer cet emploi (y/N)?");
      if (confi == 'y' || confi == 'Y'){
        this.deletedJobs.add(jobId);
      }
    }
  },
  mounted() {
        fetch('http://localhost:3000/jobs')
        .then((resp) => resp.json()) //WE GET A RESPONSE AUTOMATICALLY WHICH WE GET AS AN ARGUMENT
        // since there is one argument we can get of the () and only keep resp
        .then((data) => this.emp = data)
        .catch((err) => console.log(err))
    },
  computed: {
    filtered_nom() {
      return this.emp.filter((job) => {
        const matchesName = job.titre
          .toLowerCase()
          .includes(this.input_titre.toLowerCase());
        const matchesCategory = job.salaire
          .toString()
          .toLowerCase()
          .includes(this.input_salaire.toLowerCase());
        const deleted = this.deletedJobs.has(job.id);
        return matchesName && matchesCategory && !deleted;
      });
    }
  }
};
</script>
