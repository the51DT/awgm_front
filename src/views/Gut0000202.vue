
<template>
  <PopupDefault full>
    <template v-slot:full>
      <div class="content-area">
        <ContentHead title="법정대리인 동의" headType="ty02" :rightArea=true />
        <div class="login-form">
          <div class="form-box">
            <div class="box-wrap">
              <div class="box-gray">
                <dl>
                  <dt>팀명</dt>
                  <dd>아침마다 오 마이 GUT Morning</dd>
                </dl>
                <dl>
                  <dt>팀장</dt>
                  <dd>팀장김웨이</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="form-box">
            <h4 class="title">부모계정 인증</h4>
            <ul class="info--list">
              <li>* 자녀계정일 경우 부모의 동의가 필요합니다.</li>
            </ul>
            <div class="input-area">
              <InputField placeholder="ABO 번호/Member 아이디" />
              <InputField type="password" placeholder="비밀번호" />
            </div>
            <div class="btn-area ty02">
              <p class="label-txt">인증이 완료되었습니다.</p>
              <CustomButton size="sm" color="gray">인증</CustomButton>
            </div>
          </div>
          <div class="btn-group">
            <!-- 10.16 수정 ty-chk on 클래스 추가시, active 처리됨 : 미체크가 디폴트 /           
              버튼 선택시 약관동의팝업 호출 -> 동의 선택 시 팝업 닫기 및 체크 활성화  -->
              <CustomButton color="dark" class="ty-chk"><span>자녀 개인정보 수집 이용 동의</span></CustomButton>
              <!-- <CustomButton color="dark" class="ty-chk on"><span>자녀 개인정보 수집 이용 동의</span></CustomButton>  -->
              <!-- 1017 추가 : 기획 변경 해당 화면에 추가 버튼 생성됨 -->
              <CustomButton color="dark" class="ty-chk"><span>개인정보 제3자 제공 이용동의</span></CustomButton> 
            <CustomButton>로그인</CustomButton>
          </div>
        </div>
      </div>
    </template>
  </PopupDefault>
</template>

<script>
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import ContentHead from "@/components/ContentHead.vue";
import PopupDefault from "@/components/PopupDefault.vue";

export default {
  name: "Gut_0000202",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    InputField,
    CustomButton,
    ContentHead,
    PopupDefault,
  },
};
</script>
