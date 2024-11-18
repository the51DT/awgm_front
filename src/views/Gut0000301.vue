<template>
  <PopupDefault>
    <template v-slot:title>
      <!-- 자녀 개인정보 수집 이용 동의 GUT_00003_01 -->
      자녀 개인정보 수집 이용 동의
      <!-- 개인정보 제3자 제공 이용동의 GUT_00003_02 -->
      <!-- 개인정보 제3자 제공 이용동의 -->
      <!-- 자녀의 팀 참가 동의 GUT_00003_03 -->
      <!-- 자녀의 팀 참가 동의 -->
      <!-- 개인정보 제3자 제공 이용동의 GUT_00003_04 -->
      <!-- 개인정보 제3자 제공 이용동의 -->
    </template>
    <template v-slot:cont>
      <div class="box-wrap">
        <div class="box-gray">
          <!-- 자녀 개인정보 수집 이용 동의 GUT_00003_01 -->
          <div class="terms-conts">
            ㈜한국암웨이는 것모닝(Gut Morning) 서비스 제공을 위하여 귀하의 자녀의 개인정보를 수집·.활용합니다. 귀하는 아래 동의를 거부할 권리가 있으며, 필수 동의를 거부할 경우 서비스 이용이 제한됩니다.<br/>
            <br/>
            [필수 수집 항목] 아이디, 닉네임, 인증 횟수, 인증 사진, 접속로그, 쿠키 (Cookie)<br/>
            (법정대리인 동의 인증 시) 한국암웨이 회원 ID, 비밀번호<br/>
            [수집 이용 목적] Gut Morning 서비스 내 이용자 식별 및 회원관리, 각종 서비스 관련 편의, 혜택 제공 및 고지사항 전달<br/>
            [보유기간] <span>동의 철회 또는 서비스 탈퇴 시 지체 없이 파기</span>
          </div>
          <!-- 개인정보 제3자 제공 이용동의 GUT_00003_02 -->
          <!-- <div class="terms-conts">
            것모닝(Gut Morning) 서비스 내 이용자 식별, 회원관리 및 것모닝(Gut Morning) 서비스 제공, 회원비교식별을 위하여 귀하에 대한 개인정보를 귀하의 부모 또는 법정대리인에게 제공합니다. 아래 동의를 거부할 권리가 있으나, 이를 거부하는 경우 것모닝 마이크로사이트 가입이 불가합니다.<br/>
            <br/>
            [제공 받는 자] 귀하의 부모 또는 법정대리인<br/>
            [필수 제공 항목] 아이디, 닉네임, 인증 횟수, 인증 사진, 접속로그, 쿠키 (Cookie)<br/>
            [제공 목적] Gut Morning 서비스 내 이용자 식별 및 회원관리, 각종 서비스 관련 편의, 혜택 제공 및 고지사항 전달, 것모닝 서비스 내 부모 대시보드 운영 및 부모의 자녀 활동 관리<br/>
            [보유기간] <span>동의 철회 또는 서비스 탈퇴 시 지체 없이 파기</span>
          </div> -->
          <!-- 자녀의 팀 참가 동의 GUT_00003_03 -->
          <!-- <div class="terms-conts">
            미성년자녀의 것모님 (Gut Morning) 서비스 내 팀 챌린지 참가에 동의합니다.<br/>
            가입을 신청한 팀장은 귀하의 자녀의 닉네임과 인증 횟수를 확인할 수 있습니다.<br/>
            귀하의 자녀의 활동 정보를 대시 보드에서 볼 수 있습니다.<br/>
          </div> -->
          <!-- 개인정보 제3자 제공 이용동의 GUT_00003_04 -->
          <!-- <div class="terms-conts">
            것모닝(Gut Morning) 서비스 내 이용자 식별, 회원관리 및 것모닝(Gut Morning) 서비스 제공, 회원비교식별을 위하여 귀하의 개인정보를 가입을 신청한 팀의 팀장에게 제공합니다. 해당 정보는 동의 철회나 서비스 탈퇴 시 또는 제공 목적 달성 시 지체없이 파기됩니다. 아래 동의를 거부할 권리가 있으며, 필수 동의를 거부할 경우 서비스 이용이 제한됩니다.<br/>
            <br/>
            [제공을 받는 자] 팀장<br/>
            [필수 제공 항목] 닉네임, 인증 횟수, 인증 사진<br/>
            [이용목적] 팀 가입 및 활동 참가, 팀원의 미션 인증 확인<br/>
            [제공 기간] 팀 탈퇴 및 개인정보 제3자 제공 동의 철회 시<br/>
            [보유기간] <span>동의 철회 또는 서비스 탈퇴 시 지체 없이 파기</span>
          </div> -->
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
