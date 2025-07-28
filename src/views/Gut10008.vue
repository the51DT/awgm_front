<template>
  <!-- 마이 웰니스랩 -->
  <!-- 챌린지 단건진행 시 -->
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
          <p class="font--c11 font--700 font--ls2">성공조건 <span class="if-terms"> 팀 인증 <i class="font--green">80%</i> 이상
            </span></p>
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

    <!-- 노화 속도개선 추가 미션 섹션-->
    <div class="card card--border card--shadow00 card--p20 challenge__card--main">
      <div class="challenge__card--main__top">
        <div>
          <div class="challenge__card--main__top__text-wrap">
            <p class="font--c11 font--700 font--ls2" style="display: flex;">
              노화 속도 개선 추가 미션
              <span class="green">도전</span>
            </p>
            <p class="font--c66"> 도전 방법
              <button class="traffic_reward_btn__open">
                <img style="margin-left: 2px;" src="@/assets/images/icon_content_que_mark.svg"
                  alt="나의 챌린지 보상 신호등 설명 툴팁 아이콘" />
              </button>
            </p>
          </div>

          <!-- <div class="traffic_reward">
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
                <div class="challenge__card--badge">
                  <div class="challenge__badge purchase">
                    <img src="@/assets/images/ico-purchase-badge.svg" alt="것모닝 구매 완료 아이콘" />
                    <span> 것모닝 구매 완료 </span>
                  </div>
                </div>
                <p class="traffic_reward_btn__pop_text"> 챌린지 시작일 기준 최근 2개월 이내 <br />
                  것모닝(푸로틴&유산균) 제품 구매 여부 </p>
              </div>
            </div>
        </div> -->
          <p class="font--c66 font--ls1 challenge__card--traffic">
            마이웰니스 랩에서 분석된 노화속도가 챌린지 참여를 통해 개선될 경우 추가 보상이 지급됩니다.
          </p>
        </div>
      </div>

      <DashBoard :value="1.09" :beforeValue="0.75" />

      <div class="challenge__card--main__bottom">
        <p class="desc">
          노화 속도가 개선되지 않았습니다. <br />
          다음에 다시 도전해보세요.
        </p>
        <!-- <p class="desc stamp">
          노화 속도 1배속 개선
        </p> -->
        <div class="challenge__card--main__bottom-result">
          <div class="result-box first">
            <div class="result-box__date">
              <p> $2025년 4월 1일$ </p>
              <p><b> 1차 분석 결과</b> </p>
            </div>
            <div class="result-box__aging-rate">
              <p class="result-box__aging-rate--text"> 노화속도 </p>
              <div>
                <span> x </span>
                <p class="result-box__aging-rate--num first"> 1.09 </p>
              </div>
            </div>
          </div>
          <!-- 2차결과 O -->
          <div class="result-box second">
            <div class="result-box__date">
              <p> $2025년 4월 2일$ </p>
              <p><b> 2차 분석 결과</b> </p>
            </div>
            <div class="result-box__aging-rate">
              <p class="result-box__aging-rate--text"> 노화속도 </p>
              <div>
                <span> x </span>
                <p class="result-box__aging-rate--num second"> 1.57 </p>
              </div>
            </div>
          </div>
          <!-- 2차결과 X 시 .no-result 클래스 추가-->
          <!-- <div class="result-box no-result">
            <p>
              팀 미션 성공 후 <br />
              2차 분석 결과를<br />
              측정해 주세요.
            </p>
            <p>
              (챌린지 종료일 이후 <br />
              2개월 이내)
            </p>
          </div> -->
        </div>

        <!-- 2차 건강 분석 결과 조회 전 -->
        <!-- <div class="btn-wrap">
          <CustomButton size="md-b12"> 2차 건강 분석 결과 조회하기 </CustomButton>
        </div> -->

        <!-- 2차건강 분석결과 조회 후 -->
        <!-- <div class="btn-wrap">
          <CustomButton size="md-b12"> 2차 건강 분석 결과 다시 불러오기 </CustomButton>
        </div> -->

        <!-- 노화속도 개선 성공 시 - 1차 건강 분석 결과 다시 불러오기 -->
        <div class="btn-wrap">
          <CustomButton size="md-b12"> 1차 건강 분석 결과 다시 불러오기 </CustomButton>
        </div>
        <div class="result-view-date">
          <p> 분석 결과 조회 가능일 </p> <span>D-$45$ </span>
        </div>
      </div>
    </div>


    <!-- calendar 영역 -->
    <div class="calendar">
      <VCalendar :show-detail="true">
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

import DashBoard from "@/components/DashBoard.vue"

import tabFn from "@/plugins/common.js";
import layerClose from "@/plugins/common.js";
export default {
  name: "Gut_10008",
  components: {
    CustomButton,
    AppNav,
    VCalendar,
    DashBoard,
  },
  mounted() {
    commonJs.posValue(document.querySelectorAll(".card--per__target"));

    tabFn.tabFn();
    layerClose.layerClose("traffic_reward");
  },
};
</script>

<style scoped>
.font--c66.font--ls1.mt-8 {
  margin-top: 8px;
}
</style>
