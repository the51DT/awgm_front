<template>
  <PopupDefault>
    <template v-slot:cont>
      <div class="popup__box--middle">
        ABO/Member 인증 회원이 아닙니다. <br />
        고객센터로 문의해 주세요.
      </div>

    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
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
  name: "Gut0003403",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
