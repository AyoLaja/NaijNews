<template>
    <div class="tabs is-centered">
        <ul>
            <router-link to="/" tag="li" active-class="is-active" exact><a id="homeLink">
                <ion-icon name="home"></ion-icon>
            </a></router-link>
            <router-link to="/nigeria" tag="li" active-class="is-active"><a>Nigeria</a></router-link>
            <router-link to="/business" tag="li" active-class="is-active"><a>Business</a></router-link>
            <router-link to="/health" tag="li" active-class="is-active"><a>Health</a></router-link>
            <router-link to="/technology" tag="li" active-class="is-active"><a>Technology</a></router-link>
            <router-link to="/science" tag="li" active-class="is-active"><a>Science</a></router-link>
            <router-link to="/entertainment" tag="li" active-class="is-active"><a>Entertainment</a></router-link>
            <router-link to="/sports" tag="li" active-class="is-active"><a>Sports</a></router-link>
            <router-link to="/international" tag="li" active-class="is-active"><a>International</a></router-link>
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

    #homeLink {
        padding-bottom: 12px;
    }

    ion-icon {
        font-size: 20px;
    }
</style>