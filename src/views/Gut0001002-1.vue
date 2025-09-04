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
        <InputField type="select-placeholder" placeholder="선택"  
        :options="teamOptions"
        @change="handleTeamChange" />
      </div>
      <p class="font--c66">팀원 모두에게 일괄로 초대 메시지가 전송됩니다.<br />
        팀원은 초대받은 팀 목록에서 <span style="font-weight:800;"> 참여하기</span>를 선택해야 <br />
        팀에 참여됩니다. </p>
        <CustomButton size="md" :color="selectedTeam ? 'black' : 'gray-b9'">
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
