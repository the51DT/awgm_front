<template>
  <div class="team--sub">
    <ContentHead title="팀 정보" headType="ty02" :leftArea=true :rightArea=true />
    <div class="team-box-wrap">
      <div class="profile-area">
        <div class="img-wrap on-flag"> <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
          <img class="ico-logo" :src="require(`@/assets/images/content/dummy-profile-img.png`)" alt="프로필 아이콘" />
        </div>
      </div>
    </div>
    <div class="team--sub__title">
      <div class="title__top">
        <div>
          <img :src="require(`@/assets/images/icon_ranking.svg`)">
          <p>챌린지 랭킹 <span>5</span>위</p>
        </div>
        <button>더보기<img :src="require(`@/assets/images/icon_arrow_r_gray.svg`)"></button>
      </div>
      <p class="title__big">GUT Morning Korea<br/>Challenge</p>
      <p class="title__main">팀명: 아침마다 오 마이 GUT Morning</p>
    </div>
    <div class="card card--p20 card--shadow00 team--sub__card1">
      <div class="card--per">
        <div class="card--per__gage" data-width="40%"></div>
        <div class="card--per__comp" data-width="20%">성공</div>
        <div class="card--per__target" data-left="60%"><img :src="require(`@/assets/images/icon_target.svg`)">목표치</div>
      </div>
      <div class="card--box card--box--flex2">
        <div>
          <p>팀 인증률</p>
          <p>40%</p>
        </div>
        <div>
          <p>팀 인증횟수/성공횟수</p>
          <p>58/300회</p>
        </div>
      </div>
      <div class="card__caption">
        목표치란?<br>
        챌린지를 성공하기 위하여 오늘까지 달성해야 할 최소한의 인증률을 말합니다.
      </div>
    </div>
    <div class="card card--p20 card--shadow00 team--sub__card2">
      <div>
        <p>팀 구분</p>
        <p class="font--green font--800">챌린지</p>
      </div>
      <div>
        <p>기간</p>
        <p>2025.09.01 ~ 2025.11.15 (70일)</p>
      </div>
      <div>
        <p>팀 가입일</p>
        <p>2025.09.12</p>
      </div>
      <div>
        <p>인증 시작일</p>
        <p>2025.09.12</p>
      </div>
      <div>
        <p>팀장</p>
        <p class="font--800">팀장김웨이</p>
      </div>
      <div>
        <p>참여 팀원</p>
        <p>68 명</p>
      </div>
      <div>
        <p>성공조건</p>
        <p><span class="font--yellow font--800">80%</span> (인증횟수 300회 이상)</p>
      </div>
      <div>
        <p>성공 보상</p>
        <p class="sm">$보상명 (20자 까지 노출 가능)$</p>
      </div>
      <div>
        <p>보상수령방법</p>
        <p class="font--800">팀원 개별수령</p>
      </div>
      <div>
        <p>보상 수령처</p>
        <InputField type="select" placeholder="선택" :options="['1', '2', '3']"/>
      </div>
    </div>
    <p class="card__head">팀원 인증률 순위</p>
    <div class="card card--p20 card--shadow00 team--sub__card3">
      <p class="accent">나의 랭킹 <span>13</span>위</p>
      <button>팀원 인증 현황 보기<img :src="require(`@/assets/images/icon_plus.svg`)"></button>
      <div class="card__chart">

      </div>
      <p class="card__caption">2025.09.17 10:49:00 기준</p>
    </div>
    <button>팀탈퇴</button>
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";

export default {
  name: "LoginMain",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    ContentHead,
    InputField,
  },
};
</script>

<style scoped></style>
