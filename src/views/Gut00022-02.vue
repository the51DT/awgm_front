<template>
  <!-- 상시 팀 관리 -->
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
    <div class="terms-tab">
      <div class="terms-tab__title"  ref="targetSection">
        <p> <i> 팀명 </i> 아침마다 오 마이 GUT Morning</p>
      </div>
      <div class="terms-tab__cont">
        <div class="card card--p20 card--shadow00 team--sub__card1">
          <div class="card--per">
            <div class="card--per__gage--wrap">
              <!-- full-width일때 텍스트 나타나도록 -->
              <!-- <div class="card--per__gage" data-width="100%"> <p class="full-width"> 100% 달성 완료 !</p> </div> -->
              <!-- 100% 아닐 시 텍스트 -->
              <div class="card--per__gage" data-width="60%"> <p> 100% 달성 완료 !</p> </div>
            </div>
            <div class="card--per__target" data-left="80%">  <b> 80%</b> 지난 달 인증률 </div>
          </div>
          <div class="card--box card--box--flex2">
            <div>
              <p>이번 달 팀 인증률</p>
              <p>100%</p>
            </div>
            <div>
              <p>월 인증횟수/성공횟수</p>
              <p>58/300회</p>
            </div>
          </div>
        </div>

        <div class="card card--p20 card--shadow00 team--sub__card-rank">
          <p class="card-rank-title">상시 랭킹</p>
          <div class="card__display-rank">
            <p><span> 5 </span>위</p>
          </div>
        </div>

        <div class="card card--p20 card--shadow00 team--sub__team-rate-ranking">
          <div class="card--pl8 team--sub__card-rank">
            <p class="card__head_title"><span> 2025</span>년 <span>09</span>월 팀원 인증률 순위</p>
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
            <dd><p class="card__title card__title--always"> 상시 </p></dd>
          </dl>
          <dl>
            <dt>기간</dt>
            <dd>
              <p>
                2025.01.01 ~ 2025.02.28
                <br /> <b> 70일</b>
              </p>
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
