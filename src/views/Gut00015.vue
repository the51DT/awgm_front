<template>
  <div class="content-area bg-case">
    <div class="my-page-wrap">
      <div class="conts-area">
        <div class="profile-area small">
          <input type="file" id="uploadIcon" class="upload-icon" hidden />
          <label for="uploadIcon" >
            <div class="img-wrap">
              <img class="ico-logo" :src="require(`@/assets/images/icon/ico_profile.png`)" alt="프로필 이미지 수정 아이콘" />
            </div>
          </label>
          <div class="text-wrap">
            <h4 class="profile-name">팀장김웨이</h4>
            <button type="button" class="btn-modify" title="프로필명 변경"><span class="blind">프로필명 변경</span></button>
          </div>
        </div>        
        <div class="card card--border card--p16 card--shadowc2">
          <div class="card__top">
            <div class="card__text__list">
              <dl>
                <dt>팀 가입일</dt> 
                <dd>2024.09.09</dd>
              </dl>
              <dl>
                <dt>인증 횟수</dt>
                <dd>223/1000회 (9월 22회)</dd>
              </dl>
              <dl class="align-ctr">
                <dt>ABO/Member</dt>
                <dd>
                  <p class="badge-info">인증</p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="calender"> 캘린더 영역 </div>
      </div>
      <div class="team-btn-wrap">
        <div class="btn-area ty03">
          <CustomButton color="light">강퇴</CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_00015",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    CustomButton
  },
};
</script>
