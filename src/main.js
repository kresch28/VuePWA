import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret);
library.add(faPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  data: {
    pageTitle: "Time Tracker",
    projectTitle: document.title.replace(/-/g, " "), // can be changed to any arbitrary value, currently I am just reading the documents title (specified in package.json)
    version: JSON.stringify(require('../package.json').version).replace(/"/g, ""), // same as for the project title
    teamMembers: ['Katharina Resch', 'Matthias Köttritsch'],
    month: [],
    currentLanguage: "eng",
    weekdays: {
      "eng": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "ger": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
    }
  },
  computed: {
  },
  methods: {
    getWeekdaysInCurrentLanguage() {
      return this._data.weekdays[this._data.currentLanguage];
    },
    pushEmptyDay() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this._data.month.push({ // again _data
        number: "",
        dayOfWeek: "",
        weekdayString: ""
      })
    },
    fillMonth() {
      let date = new Date();
      let currentMonth = date.getMonth() + 1;
      let currentYear = date.getFullYear();
      
      let nrOfDays = new Date(currentYear, currentMonth, 0).getDate();
      let currentWeekDay = new Date(currentYear, currentMonth - 1, 1).getDay();
      let weekdays = this.getWeekdaysInCurrentLanguage;
  
      console.log(this);
      console.log(this._data); // Whyever this is _data and not data ¯\_(ツ)_/¯
  
      /**
       * Insert empty day tiles up front (so the days will be indented correctly, starting with monday)
       * Special case is sunday, since this is the first day of the american calender, but the last one in ours, so if the first day is a sunday, just add 6 days
       */
      let daysToInsert = currentWeekDay === 0 ? 6 : currentWeekDay - 1;
      for (let i = 0; i < daysToInsert; i++) { this.pushEmptyDay(); }
        
      for (let i = 1; i <= nrOfDays; i++) {
        this._data.month.push({ // again _data
          number: i,
          dayOfWeek: currentWeekDay,
          weekdayString: weekdays[currentWeekDay]
        });
        
        if (++currentWeekDay > 6) { currentWeekDay = 0; }
      }
  
      /**
       * Fill up the empty days at the end of the month
       */
      while (this._data.month.length % 7 !== 0) { this.pushEmptyDay(); }
    }
  },
  
  mounted() {
    this.fillMonth();
  }
}).$mount('#app');
