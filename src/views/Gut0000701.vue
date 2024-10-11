<template>
  <!-- 기본 -->
  <!-- <div class="popup">
    <div class="popup--img">
      <button class="popup--img__close"></button>
      <div class="card--img">
        <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
        <img :src="require(`@/assets/images/challenge_card_bg.png`)">
        <div>
          <p>2024.09.23 (월)</p>
          <p>나의 미션 인증 횟수</p>
          <p><span>2</span>회</p>
        </div>
        <button class="share-btn"></button>
      </div>
    </div>
  </div> -->
  <!-- 공유하기 버튼 클릭 시 -->
  <div class="popup--pull">
    <div class="popup--pull__top">
      <p>챌린지 이력보기</p>
      <button class="popup--pull__close"></button>
    </div>
    <div class="popup--pull__cont">
      <div class="card--img">
        <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
        <img :src="require(`@/assets/images/challenge_card_bg.png`)">
        <div>
          <p>2024.09.23 (월)</p>
          <p>나의 미션 인증 횟수</p>
          <p><span>2</span>회</p>
        </div>
        <p><span>팀장김웨이</span>님의<br />GUT Morning</p>
      </div>
      <div class="card card--border">
        <div class="calender">
          캘린더 영역
        </div>
      </div>
      <div>
        <CustomButton color="yellow">카카오로 공유</CustomButton>
        <CustomButton>전체 이미지 저장</CustomButton>
        <CustomButton>오늘 인증 이미지 저장</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "LoginMain",
  components: {
    CustomButton,
  }
};
</script>

<style scoped></style>
