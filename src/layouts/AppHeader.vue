<template>
  <header class="header">
    <div class="header__left">
      <h1><img :src="require(`@/assets/images/header_logo.svg`)"></h1>
      <div class="header__left--cont">
        <img :src="require(`@/assets/images/header_text.svg`)">
        <div class="header__left--text">누적 <span>128만</span>회(<span>10.5만</span>명), 오늘 <span>7.8천</span>회</div>
      </div>
    </div>
    <div class="header__right">
      <template v-if="mypage">
        <img :src="require(`@/assets/images/header_info.svg`)">
        <img :src="require(`@/assets/images/header_faq.svg`)">
      </template>
      <img v-else class="header__right--notice" :src="require(`@/assets/images/header_notice.svg`)">
    </div>
  </header>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import FrontLogo from "@/components/FrontLogo.vue";

export default {
  name: "AppHeader",
  components: {
    // FrontLogo,
  },
  props: {
    mypage: Boolean,
  }
};
</script>
<style scoped></style>
