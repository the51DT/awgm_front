<template>
  <PopupDefault>
    <template v-slot:title>
      회원 탈퇴 안내
    </template>
    <template v-slot:cont>
      <p class="gray333_text">
        회원탈퇴 시, Gut Morning 챌린지에 대한 <br />
        모든 인증 이력이 삭제되며, <br />
        다시 복구하실 수 없습니다.
        <br />
      </p>
      <p class="gray333_text" style="padding-top: 10px;"> <b> 그래도 탈퇴하시겠습니까? </b> </p>
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
  name: "Gut0001602",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
