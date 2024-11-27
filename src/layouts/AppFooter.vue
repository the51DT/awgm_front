<template>
  <footer :class="white === false ? 'footer' : 'footer footer--white'">
    <div class="footer__top">
      <router-link class="footer__top--link" to="#">이용약관</router-link>
      <router-link class="footer__top--link" to="#">개인정보처리방침</router-link>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom--call">
        <div>
          <img :src="white === false ? require(`@/assets/images/footer_call.svg`) : require(`@/assets/images/footer_call_white.svg`)">
          <span>고객센터</span>
        </div>
        <div>
          1588-0080
        </div>
      </div>
      <div class="footer__bottom--address">
        한국암웨이(주) 서울특별시 강남구 영동대로 517 27층<br>
        (삼성동, 아셈타워) (대표이사: 신은자)<br>
        사업자 등록번호: 120-81-03391 
      </div>
      <div class="footer__bottom--copy">
        ALL CONTENTS Copyright ⓒ 2024<br>
        Amway Korea LTD.ALL RIGHTS RESERVED
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    white: {
      type: Boolean,
      default: false
    },
  }
};
</script>
