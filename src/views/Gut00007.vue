<template>
  <!-- 챌린지 홍보 기간인 경우 -->
  <div v-if="challenge" class="challenge challenge--main">
    <button class="link-arrow">챌린지 이력보기<img :src="require(`@/assets/images/icon_link_arrow.svg`)"></button>
    <div class="challenge--main__not">
      <img :src="require(`@/assets/images/challenge_calender.png`)">
      <div>
        <p class="challenge--main__not__title">챌린지 시작 <span class="font--green">D-104</span></p>
        <p class="challenge--main__not__subtit"><span class="font--green font--800">GUT Morning Korea Challenge</span>이 <br class="mo-only"/>2025년 04월 01일에 시작 예정입니다.</p>
      </div>
      <p>챌린지 참여를 위해, <br class="mo-only" />챌린지 시작 전 팀에 참여해주세요.</p>
      <div class="challenge--main__not__box">
        <div>
          <p class="font--c11 font--800">진행 일시</p>
          <p>2025.04.01 ~ 2025.06.10 / <span class="font--c33 font--800">70</span>일</p>
        </div>
        <div>
          <p class="font--c11 font--800">성공 조건</p>
          <p>팀 인증 <span class="font--green font--800">80%</span> 이상</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 챌린지 미진행 (상시중인 경우) -->
  <div v-else class="challenge challenge--main">
    <button class="link-arrow">챌린지 이력보기<img :src="require(`@/assets/images/icon_link_arrow.svg`)"></button>
    <div class="challenge--main__not">
      <img :src="require(`@/assets/images/challenge_calender.png`)">
      <p class="challenge--main__not__title">지금은 진행중인<br />챌린지가 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gut_0007",
  props: {
    challenge: {
      type: Boolean,
      default: true,
    }
  }
};
</script>

<style scoped></style>
