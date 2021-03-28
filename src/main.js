import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import("firebase/auth");
import("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyCUN4MtViVSoQGp6vVdYw_feoQwbLcBw6Y",
  authDomain: "rbsnack-targert.firebaseapp.com",
  projectId: "rbsnack-targert",
  storageBucket: "rbsnack-targert.appspot.com",
  messagingSenderId: "828546394595",
  appId: "1:828546394595:web:450c87046b37476ece58d6",
  measurementId: "G-G5DZ22MG73",
};

firebase.initializeApp(firebaseConfig);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
