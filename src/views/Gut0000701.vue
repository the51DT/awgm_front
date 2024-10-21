<template>
  <!-- 기본 -->
  <!-- <div class="popup">
    <div class="popup--img">
      <button class="popup--img__close"></button>
      <div class="card--img">
        <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
        <div class="card--img__uploaded">
          <img :src="require(`@/assets/images/challenge_card_bg.png`)">
        </div>
        <div class="card--img__text">
          <p class="card--img__text__date">2024.09.23 (월)</p>
          <p class="card--img__text__title">나의 미션 인증 횟수</p>
          <p class="card--img__text__num"><span>2</span>회</p>
        </div>
        <button class="share-btn"></button>
      </div>
    </div>
  </div> -->
  <!-- 공유하기 버튼 클릭 시 -->
  <div class="popup--pull">
    <ContentHead title="팀 정보" headType="ty03" :rightArea=true>
      <template v-slot:title>
        이미지를 저장하여<br/><span>SNS로</span> 공유해 보세요!
      </template>
    </ContentHead>
    <div class="popup--pull__cont">
      <div class="card--img">
        <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
        <div class="card--img__uploaded">
          <img :src="require(`@/assets/images/challenge_card_bg.png`)">
        </div>
        <div class="card--img__text">
          <p class="card--img__text__date">2024.09.23 (월)</p>
          <p class="card--img__text__title">나의 미션 인증 횟수</p>
          <p class="card--img__text__num"><span>2</span>회</p>
        </div>
        <p class="card--img__title"><span>팀장김웨이</span>님의<br />GUT Morning</p>
      </div>
      <div class="card card--border challenge__calendar--card">
        <!-- calendar 영역 -->
        <div class="calendar">
          <VCalendar />
        </div>
      </div>
      <div class="challenge__btn--wrap">
        <CustomButton color="yellow">카카오로 공유</CustomButton>
        <CustomButton>전체 이미지 저장</CustomButton>
        <CustomButton>오늘 인증 이미지 저장</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import ContentHead from "@/components/ContentHead.vue";
import VCalendar from "../components/VCalendar.vue";

export default {
  name: "Gut_0000701",
  components: {
    CustomButton,
    ContentHead,
    VCalendar
  },
};
</script>
