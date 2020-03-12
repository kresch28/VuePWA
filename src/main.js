import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  data: {
    projectTitle: "Test",
    version: "Some kind of Beta Version :P",
    teamMembers: ['Katharina Resch', 'Matthias Köttritsch']
  }
}).$mount('#app');
