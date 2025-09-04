<template>
  <div class="content-area">
    <ContentHead title="챌린지 이력보기" headType="ty02" :leftArea="true" />
    <!-- 챌린지 이력보기 데이터 존재하는 경우 -->
    <div v-if="challengeData" class="popup--full__cont pb-50">
      <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
        <button class="card__linkBtn">
          <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
        </button>
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
        <div>
          <p class="font--800 font--ls1 center"> 노화 속도 개선 추가 미션 결과</p>
          <div class="challenge__card--history--bottom">
            <div>
              <p>1차 분석 결과</p>
              <p> x 1.84</p>
            </div>
            <div>
              <p>2차 분석 결과</p>
              <p>x 1.73</p>
            </div>
            <div>
              <p>노화 속도 개선</p>
              <p class="success">성공</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
        <button class="card__linkBtn">
          <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
        </button>
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
        <div>
          <p class="font--800 font--ls1 center"> 노화 속도 개선 추가 미션 결과</p>
          <div class="challenge__card--history--bottom">
            <div>
              <p>1차 분석 결과</p>
              <p> x 1.84</p>
            </div>
            <div>
              <p>2차 분석 결과</p>
              <p>x 1.73</p>
            </div>
            <div>
              <p>노화 속도 개선</p>
              <p class="success">성공</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
        <button class="card__linkBtn">
          <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
        </button>
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
        <div>
          <p class="font--800 font--ls1 center"> 노화 속도 개선 추가 미션 결과</p>
          <div class="challenge__card--history--bottom">
            <div>
              <p>1차 분석 결과</p>
              <p> x 1.84</p>
            </div>
            <div>
              <p>2차 분석 결과</p>
              <p>x 1.73</p>
            </div>
            <div>
              <p>노화 속도 개선</p>
              <p class="fail">실패</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2 challenge__card--history">
        <button class="card__linkBtn">
          <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
        </button>
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
        <div>
          <p class="font--800 font--ls1 center"> 노화 속도 개선 추가 미션 결과</p>
          <div class="challenge__card--history--bottom">
            <div>
              <p>1차 분석 결과</p>
              <p> x 1.84</p>
            </div>
            <div>
              <p>2차 분석 결과</p>
              <p>x 1.73</p>
            </div>
            <div>
              <p>노화 속도 개선</p>
              <p class="fail">실패</p>
            </div>
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
  </div>
</template>

<style scoped>
.card__linkBtn {
  top: 30%;
}

.card__date.grid {
  grid-template-columns: 1fr;
  gap: 4px;
}

p.font--800.font--ls1.center {
  text-align: center;
  margin: 4px 0;
}

strong.font-800 {
  color: #169E4A;
}
</style>

<script>
import ContentHead from "@/components/ContentHead.vue";


export default {
  name: "Gut10023",
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
