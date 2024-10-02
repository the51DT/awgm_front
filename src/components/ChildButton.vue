<template>
  <div class="login-button mt-3">
    <button class="login-button__item login-button__item--child">
      <img :src="require(`@/assets/images/icon_child_login.svg`)">
      <slot>자녀 계정 로그인</slot>
    </button>
  </div>
</template>
