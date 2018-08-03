<template>
  <div id="app">
    <app-header></app-header>
    <!-- <app-choose-section :sections="sections" @retrieve="getPosts(this.section)"></app-choose-section> -->
    <div class="columns">
      <div class="column content">
        <h5 class="title">Select area of Interest</h5>
        <select v-model="section">
          <option v-for="section in sections" :value="section">
            {{section}}
          </option>
        </select>
        <button class="button is-small is-rounded is-info" @click="getPosts(section)">Retrieve</button>
      </div>
    </div>
    <div class="columns">
      <div class="column is-centered content">
        <h3 class="title"> Top Stories {{sectionDisplay}} | capitalize </h3>
      </div>
    </div>
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
  import sections from "./resources/sections";
  // import ChooseSection from "./components/ChooseSection"
  
  import axios from "axios";
  
  export default {
    data() {
      return {
        results: [],
        NYTBaseUrl: "https://api.nytimes.com/svc/topstories/v2/",
        apiKey: "28b4cba8fe6c49c4a44b7d7976b34d00",
        url: "",
        sections: sections.split(', '),
        section: 'home',
        sectionDisplay: ''
      };
    },
    components: {
      appCard: Card,
      appHeader: Header,
      // appChooseSection: ChooseSection
    },
    mounted() {
      //const sectionsArray = this.sections.split(', ');
      this.getPosts(this.section);
    },
    methods: {
      getPosts(section) {
        this.url = this.buildUrl(section);
        axios.get(this.url)
        .then(response => {
          this.results = response.data.results;
          this.section === 'home' ? this.sectionDisplay = 'today' : this.sectionDisplay = 'in ' + this.section;
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
    },
    filters: {
      capitalize: function (value) {
        return value.toUpperCase();
      }
    }
  };
</script>

<style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    background-color: rgb(34, 34, 34);
    padding: 20px;
    /* background-color: darkolivegreen;  */
  }
  
  .feed {
    overflow-y: hidden;
    overflow-x: scroll;
    cursor: hand;
  }
  
  .title {
    color: #fff;
    margin-bottom: 5px;
  }

  h3.title {
    text-align: center;
  }
</style>
