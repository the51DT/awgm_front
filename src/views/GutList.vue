<template>
  <v-app>
    <stamp-effect />
    <app-sidebar />

    <!-- 메인 컨텐츠 -->
  </v-app>
</template>

<script setup>
import { ref, computed, provide } from "vue";
import { useRoute } from "vue-router";
import AppSidebar from "@/layouts/AppSidebar.vue";
import StampEffect from "@/components/StampEffect.vue";

const drawer = ref(true);
const route = useRoute();

// 로그인 페이지 여부 확인
// eslint-disable-next-line no-unused-vars
const isListPage = computed(() => route.meta.layout === "none");

// 사이드바 토글 함수
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

// Provide API를 사용하여 다른 컴포넌트에 상태 제공
provide("layout", { drawer, toggleDrawer });
</script>
