
<template>
  <PopupDefault full>
    <template v-slot:full>
      <div class="content-area">
        <ContentHead title="아이디 비밀번호 재설정" headType="ty02" :rightArea=true />
        <div class="login-form">
          <div class="form-box">
            <div class="box-wrap">
              <div class="img-wrap">
                <img class="ico-logo" :src="require(`@/assets/images/content/conts-ico_lock01.png`)" alt="자녀계정 비밀번호를 재설정 해주세요 이미지" />
                <p class="desc">자녀계정 비밀번호를 재설정 해주세요</p>
              </div>
            </div>
          </div>
          <div class="form-box">
            <div class="input-area">
              <InputField type="password" placeholder="새 비밀번호" title="새 비밀번호" caption="비밀번호는 영문, 숫자, 특수문자 중 2종류 조합하여 최소 10자리 이상,
    또는 3종류를 조합하여 최소 8자리 이상" warn />
              <InputField type="password" placeholder="비밀번호 확인" caption="비밀번호가 일치하지 않습니다." title="비밀번호 확인" warn />
            </div>
          </div>
          <div class="btn-area">
            <CustomButton>확인</CustomButton>
          </div>
        </div>
      </div>
    </template>
  </PopupDefault>
</template>

<script>
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import ContentHead from "@/components/ContentHead.vue";
import PopupDefault from "@/components/PopupDefault.vue";

export default {
  name: "Gut_0000201",
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
    PopupDefault
  },
};
</script>
