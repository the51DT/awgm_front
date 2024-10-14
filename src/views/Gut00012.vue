<template>
  <div class="content-area">
    <ContentHead title="챌린지 팀 관리" headType="ty02" :leftArea=true />
    <div class="login-form">
      <div class="form-box">
        <h4 class="title">부모계정 인증</h4>
        <ul class="info--list">
          <li>* 자녀계정일 경우 부모의 동의가 필요합니다.</li>
        </ul>
        <div class="input-area">
          <InputField placeholder="ABO 번호/Member 아이디" />
          <InputField type="password" placeholder="비밀번호" />
        </div>
        <div class="btn-area ty02">
          <p class="label-txt">인증이 완료되었습니다.</p>
          <CustomButton size="sm" color="gray">인증</CustomButton>
        </div>
      </div>
      <div class="btn-group">
        <CustomButton color="dark" class="ty-chk"><span>법정대리인 개인정보 활용 동의</span></CustomButton>
        <CustomButton>로그인</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_00012",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    ContentHead,
    InputField,
    CustomButton
  },
};
</script>
