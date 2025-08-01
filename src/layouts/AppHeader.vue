<template>
  <header class="header">
    <div class="header__left">
      <h1><img :src="require(`@/assets/images/header_logo.svg`)"></h1>
      <div class="header__left--cont">
        <img :src="require(`@/assets/images/header_text.svg`)">
        <div class="header__left--text">누적 <span> nnn만</span>회(<span>nn.n만</span>명), 오늘 <span>n.n천</span>회</div>
      </div>
    </div>
    <div class="header__right">
      <template v-if="mypage">
        <img :src="require(`@/assets/images/header_info.svg`)">
        <img :src="require(`@/assets/images/header_faq.svg`)">
      </template>
      <object v-else class="header__right--notice">
        <img :src="require(`@/assets/images/header_notice.svg`)">
      </object>
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
    bgClass: {
      type: String,
      default: ' ' // 기본 배경색 클래스
    },
  }
};
</script>
<style scoped></style>
