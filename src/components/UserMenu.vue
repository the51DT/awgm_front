<!-- src/components/UserMenu.vue -->
<template>
  <span class="mr-2">유효시간 00:00 | </span>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(false);

// eslint-disable-next-line no-unused-vars
const handleClick = (action) => {
  menuVisible.value = false; // 로그아웃?
};
</script>

<style scoped>
/* 스타일링 */
</style>
