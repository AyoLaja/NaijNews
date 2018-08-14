<template>
    <div>
        <div class="columns">
            <div class="column content">
                <h3 class="title"> Top Stories {{sectionDisplay}} </h3>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <!-- <div class="content">
                    <h5 class="title">Select area of Interest</h5>
                </div> -->
                <select v-model="section">
                    <option v-for="section in sections" :value="section">
                        {{section}}
                    </option>
                </select>
                <button class="button is-small is-rounded is-info" @click="getPosts(section)">Retrieve</button>
            </div>
        </div>
        <div class="columns feed" v-dragscroll.x>
            <app-card :result="result" 
            v-for="(result, key) in results" 
            :key="key"></app-card>
        </div>
    </div>
</template>

<script>
    import Card from '../Card.vue'
    import sections from '../../resources/sections'
    import axios from 'axios';
    
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
        filters: {
            capitalize: function (value) {
                return value.toUpperCase();
            }
        }
    };
</script>

<style scoped>
     
  .feed {
    /* overflow-y: hidden; */
    overflow-x: hidden;
    cursor: hand;
  }
  
  h5.title {
    color: #fff;
    margin-bottom: 5px;
  }
  
  h3.title {
    color: #fff;
  }
</style>