import { createRouter, createWebHistory } from "vue-router";
import { menuRoutes } from "./menu.js";

// 기본 경로 설정
const baseRoutes = [
  { path: "/", component: () => import("@/views/GutAd00002.vue") },
  /* { path: "/AppMenu1", component: () => import("@/views/AppMenu1.vue") },
  { path: "/AppMenu2", component: () => import("@/views/AppMenu2.vue") },
  { path: "/AppMenu21", component: () => import("@/views/AppNotice.vue") },
  { path: "/AppMenu3", component: () => import("@/views/AppBanner01.vue") },
  {
    path: "/AppBanner02",
    component: () => import("@/views/AppBanner02.vue"),
    name: "AppBanner02",
  },
  {
    path: "/AppChallenge02",
    component: () => import("@/views/AppChallenge02.vue"),
    name: "AppChallenge02",
  },
  {
    path: "/AppCS04",
    component: () => import("@/views/AppCS04.vue"),
    name: "AppCS04",
  }, */
];

const dynamicRoutes = menuRoutes.map((route) => {
  if (route.subMenu) {
    return {
      path: route.path,
      component: route.component,
      meta: route.meta || {},
      children: route.subMenu.map((subItem) => ({
        path: subItem.path,
        component: () =>
          import(`@/views/GutAd${subItem.path.match(/\d+/)[0]}.vue`),
      })),
    };
  }
  return {
    path: route.path,
    component: route.component,
    meta: route.meta || {},
  };
});

menuRoutes.forEach((item) => {
  if (item.subMenu) {
    item.subMenu.forEach((subItem) => {
      dynamicRoutes.push({
        path: subItem.path,
        component: () =>
          import(`@/views/GutAd${subItem.path.match(/\d+/)[0]}.vue`),
      });
    });
  }
});

// 모든 경로를 합치기
const routes = [...baseRoutes, ...dynamicRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
