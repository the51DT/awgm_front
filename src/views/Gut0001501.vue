<template>
  <PopupDefault>
    <template v-slot:title>
      ABO/Member 회원인증
    </template>
    <template v-slot:cont>
      <div class="content-area myindex">
        <div class="login-form">
          <div class="form-box mb0">
            <div class="input-area">
              <InputField placeholder="자녀계정 아이디" />
              <InputField type="password" placeholder="자녀계정 비밀번호" />
            </div>
          </div>
        </div>

      </div>

    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="sm" color="light">취소</CustomButton>
        <CustomButton size="sm">확인</CustomButton>
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
  name: "Gut0000402",
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
  },
};
</script>
