<template>
  <div id="app">
    <app-header></app-header>
    <div class="columns feed" v-dragscroll.x>
        <app-card :result="result" 
          v-for="(result, key) in results" 
          :key="key">
        </app-card>
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
    processedPosts() {
      let posts = this.results;

      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo")
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A"
      });

      //For grouping arrays into chunks of 4
      let i, j, chunkedArray = [], chunk = 4;

      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff !important;
  background-color: rgb(34, 34, 34);
  padding: 20px;
  /* background-color: darkolivegreen;  */
}

.feed {
    overflow-y: hidden;
    overflow-x: scroll;
    cursor: hand;
}
</style>
