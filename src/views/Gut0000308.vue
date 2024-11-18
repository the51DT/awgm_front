<template>
  <PopupDefault>
    <template v-slot:title>
      팀 참여 완료
    </template>
    <template v-slot:cont>
      <span>아침마다 오 마이 GUT Morning</span>에 <br/>참여가 완료되었습니다
      <br/><br/>
      챌린지 성공 보상을 위해<br/>
      <span class="font--green">보상 수령처</span>를 선택해 주세요.
      <div class="popup__select">
        <InputField type="select" placeholder="보상수령처 선택" :options="['값1', '값2', '값3']" />
      </div>
      <p class="notice">※ 챌린지 팀 가입의 경우, 카카오 알림톡을 통해<br>챌린지와 관련된 안내를 받으실 수 있습니다.</p>
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
import InputField from "@/components/InputField.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "AppSub",
  components: {    
    PopupDefault,
    CustomButton,
    InputField,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
