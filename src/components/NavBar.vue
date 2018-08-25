<template>
<div class="columns">
    <div class="column is-half is-offset-one-quarter">
        <div class="tabs is-centered">
            <ul>
                <router-link to="/" tag="li" active-class="is-active" exact><a id="homeLink">
                    <ion-icon name="home"></ion-icon>
                </a></router-link>
                <router-link to="/business" tag="li" active-class="is-active"><a>Business</a></router-link>
                <router-link to="/health" tag="li" active-class="is-active"><a>Health</a></router-link>
                <router-link to="/technology" tag="li" active-class="is-active"><a>Technology</a></router-link>
                <router-link to="/science" tag="li" active-class="is-active"><a>Science</a></router-link>
                <router-link to="/entertainment" tag="li" active-class="is-active"><a>Entertainment</a></router-link>
                <router-link to="/sports" tag="li" active-class="is-active"><a>Sports</a></router-link>
                <router-link to="/world" tag="li" active-class="is-active"><a>World</a></router-link>
                <router-link to="/usa" tag="li" active-class="is-active"><a>USA</a></router-link>
            </ul>
        </div>
    </div>
</div>
    
</template>

<script>
</script>

<style scoped>
a {
  color: #fff;
  /* font-weight: bold; */
  letter-spacing: 1px;
  font-size: 13px;
}

a:hover, 
.tabs li.is-active a {
  border-bottom-color: #15c715;
  color: #15c715;
}

#homeLink {
  /* padding-bottom: 12px; */
}

ion-icon {
  font-size: 20px;
}
</style>