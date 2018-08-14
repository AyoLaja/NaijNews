<template>
    <div class="tabs is-centered">
        <ul>
            <router-link to="/" tag="li" active-class="is-active" exact><a>Home</a></router-link>
            <router-link to="/nigeria" tag="li" active-class="is-active"><a>Nigeria</a></router-link>
            <router-link to="/usa" tag="li" active-class="is-active"><a>USA</a></router-link>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
    a {
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 16px;
    }

    a:hover {
        border-bottom-color: #3273dc;
        color: #3273dc;
    }
</style>