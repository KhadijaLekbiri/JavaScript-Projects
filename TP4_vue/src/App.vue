<template>
  <div id="app">
    <!-- Menu de recherche -->
    <section class="fiches menu">
      <input v-model="input_name" placeholder="Rechercher un produit ou une catégorie" />

      <select v-model="catego">
        <option value="">Sélectionnez une catégorie</option>
        <option value="Électricité">Électricité</option>
        <option value="Filtration">Filtration</option>
        <option value="Moteur">Moteur</option>
        <option value="Freinage">Freinage</option>
        <option value="Refroidissement">Refroidissement</option>
        <option value="Suspension">Suspension</option>
        <option value="Sécurité">Sécurité</option>
        <option value="Transmission">Transmission</option>
        <option value="Carburant">Carburant</option>
        <option value="Carrosserie">Carrosserie</option>
        <option value="Échappement">Échappement</option>
        <option value="Direction">Direction</option>
      </select>

      <select v-model="ordre">
        <option value="">Sélectionnez un ordre</option>
        <option value="asc">Prix croissant (Ascendant)</option>
        <option value="desc">Prix décroissant (Descendant)</option>
      </select>
    </section>

    <!-- Fiches produits -->
    <section class="fiches items-grid">
      <div v-for="product in sortedProducts" :key="product.id" class="fiche">
        <div v-if="(!catego || product.categorie === catego)">
          <h4>{{ product.nom }}</h4>
          <img :src="product.image" alt="Image produit" />
          <p>Prix: {{ product.prix }} €</p>
          <p>Catégorie: {{ product.categorie }}</p>
          <p>Disponibilité: {{ product.disponibilite ? "Disponible" : "Indisponible" }}</p>
          <button @click="add(product)">Ajouter au panier</button>
        </div>
      </div>
    </section>

    <h4>Panier</h4>
    <ul class="panier">
      <li v-for="(item, index) in panier" :key="index">
        {{ item.nom }} : {{ item.prix }} €
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      input_name: "",
      catego: "",
      ordre: "",
      panier: [],
      pieces: [] // This will store the pieces-autos array
    };
  },
  computed: {
    filtered_nom() {
      // Filter products by name and category
      return this.pieces.filter((product) => {
        const matchesName = product.nom
          .toLowerCase()
          .includes(this.input_name.toLowerCase());
        const matchesCategory = !this.catego || product.categorie === this.catego;
        return matchesName && matchesCategory;
      });
    },
    sortedProducts() {
      // Sort the filtered products based on the selected order
      let sorted = [...this.filtered_nom];
      if (this.ordre === "asc") {
        return sorted.sort((a, b) => a.prix - b.prix); // Ascending order
      } else if (this.ordre === "desc") {
        return sorted.sort((a, b) => b.prix - a.prix); // Descending order
      }
      return sorted; // Default: no sorting
    }
  },

  methods: {
    add(product){
      this.panier.push(product);
    }
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:3000/pieces-autos");
      if (!response.ok) throw new Error("Erreur lors du chargement des données");
      this.pieces = await response.json();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
