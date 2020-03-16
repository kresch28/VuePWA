<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header v-bind:page-title="$parent.$data.pageTitle" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Calender v-bind:month="$parent.$data.month" v-bind:weekdays="$parent.getWeekdaysInCurrentLanguage()" /> <!-- Just your default, cheap calender; Might still come in handy, when visualizing data tho. -->
    <Footer v-bind:team-members="$parent.$data.teamMembers" v-bind:project-title="$parent.$data.projectTitle" v-bind:version="$parent.$data.version"/>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import Footer from "./components/Footer";
  import Header from "./components/Header";
  import Calender from "./components/Calender/Calender";

  export default {
    name: 'App',
    props: {
    },
    components: {
      Calender,
      Header,
      Footer,
      //HelloWorld
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
