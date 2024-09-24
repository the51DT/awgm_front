<template>
  <v-app-bar app fixed>
    <v-app-bar-nav-icon
      @click="toggleDrawer"
      color="white"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Amway Gutmorning Front</v-toolbar-title>
    <v-spacer />
    <user-menu />
    <settings-button />
  </v-app-bar>
</template>

<script setup>
import { inject } from 'vue';
// eslint-disable-next-line no-unused-vars
import UserMenu from '../components/UserMenu.vue';
// eslint-disable-next-line no-unused-vars
import NotificationsMenu from '../components/NotificationsMenu.vue';
// eslint-disable-next-line no-unused-vars
import SettingsButton from '../components/SettingsButton.vue';

// eslint-disable-next-line no-unused-vars
const { toggleDrawer } = inject('layout');
</script>

<style scoped>
.v-app-bar {
  background: #3f4d66;
  color: #ffffff;
}

.v-btn {
  margin-left: 8px;
}

.v-icon {
  font-size: 20px;
}
</style>
