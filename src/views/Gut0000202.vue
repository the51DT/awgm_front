<template>
  <div class="content-area">
    <div class="head-area ty02">
      <!-- <a class="area-left" href="#">
        <img class="ico-logo"
          :src="require(`@/assets/images/icon/ico_arrow_left.png`)"
          alt="이전페이지로 이동"
        />
      </a> -->
      <h2 class="page-title">법정대리인 동의</h2>
      <button type="button" class="area-right">
        <img class="ico-logo"
          :src="require(`@/assets/images/icon/ico_close.png`)"
          alt="닫기"
        />
      </button>
    </div>
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
        <CustomButton color="dark" class="ty-chk"><span>법정대리인 개인정보 활용 동의</span></CustomButton>
        <CustomButton>로그인</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
export default {
  name: "Gut_0000202",
  components: {
    InputField,
    CustomButton,
  },
};
</script>
