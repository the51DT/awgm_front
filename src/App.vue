<template>
  <AppHeader v-if="showHeader" />
  <router-view />
  <AppFooter v-if="showFooter" />
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
</script>
