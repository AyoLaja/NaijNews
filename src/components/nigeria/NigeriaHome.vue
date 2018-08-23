<template>
    <div>
        <div class="columns">
            <app-top-stories></app-top-stories>
            <div class="column is-half">
                <div class="content">
                    <h3>Top Stories</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '../Card.vue'
    import axios from 'axios'
    import TopStories from '../news/TopStories.vue'
    
    export default {
        components: {
            appCard: Card,
            appTopStories: TopStories
        },
        created() {
            // axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=29e74aa1513b46cbadfcbdcdee1c1ef1')
            // .then(res => console.log(res.data))
            // .catch(error => alert('Error with Naij fetch'))
        }
    }
</script>