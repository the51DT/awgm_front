<template>
  <PopupDefault>
    <template v-slot:cont>
      <div class="popup__box--middle">
        $가장 최근 초대받은 팀 명$ 외 $n$개의 <br />
        챌린지팀에 초대 받았습니다.
      </div>

    </template>
    <template v-slot:btn>
      <CustomButton size="md">확인하러 가기</CustomButton>
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
