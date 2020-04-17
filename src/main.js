import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMinus, faUserSecret, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './registerServiceWorker'
import {store} from './store'
import {Auth0Plugin} from "./auth";
import router from "./router";


import { domain, clientId } from "../auth_config.json";
import firebase from "firebase";

library.add(faUserSecret);
library.add(faPlus);
library.add(faMinus);

Vue.component('font-awesome-icon', FontAwesomeIcon);


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3FAH-NKMD1HgKyW1zYi1cLljYQZWR3HY",
  authDomain: "timetracking-4dd99.firebaseapp.com",
  databaseURL: "https://timetracking-4dd99.firebaseio.com",
  projectId: "timetracking-4dd99",
  storageBucket: "timetracking-4dd99.appspot.com",
  messagingSenderId: "950183587755",
  appId: "1:950183587755:web:d7f51e3176a9a6ed072cee"
};
const databaseFirebase = firebase.initializeApp(firebaseConfig).database();
const tracksReference = databaseFirebase.ref('tracks-test').child('I6zrI4QazU0FRNSeWBUE'); // TODO: change the child string for a string given from auth0 to have a distinct document for every different logged in user

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store,
  data: {
    firebase: {
      tracks: tracksReference
    },
  },
  // computed: Vuex.mapGetters(['tracks']),
  created () {
    console.log(this);
    this.$store.dispatch('bindTracks', this.$data.firebase.tracks);
  }
}).$mount('#app');
