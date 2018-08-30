<template>
    <div class="column is-half">
        <div class="content">
            <h3>Top Stories</h3>
        </div>
        <div class="feed columns" v-dragscroll.x>
            <div class="column">
                <div class="card top-stories" v-for="(story, index) in topStories" :key="index">
                    <div>
                        <p class="category-text" :style="{color: story.category.color, borderColor: story.category.color}">
                            {{story.category.name}}
                        </p>
                    </div>
                    <header class="card-header">
                        <div>
                            <p class="card-header-title">
                                {{story.title}}
                            </p>
                        </div>
                    </header>
                    <div class="card-image">
                        <a :href="story.url" target="_blank">
                            <img :src="(story.urlToImage) ? story.urlToImage : 'https://via.placeholder.com/300x200'" />
                        </a>
                    </div>
                    <div class="card-content">
                        <p class="content">
                            {{(story.description) ? story.description : story.title}}
                        </p>
                        <div class="card-footer">
                            <div class="date-div">
                                <p>{{story.publishedAt | formatDate}}</p>
                            </div>
                            <div class="button-div">
                                <a class="button is-rounded is-small" 
                                :href="story.url" 
                                target="_blank">
                                Read More &nbsp;
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
                topStories: [],
                topGeneral: [],
                topBusiness: [], 
                topEntertainment: [],
                topGeneral: [],
                topSports: [],
                topScience: [],
                topTechnology: [], 
                topHealth: []
            };
        },
        created() {
            const newsApi = new NewsAPI("29e74aa1513b46cbadfcbdcdee1c1ef1");
            
            //Business 
            newsApi.v2.topHeadlines({
                category: "business",
                country: "ng",
            })
            .then(response => {
                this.topBusiness = response.articles
                this.populateToTopStories(this.topBusiness)
                this.addCategory(this.topBusiness, 'business', '#209fbf')
            })
            .catch(error => {
                console.log(error);
            });
            
            //Entertainment 
            newsApi.v2.topHeadlines({
                category: "entertainment",
                country: "ng",
            })
            .then(response => {
                this.topEntertainment = response.articles
                this.populateToTopStories(this.topEntertainment)
                this.addCategory(this.topEntertainment, 'entertainment', '#f4cd41')
            })
            .catch(error => {
                console.log(error);
            });
            
            //General 
            newsApi.v2.topHeadlines({
                category: "general",
                country: "ng",
            })
            .then(response => {
                this.topGeneral = response.articles
                this.populateToTopStories(this.topGeneral)
                this.addCategory(this.topGeneral, 'featured', '#15c715')
            })
            .catch(error => {
                console.log(error);
            });
            
            //Health 
            newsApi.v2.topHeadlines({
                category: "health",
                country: "ng",
            })
            .then(response => {
                this.topHealth = response.articles;
                this.populateToTopStories(this.topHealth)
                this.addCategory(this.topHealth, 'health', '#d988e0')
            })
            .catch(error => {
                console.log(error);
            });
            
            //Science 
            newsApi.v2.topHeadlines({
                category: "science",
                country: "ng",
            })
            .then(response => {
                this.topScience = response.articles;
                this.populateToTopStories(this.topScience)
                this.addCategory(this.topScience, 'science', '#db1111')
            })
            .catch(error => {
                console.log(error);
            });
            
            //Technology 
            newsApi.v2.topHeadlines({
                category: "technology",
                country: "ng",
            })
            .then(response => {
                this.topTechnology = response.articles;
                this.populateToTopStories(this.topTechnology)
                this.addCategory(this.topTechnology, 'technology', '#cc6666')
            })
            .catch(error => {
                console.log(error);
            });
            
            //Sport 
            newsApi.v2.topHeadlines({
                category: "sports",
                country: "ng",
            })
            .then(response => {
                this.topSports = response.articles;
                this.populateToTopStories(this.topSports)
                this.addCategory(this.topSports, 'sports', '#4286f4')
            })
            .catch(error => {
                console.log(error);
            });
            
            // this.topStories = this.shuffleArray(this.topStories)
        },
        methods: {
            addCategory(array, category, color) {
                array.forEach(item => {
                    item.category = {
                        name: category, 
                        color: color
                    }
                });
            },
            populateToTopStories(array) {
                if (array.length >= 5) {
                    //Retrieve 4 stories from each section
                    array.slice(0, 4).forEach(item => {
                        this.topStories.push(item)
                    })
                }
                else {
                    //Retrieve 1 story from each section
                    array.slice(0, 1).forEach(item => {
                        this.topStories.push(item)
                    })
                }
                
                // this.topStories = this.shuffleArray(this.topStories)
            },
            shuffleArray(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a;
            }
        },
        filters: {
            formatDate(date) {
                let d = new Date(date);
                return d.toDateString();
            }
        }
    };
</script>

<style lang="css" src="../../styles/cardStyles.css"></style>
<style lang="css" src="../../styles/appStyles.css"></style>
<style scoped>
    .card {
        width: 300px;
    }
    
    .card-content p.content {
        width: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* line-height: 16px; */
        /* max-height: 32px; */
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 13px;
    }
    
    .card-header {
        padding: 10px;
    }
    
    .card-header-title {
        color: #b7b7b7;
        font-size: 14px;
    }
    
    .category-text {
        border: 1px solid #ccc;
        padding: 2px 10px 5px 10px;
        border-radius: 15px;
        display: inline-block;
        margin-left: 20px;
        margin-top: 10px;
        font-size: 10px;
        font-weight: bold;
    }
    
    .card-image {
        height: 200px;
    }
    
    .card-image img {
        opacity: 0.85;
        min-width: 100%;
        flex-shrink: 0;
        -webkit-transform: scale(0.1);
        transform: scale(1.1);
        -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
        transition: opacity 0.5s, -webkit-transform 0.5s;
        transition: transform 0.5s, opacity 0.5s;
        transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;
    }
    
    .card-image img:hover {
        opacity: 1;
        width: 100%;
        height: auto;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    
    .card-footer p {
        font-size: 11px;
        font-weight: bold;
    }
    
    .feed {
        overflow-x: hidden;
        cursor: hand;
    }
    
    h5.title {
        color: #fff;
        margin-bottom: 5px;
    }
    
    /* h3.title,
    .content h3 {
        color: #fff;
    } */
</style>