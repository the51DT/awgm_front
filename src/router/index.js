import { createRouter, createWebHistory } from "vue-router";
import AppMain from "@/views/AppMain.vue";
import AppSub from "@/views/AppSub.vue";

const routes = [
  {
    path: "/",
    name: "AppMain",
    component: AppMain,
  },
  {
    path: "/sub",
    name: "AppSub",
    component: AppSub,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
