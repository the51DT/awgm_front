<template>
  <!-- 챌린지 팀 관리 -->
  <!-- <div class="team--sub">
    <ContentHead title="팀 정보" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="profile-area">
        <div class="img-wrap">
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
      </div>
      <p class="title__big">GUT Morning Korea<br/>Challenge</p>
      <p class="title__main">팀명: 아침마다 오 마이 GUT Morning</p>
      <p class="title__date"><span>3회차 진행 : </span>2025.04.01~2025.06.10 / 70일</p>
    </div>
    <div class="card card--p20 card--shadow00 team--sub__card1">
      <div class="card--per">
        <div class="card--per__gage--wrap">
          <div class="card--per__gage" data-width="40%"></div>
        </div>
        <div class="card--per__comp" data-width="20%">성공!</div>
        <div class="card--per__target" data-left="60%">목표치</div>
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
    </div>
    <div class="card card--p20 card--shadow00 team--sub__card2">
      <div>
        <p>팀 구분</p>
        <p class="font--green font--800">챌린지</p>
      </div>
      <div>
        <p>챌린지 기간</p>
        <p>2025.09.01 ~ 2025.11.15 / 70일</p>
      </div>
      <div>
        <p>팀 가입일</p>
        <p>2025.09.12</p>
      </div>
      <div>
        <p>챌린지 시작일</p>
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
        <p class="font--yellow font--800">80%</p>
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
        <p>분당</p>
      </div>
    </div>
    <p class="card__head">팀원 인증률 순위</p>
    <div class="card card--p20 card--shadow00 team--sub__card3">
      <p class="accent">나의 랭킹 <span>13</span>위</p>
      <button>팀원 인증 현황 보기<img :src="require(`@/assets/images/icon_plus.svg`)"></button>
      <div class="card__chart">
        <div>
          <p>100%</p>
          <div class="card__chart--bar"><div data-height="100%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank first">1위</div>
            </div>
            <p>김 사무엘 유리카 딕슨 팀장김웨이</p>
            <span>외 2명</span>
          </div>
        </div>
        <div>
          <p>100%</p>
          <div class="card__chart--bar"><div data-height="100%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">2위</div>
            </div>
            <p>딕슨</p>
            <span>외 5명</span>
          </div>
        </div>
        <div>
          <p>95%</p>
          <div class="card__chart--bar"><div data-height="95%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">3위</div>
            </div>
            <p>김사무엘</p>
          </div>
        </div>
        <div>
          <p>80%</p>
          <div class="card__chart--bar"><div data-height="80%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">4위</div>
            </div>
            <p>유리카</p>
          </div>
        </div>
        <div>
          <p>65%</p>
          <div class="card__chart--bar"><div data-height="65%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">5위</div>
            </div>
            <p>팀장김웨이</p>
            <span>외 10명</span>
          </div>
        </div>
      </div>
      <p class="card__caption">2025.09.17 10:49:00 기준</p>
    </div>
  </div> -->

  <!-- 상시 팀 관리 -->
  <div class="team--sub">
    <ContentHead title="팀 정보" headType="ty02" :leftArea=true bgGray="true"/>
    <div class="team-box-wrap">
      <div class="profile-area">
        <div class="img-wrap">
          <img class="ico-logo" :src="require(`@/assets/images/content/dummy-profile-img.png`)" alt="프로필 아이콘" />
        </div>
      </div>
    </div>
    <div class="team--sub__title">
      <div class="title__top">
        <div>
          <img :src="require(`@/assets/images/icon_ranking.svg`)">
          <p>상시 랭킹 <span>5</span>위</p>
        </div>
      </div>
      <p class="title__main">팀명: 아침마다 오 마이 GUT Morning</p>
    </div>
    <div class="card card--p20 card--shadow00 team--sub__card1">
      <div class="card--per">
        <div class="card--per__gage--wrap">
          <div class="card--per__gage" data-width="40%"></div>
        </div>
        <div class="card--per__target" data-left="50%"><p>이번 달 인증률 <span>80%</span></p></div>
      </div>
      <div class="card--box card--box--flex2">
        <div>
          <p>이번 달 팀 인증률</p>
          <p>40%</p>
        </div>
        <div>
          <p>월 인증횟수/목표횟수</p>
          <p>58/300회</p>
        </div>
      </div>
    </div>
    <div class="card card--p20 card--shadow00 team--sub__card2">
      <div>
        <p>팀 구분</p>
        <p class="font--yellow font--800">상시</p>
      </div>
      <div>
        <p>기간</p>
        <p>2025.09.01 ~ 2025.11.15 / 70일</p>
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
    </div>
    <p class="card__head"><span>2025년 09월 </span>팀원 인증률 순위</p>
    <div class="card card--p20 card--shadow00 team--sub__card3">
      <p class="accent">나의 랭킹 <span>13</span>위</p>
      <button>팀원 인증 현황 보기<img :src="require(`@/assets/images/icon_plus_white.svg`)"></button>
      <div class="card__chart">
        <div>
          <p>100%</p>
          <div class="card__chart--bar"><div data-height="100%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank first">1위</div>
            </div>
            <p>김 사무엘 유리카 딕슨 팀장김웨이</p>
            <span>외 2명</span>
          </div>
        </div>
        <div>
          <p>100%</p>
          <div class="card__chart--bar"><div data-height="100%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">2위</div>
            </div>
            <p>딕슨</p>
            <span>외 5명</span>
          </div>
        </div>
        <div>
          <p>95%</p>
          <div class="card__chart--bar"><div data-height="95%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">3위</div>
            </div>
            <p>김사무엘</p>
          </div>
        </div>
        <div>
          <p>80%</p>
          <div class="card__chart--bar"><div data-height="80%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">4위</div>
            </div>
            <p>유리카</p>
          </div>
        </div>
        <div>
          <p>65%</p>
          <div class="card__chart--bar"><div data-height="65%"></div></div>
          <div class="card__chart--profile">
            <div>
              <img :src="require(`@/assets/images/card_profile.png`)">
              <div class="card__chart--profile__rank">5위</div>
            </div>
            <p>팀장김웨이</p>
            <span>외 10명</span>
          </div>
        </div>
      </div>
      <p class="card__caption">2025.09.17 10:49:00 기준</p>
    </div>
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import commonJs from "@/plugins/common.js";

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
    // eslint-disable-next-line vue/no-unused-components
    InputField,
  },
  mounted() {
    commonJs.posValue(document.querySelectorAll(".card--per__target"));
  },
};
</script>

<style scoped></style>
