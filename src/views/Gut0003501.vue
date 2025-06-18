<template>
  <PopupDefault full :isTopBtn="true">
    <template v-slot:full>
      <div class="activity-content-area">
        <ContentHead title="대표 배지 설정" :rightArea=true />
        <div class="represent__pop" v-if="hasBadges == true">
          <div class="activity__area_badge-section">
            <div class="badge-box-wrap">
              <!-- 선택 시 click 클래스 추가 -->
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__continuous_10.svg">10일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__continuous_30.svg">30일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__continuous_60.svg">60일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__continuous_90.svg">90일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__continuous_100.svg">100일 연속 인증</BadgeDefault></div>

              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__participate_1.svg">것모닝코리아 <br />챌린지 1회 성공</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__participate_2.svg">것모닝코리아 <br />챌린지 2회 성공</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__iAmLeader.svg">팀장</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__talentedLeader.svg">팀장의 자질</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__leaderOfLeader.svg">팀장의 정석</BadgeDefault></div>

              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__newYear.svg">새해 첫날</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__firstAttendance.svg">첫 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__birthday.svg">나의 생일</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__welcomBack.svg">복귀왕</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge__bestTeamMate.svg">베스트 팀메이트</BadgeDefault></div>
            </div>
          </div>
          <div class="btn-area ty03">
            <CustomButton color="light" class="ty02">취소</CustomButton>
            <CustomButton>확인</CustomButton>
          </div>
        </div>
        <div class="represent__pop" v-else>
          <div class="activity__area_badge-section not-badges">
            <div class="activity-badge__not">
              <img :src="require(`@/assets/images/not-badges.svg`)">
              <p class="activity-badge__not__title">아직 획득한 배지가 없어요.</p>
            </div>
          </div>
          <div class="btn-area ty03">
            <CustomButton color="light" class="ty02">취소</CustomButton>
            <CustomButton>확인</CustomButton>
          </div>
        </div>
      </div>

    </template>
  </PopupDefault>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import tabFn from "@/plugins/common.js";
import PopupDefault from "@/components/PopupDefault.vue";
import BadgeDefault from "@/components/BadgeDefault.vue";
import CustomButton from "@/components/CustomButton.vue";

const toggleClass = (e) => {
  e.currentTarget.classList.toggle('click');
};

export default {
  name: "LoginMain",
  data(){
    return{
      hasBadges : true,
      
    }
  },    
  components: {
    ContentHead,
    PopupDefault,
    BadgeDefault,
    CustomButton
  },
  mounted() {
    tabFn.tabFn()
  },
  methods: {
    toggleClass(e) {
      const boxes = document.querySelectorAll('.badge-box.click');
      boxes.forEach((el) => el.classList.remove('click'));

      e.currentTarget.classList.add('click');
    },
  },
};
</script>

<style scoped>
  .badge-box-wrap{
    gap: 8px;
  }
  .activity__area_badge-section{
    margin-bottom: 8px;
  }
</style>
