<template>
  <div class="challenge challenge--main">
    <button class="link-arrow">챌린지 이력보기<img :src="require(`@/assets/images/icon_link_arrow.svg`)"></button>
    <div class="text__title__wrap">
      <p class="text__title">GUT Morning<br />Korea Challenge</p>
      <p class="text__subtit text__subtit--mt8"><span class="text__subtit--bold">16</span>일째 참여중입니다.</p>
      <!-- 전체 챌린지 종료 시 -->
      <!-- <p class="text__subtit text__subtit--mt8">
        <span class="text__subtit--bold">16</span>일에 챌린지가 종료되었습니다.<br/>
        전체기간의 팀 인증률은 <span class="font--800 font--green">76</span>% 입니다.
      </p> -->
    </div>
    <!-- 서브 챌린지 다건 진행 시 -->
    <button class="challenge--main__banner">
      <p class="tit">1차 미션 성공</p>
      <p class="member">팀원 수 <span class="num">200</span>명</p>
    </button>
    <!-- 전체 챌린지 종료 시 -->
    <!-- <button class="challenge--main__banner">
      <p class="tit">전체 미션 성공</p>
      <p class="member">팀원 수 <span class="num">160</span>명</p>
    </button> -->
    <div class="card card--border card--shadow00 card--p20 challenge__card--main">
      <button><img :src="require(`@/assets/images/icon_arrow_r.svg`)"></button>
      <div class="challenge__card--main__top">
        <p class="font--c33 font--700 font--ls3">팀명: 아침마다 오 마이 GUT Morning</p>
        <div>
          <p class="font--c11 font--700 font--ls2">성공조건 : 팀 인증 <span class="font--green">80%</span> 이상</p>
          <p class="font--c66 font--ls1"><span class="font--800">전체기간 : </span>2025.04.01~2025.06.10 / 70일</p>
          <p class="font--c66 font--ls1"><span class="font--800">2회차 진행 : </span>2025.05.13~2025.06.10 / 35일</p>
          <!-- <p class="font--c66 font--ls1"><span class="font--800">3회차 진행 : </span>2025.05.13~2025.06.10 / 35일</p> -->
        </div>
      </div>
      <div class="challenge__card--main__per">
        <div>
          <p class="font--700 font--ls1">팀 인증률</p>
          <p class="font--700 font--c11 font--ls1"><span class="font--green font--800 font--ls1">40</span>%</p>
        </div>
        <div class="card--per">
          <div class="card--per__gage--wrap">
            <div class="card--per__gage" data-width="40%"></div>
          </div>
          <div class="card--per__comp" data-width="20%">성공!</div>
          <div class="card--per__target" data-left="60%">목표치</div>
        </div>
      </div>
      <p class="font--c66 font--ls1"><span class="font--800">* 목표치란,</span> 챌린지를 성공하기 위하여 오늘까지 달성해야 할 최소한의 인증률을 말합니다.</p>
    </div>
    <!-- calendar 영역 -->
    <div class="calendar">
      <VCalendar>
        <template v-slot:title>
          나의 챌린지 참여 현황
        </template>
      </VCalendar>
    </div>
    <CustomButton>
      챌린지 인증 공유하기
    </CustomButton>
  </div>
  <AppNav :challenge="true"></AppNav>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import AppNav from "@/layouts/AppNav.vue";
import VCalendar from "@/components/VCalendar.vue";
import commonJs from "@/plugins/common.js";

export default {
  name: "Gut_00008",
  components: {
    CustomButton,
    AppNav,
    VCalendar,
  },
  mounted() {
    commonJs.posValue(document.querySelectorAll(".card--per__target"));
  },
};
</script>

<style scoped></style>
