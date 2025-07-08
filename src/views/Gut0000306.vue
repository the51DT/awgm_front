<template>
  <PopupDefault>
    <template v-slot:title>
      개인정보 제3자 제공 이용동의
    </template>
    <template v-slot:cont>
      <div class="box-wrap">
        <div class="box-gray">
          <div class="terms-conts">
            것모닝(Gut Morning) 서비스 내 이용자 식별, 회원관리 및 것모닝(Gut Morning) 서비스 제공, 회원비교식별을 위하여 귀하의 개인정보를 가입을 신청한 팀의 팀장에게 제공합니다. 해당 정보는 동의 철회나 서비스 탈퇴 시 또는 제공 목적 달성 시 지체없이 파기됩니다. 아래 동의를 거부할 권리가 있으며, 필수 동의를 거부할 경우 서비스 이용이 제한됩니다.<br/>
            <br/>
            [제공을 받는 자] 팀장<br/>
            [필수 제공 항목] 성명, 구매이력, 닉네임, 인증 횟수, 인증 사진<br/>
            [이용목적] 팀 가입 및 활동 참가, 팀원의 미션 인증 확인<br/>
            [제공 기간] 팀 탈퇴 및 개인정보 제3자 제공 동의 철회 시<br/>
            [보유기간] <span>동의 철회 또는 서비스 탈퇴 시 지체 없이 파기</span>
          </div>
        </div>
      </div>
      <ul class="info--list">
        <li>원활한 서비스 이용을 위하여 개인정보 제3자 제공에 대하여 동의가 필요합니다. 동의하지 않으실 경우 서비스 이용이 제한됩니다.</li>
      </ul>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="md" color="light">동의하지 않음</CustomButton>
        <CustomButton size="md">동의</CustomButton>
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
