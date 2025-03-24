<template>
    <h3>      {{ book.titre }}      </h3>
    <p>{{book.auteur }}</p>
    <p>{{book.annee }}</p>
    <p>{{book.categorie }}</p>
    <p>{{book.disponible}}</p>
    <img :src="book.image">
    <p>{{book.resume }}</p>
    hello
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
        //     book:{
        //     "titre": '',
        //     "auteur": '',
        //     "annee": 0,
        //     "categorie": '',
        //     "disponible": true,
        //     "image": '',
        //     "resume": '',
        // }
        book:null
        }
    },

    methods: {
        bookId(){
            return this.$router.params.id;
        }
    },
    mounted() {
    fetch(`http://localhost:3000/livres${this.id}`)
    .then((resp)=>resp.json())
    .then((data)=>{
        this.book = data
        // this.book.titre = data.titre;
        // this.book.auteur = data.auteur;
        // this.book.annee = data.annee;
        // this.book.disponible = data.disponible,
        // this.book.categorie = data.categorie,
        // this.book.image = data.image,
        // this.book.resume = data.resume,
    })
    .catch((err)=>console.log("waaa3",err))
  },
}
</script>