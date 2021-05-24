import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./config.json";
import router from "./router";
import store from "./store";

firebase.initializeApp(config.firebaseConfig);
Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
