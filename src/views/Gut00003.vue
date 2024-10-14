<template>  
  <div class="content-area">
    <ContentHead :leftArea=true />
    <div class="content-top">
      <div class="login-wrap">
        <div class="login-intro">
          <img class="ico-logo" :src="require(`@/assets/images/content/conts-ico_login01.png`)" alt="자녀계정 등록 아이콘">
          <h4 class="ico-title">자녀계정 등록</h4>
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
          <p class="label-txt">인증이 완료되었습니다.</p>
          <CustomButton size="sm" color="gray">인증</CustomButton>
        </div>
        <div class="btn-area">
          <CustomButton color="dark" class="ty-chk"><span>법정대리인 개인정보 활용 동의</span></CustomButton>
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

<script>

import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import ContentHead from "@/components/ContentHead.vue";

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
  },
};
</script>
