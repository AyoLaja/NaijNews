<template>
  <div id="app">
    <header>
     <app-header></app-header>
    </header>
    <app-nav-bar></app-nav-bar>
    <section class="main-container">
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
  height: 100%;
  position: relative;
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

.main-container {
   min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 50px; /* height of your footer */
}
</style>
