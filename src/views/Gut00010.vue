<template>
  <!-- 챌린지 팀 관리 -->
  <div class="team--sub">
    <ContentHead title="팀 정보" headType="ty02" :leftArea="true" :rightArea="true" :rightIcon="true" />
    <div class="team-box-wrap">
      <div class="profile-area">
        <div class="img-wrap on-flag">
          <img class="ico-logo" :src="require(`@/assets/images/content/dummy-profile-img__w.png`)" alt="프로필 아이콘" />
        </div>
      </div>
    </div>
    <div class="team--sub__title">
      <!-- <div class="title__top">
        <div>
          <img :src="require(`@/assets/images/icon_ranking.svg`)">
          <p>챌린지 랭킹 <span>5</span>위</p>
        </div>
        <button>팀 랭킹보기<img :src="require(`@/assets/images/icon_arrow_r_white.svg`)"></button>
      </div> -->
      <p class="title__big">GUT Morning Korea Challenge</p>
      <p class="title__main"><i> 팀명 </i> 아침마다 오 마이 GUT Morning</p>
      <div class="title__date">
        <p>3회차 진행중</p>
        <p>2025.04.01~2025.06.10 / 70일</p>
      </div>
    </div>
    <div class="card card--p20 card--shadow00 team--sub__card-rank">
      <p class="card-rank-title">챌린지 랭킹</p>
      <div class="card__display-rank">
        <p><span> 5 </span>위</p>
        <button type="button">
          팀 랭킹 보기
          <img :src="require(`@/assets/images/icon_arrow_r_white.svg`)" />
        </button>
      </div>
    </div>

    <div class="terms-tab">
      <div class="terms-tab__cont">
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
          <ul class="card__list">
            <li>
              <span> 1회차 </span>
              <span> 팀 인증률 <i> 75%</i></span>
              <div class="tag-rate fail">실패</div>
            </li>
            <li>
              <span> 2회차 </span>
              <span> 팀 인증률 <i> 85%</i></span>
              <div class="tag-rate success">성공</div>
            </li>
          </ul>
        </div>
        <div class="card card--p20 card--shadow00 team--sub__card2">
          <dl>
            <dt>팀 구분</dt>
            <dd>챌린지</dd>
          </dl>
          <dl>
            <dt>전체 기간</dt>
            <dd>
              <p>2025.01.01 ~ 2025.02.28</p>
              <div>
                <span> 1회차 기간</span>
                <p>2025.01.01 ~ 2025.01.31</p>
              </div>
              <div>
                <span> 2회차 기간</span>
                <p>2025.01.01 ~ 2025.01.31</p>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>팀 가입일</dt>
            <dd>2025.09.12</dd>
          </dl>
          <dl>
            <dt>인증 시작일</dt>
            <dd>2025.09.12</dd>
          </dl>
          <dl>
            <dt>팀장</dt>
            <dd class="bold">팀장김웨이</dd>
          </dl>
          <dl>
            <dt>참여인원</dt>
            <dd>68명</dd>
          </dl>
          <dl>
            <dt>성공조건</dt>
            <dd class="orange">80%</dd>
          </dl>
          <dl>
            <dt>성공 보상</dt>
            <dd>
              $보상명 (20자까지 노출 가능)$ $보상명 (20자까지 노출 가능)$ 
            </dd>
          </dl>
          <dl>
            <dt>보상수령방법</dt>
            <dd class="bold">팀원 개별수령</dd>
          </dl>
          <dl>
            <dt>보상 수령처</dt>
            <InputField type="select" placeholder="선택"
              :options="['분당', '강서', '인천', '대전', '청주', '부산', '대구', '창원', '울산', '광주', '전주', '강릉', '제주', '스타시티']" />
            <button>저장</button>
          </dl>
        </div>
        <p class="card__head">챌린지 $n$회차 팀원 인증률 순위</p>
        <div class="card card--p20 card--shadow00 team--sub__card-rank">
          <p class="card-rank-title  myRank">나의 랭킹</p>
          <div class="card__display-rank">
            <p><span> 13 </span>위</p>
            <button type="button">
              팀원 현황 보기
              <img :src="require(`@/assets/images/icon_plus_white.svg`)"/>
            </button>
          </div>
        </div>
        <div class="card card--p20 card--shadow00 team--sub__card3">
          <!-- <p class="accent">나의 랭킹 <span>13</span>위</p>
      <button>팀원 현황 보기<img :src="require(`@/assets/images/icon_plus_white.svg`)"></button> -->
          <div class="card__chart">
            <div>
              <p>100%</p>
              <div class="card__chart--bar">
                <div data-height="100%"></div>
              </div>
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
              <div class="card__chart--bar">
                <div data-height="100%"></div>
              </div>
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
              <div class="card__chart--bar">
                <div data-height="95%"></div>
              </div>
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
              <div class="card__chart--bar">
                <div data-height="80%"></div>
              </div>
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
              <div class="card__chart--bar">
                <div data-height="65%"></div>
              </div>
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
        <button>팀탈퇴<img :src="require(`@/assets/images/icon_more.svg`)"></button>
      </div>
    </div>
  </div>
  <TopButton></TopButton>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import TopButton from "@/components/TopButton.vue";
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
    TopButton,
  },
  mounted() {
    commonJs.posValue(document.querySelectorAll(".card--per__target"));
  },
};
</script>

<style scoped></style>
