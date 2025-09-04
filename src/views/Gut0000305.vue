<template>
  <PopupDefault>
    <template v-slot:title>
      자녀의 팀 참가 동의
    </template>
    <template v-slot:cont>
      <div class="box-wrap">
        <div class="box-gray">
          <div class="terms-conts">
            미성년자녀의 것모닝 (Gut Morning) 서비스 내 챌린지/상시 팀 참가에 동의합니다. <br />
            가입을 신청한 팀장은 귀하의 자녀의 닉네임과 인증 횟수를 확인할 수 있습니다. <br />
            귀하의 자녀의 활동 정보를 대시 보드에서 볼 수 있습니다.
          </div>
        </div>
      </div>
      <ul class="info--list">
        <li>원활한 서비스 이용을 위하여 개인정보 제3자 제공에 대하여 동의가 필요합니다. 동의하지 않으실 경우 서비스 이용이 제한됩니다.</li>
      </ul>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="sm" color="light">동의하지 않음</CustomButton>
        <CustomButton size="sm">동의</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "AppSub",
  components: {
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
