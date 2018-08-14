<template>
    <div>
        <div class="content">
            <h3>Nigeria</h3>
        </div>
    </div>
</template>

<script>
    import Card from '../Card.vue'
    import axios from 'axios'

    export default {
        components: {
            appCard: Card
        },
        created() {
            axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=29e74aa1513b46cbadfcbdcdee1c1ef1')
                .then(res => console.log(res.data))
                .catch(error => alert('Error with Naij fetch'))
        }
    }
</script>