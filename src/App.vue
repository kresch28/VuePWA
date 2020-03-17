<template>
  <div id="app">
    <Header v-bind:page-title="$parent.$data.pageTitle" />
    <div class="spacerForHeader" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Calender v-bind:month="$parent.$data.month" v-bind:weekdays="$parent.getWeekdaysInCurrentLanguage()" /> <!-- Just your default, cheap calender; Might still come in handy, when visualizing data tho. -->
    <TracksDebugOutput v-bind:tracks="$parent.$data.tracks" />
    <Footer v-bind:team-members="$parent.$data.teamMembers" v-bind:project-title="$parent.$data.projectTitle" v-bind:version="$parent.$data.version"/>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import Footer from "./components/Footer";
  import Header from "./components/Header";
  import Calender from "./components/Calender/Calender";
  import TracksDebugOutput from "./components/TracksDebugOutput";

  export default {
    name: 'App',
    props: {
    },
    components: {
      TracksDebugOutput,
      Calender,
      Header,
      Footer,
      //HelloWorld
    }
  }
</script>

<style lang="scss">
  @import "src/scss/variables";

  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primaryTextColor;
    margin-top: 60px;

    min-height: 100vh;
  }

  .spacerForHeader {
    padding-top: 3em;
  }
</style>
