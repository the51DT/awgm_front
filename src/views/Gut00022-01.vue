<template>
  <!-- 챌린지 팀 관리 -->
  <div class="team--sub">
    <ContentHead title="팀 정보" headType="ty02" :leftArea="true" :rightArea="true" :rightIcon="true" :bgClass="headerBgClass"
  :customLeftIcon="customLeftIcon"
    />
    <div class="team-box-wrap">
      <div class="profile-area">
        <div class="img-wrap on-flag">
          <img class="ico-logo" :src="require(`@/assets/images/content/dummy-profile-img__w.png`)" alt="프로필 아이콘" />
        </div>
      </div>
    </div>
    <div class="team--sub__title">
      <p class="title__big">GUT Morning Korea Challenge</p>
    </div>
    <div class="terms-tab">
      <div class="terms-tab__title"  ref="targetSection">
        <p> <i> 팀명 </i> 아침마다 오 마이 GUT Morning</p>
      </div>
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
          <div class="card--per__desc">
            <p class="font--c66 font--ls1"><span class="font--800">* 목표치란,</span> 챌린지를 성공하기 위하여 오늘까지 달성해야 할 최소한의 인증률을 말합니다.</p>
          </div>
          <ul class="card__list">
            <li>
              <span class="card__list--round"> 1회차 </span>
              <span> 팀 인증률 <i> 75%</i></span>
              <div class="tag-rate fail">실패</div>
            </li>
            <li>
              <span class="card__list--round"> 2회차 </span>
              <span> 팀 인증률 <i> 85%</i></span>
              <div class="tag-rate success">성공</div>
            </li>
            <li>
              <span class="card__list--round green"> 3회차 </span>
              <span> <b>2025.04.01</b>~<b>2025.06.10</b></span>
              <div class="date green"> <i>70</i>일</div>
            </li>
          </ul>
        </div>
        <div class="card card--p20 card--shadow00 team--sub__card-rank">
          <p class="card-rank-title">팀 랭킹</p>
          <div class="card__display-rank">
            <p><span> 5 </span>위</p>
          </div>
        </div>
        <div class="card card--p20 card--shadow00 team--sub__team-rate-ranking">
          <div class="card--pl8 team--sub__card-rank">
            <p class="card__head_title">챌린지 $n$회차 팀원 인증률 순위</p>
            <p class="card-rank-title  myRank">나의 랭킹</p>
            <div class="card__display-rank">
              <p><span> 13 </span>위</p>
            </div>
          </div>
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
        <div class="card card--p20 card--shadow00 team--sub__card-team-info">
          <dl>
            <dt>팀 구분</dt>
            <dd><p class="card__title card__title--challenge"> 챌린지 </p></dd>
          </dl>
          <dl>
            <dt>전체 기간</dt>
            <dd >
              <p>2025.01.01 ~ 2025.02.28</p>
              <div class="font-13">
                <span > 1회차 기간</span>
                <p>2025.01.01 ~ 2025.01.31</p>
              </div>
              <div class="font-13">
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
            <InputField type="select-placeholder" placeholder="선택"
              :options="['분당', '강서', '인천', '대전', '청주', '부산', '대구', '창원', '울산', '광주', '전주', '강릉', '제주', '스타시티']" />
            <button>저장</button>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <TopButton></TopButton>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import TopButton from "@/components/TopButton.vue";
import CustomButton from "@/components/CustomButton.vue"
import Panel from "@/components/Panel.vue";
import commonJs from "@/plugins/common.js";

export default {
  name: "LoginMain",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      isIntersecting: false,
      observer: null
    };
  },
  computed: {
    headerBgClass() {
      return this.isIntersecting ? 'bgGray' : 'bgGreen'
    },
    customLeftIcon() {
      return this.isIntersecting
        ? require('@/assets/images/icon/ico_arrow_left.png')
        : require('@/assets/images/icon_arrow_left_w.svg');
    }
  },
  components: {
    ContentHead,
    // eslint-disable-next-line vue/no-unused-components
    InputField,
    TopButton,
    CustomButton,
    Panel,
  },
  mounted() {
    commonJs.posValue(document.querySelectorAll(".card--per__target"));
    this.$nextTick(() => {
      setTimeout(() => {
        const target = this.$refs.targetSection;
        // console.log("targetSection:", target); 
        if (!target) return;

        this.observer = new IntersectionObserver(([entry]) => {
          this.isIntersecting = !entry.isIntersecting;
        }, { threshold: 0.1 });

        this.observer.observe(target);
      }, 100);
    });
  },
  beforeUnmount() {
    const target = this.$refs.targetSection
    if (this.observer && target) {
      this.observer.unobserve(target)
    }
  }
};
</script>

<style scoped></style>
