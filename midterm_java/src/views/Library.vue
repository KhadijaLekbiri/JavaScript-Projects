<template>
  <div class="about">
    <div style="display: flex;flex-direction: row;column-gap: 10px;">
      <input type="text" v-model="val_titre" placeholder="Title">
    <input type="text" v-model="val_auteur" placeholder="Author">
    </div>
    <select v-model="val_statut">
      <option value="1">Disponible</option>
      <option value="2">Empruntés</option>
    </select>
    <ul v-for="livre in filter_livre" :key="livre.id">
      <li v-if="(livre.disponible && (this.val_statut == 1)) || (!livre.disponible && (this.val_statut == 2)) || !this.val_statut" class="livre">
          <router-link :to="{name: 'bookdetails', params: {id: livre.id}}">
            <h3 style="color:white">      {{ livre.titre }}      </h3>
        </router-link>
        <p>{{livre.auteur }}</p>
      </li>
      

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val_titre:'',
      val_auteur:'',
      val_statut:0,
      books:[]
    }
  },
  mounted() {
    fetch(`http://localhost:3000/livres`)
    .then((resp)=>resp.json())
    .then((data)=>this.books = data)
    .catch((err)=>console.log('waaa errorrrr',err))
  },
  computed: {
    filter_livre(){
      return this.books.filter((book)=>{
        const matchedtitle = book.titre.toLowerCase().includes(this.val_titre.toLowerCase());
        const matchedauteur = book.auteur.toLowerCase().includes(this.val_auteur.toLowerCase());
        return matchedtitle && matchedauteur;
      }
      )
    }
  },
  
}
</script>

<style>
.livre{
  background: black;
  border-radius: 4px;
  padding: 20px;
}
input,
select{
  width: 400px;
  height: 20px;

}
select{
  margin: 10px;

}
</style>