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
                        <div class="content">
                            {{story.description}}
                        </div>
                        <div class="card-footer">
                            <a class="button is-rounded" :href="story.url" target="_blank">Go to Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import NewsAPI from 'newsapi'
    
    export default {
        data() {
            return {
                topStories: []
            }
        },
        created() {
            const newsApi = new NewsAPI('29e74aa1513b46cbadfcbdcdee1c1ef1')
            
            newsApi.v2.topHeadlines({
                country: 'ng'
            })
            .then(response => {
                console.log(response)
                this.topStories = response.articles 
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    
</script>

<style lang="css" src="../../styles/appStyles.css">
</style>