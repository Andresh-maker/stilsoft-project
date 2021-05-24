import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./config.json";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

firebase.initializeApp(config.firebaseConfig);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

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
