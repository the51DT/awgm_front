<template>
  <PopupDefault>
    <template v-slot:title>
      개인정보 제3자 제공 이용동의
    </template>
    <template v-slot:cont>
      <div class="box-wrap">
        <div class="box-gray">
          <div class="terms-conts">
            것모닝(Gut Morning) 서비스 내 이용자 식별, 회원관리 및 것모닝(Gut Morning) 서비스 제공, 회원비교식별을 위하여 귀하에 대한 개인정보를 귀하의 부모 또는 법정대리인에게 제공합니다. 아래 동의를 거부할 권리가 있으나, 이를 거부하는 경우 것모닝 마이크로사이트 가입이 불가합니다.<br/>
            <br/>
            [제공 받는 자] 귀하의 부모 또는 법정대리인<br/>
            [필수 제공 항목] 아이디, 닉네임, 인증 횟수, 인증 사진, 접속로그, 쿠키 (Cookie)<br/>
            [제공 목적] Gut Morning 서비스 내 이용자 식별 및 회원관리, 각종 서비스 관련 편의, 혜택 제공 및 고지사항 전달, 것모닝 서비스 내 부모 대시보드 운영 및 부모의 자녀 활동 관리<br/>
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
