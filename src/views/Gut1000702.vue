<template>
  <PopupDefault sm>
    <template v-slot:title>
      PIN 번호 입력
    </template>
    <template v-slot:cont>
      <div class="content-area myWellness">
        <p class="gray333_text">
          $이름$
        </p>
        <div class="form-box mb0">
          <div class="input-area">
            <InputField type="pin" />
          </div>
        </div>
        <p class="gray333_text">
          마이웰니스 랩에서 PIN 번호를 확인해 주세요.
        </p>
      </div>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="md-b12" color="light">취소</CustomButton>
        <CustomButton size="md-b12">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>


<script>
// 텍스트로 해놓고 포커스 풀리면 패스워드 타입으로 변경


import PopupDefault from "@/components/PopupDefault.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut1000702",
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
