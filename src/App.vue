<template>
  <div id="app">
    <Header v-bind:page-title="$parent.$data.pageTitle"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer v-bind:team-members="$parent.$data.teamMembers" v-bind:project-title="$parent.$data.projectTitle" v-bind:version="$parent.$data.version"/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Footer from "./components/Footer";
  import Header from "./components/Header";

  export default {
    name: 'App',
    props: {
      projectTitle: String,
      pageTitle: String
    },
    components: {
      Header,
      Footer,
      HelloWorld
    }
  }
</script>

<style lang="scss">
  @import "src/scss/variables";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primaryTextColor;
    margin-top: 60px;
  }
</style>
