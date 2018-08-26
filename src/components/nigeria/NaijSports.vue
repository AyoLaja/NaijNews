<template>
        <div>
            <div class="columns">
                <div class="column content">
                    <h3>Top stories in sports</h3>
                </div>
            </div>
            <div class="columns feed" v-dragscroll.x>
                <app-section-top-stories :headline="story"
                v-for="(story, index) in sportsTopStories"
                :key="index"></app-section-top-stories>
            </div>
        </div>
    </template>
    
    <script>
        import SectionTopStories from '../news/SectionTopStories.vue'
        import NewsAPI from "newsapi";
        
        export default {
            data() {
                return {
                    sportsTopStories: []
                }
            },
            components: {
                appSectionTopStories: SectionTopStories
            },
            created() {
                const newsApi = new NewsAPI("29e74aa1513b46cbadfcbdcdee1c1ef1");
                
                //sports 
                newsApi.v2.topHeadlines({
                    category: "sports",
                    country: "ng",
                })
                .then(response => {
                    this.sportsTopStories = response.articles
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    </script>
    
    <style lang="css" src="../../styles/appStyles.css">
    </style>