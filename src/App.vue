<template>
  <div id="app">
    <Header v-bind:page-title="pageTitle" v-on:startTracking="startNewTrack" v-on:stopTracking="stopRecording" />
    <div class="spacerForHeader" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Calender v-bind:tracks="tracks" /> <!-- Just your default, cheap calender; Might still come in handy, when visualizing data tho. -->
    <TracksDebugOutput v-bind:tracks="tracks" />
    <Footer v-bind:team-members="teamMembers" v-bind:project-title="projectTitle" v-bind:version="version"/>
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
    },
    data() {
      return {
        pageTitle: "Time Tracker",
        projectTitle: document.title.replace(/-/g, " "), // can be changed to any arbitrary value, currently I am just reading the documents title (specified in package.json)
        version: JSON.stringify(require('../package.json').version).replace(/"/g, ""), // same as for the project title
        teamMembers: ['Katharina Resch', 'Matthias Köttritsch'],

        tracks: [],
        currentlyRecordingTrack: null,
        recording: false,

        currentLanguage: "eng",
      }
    },
    methods: {
      startNewTrack() {
        this.recording = true;
        this.currentlyRecordingTrack = { "date": new Date(), "startTime": new Date(), "endTime": null, "category": "Musteraufgabe", "description": "Muster Muster Muster" };
      },
      stopRecording() {
        this.recording = false;
        this.currentlyRecordingTrack.endTime = new Date();
        this.tracks.push(this.currentlyRecordingTrack);

        /*
        this.month.forEach(day => {
          if (day.number === this.currentlyRecordingTrack.startTime.getDate()) { day.tracksOfThisDay.push(this.currentlyRecordingTrack); }
        });
        */

        this.currentlyRecordingTrack = null;
      },
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



  *::-webkit-scrollbar {
    width: $scrollbarWidth;
  }
  *::-webkit-scrollbar-track {
    background: $scrollbarBackgroundColor;
  }
  *::-webkit-scrollbar-thumb {
    background-color: $scrollbarColor;
    border-radius: $scrollbarWidth / 2;
    border: ($scrollbarWidth / 4) solid $scrollbarBackgroundColor;
  }
</style>
