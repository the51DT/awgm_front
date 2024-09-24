<!-- src/components/UserMenu.vue -->
<template>
  <v-btn class="mr-4" variant="outlined" color="white"> 로그아웃 </v-btn>
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
