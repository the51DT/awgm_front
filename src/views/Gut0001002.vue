<template>
  <PopupDefault sm>
    <template v-slot:title>
      <p class="font--c11">팀 초대하기</p>
    </template>
    <template v-slot:cont>
      <CustomButton size="md" color="yellow">
        카카오톡으로 초대하기
      </CustomButton>
      <CustomButton size="md" color="black">
        초대링크 복사하기
      </CustomButton>
      <p class="font--c66">초대링크를 복사하여<br/>문자 또는 SNS 등으로 팀원을 초대하세요</p>
      <CustomButton size="md" color="black" class="last-btn">
        이전 팀의 팀원 초대하기
      </CustomButton>
    </template>
  </PopupDefault>
  <div class="popup--toast">
    초대링크를 복사했어요
  </div>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "LoginMain",
  components: {
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>

<style scoped>
  .last-btn{
    margin-top: 24px;
  }
</style>
