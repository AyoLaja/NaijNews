<template>
        <div class="column is-one-third">
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

<style>
</style>