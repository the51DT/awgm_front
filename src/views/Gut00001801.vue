<template>
  <PopupDefault sm>
    <template v-slot:title>
      <p class="font--c11"> $닉네임$님을 <br />
        팀에서 내보내시겠습니까? </p>
    </template>
    <template v-slot:cont>
      <p class="font--c11"> 팀에서 내보낸다면, <br />
        팀내의 모든 활동 내역이 삭제 됩니다. </p>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="sm" color="light">취소</CustomButton>
        <CustomButton size="sm">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "LoginMain",
  components: {
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>

<style scoped></style>
