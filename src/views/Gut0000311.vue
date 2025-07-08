<template>
  <PopupDefault>
    <template v-slot:cont>
      <p class="wrong">
        <span>비밀번호 찾기</span>를
        <br />
        요청하시겠습니까?
      </p>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="md" color="light">취소</CustomButton>
        <CustomButton size="md">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut0000311",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
