<template>
  <PopupDefault>
    <template v-slot:cont>
      <p class="wrong">
        <span>비밀번호 찾기</span>가 요청되었습니다.
      </p>
      <p class=" gray333_text" style="margin-top: 8px;">비밀번호는 부모계정으로부터 공유 받은 <br />
        링크에서 재설정이 가능합니다. </p>
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
  name: "Gut0000312",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
