<template>
  <AppHeader v-if="showHeader" :mypage="route.meta.mypage ? true : false" :class="headerClass"/>
  <router-view />
  <AppFooter v-if="showFooter" :white="route.meta.white ? true : false" />
</template>

<script setup>
import { computed  } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "@/layouts/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter.vue";
const route = useRoute();
const showHeader = computed(
  () => !(route.meta.layout === "none" || route.meta.layout === "footerOnly")
);
const showFooter = computed(
  () => !(route.meta.layout === "none" || route.meta.layout === "headerOnly")
);
const headerClass = computed(() => {
  return route.path.includes('나의 활동') ? 'bg-f5' : '';
});
</script>
