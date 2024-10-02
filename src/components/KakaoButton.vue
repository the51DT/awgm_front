<template>
  <div class="login-button">
    <button class="login-button__item login-button__item--kakao">
      <img :src="require(`@/assets/images/icon_kakao_login.svg`)">
      <slot>카카오 로그인 / 회원가입</slot>
    </button>
  </div>
</template>
