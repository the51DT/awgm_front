import { createApp } from "vue";
import Vue3Lottie from "vue3-lottie";
import App from "./App.vue";
import VCalendar from "v-calendar";

import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import "./assets/style/index.scss";
import "v-calendar/style.css";
import common from "./plugins/common";
loadFonts();

createApp(App)
  .use(router)

  .use(VCalendar)
  .use(Vue3Lottie, { name: "LottieAnimation" })
  .use(common)
  .mount("#app");
