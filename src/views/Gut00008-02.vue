<template>
  <!-- 챌린지 다건진행 시 -->
  <div class="challenge challenge--main">
    <button class="link-arrow">챌린지 이력보기<img :src="require(`@/assets/images/icon_link_arrow.svg`)"></button>
    <div class="text__title__wrap">
      <p class="text__title">GUT Morning<br />Korea Challenge</p>
      <p class="text__subtit text__subtit--mt8"><span class="text__subtit--bold">16</span>일째 참여중입니다.</p>
    </div>
    <div class="card card--border card--shadow00 card--p20 challenge__card--main">
      <button><img :src="require(`@/assets/images/icon_arrow_r.svg`)"></button>
      <div class="challenge__card--main__top">
        <p class="font--c33 font--700 font--ls3">아침마다 오 마이 GUT Morning</p>
        <div>
          <p class="font--c11 font--700 font--ls2">성공조건 <span class="if-terms"> 팀 인증 <i class="font--green">80%</i> 이상 </span></p>
          <div class="challenge__info-item font--c66 font--ls1">
            <span class="period font--800">전체기간</span>
            <div class="period_date font--c66 font--ls1">
              <span>2025.04.01</span>
              ~
              <span>2025.06.10</span>
              <b class="date_progress"> / 70일</b>
            </div>
          </div>
          <div class="challenge__info-item font--c66 font--ls1">
            <span class="period font--800">2회차 진행중</span>
            <div class="period_date font--c66 font--ls1">
              <span>2025.04.01</span>
              ~
              <span>2025.06.10</span>
              <b class="date_progress"> / 70일</b>
            </div>
          </div>
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
    </div>
    <div class="card card--border card--shadow00 card--p20 challenge__card--main">
      <div class="challenge__card--main__top">
        <div>
          <p class="font--c11 font--700 font--ls2" style="display: flex;">
            나의 챌린지 보상 신호등 
            <button class="traffic_reward_btn__open"> <img style="margin-left: 2px;" src="@/assets/images/icon_content_que_mark.svg" alt="나의 챌린지 보상 신호등 설명 툴팁 아이콘"/> </button>
          </p>
          <p class="font--c66 font--ls1 challenge__card--traffic">
            챌린지 미션 성공 시, ABO/Member 회원인증,
            최근 2개월 내 것모닝 제품 구매 이력 등에 따라
            보상이 차등 지급됩니다.
          </p>
          <div class="traffic_reward">
            <div class="traffic_reward_btn">
              <div class="traffic_reward_btn__pop">
                <button class="traffic_reward_btn__pop__close"></button>
                <div class="challenge__card--badge" style="margin: 0;">
                  <div class="challenge__badge abo">
                    <img src="@/assets/images/ico-abo-completed-badge.svg" alt="ABO 인증 완료 뱃지 아이콘" />
                    <span> ABO 인증 완료 </span>
                  </div>
                </div>
                <p class="traffic_reward_btn__pop_text">마이 > ABO/Member 인증 여부</p>
                <div class="challenge__card--badge" >
                  <div class="challenge__badge purchase">
                    <img src="@/assets/images/ico-purchase-badge.svg" alt="것모닝 구매 완료 아이콘" />
                    <span> 것모닝 구매 완료 </span>
                  </div>
                </div>
                <p class="traffic_reward_btn__pop_text"> 챌린지 시작일 기준 최근 2개월 이내 것모닝 제품 구매 여부 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="challenge__card--badge">
        <!-- 인증 미완료 시 -->
        <div class="challenge__badge not">
          <img src="@/assets/images/ico-abo-completed-badge-not.svg" alt="ABO 인증 완료 뱃지 아이콘" />
          <span> ABO 인증 완료 </span>
        </div>
        <div class="challenge__badge not">
          <img src="@/assets/images/ico-purchase-badge-not.svg" alt="것모닝 구매 완료 아이콘" />
          <span> 것모닝 구매 완료 </span>
        </div>

        <!-- 인증 완료 시-->
        <!-- <div class="challenge__badge">
          <img src="@/assets/images/ico-abo-completed-badge.svg" alt="ABO 인증 완료 뱃지 아이콘" />
          <span> ABO 인증 완료 </span>
        </div>
        <div class="challenge__badge">
          <img src="@/assets/images/ico-purchase-badge.svg" alt="것모닝 구매 완료 아이콘" />
          <span> 것모닝 구매 완료 </span>
        </div> -->
      </div>
      <p class="font--c66 font--ls1 mt-8">* 인증 여부의 경우 전일 기준으로 확인 가능합니다.</p>
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

import tabFn from "@/plugins/common.js";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut_00008",
  components: {
    CustomButton,
    AppNav,
    VCalendar,
  },
  mounted() {
    commonJs.posValue(document.querySelectorAll(".card--per__target"));

    tabFn.tabFn();
    layerClose.layerClose("traffic_reward");
  },
};
</script>

<style scoped>
.font--c66.font--ls1.mt-8{
  margin-top: 8px;
}

</style>
