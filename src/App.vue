<template>
  <div id="app">
    <app-header></app-header>
    <app-card :results="this.results"></app-card>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Card from './components/Card.vue'

  import axios from 'axios'

  export default {
    data() {
      return {
        results: [
        {title: "The very first post", abstract: "lorem ipsum some test dimpsum"},
        {title: "And then there was the second", abstract: "lorem ipsum some test dimsum"},
        {title: "Third time's a charm", abstract: "lorem ipsum some test dimsum"},
        {title: "Four the last time", abstract: "lorem ipsum some test dimsum"}
        ]
      }
    },
    components: {
      appCard: Card,
      appHeader: Header
    },
    mounted() {
      axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key")
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
    padding: 20px;
    /* background-color: darkolivegreen;  */
    border-radius: 10px;
  }
</style>
