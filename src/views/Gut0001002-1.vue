<template>
  <PopupDefault sm>
    <template v-slot:title>
      <p class="font--c11">이전 팀의 팀원 초대하기</p>
    </template>
    <template v-slot:cont>
      <ul class="info--list">
        <li class="gray_text"> 이전 팀 목록 </li>
      </ul>
      <div class="filter">
        <InputField type="select" placeholder="선택" :options="['전체', '오 마이 GUT Morning', '팀 이름', '팀 이름', '팀 이름', '팀 이름']" />
      </div>
      <p class="font--c66">초대하고자 하는 이전 팀을 선택 후 하단 버튼 선택 시
        해당 팀 모든 팀원에게 초대 링크가 발송됩니다</p>
        <CustomButton size="md" color="gray">
        초대하기
      </CustomButton>
    </template>
  </PopupDefault>
  <div class="popup--toast">
    초대링크를 발송했어요
  </div>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import InputField from "@/components/InputField.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "LoginMain",
  components: {
    PopupDefault,
    CustomButton,
    InputField
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>

<style scoped>
  li.gray_text{
    margin-bottom: 4px;
  }

  p.font--c66{
    margin: 12px 0;
  }
</style>
