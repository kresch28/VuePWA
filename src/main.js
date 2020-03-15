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
    projectTitle: "Test",
    version: "Some kind of Beta Version :P",
    teamMembers: ['Katharina Resch', 'Matthias Köttritsch']
  }
}).$mount('#app');
