<template>
  <PopupDefault>
    <template v-slot:cont>
      <p class="wrong">
        <span> 회원 탈퇴</span>가 <br />
        완료되었습니다.
      </p>
    </template>
    <template v-slot:btn>
      <CustomButton size="md">확인</CustomButton>
    </template>
  </PopupDefault>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut0001603",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
