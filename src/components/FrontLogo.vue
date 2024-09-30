<template>
  <div class="logo">
    <img :src="logoSrc" alt="로고" />
  </div>
</template>

<script>
export default {
  name: "FrontLogo",
  data() {
    return {
      logoSrc: require("@/assets/images/logo.svg"),
    };
  },
};
</script>
<style scoped>
.logo {
  height: 74px;
}
</style>
