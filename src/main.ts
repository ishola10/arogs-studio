import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTLfyBoWJ5oyVq41VW8Hqfu16U0FL_st8",
  authDomain: "testing-f1970.firebaseapp.com",
  projectId: "testing-f1970",
  storageBucket: "testing-f1970.firebasestorage.app",
  messagingSenderId: "999659174530",
  appId: "1:999659174530:web:c56e6842eb4866eb2f129b",
  measurementId: "G-2J1CJFSH2S",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = createApp(App);
app.use(router);

AOS.init();

app.mount("#app");
