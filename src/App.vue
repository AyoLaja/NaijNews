<template>
  <div id="app">
    <app-header></app-header>
    <app-nav-bar></app-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import NavBar from './components/NavBar.vue'
  
  export default {
    components: {
      appHeader: Header,
      appNavBar: NavBar
    }
  }
</script>

<style>
  html {
    background-color: rgb(34, 34, 34);
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    background-color: rgb(34, 34, 34);
    padding: 20px;
    height: 100%;
  }
 
</style>
