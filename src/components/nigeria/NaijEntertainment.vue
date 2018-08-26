<template>
        <div>
            <div class="columns">
                <div class="column content">
                    <h3>Top stories in entertainment</h3>
                </div>
            </div>
            <div class="columns feed" v-dragscroll.x>
                <app-section-top-stories :headline="story"
                v-for="(story, index) in entertainmentTopStories"
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
                    entertainmentTopStories: []
                }
            },
            components: {
                appSectionTopStories: SectionTopStories
            },
            created() {
                const newsApi = new NewsAPI("29e74aa1513b46cbadfcbdcdee1c1ef1");
                
                //entertainment 
                newsApi.v2.topHeadlines({
                    category: "entertainment",
                    country: "ng",
                })
                .then(response => {
                    this.entertainmentTopStories = response.articles
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    </script>
    
    <style lang="css" src="../../styles/appStyles.css">
    </style>