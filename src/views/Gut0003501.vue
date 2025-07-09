<template>
  <PopupDefault full :isTopBtn="false">
    <template v-slot:full>
      <div class="activity-content-area">
        <ContentHead title="대표 배지 설정" :rightArea=true />
        <!-- hasBadges == true일 시 획득한 배지 화면 출력 -->
        <div class="represent__pop" v-if="hasBadges == true">
          <div class="activity__area_badge-section">
            <div class="badge-box-wrap">
              <!-- 선택 시 click 클래스 추가 -->
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--mission_streak_10.svg">10일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--mission_streak_20.svg">20일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--mission_streak_30.svg">30일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--mission_streak_60.svg">60일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--mission_streak_90.svg">90일 연속 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--event_figure_richDevos.svg">리치 디보스 탄생일</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--event_figure_jayVanAndel.svg">제이 벤 엔델 탄생일</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--amway_global.svg">한국암웨이 창립기념일 </BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--amway_global.svg">파운더스데이 </BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--happy_new_year.svg">새해 첫날</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--happy_chuseok.svg">추석</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--mission_start.svg">첫 인증</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--family_day.svg">패밀리데이</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--childrens_day.svg">어린이날</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--octopus_mode.svg">문어발</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--happy_birthday.svg">나의 생일</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--returning_hero.svg">복귀왕</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--early_bird.svg">얼리 것모너</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--womens_day.svg">세계 여성의날</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--earth_day.svg">지구의 날</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--halloween_hustler.svg">고스트 것모닝</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--valentines_day.svg">스윗 것모닝</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--liberation_day.svg">광복절</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--summer_gutmoring.svg">썸머 것모닝</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--winter_gutmoring.svg">윈터 것모닝</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--merry_christmas.svg">메리 크리스마스</BadgeDefault></div>
              <div class="badge-box" @click="toggleClass"> <BadgeDefault img="badge--best_teammate.svg">베스트 팀메이트</BadgeDefault></div>
            </div>
          </div>
          <div class="btn-area ty03">
            <CustomButton color="light" class="ty02">취소</CustomButton>
            <CustomButton>확인</CustomButton>
          </div>
        </div>
        <!-- hasBadges == false일 시 화면 출력 -->
        <div class="represent__pop" v-else>
          <div class="activity__area_badge-section not-badges">
            <div class="activity-badge--not">
              <img :src="require(`@/assets/images/not-badges.svg`)">
              <p class="activity-badge--not__title">아직 획득한 배지가 없어요.</p>
            </div>
          </div>
          <div class="btn-area ty03">
            <CustomButton>확인</CustomButton>
          </div>
        </div>
      </div>
    </template>
  </PopupDefault>
</template>

<style>
  .activity-content-area .activity__area_badge-section.not-badges{
    height: calc(100vh - 140px);
  }
</style>

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
  name: "Gut0003501",
  props: {
    hasBadges: {
      type: Boolean,
      default: true,
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
