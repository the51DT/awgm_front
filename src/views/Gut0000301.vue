<template>
  <PopupDefault>
    <template v-slot:title>
      자녀 개인정보 수집 이용 동의
    </template>
    <template v-slot:cont>
      <div class="box-wrap">
        <div class="box-gray">
          <div class="terms-conts">
            ㈜한국암웨이는 것모닝(Gut Morning) 서비스 제공을 위하여 귀하의 자녀의 개인정보를 수집·.활용합니다. 귀하는 아래 동의를 거부할 권리가 있으며, 필수 동의를 거부할 경우 서비스 이용이 제한됩니다.<br/>
            <br/>
            [필수 수집 항목] 아이디, 닉네임, 인증 횟수, 인증 사진, 접속로그, 쿠키 (Cookie)<br/>
            (법정대리인 동의 인증 시) 한국암웨이 회원 ID, 비밀번호<br/>
            [수집 이용 목적] Gut Morning 서비스 내 이용자 식별 및 회원관리, 각종 서비스 관련 편의, 혜택 제공 및 고지사항 전달<br/>
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
