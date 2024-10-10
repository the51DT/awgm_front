<template>
  <div class="login-button mt-3">
    <button class="login-button__item login-button__item--child">
      <span>
        <img :src="require(`@/assets/images/icon_child_login.svg`)">
        <slot>자녀 계정 로그인</slot>
      </span>
      <span>*ABO/Member가 생성한 자녀계정</span>
    </button>
  </div>
</template>
