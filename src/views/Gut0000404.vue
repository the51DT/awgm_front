<template>
  <PopupDefault>
    <template v-slot:title>
      팀 활동 종료
    </template>
    <template v-slot:cont>
      <p class="gray_text">
        <b>팀장김웨이</b>님의 <br />
        <b>아침마다 오 마이 GUT Morning</b>팀<br />
        활동이 종료되었습니다. <br />
      </p>
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
  name: "Gut0000404",
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
