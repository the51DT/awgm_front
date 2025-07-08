<template>
  <PopupDefault full>
    <template v-slot:full>
      <div class="content-area">
        <ContentHead headType="ty02" :rightArea=true />
        <div class="content-top">
          <div class="login-wrap">
            <div class="login-intro">
              <img class="ico-logo" :src="require(`@/assets/images/content/conts-ico_login01.png`)" alt="자녀계정 등록 아이콘">
              <h4 class="ico-title">자녀계정 등록</h4>
              <p class="ico-desc"> 자녀의 팀 가입은 자녀계정 생성 후 팀 참여 링크를 통해 진행해주세요. </p>
            </div>
          </div>
        </div>
        <div class="login-form">
          <div class="form-box">
            <div class="input-area">
              <!-- inputField__input--warn 클래스 추가된 경우, error 캡션문구 활성화됨 -->
              <InputField placeholder="자녀계정 아이디" caption="아이디는 영대소문자(필수), 숫자의 조합으로 10자 이하로 입력해주세요." warn/>
              <InputField placeholder="자녀계정 닉네임" caption="한글 /영문/숫자 띄어쓰기 포함 20자 이하로입력해주세요." warn/>
              <InputField type="password" placeholder="자녀계정 비밀번호" caption="비밀번호는 영문, 숫자, 특수문자 중 2종류 조합하여 최소 10자리 이상,또는 3종류를 조합하여 최소 8자리 이상 입력해주세요." warn/>
              <InputField type="password" placeholder="자녀계정 비밀번호 확인" caption="비밀번호가 불일치 합니다." warn />
            </div>
            <div class="radio-wrap">
              <InputField type="radio" title="" name="radio1" caption="* 만 14세 미만인 경우 부모의 동의가 필요합니다."
              :radio="[
                {id: 'radio1_1', value: 'radio1_1', checked: true, label: '만 14세 미만입니다.'},
                {id: 'radio1_2', value: 'radio1_2', checked: false, label: '만 14세 이상입니다.'},
              ]" />
            </div>
          </div>
          <div class="bdr-gray"></div>
          <div class="form-box">
            <h4 class="title">부모계정 인증</h4>
            <div class="input-area">
              <InputField placeholder="ABO 번호/Member 아이디" />
              <InputField type="password" placeholder="비밀번호" />
            </div>
            <div class="btn-area ty02">
              <!-- 비활성화 -->
              <CustomButton size="sm">인증하기</CustomButton>
              <!-- 활성화 -->
              <!-- <CustomButton size="sm" color="green">인증하기</CustomButton> -->
              <p class="label-txt">인증이 완료되었습니다.</p>
            </div>
            <div class="btn-area">
              <!-- ty-chk on 클래스 추가시, active 처리됨 : 미체크가 디폴트 /
              버튼 선택시 약관동의팝업 호출 -> 동의 선택 시 팝업 닫기 및 체크 활성화  -->
              <CustomButton color="dark" class="ty-chk on"><span>자녀 개인정보 수집 이용동의</span></CustomButton>
              <!-- <CustomButton color="dark" class="ty-chk on"><span>자녀 개인정보 수집 이용동의</span></CustomButton>  -->
              <!-- 1017 추가 : 기획 변경 해당 화면에 추가 버튼 생성됨 -->
              <CustomButton color="dark" class="ty-chk"><span>개인정보 제3자 제공 이용동의</span></CustomButton> 
              <CustomButton color="dark" class="ty-chk"><span>이용약관 동의</span></CustomButton> 
            </div>
          </div>
          <div class="bdr-gray"></div>
          <div class="form-box">
            <div class="btn-area"> 
              <!-- 기본 버튼 케이스 -->
              <CustomButton>등록완료</CustomButton>
              <!-- disabled 버튼 케이스 -->
              <CustomButton disabled>등록완료</CustomButton>
            </div>
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
  name: "Gut_00003",
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
