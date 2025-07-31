<template>
  <AppHeader v-if="showHeader" :mypage="route.meta.mypage" :class="headerBgClass" :isBgGreen="isBgGreen" />
  <router-view />
  <AppFooter v-if="showFooter" :white="route.meta.white ? true : false" />
</template>

<script setup>
import { computed } from "vue";
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

const headerState = computed(() => {
  if (route.path.includes("00035")) {
    return { class: "bg-green", isGreen: true };
  } else if (route.path.includes("나의 활동")) {
    return { class: "bg-f5", isGreen: false };
  } else {
    return { class: "", isGreen: false };
  }
});

const headerBgClass = computed(() => headerState.value.class);
const isBgGreen = computed(() => headerState.value.isGreen);



</script>
