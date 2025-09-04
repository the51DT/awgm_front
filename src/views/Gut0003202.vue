<template>
  <div class="content-area">
    <ContentHead title="팀원 상세" headType="ty02" :leftArea=true />
    <div class="team-box-wrap child-manage">
      <div class="conts-area">
        <div class="profile-area small">
          <div class="img-wrap">
            <img class="ico-logo" :src="require(`@/assets/images/ico_profile.png`)" alt="프로필 이미지">
          </div>
          <div class="text-wrap manage">
            <h3> 김사무엘 주니어 </h3>
          </div>
        </div>
        <div class="badge-btn-wrap">
          <button> 전체 배지 보기 <img src="../assets/images/icon_arrow_r_gray.svg" /> </button>
        </div>
        <div class="card card--d8border card--p20 card--shadowc2">
          <!-- 것모닝 핀/뱃지 둘 다 보유 시 -->
          <div class="team-detail">
            <div class="team-detail-pin">
              <p class="title"> 것모닝핀</p>
              <BadgeDefault img="pin--diamond.svg" pointColor="gray"> 에메랄드 </BadgeDefault>
            </div>
            <div class="team-detail-pin">
              <p class="title"> 대표 배지</p>
              <BadgeDefault img="badge--happy_new_year.svg" pointColor="gray"> 새해 첫날 </BadgeDefault>
            </div>
          </div>
          <!-- 것모닝 핀/뱃지 둘 중 하나만 보유 시 -->
          <!-- <div class="team-detail">
            <div class="team-detail-pin">
              <p class="title"> 것모닝핀</p>
              <BadgeDefault img="pin--diamond.svg" width="w-80" pointColor="use-profile"> 새해 첫날 </BadgeDefault>
            </div>
          </div> -->

          <div class="card__top">
            <div class="card__text__list manage">
              <dl>
                <dt>팀 가입일</dt>
                <dd>2024.09.09</dd>
              </dl>
              <dl>
                <dt>인증횟수</dt>
                <dd>223/1000회</dd>
              </dl>
            </div>
          </div>

        </div>
      </div>
      <div class="team-btn-wrap ">
        <div class="btn-area ty03">
          <CustomButton color="light" class="ty02">팀에서 내보내기</CustomButton>
        </div>
      </div>
    </div>
  </div>

</template>
<style>
.team-box-wrap .btn-area {
  margin-bottom: 0;
}
</style>

<script>
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from "@/components/CustomButton.vue";
import BadgeDefault from "@/components/BadgeDefault.vue"

export default {
  name: "Gut_0003202",
  components: {
    ContentHead,
    CustomButton,
    BadgeDefault,
  },
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
};
</script>
