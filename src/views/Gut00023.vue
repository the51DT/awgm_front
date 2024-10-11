<template>
  <div class="popup--pull">
    <div class="popup--pull__top">
      <p>챌린지 이력보기</p>
      <button class="popup--pull__close"></button>
    </div>
    <div class="popup--pull__cont">
      <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
        <p class="font--800 font--c11 font--ls1">GUT Morning Korea Challenge</p>
        <div>
          <img :src="require(`@/assets/images/card_profile.png`)">
          <div>
            <p class="font--800 font--ls1">팀명: <span class="font--500">아침마다 오 마이 GUT Morning</span></p>
            <div>
              <div>챌린지</div>
              <div>64명</div>
            </div>
            <p>2025.09.01 ~ 2025.09.30 (70일)</p>
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
            <p class="success">성공</p>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
        <p class="font--800 font--c11 font--ls1">GUT Morning Korea Challenge</p>
        <div>
          <img :src="require(`@/assets/images/card_profile.png`)">
          <div>
            <p class="font--800 font--ls1">팀명: <span class="font--500">아침마다 오 마이 GUT Morning</span></p>
            <div>
              <div>챌린지</div>
              <div>64명</div>
            </div>
            <p>2025.09.01 ~ 2025.09.30 (70일)</p>
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
  </div>
</template>

<script>
export default {
  name: "LoginMain",
};
</script>

<style scoped></style>
