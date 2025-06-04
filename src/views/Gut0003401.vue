<template>
  <PopupDefault>
    <template v-slot:cont>
      <div class="popup__box--middle">
        아직 가입하지 않은 팀이 있습니다. <br />
          확인하시겠습니까?
      </div>

    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="sm" color="light">다시 보지 않기</CustomButton>
        <CustomButton size="sm">확인하러 가기</CustomButton>
      </div>
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
