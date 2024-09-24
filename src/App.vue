<template>
  <v-app>
    <!-- 상단 앱 바 -->
    <app-header v-if="!isLoginPage" />

    <!-- 사이드바 설정 -->
    <v-navigation-drawer
      v-if="!isLoginPage"
      v-model="drawer"
      app
      class="my-drawer"
    >
      <app-sidebar />
    </v-navigation-drawer>

    <!-- 메인 컨텐츠 -->
    <v-main class="contents">
      <div class="scroll-container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, provide } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "@/layouts/AppHeader.vue";
import AppSidebar from "@/layouts/AppSidebar.vue";

const drawer = ref(true);
const route = useRoute();

// 로그인 페이지 여부 확인
const isLoginPage = computed(() => route.meta.layout === "none");

// 사이드바 토글 함수
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

// Provide API를 사용하여 다른 컴포넌트에 상태 제공
provide("layout", { drawer, toggleDrawer });
</script>

<style lang="scss"></style>
