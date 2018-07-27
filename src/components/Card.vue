<template>
    <div class="columns">
        <div class="column" v-for="result in results">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        {{result.title}}
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        {{result.abstract}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            results: {
                type: Array
            }
        }
    }
</script>

<style>
    
</style>