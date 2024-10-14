<template>  
  <div class="content-area">
    <ContentHead :leftArea=true />
    <div class="content-top">
      <div class="login-wrap">
        <div class="login-intro">
          <img class="ico-logo" :src="require(`@/assets/images/content/conts-ico_login01.png`)" alt="자녀계정 로그인 아이콘">
          <h4 class="ico-title">자녀계정 로그인</h4>
        </div>
      </div>
    </div>
    <div class="login-form">
      <div class="form-box mb0">
        <div class="input-area">
          <InputField placeholder="자녀계정 아이디" />
          <InputField type="password" placeholder="자녀계정 비밀번호" />
        </div>
      </div>
      <div class="toggle-wrap">
        <InputField type="toggle" id="toggle" />
        <p class="label-name" title="자동 로그인">자동 로그인</p>
      </div>
      <div class="btn-area">
        <CustomButton>로그인</CustomButton>
        <button type="button" class="btn--text">비밀번호 재설정</button>
      </div>
      <ul class="info--list">
        <li>* 자녀계정은 부모계정에서 생성이 가능합니다.</li>
        <li>* 자녀계정 아이디는 부모계정에서 확인이 가능합니다.</li>
      </ul>
    </div>

  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import ContentHead from "@/components/ContentHead.vue";

export default {
  name: "Gut_00002",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    InputField,
    CustomButton,
    ContentHead,
  }
};
</script>
