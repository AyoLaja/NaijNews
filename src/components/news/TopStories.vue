<template>
    <div class="column is-half">
        <div class="content">
            <h3>Top Stories</h3>
        </div>
        <div class="feed columns" v-dragscroll.x>
            <div class="column">
                <div class="card top-stories" v-for="(story, key) in topStories" :key="key">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{story.title}}
                        </p>
                    </header>
                    <div class="card-image">
                        <a :href="story.url" target="_blank">
                            <img :src="story.urlToImage" />
                        </a>
                    </div>
                    <div class="card-content">
                        <p class="content">
                            {{story.description}}
                        </p>
                        <div class="card-footer">
                            <p>{{story.publishedAt | formatDate}}</p>
                            <div class="button-div">
                                <a class="button is-rounded" 
                                    :href="story.url" 
                                    target="_blank">
                                        <ion-icon name="arrow-forward"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import NewsAPI from "newsapi";

export default {
  data() {
    return {
      topStories: []
    };
  },
  created() {
    const newsApi = new NewsAPI("29e74aa1513b46cbadfcbdcdee1c1ef1");

    newsApi.v2
      .topHeadlines({
        country: "ng"
      })
      .then(response => {
        console.log(response);
        this.topStories = response.articles;
      })
      .catch(error => {
        console.log(error);
      });
  },
  filters: {
    formatDate(date) {
      let d = new Date(date);
      // return d.getDate() + '/' + d.getMonth() + '/' +  d.getFullYear();
      return d.toDateString();
    }
  }
};
</script>

<style lang="css" src="../../styles/appStyles.css">
</style>