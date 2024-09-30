<template>
  <header class="header">
    <h1><FrontLogo /></h1>
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/sub">Sub</router-link>
    </nav>
  </header>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import FrontLogo from "@/components/FrontLogo.vue";

export default {
  name: "AppHeader",
  components: {
    FrontLogo,
  },
};
</script>
