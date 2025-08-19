<template>
  <PopupDefault sm>
    <template v-slot:title>
      마이웰니스 랩 계정 연동
    </template>
    <template v-slot:cont>
      <div class="content-area myWellness">
        <p class="gray333_text">
          마이웰니스 랩 계정 연동 정보는 <br />
          <b> 노화 속도 개선 추가 미션</b>을 위해 필요합니다.
        </p>
        <div class="login-form">
          <div class="form-box mb0">
            <div class="input-area">
              <InputField placeholder="ABO 번호/Member 아이디" />
              <InputField type="password" placeholder="비밀번호" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="md" color="light">취소</CustomButton>
        <CustomButton size="md">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<style></style>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut1000701",
  data() {
    return {
      imageUrl: null,
    };
  },
  components: {
    PopupDefault,
    InputField,
    CustomButton
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
