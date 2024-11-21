<template>
  <PopupDefault>
    <template v-slot:title>
      인증완료
    </template>
    <template v-slot:cont>
      <p class="gray_text">2025년2월 12일<br/>미션 인증이 완료되었습니다.</p>
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
  name: "AppSub",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
