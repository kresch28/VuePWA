<template>
  <div id="app">
    <Header v-bind:page-title="pageTitle" @startTracking="startNewTrack" @stopTracking="stopRecording" @addTrack="addTrack" />
    <div class="spacerForHeader" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Calender v-bind:tracks="tracks" /> <!-- Just your default, cheap calender; Might still come in handy, when visualizing data tho. -->
    <TracksDebugOutput v-bind:tracks="tracks" @removeTrack="removeTrack" @editTrack="editTrack" />
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

        recording: false,

        currentLanguage: "eng",
      }
    },
    computed: {
        tracks() {
          return this.$store.state.tracks;
		},
        currentTrack() {
          return this.$store.state.currentlyEnteringTrack;
		}
    },
    methods: {
      startNewTrack(category) {
        this.recording = true;
        this.currentTrack.date = new Date();
        this.currentTrack.startTime = new Date();
        this.currentTrack.category = category;
      },
      stopRecording() {
        this.recording = false;
        this.currentTrack.endTime = new Date();
        // this.$store.commit('addTrack', this.currentTrack);
        // this.$store.commit('resetCurrentTrack');
        this.addTrack(this.currentTrack);

        //this.$store.dispatch("addTrack", this.$parent.firebase.tracks, this.currentTrack);
      },
      addTrack(data) {
        for (let property in data) {
          if (property && data[property] && typeof data[property].getMonth === 'function') { data[property] = data[property].toISOString(); console.log("exchanging date " + data.property); }
        }

        this.$parent.$data.firebase.tracks.push(data);
      },
      removeTrack(track) { this.$parent.$data.firebase.tracks.child(track['.key']).remove(); },
      editTrack(track) { this.$parent.$data.firebase.tracks.child(track['.key']).update({ category: track.category, description: track.description }); console.log(track); },
      // TODO: add an edit functionality
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
    margin-top: $headerHeight;

    min-height: 100vh;
  }

  .spacerForHeader {
    padding-top: 3em;
  }

  .button {
    border: solid 1px $tertiaryAccentColor;
    padding: 0.5em;
    margin: 0.5em;
    cursor: pointer;
    background-color: transparent;

    transition: 0.25s ease;

    &:hover {
      background-color: $tertiaryAccentColor;
    }

    .NoBorder {
      border: 0 !important;
    }
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
