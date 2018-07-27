<template>
  <div id="app">
    <app-header></app-header>
    <div class="columns feed" v-dragscroll.x>
        <app-card :result="result" 
          v-for="(result, key) in results" 
          :key="key">
        </app-card>
        {{url}}
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

import axios from "axios";

export default {
  data() {
    return {
      results: [
        {
          title: "The very first post",
          abstract: "lorem ipsum some test dimpsum"
        },
        {
          title: "And then there was the second",
          abstract: "lorem ipsum some test dimsum"
        },
        {
          title: "Third time's a charm",
          abstract: "lorem ipsum some test dimsum"
        },
        {
          title: "Four the last time",
          abstract: "lorem ipsum some test dimsum"
        }
      ],
      NYTBaseUrl: "https://api.nytimes.com/svc/topstories/v2/",
      apiKey: "28b4cba8fe6c49c4a44b7d7976b34d00",
      url: ""
    };
  },
  components: {
    appCard: Card,
    appHeader: Header
  },
  mounted() {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      this.url = this.buildUrl(section);
      axios.get(this.url)
      .then(response => {
        this.results = response.data.results;
      })
      .catch(error => console.log(error));
    },
    buildUrl(url) {
      return this.NYTBaseUrl + url + ".json?api-key=" + this.apiKey;
    }
  },
  computed: {
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px;
  padding: 20px;
  /* background-color: darkolivegreen;  */
  border-radius: 10px;
}

.feed {
    overflow-y: hidden;
    overflow-x: scroll;
    cursor: hand;
}
</style>
