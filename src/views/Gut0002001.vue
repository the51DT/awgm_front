<template>
  <PopupDefault sm>
    <template v-slot:title>
      비밀번호 재설정
    </template>
    <template v-slot:cont>
      <div class="flex">
        <p>아래 링크를 복사하여, 자녀가 직접<br/>비밀번호를 재설정 할 수 있게해주세요.</p>
        <p class="font--green">해당 계정 : <span class="font--700">둘째딸 (qwer123)</span></p>
        <InputField
          type="copy"
          placeholder="https://gutmorning.co.kr/child02"
        ></InputField>
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
import layerClose from "@/plugins/common.js";

export default {
  name: "LoginMain",
  components: {
    PopupDefault,
    InputField,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>

<style scoped></style>
