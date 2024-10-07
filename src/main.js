import { createApp } from "vue";
import Vue3Lottie from "vue3-lottie";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import "./assets/style/index.scss";
loadFonts();

createApp(App).use(router).use(vuetify).use(Vue3Lottie, { name: 'LottieAnimation' }).mount("#app");
