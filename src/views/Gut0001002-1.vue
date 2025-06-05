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
        <InputField type="select" placeholder="선택"  
        :options="teamOptions"
        @change="handleTeamChange" />
      </div>
      <p class="font--c66">팀원을 초대하고자 하는 이전 팀을 선택해주세요. <br />
        *초대받은 팀원의 경우, 초대받은 팀 목록에서 '참여하기'를 선택해야 팀에 참여됩니다.</p>
        <CustomButton size="md" :color="selectedTeam ? 'primary' : 'gray'">
        초대하기
      </CustomButton>
    </template>
  </PopupDefault>
  <div class="popup--toast">
    초대 알림을 보냈어요
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
  },
  data() {
    return {
      selectedTeam: "", // 선택된 팀 이름
      teamOptions: [
        "오 마이 GUT Morning (34명)",
        "오 마이 GUT Morning (34명)",
        "오 마이 GUT Morning (34명)",
        "오 마이 GUT Morning (34명)",
      ]
    }
  },
  methods: {
    handleTeamChange(event) {
      this.selectedTeam = event.target.value;
    }
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
