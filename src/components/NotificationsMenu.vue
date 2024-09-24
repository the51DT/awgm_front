<!-- src/components/NotificationsMenu.vue -->
<template>
  <v-menu v-model:show="menuVisible" transition="scale-transition" offset-y>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="handleClick('View Notifications')">
        <v-list-item-title>View Notifications</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleClick('Mark All as Read')">
        <v-list-item-title>Mark All as Read</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(false);

// eslint-disable-next-line no-unused-vars
const handleClick = (action) => {
  menuVisible.value = false; // 메뉴를 닫기
};
</script>

<style scoped>
/* 스타일링 */
</style>
