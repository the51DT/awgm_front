<template>
  <div class="content-area">
    <ContentHead title="자녀활동 정보" :leftArea=true />
    <div class="my__profile">
      <div class="profile-area small">
        <div class="img-wrap">
          <img :src="require(`@/assets/images/child_profile1.png`)" />
          <button class="delete_btn"></button>
        </div>
        <div class="text-wrap">
          <p class="profile-name">팀장김웨이 주니어</p>
          <p class="profile-sub">Idpeaceb</p>
          <p class="profile-date">등록일 : 2024. 09. 01.</p>
        </div>
      </div>
    </div>
    <div class="card card--border mb-end">
      <div class="calendar">
        <VCalendar />
      </div>
    </div>
    <div class="my__card">
      <div class="card card--green card--p16 card--shadowc2">
        <button class="card__linkBtn">
          <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
        </button>
        <div class="card__ranking">
          <div class="card__state">진행중</div>
          <div class="card__ranking--rank">
            <img :src="require(`@/assets/images/icon_ranking.svg`)">
            <p>챌린지팀 랭킹 <span>5</span>위</p>
          </div>
        </div>
        <p class="card__head">GUT Morning Korea Challenge</p>
        <div class="card__top">
          <div class="card__img card__leader">
            <img :src="require(`@/assets/images/card_profile.png`)">
          </div>
          <div class="card__text">
            <p class="card__text__title">팀명: 아침마다 오 마이 GUT Morning</p>
            <div class="card__info">
              <div class="card__title">챌린지</div>
              <div class="card__num">64명</div>
            </div> 
            <p class="card__date">2025.09.01 ~ 2025.09.30 (70일)</p>
          </div>
        </div>
        <div class="card__bottom">
          <p class="card--per__title">챌린지<br />인증률</p>
          <div class="card--per">
            <div class="card--per__gage--wrap">
              <div class="card--per__gage" data-width="60%"></div>
            </div>
            <div class="card--per__comp" data-width="25%">성공</div>
          </div>
          <p class="card--per__state">60%</p>
        </div>
      </div>

      <div class="card card--border card--p16 card--shadowc2">
        <button class="card__linkBtn">
          <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
        </button>
        <div class="card__ranking">
          <div class="card__state">진행중</div>
          <div class="card__ranking--text">
            <p>상시팀 랭킹 <span>11</span>위</p>
            <div class="btn__wrap">
              <button class="btn__star on"></button>
              <button class="btn__person"></button>
            </div>
          </div>
        </div>
        <div class="card__top">
          <div class="card__img card__leader">
            <img :src="require(`@/assets/images/card_profile.png`)">
          </div>
          <div class="card__text">
            <p class="card__text__title">팀명: 우리몸은 GUT Morning</p>
            <div class="card__info">
              <div class="card__title card__title--always">상시</div>
              <div class="card__num">99명</div>
            </div> 
            <p class="card__date">2024.09.01 ~ 2025.08.31 (365일)</p>
          </div>
        </div>
        <div class="card__bottom">
          <p class="card--per__title">이번달<br />인증률</p>
          <div class="card--per">
            <div class="card--per__gage--wrap">
              <div class="card--per__gage" data-width="50%"></div>
            </div>
          </div>
          <p class="card--per__state">50%</p>
        </div>
      </div>
    </div>
    <div class="my__card bg-gary">
      <div class="card card--border card--p16 card--shadowc2">
        <button class="card__linkBtn">
          <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
        </button>
        <div class="card__ranking">
          <div class="card__state card__state--end">진행종료</div>
        </div>
        <div class="card__top">
          <div class="card__img">
            <img :src="require(`@/assets/images/card_profile.png`)">
          </div>
          <div class="card__text">
            <p class="card__text__title">팀명: 우리몸은 GUT Morning</p>
            <div class="card__info">
              <div class="card__title card__title--always">상시</div>
              <div class="card__num">99명</div>
            </div> 
            <p class="card__date">2024.09.01 ~ 2025.08.31 (365일)</p>
          </div>
        </div>
        <div class="card__comp">
          <img :src="require(`@/assets/images/challenge_comp_green.png`)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VCalendar from "@/components/VCalendar.vue";
import ContentHead from "@/components/ContentHead.vue";

export default {
  name: "LoginMain",
  data() {
    return {
      type: "",
    };
  },
  components: {
    VCalendar,
    ContentHead,
  },
};
</script>

<style scoped></style>
