<template>
  <PopupDefault>
    <template v-slot:title>
      인증완료
      <!-- color : black 일시 -->
      <!-- <p class="c-33">
        인증완료
      </p> -->
    </template>
    <template v-slot:cont>
      2025년 2월 12일 <br />
      미션 인증이 완료되었습니다.
    </template>
    <template v-slot:btn>
      <CustomButton size="md">
        확인
      </CustomButton>
    </template>
  </PopupDefault>
</template>

<style>

</style>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut0000403",
  components: {
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  },
  methods: {

  }
};
</script>
