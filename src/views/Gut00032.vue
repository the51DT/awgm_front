<template>
    <!-- 팀원 상세 - 챌린지  -->
  <div class="content-area">
    <ContentHead title="팀원 상세" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="conts-area">
        <div class="profile-area small">
          <!-- leaderOn 클래스 추가 시 왕관 추가  -->
          <div class="img-wrap leaderOn">
            <img class="ico-logo" :src="require(`@/assets/images/ico_profile.png`)" alt="프로필 이미지">
          </div>
          <div class="text-wrap manage">
            <h3> 유리카 </h3>
            <h4 class="profile-name font--c66">김사무엘 유리카 닉슨</h4>
          </div>
        </div>
        <!-- 전체 배지 보기 버튼도 위에 감싸서 추가 -->
        <div class="badge-btn-wrap">
          <button> 전체 배지 보기 <img src="../assets/images/icon_arrow_r_gray.svg" /> </button>
        </div>
        <div class="card card--d8border card--p20 card--shadowc2">
          <!-- 것모닝 핀/뱃지 둘 다 보유 시 -->
          <!-- <div class="team-detail">
            <div class="team-detail-pin">
              <p class="title"> 것모닝핀</p>
              <BadgeDefault img="badge__dia.png"> 에메랄드 </BadgeDefault>
            </div>
            <div class="team-detail-pin">
              <p class="title"> 대표 배지</p>
              <BadgeDefault img="badge__dia.png"> 새해 첫날 </BadgeDefault>
            </div>
          </div> -->
          <!-- 것모닝 핀/뱃지 둘 중 하나만 보유 시 -->
          <div class="team-detail">
            <div class="team-detail-pin">
              <p class="title"> 것모닝핀</p>
              <BadgeDefault img="pin--diamond.svg"> 에메랄드 </BadgeDefault>
            </div>
          </div>

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

          <div class="card__bottom challenge__badge-wrap">
            <!-- 인증 완료 시 -->
            <div class="challenge__badge badge--abo not">
              <img src="@/assets/images/ico-abo-completed-badge-not.svg" alt="ABO 인증 완료 뱃지 아이콘" />
              <span> ABO 인증 완료 </span>
            </div>
            <div class="challenge__badge badge--purchase ">
              <img src="@/assets/images/ico-purchase-badge.svg" alt="것모닝 구매 완료 아이콘" />
              <span> 것모닝 구매 완료 </span>
            </div>
            <!-- 미인증 시 -->
            <!-- <div class="challenge__badge badge--abo not">
              <img src="@/assets/images/ico-abo-completed-badge-not.svg" alt="ABO 인증 완료 뱃지 아이콘" />
              <span> ABO 인증 완료 </span>
            </div>
            <div class="challenge__badge badge--purchase not">
              <img src="@/assets/images/ico-purchase-badge-not.svg" alt="것모닝 구매 완료 아이콘" />
              <span> 것모닝 구매 완료 </span>
            </div> -->
          </div>
        </div>      

        <!-- calendar 영역 -->
        <div class="calendar">
          <VCalendar />
        </div>
      </div>
      <!-- <div class="team-btn-wrap">
        <div class="btn-area ty03">
          <CustomButton color="light" class="ty02">팀에서 내보내기</CustomButton>
        </div>
      </div> -->
    </div>
  </div>
  
</template>


<script>
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from "@/components/CustomButton.vue";
import VCalendar from "@/components/VCalendar.vue";
import BadgeDefault from "@/components/BadgeDefault.vue"

export default {
  name: "Gut_00032",
  components: {
    ContentHead,
    CustomButton,
    VCalendar,
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
