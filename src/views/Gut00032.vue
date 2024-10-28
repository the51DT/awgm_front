<template>
  <div class="content-area">
    <ContentHead title="팀원 관리" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="conts-area">
        <div class="profile-area small">
          <div class="img-wrap on-flag"> <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
            <img class="ico-logo" :src="require(`@/assets/images/content/dummy-profile-img.png`)" alt="프로필 아이콘" />
          </div>
          <div class="text-wrap">
            <h4 class="profile-name">김사무엘 유리카 닉슨</h4>
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
                <dd>223/1000회</dd>
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

        <!-- calendar 영역 -->
        <div class="calendar">
          <VCalendar />
        </div>
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
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from "@/components/CustomButton.vue";
import VCalendar from "@/components/VCalendar.vue";

export default {
  name: "Gut_00032",
  components: {
    ContentHead,
    CustomButton,
    VCalendar,
  },
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },  
};
</script>
