<template>
  <div id="app">
    <Header v-bind:page-title="this.$data.pageTitle" v-on:startTracking="startNewTrack" v-on:stopTracking="stopRecording" />
    <div class="spacerForHeader" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Calender v-bind:month="this.$data.month" v-bind:weekdays="getWeekdaysInCurrentLanguage()" /> <!-- Just your default, cheap calender; Might still come in handy, when visualizing data tho. -->
    <TracksDebugOutput v-bind:tracks="this.$data.tracks" />
    <Footer v-bind:team-members="$parent.$data.teamMembers" v-bind:project-title="this.$data.projectTitle" v-bind:version="this.$data.version"/>
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

        month: [],
        currentLanguage: "eng",
        weekdays: {
          "eng": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "ger": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        }
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

        this.month.forEach(day => {
          if (day.number === this.currentlyRecordingTrack.startTime.getDate()) { day.tracksOfThisDay.push(this.currentlyRecordingTrack); }
        });

        this.currentlyRecordingTrack = null;
      },

      getWeekdaysInCurrentLanguage() {
        return this.weekdays[this.currentLanguage];
      },

      /**
       * This method pushes an empty day into the data.month array
       * That is used, so the days are indented correctly when visualizing the calender without having some kind of css tricks
       * @returns {number}
       */
      pushEmptyDay() {
        return this.month.push({
          number: "",
          dayOfWeek: "",
          weekdayString: "",
          tracksOfThisDay: []
        })
      },

      /**
       * This method collects data about the current month (on what day it starts and how many days it has) and fills the data.month array with the actual days of the current month
       */
      fillMonth() {
        let date = new Date();
        let currentMonth = date.getMonth() + 1;
        let currentYear = date.getFullYear();

        let nrOfDays = new Date(currentYear, currentMonth, 0).getDate();
        let currentWeekDay = new Date(currentYear, currentMonth - 1, 1).getDay();
        let weekdays = this.getWeekdaysInCurrentLanguage();

        /**
         * Insert empty day tiles up front (so the days will be indented correctly, starting with monday)
         * Special case is sunday, since this is the first day of the american calender, but the last one in ours, so if the first day is a sunday, just add 6 days
         */
        let daysToInsert = currentWeekDay === 0 ? 6 : currentWeekDay - 1;
        for (let i = 0; i < daysToInsert; i++) { this.pushEmptyDay(); }

        /**
         * Push as many day object to the month array, as there are day in the month
         */
        for (let i = 1; i <= nrOfDays; i++) {
          this.month.push({ // each day object has its respective day number, what day of the week it is, a string of that and a list of time tracks
            number: i,
            dayOfWeek: currentWeekDay,
            weekdayString: weekdays[currentWeekDay],
            tracksOfThisDay: []
          });

          if (++currentWeekDay > 6) { currentWeekDay = 0; }
        }

        /**
         * Fill up the empty days at the end of the month
         */
        while (this.month.length % 7 !== 0) { this.pushEmptyDay(); }
      }
    },

    mounted () {
      this.fillMonth();
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
