<template>
    <div>
        <div class="card section-top-stories">
            <div class="columns">
                <div class="column">
                    <div class="card-image">
                        <a :href="headline.url" target="_blank">
                            <img :src="(headline.urlToImage) ? headline.urlToImage : 'https://via.placeholder.com/300x200'" />
                        </a>
                    </div>
                </div>
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <p class="card-header-title">
                                {{headline.title}}
                            </p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="card-footer">
                                <div class="date-div">
                                    <p>{{headline.publishedAt | formatDate}}</p>
                                </div>
                                <div class="button-div">
                                    <a class="button is-rounded is-small" 
                                    :href="headline.url" 
                                    target="_blank">
                                    More &nbsp;
                                    <ion-icon name="arrow-forward"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            headline: {
                type: Object
            }
        },
        filters: {
            formatDate(date) {
                let d = new Date(date);
                return d.toDateString();
            }
        }
    }
</script>

<style lang="css" src="../../styles/cardStyles.css"></style>

<style scoped>
    .card {
        width: 400px;
        padding-bottom: 0px;
    }
    
    .card-header-title {
        padding: 15px 0.75rem 0px 0px;
        color: #b7b7b7 !important;
        width: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 13px;
    }
    
    .card-image {
        height: 150px;
        padding: 20px;
    }
    
    .card-footer {
        padding-right: 0.75rem;
    }
    
    .card-footer p {
        font-size: 11px;
        font-weight: bold;
    }
</style>