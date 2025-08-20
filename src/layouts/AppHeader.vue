<template>
  <header class="header" :class="{ 'bg-green': isBgGreen === true }">
    <div class="header__left">
      <h1><img :src="logoSrc" alt="로고" /></h1>
      <div class="header__left--cont">
        <img :src="textSrc" />
        <div class="header__left--text">누적 <span> nnn만</span>회(<span>nn.n만</span>명), 오늘 <span>n.n천</span>회</div>
      </div>
    </div>
    <div class="header__right">
      <template v-if="mypage">
        <img :src="require(`@/assets/images/header_info.svg`)">
        <img :src="require(`@/assets/images/header_faq.svg`)">
      </template>
      <object v-else class="header__right--notice">
        <img v-if="hasNotice" :src="noticeSrc" />
        <img v-else :src="noticeSrcNo" />
      </object>
    </div>
  </header>
</template>

<script>
// eslint-disable-next-line no-unused-vars

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
    isBgGreen: {
      type: Boolean,
      default: false
    },
    hasNotice: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    logoSrc() {
      return this.isBgGreen
        ? require('@/assets/images/header_logo_w.svg')
        : require('@/assets/images/header_logo.svg')
    },
    textSrc() {
      return this.isBgGreen
        ? require('@/assets/images/header_text_w.svg')
        : require('@/assets/images/header_text.svg')
    },
    noticeSrc() {
      return this.isBgGreen
        ? require('@/assets/images/header_notice_w.svg')
        : require('@/assets/images/header_notice.svg')
    },
    noticeSrcNo() {
      return this.isBgGreen
        ? require('@/assets/images/header_notice_no_w.svg')
        : require('@/assets/images/header_notice_no.svg')
    }
  }
};
</script>
<style scoped></style>
