<template>
  <PopupDefault>
    <template v-slot:title>
      <p class="c-33"> 팀가입 완료 </p>
    </template>
    <template v-slot:cont>
      <p class="gray333_text">
        2025년 2월 12일 <br />
        팀 가입이 완료되었습니다.
      </p>
    </template>
    <template v-slot:btn>
      <CustomButton size="md">
        확인
      </CustomButton>
    </template>
  </PopupDefault>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut0000314",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
