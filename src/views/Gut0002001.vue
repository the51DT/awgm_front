<template>
  <PopupDefault sm>
    <template v-slot:title>
      비밀번호 재설정
    </template>
    <template v-slot:cont>
      <div class="flex">
        <p>아래 링크를 복사하여<br/>해당 자녀계정으로 공유해주세요.</p>
        <p class="font--green">자녀계정 : <span class="font--green">$닉네임02 (아이디)$</span></p>
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

export default {
  name: "LoginMain",
  components: {
    PopupDefault,
    InputField,
  }
};
</script>

<style scoped></style>
