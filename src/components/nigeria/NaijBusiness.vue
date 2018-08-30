<template>
    <div>
        <div class="columns">
            <div class="column content">
                <h3>Top stories in business</h3>
            </div>
        </div>
        <div class="columns feed" v-dragscroll.x>
            <app-section-top-stories :headline="story"
            v-for="(story, index) in businessTopStories"
            :key="index"></app-section-top-stories>
        </div>
        <!-- <flickity v-if="Object.keys(businessTopStories).length > 0" ref="flickity" :options="flickityOptions">
            <div class="columns feed">
                <app-section-top-stories :headline="story"
                v-for="(story, index) in businessTopStories"
                :key="index"></app-section-top-stories>
            </div>
        </flickity> -->
    </div>
</template>

<script>
import SectionTopStories from "../news/SectionTopStories.vue";
import NewsAPI from "newsapi";
// import Flickity from 'vue-flickity'

export default {
  data() {
    return {
      businessTopStories: []
      // flickityOptions: {
      //     prevNextButtons: true,
      //     freeScroll: true,
      //     wrapAround: true
      // }
    };
  },
  components: {
    appSectionTopStories: SectionTopStories
    // Flickity
  },
  created() {
    //   this.getBusiness()
    const newsApi = new NewsAPI("29e74aa1513b46cbadfcbdcdee1c1ef1");

    //Business
    newsApi.v2
      .topHeadlines({
        category: "business",
        country: "ng"
      })
      .then(response => {
        this.businessTopStories = response.articles;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
      
    async getBusiness() {
        const newsApi = new NewsAPI("29e74aa1513b46cbadfcbdcdee1c1ef1");
      //Business
      let promise = newsApi.v2
        .topHeadlines({
          category: "business",
          country: "ng"
        })
        .then(response => {
          this.businessTopStories = response.articles;
        })
        .catch(error => {
          console.log(error);
        });

        let result = await promise;
        console.log(result)
    }
  }
};
</script>

<style lang="css" src="../../styles/appStyles.css">
</style>