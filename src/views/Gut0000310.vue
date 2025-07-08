<template>
  <PopupDefault>
    <template v-slot:cont>
      <p class="wrong">
        <span>아이디 혹은 비밀번호</span>를
        <br />
      다시 확인해 주세요.
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
  name: "Gut0000310",
  components: {    
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
