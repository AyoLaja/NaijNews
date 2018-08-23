<template>
    <div class="column is-one-quarter">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{result.title}}
                </p>
            </header>
            <div class="card-image">
                <a :href="result.url" target="_blank">
                    <img :src="result.multimedia[4].url" />
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    {{result.abstract}}
                </div>
                <div class="card-footer">
                    <a class="button is-rounded" :href="result.url" target="_blank">Go to Article</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            result: {
                type: Object
            }
        }
    };
</script>

<style lang="css" src="../styles/appStyles.css">
</style>