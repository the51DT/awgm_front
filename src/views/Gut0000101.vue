<template>
  <PopupDefault>
    <template v-slot:title>
      개인정보 제3자 정보제공 이용동의
    </template>
    <template v-slot:cont>
      <div class="box-wrap">
        <div class="box-gray">
          <div class="terms-conts">
            것모닝(Gut Morning) 서비스 제공을 위하여 귀하의 개인정보를 ㈜한국암웨이에 제공합니다. 아래 동의를 거부할 권리가 있으며, 필수 동의를 거부할 경우 서비스 이용이 제한됩니다.<br/>
            <br/>
            [제공 받는 자] ㈜한국암웨이<br/>
            [필수 제공 항목] 생일, 프로필 사진, 성별, 성명, 휴대전화번호, 출생연도, UID, 닉네임<br/>
            [제공 목적]<br/>
            &#183; 이용자 식별 및 회원관리, 각종 서비스 관련 편의, 혜택 제공 및 고지사항 전달<br/>
            &#183; 고객상담, 불만 및 민원처리<br/>
            &#183; 사업자 윤리강령 소정의 스폰서십 라인 규정 준수 확인<br/>
            &#183; 서비스 및 제품 품질 향상을 위한 통계 작성 등 활용<br/>
            &#183; 기타 ABO 사업관리 및 서비스 지원<br/>
            [보유기간] <span>동의 철회 또는 서비스 탈퇴 시 지체 없이 파기</span>
          </div>
        </div>
      </div>
      <ul class="info--list">
        <li>원활한 서비스 이용을 위하여 <br /> 개인정보 제3자 제공에 대하여 동의가 필요합니다.<br />동의하지 않으실 경우 서비스 이용이 제한됩니다.</li>
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
