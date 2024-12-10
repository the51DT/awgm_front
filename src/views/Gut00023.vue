<template>
  <PopupDefault full>
    <template v-slot:full>
      <ContentHead title="챌린지 이력보기" :rightArea=true />
      <!-- 1025 수정 : 챌린지 nodata 케이스 추가 -->
      <!-- 챌린지 이력보기 데이터 존재하는 경우 -->
      <div v-if="challengeData" class="popup--full__cont">
        <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
          <p class="font--800 font--c11 font--ls1">GUT Morning Korea Challenge</p>
          <div class="card__top">
            <div class="card__img">
              <img :src="require(`@/assets/images/card_profile.png`)">
            </div>
            <div class="card__text">
              <p class="font--800 font--ls1">팀명: <span class="font--500">아침마다 오 마이 GUT Morning</span></p>
              <div class="card__info">
                <div class="card__title">챌린지</div>
                <div class="card__num">64명</div>
              </div> 
              <p class="card__date"><strong>1회차 진행 : </strong>2025.09.01 ~ 2025.09.30 (70일)</p>
            </div>
          </div>
          <div class="challenge__card--history--bottom">
            <div>
              <p>나의 인증률</p>
              <p>100%</p>
            </div>
            <div>
              <p>팀 인증율</p>
              <p>100%</p>
            </div>
            <div>
              <p>챌린지 결과</p>
              <p class="success">성공</p>
            </div>
          </div>
        </div>
        <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
          <p class="font--800 font--c11 font--ls1">GUT Morning Korea Challenge</p>
          <div class="card__top">
            <div class="card__img">
              <img :src="require(`@/assets/images/card_profile.png`)">
            </div>
            <div class="card__text">
              <p class="font--800 font--ls1">팀명: <span class="font--500">아침마다 오 마이 GUT Morning</span></p>
              <div class="card__info">
                <div class="card__title">챌린지</div>
                <div class="card__num">64명</div>
              </div> 
              <p class="card__date"><strong>2회차 진행 : </strong>2025.09.01 ~ 2025.09.30 (70일)</p>
            </div>
          </div>
          <div>
            <div>
              <p>나의 인증률</p>
              <p>100%</p>
            </div>
            <div>
              <p>팀 인증율</p>
              <p>100%</p>
            </div>
            <div>
              <p>챌린지 결과</p>
              <p class="fail">실패</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 챌린지 이력보기 데이터 존재하지 않는 경우 -->
      <div v-else class="challenge challenge--main">
        <div class="challenge--main__not">
          <img :src="require(`@/assets/images/challenge_calender.png`)">
          <p class="challenge--main__not__title">참여한 챌린지가 없습니다.</p>
        </div>
      </div>
    </template>
  </PopupDefault>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import PopupDefault from "@/components/PopupDefault.vue";

export default {
  name: "LoginMain",
  props: {
    challengeData: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    ContentHead,
    PopupDefault
  }
};
</script>

<style scoped></style>
