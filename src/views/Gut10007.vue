<template>
  <!-- 챌린지 홍보 기간인 경우 -->
  <div v-if="challenge" class="challenge challenge--main">
    <button class="link-arrow">챌린지 이력보기<img :src="require(`@/assets/images/icon_link_arrow.svg`)"></button>
    <div class="challenge--main__not">
      <img :src="require(`@/assets/images/challenge_calender.png`)">
      <div>
        <p class="challenge--main__not__title">챌린지 시작 <span class="font--green">D-104</span></p>
        <p class="challenge--main__not__subtit"><span class="font--green font--800">GUT Morning Korea Challenge</span>이
          <br />2025년 04월 01일에 시작 예정입니다.
        </p>
      </div>
      <p>챌린지 참여를 위해, <br />챌린지 시작 전 팀에 참여해주세요.</p>

      <div class="card card--border card--p20 challenge__card--main">
        <div class="challenge__card--main__top">

          <div class="challenge_method">
            <div class="challenge_method_btn">
              <div class="challenge_method_btn__pop">
                <button class="challenge_method_btn__pop__close"></button>
                <p> 도전 방법!</p>
                <div>
                  <ul>
                    <li>챌린지 시작 전 마이웰니스 랩에서 <br /> 1차 건강 분석 진행 </li>
                    <li>챌린지 성공 시, 챌린지 종료 후 2개월 이내에 <br /> 2차 건강 분석 진행 </li>
                    <li>1차/2차의 분석 결과를 토대로 노화 속도 <br />개선 여부에 따라 추가 보상 지급</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="challenge__card--main__top__text-wrap">
              <p class="font--c11 font--700 font--ls2" style="display: flex;">
                노화 속도 개선 추가 미션
                <span class="green">도전</span>
              </p>
              <p class="font--c66"> 도전 방법
                <button class="challenge_method_btn__open">
                  <img style="margin-left: 2px;" src="@/assets/images/icon_content_que_mark.svg"
                    alt="나의 챌린지 보상 신호등 설명 툴팁 아이콘" />
                </button>
              </p>
            </div>




            <p class="font--c66 font--ls1 challenge__card--traffic">
              마이웰니스 랩에서 분석된 노화속도가 챌린지 참여를 통해 개선될 경우 추가 보상이 지급됩니다.
            </p>
          </div>
        </div>
        <div class="challenge__card--main__bottom">
          <img :src="require(`@/assets/images/dont_proceed_graph_img.svg`)" />
          <CustomButton size="md-b12"> 마이웰니스 랩 연동하기</CustomButton>
        </div>
      </div>





      <div class="challenge--main__not__box">
        <div>
          <p class="font--c11 font--800">진행일시</p>
          <p class="font--c66">2025.04.01 ~ 2025.06.10 / <span class="font--c33 font--800">70</span>일</p>
        </div>
        <div>
          <p class="font--c11 font--800">성공조건</p>
          <p class="font--c66">팀 인증 <span class="font--green font--800">80%</span> 이상</p>
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
import CustomButton from "@/components/CustomButton.vue";
import tabFn from "@/plugins/common.js";
import layerClose from "@/plugins/common.js";
export default {
  name: "Gut_10007",
  components: {
    CustomButton,
  },
  props: {
    challenge: {
      type: Boolean,
      default: true,
    }
  },
  mounted() {
    tabFn.tabFn();
    layerClose.layerClose("challenge_method");
  },
};
</script>

<style scoped></style>
