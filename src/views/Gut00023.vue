<template v-slot:full>
  <!-- 
    n회차 진행, 
    성공보상 부분 텍스트 컬러와 아까 말씀드린 챌린지, 
    인원 뱃지 텍스트 크기와 형태, 크기도 일부 변경되어 함께 확인
  -->
  <ContentHead title="챌린지 이력보기" headType="ty02" :leftArea="true" />
  <!-- 1025 수정 : 챌린지 nodata 케이스 추가 -->
  <!-- 챌린지 이력보기 데이터 존재하는 경우 -->
  <div v-if="challengeData" class="popup--full__cont pb-50">
    <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
      <p class="font--800 font--c11 font--ls1 font--size18">GUT Morning Korea Challenge</p>
      <div class="card__top">
        <div class="card__img">
          <img :src="require(`@/assets/images/challenge_profile.png`)">
        </div>
        <div class="card__text">
          <div>
            <p class="font--800 font--ls1"> <span> 팀명 </span> 아침마다 오 마이 GUT Morning</p>
            <div class="card__info">
              <div class="card__title card__title--challenge">챌린지</div>
              <div class="card__num">64명</div>
            </div>
          </div>
          <div class="card__date grid">
            <p> <strong class="font-800"> 2회차 진행 </strong></p>
            <p> 2025.09.01 ~ 2025.09.30 / (70일) </p>
          </div>
        </div>
      </div>
      <div class="challenge__card--history--bottom">
        <div>
          <p>나의 인증률</p>
          <p>100%</p>
        </div>
        <div>
          <p>팀 인증률</p>
          <p>100%</p>
        </div>
        <div>
          <p>챌린지 결과</p>
          <p class="success">성공</p>
        </div>
      </div>
    </div>
    <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
      <p class="font--800 font--c11 font--ls1 font--size18">GUT Morning Korea Challenge</p>
      <div class="card__top">
        <div class="card__img">
          <img :src="require(`@/assets/images/challenge_profile.png`)">
        </div>
        <div class="card__text">
          <div>
            <p class="font--800 font--ls1"> <span> 팀명 </span> 아침마다 오 마이 GUT Morning</p>
            <div class="card__info">
              <div class="card__title card__title--challenge">챌린지</div>
              <div class="card__num">64명</div>
            </div>
          </div>
          <div class="card__date grid">
            <p> <strong class="font-800"> 2회차 진행 </strong></p>
            <p> 2025.09.01 ~ 2025.09.30 / (70일) </p>
          </div>
        </div>
      </div>
      <div class="challenge__card--history--bottom">
        <div>
          <p>나의 인증률</p>
          <p>100%</p>
        </div>
        <div>
          <p>팀 인증률</p>
          <p>100%</p>
        </div>
        <div>
          <p>챌린지 결과</p>
          <p class="success">성공</p>
        </div>
      </div>
    </div>
    <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
      <p class="font--800 font--c11 font--ls1 font--size18">GUT Morning Korea Challenge</p>
      <div class="card__top">
        <div class="card__img">
          <img :src="require(`@/assets/images/challenge_profile.png`)">
        </div>
        <div class="card__text">
          <div>
            <p class="font--800 font--ls1"> <span> 팀명 </span> 아침마다 오 마이 GUT Morning</p>
            <div class="card__info">
              <div class="card__title card__title--challenge">챌린지</div>
              <div class="card__num">64명</div>
            </div>
          </div>
          <div class="card__date grid">
            <p> <strong class="font-800"> 1회차 진행 </strong></p>
            <p> 2025.09.01 ~ 2025.09.30 / (70일) </p>
          </div>
        </div>
      </div>
      <div class="challenge__card--history--bottom">
        <div>
          <p>나의 인증률</p>
          <p>100%</p>
        </div>
        <div>
          <p>팀 인증률</p>
          <p>100%</p>
        </div>
        <div>
          <p>챌린지 결과</p>
          <p class="success">성공</p>
        </div>
      </div>
    </div>
    <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
      <p class="font--800 font--c11 font--ls1 font--size18">GUT Morning Korea Challenge</p>
      <div class="card__top">
        <div class="card__img">
          <img :src="require(`@/assets/images/challenge_profile.png`)">
        </div>
        <div class="card__text">
          <div>
            <p class="font--800 font--ls1"> <span> 팀명 </span> 아침마다 오 마이 GUT Morning</p>
            <div class="card__info">
              <div class="card__title card__title--challenge">챌린지</div>
              <div class="card__num">64명</div>
            </div>
          </div>
          <div class="card__date grid">
            <p> <strong class="font-800"> 2회차 진행 </strong></p>
            <p> 2025.09.01 ~ 2025.09.30 / (70일) </p>
          </div>
        </div>
      </div>
      <div class="challenge__card--history--bottom">
        <div>
          <p>나의 인증률</p>
          <p>100%</p>
        </div>
        <div>
          <p>팀 인증률</p>
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

<script>
import ContentHead from "@/components/ContentHead.vue";


export default {
  name: "Gut00023",
  props: {
    challengeData: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    ContentHead,
  }
};
</script>

<style scoped></style>
