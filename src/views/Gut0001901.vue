<template>
  <PopupDefault sm>
    <template v-slot:title>
      자녀계정 생성
    </template>
    <template v-slot:cont>
      <div class="flex">
        <div>
          <p>아래 링크를 자녀에게 공유하여,<br/>자녀가 직접 계정을 생성할 수 있게 해주세요.</p>
          <p class="notice">*자녀의 팀 가입은 자녀계정 생성 후 <br /> 팀 참여 링크를 통해 진행해주세요.</p>
        </div>
        <InputField
          type="copy"
          placeholder="https://gutmorning.co.kr/child01"
        ></InputField>
        <CustomButton size="md" style="margin-top:8px;">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
  <div class="popup--toast">
    URL 복사가 완료되었습니다
  </div>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "LoginMain",
  components: {
    PopupDefault,
    InputField,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>

