<template>
  <div id="app">
    <header>
     <app-header></app-header>
    </header>
    <app-nav-bar></app-nav-bar>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appNavBar: NavBar,
    appFooter: Footer
  }
};
</script>

<style>
html {
  background-color: rgb(34, 34, 34);
}

#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: rgb(34, 34, 34);
  padding: 20px;
  height: 100%;
}
</style>
