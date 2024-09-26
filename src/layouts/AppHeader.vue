<template>
  <header class="header">
    <h1>암웨이 것모닝 프론트</h1>
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/sub">Sub</router-link>
    </nav>
  </header>
</template>

<script>
import { router } from "vue-router";
export default {
  name: "AppHeader",
};
</script>
