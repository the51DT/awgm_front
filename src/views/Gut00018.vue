<template>
  <div class="content-area">
    <ContentHead title="전체 팀원 보기" :leftArea=true headType="ty02" />
    <div class="team-box-wrap">
      <div class="list-conts-wrap">
        <div class="card card--border card--p16 card--shadowc2 card--link">
          <!-- 강퇴버튼 -->
          <button type="button" class="kickout-btn isLeader"> 강퇴 </button>
          <div class="card__top">
            <div class="card__top__profile_img">
                <div class="profile_img">
                  <div class="profile_img__info">
                    <div class="user_img-wrap on-flag">
                      <div class="user_img">
                        <img :src="require(`@/assets/images/card_profile_1.png`)" alt="프로필 이미지" />
                      </div>
                    </div>
                    <p class="user__tit"> 팀장 김웨이 </p>
                  </div>
                </div>
              </div>
            <div class="card__text__list ty02 team-list-view">
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TopButton></TopButton>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import TopButton from "@/components/TopButton.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "LoginMain",
  components: {
    ContentHead,
    TopButton,
    CustomButton, 
  },
};
</script>

<style scoped></style>