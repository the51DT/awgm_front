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
    <template v-slot:btn>
      <CustomButton size="md">확인</CustomButton>
    </template>
  </PopupDefault>
  <div class="popup--toast">
    URL 복사가 완료되었습니다
  </div>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import InputField from "@/components/InputField.vue";

export default {
  name: "LoginMain",
  components: {
    PopupDefault,
    CustomButton,
    InputField,
  }
};
</script>

<style scoped></style>
