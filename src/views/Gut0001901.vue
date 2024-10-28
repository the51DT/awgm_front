<template>
  <PopupDefault sm>
    <template v-slot:title>
      자녀계정 생성
    </template>
    <template v-slot:cont>
      <div class="flex">
        <p>아래 링크를 자녀에게 공유하여,<br/>자녀가 직접 계정을 생성할 수 있게 해주세요.</p>
        <InputField
          type="copy"
          placeholder="https://gutmorning.co.kr/child01"
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
