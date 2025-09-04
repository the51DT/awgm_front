<template>
  <div class="activity bg-case">
    <div class="activity--sub">
      <ContentHead title="이전 기록" headType="ty02" :leftArea="true" :bgClass="headerBgClass" />
      <div class="swiper__area">
        <div class="swiper__area-arrow">
          <button class="arrow-left arrow" aria-label="이전 슬라이드"></button>
          <button class="arrow-right arrow" aria-label="다음 슬라이드"></button>
        </div>
        <swiper :navigation="true" :modules="modules" class="mySwiper" v-bind="swiperOptions">
          <swiper-slide>
            <div class="activity__period-wrap">
              <p class="activity__period"> 25년 9월 - 26년 8월 </p>
            </div>
            <div class="activity__area-profile">
              <p class="activity__area-profile-date"> 활동 기준일 : 2025년 9월 ~ 2026년 8월</p>
              <BadgeDefault img="pin--founders_crown_ambassador_60.svg" pointColor="use-profile">파운더스 크라운 앰버서더 60
              </BadgeDefault>
              <div class="wrap">
                <p class="name"> 김웨이 </p>
              </div>
            </div>
            <div class="activity__area-record">
              <div class="para-title">
                <h5> 나의 것모닝 기록 </h5>
              </div>
              <div class="activity__area-record-box-wrap">
                <div class="record-box">
                  <div>
                    <h7>인증횟수</h7>
                  </div>
                  <div>
                    <p> 누적 </p>
                    <p class="green"> 21개 </p>
                  </div>
                  <div>
                    <p>최대 연속 </p>
                    <p class="green"> 10개 </p>
                  </div>
                </div>
                <div class="record-box">
                  <div>
                    <h7>챌린지(회차)</h7>
                  </div>
                  <div>
                    <p> 참여 수 </p>
                    <p class="green"> 5회 </p>
                  </div>
                  <div>
                    <p> 성공 </p>
                    <p class="green"> 4회 </p>
                  </div>
                </div>
                <div class="record-box">
                  <div>
                    <h7>최고 인증률</h7>
                  </div>
                  <div>
                    <p> 상시 </p>
                    <p class="green"> 80% </p>
                  </div>
                  <div>
                    <p> 챌린지 </p>
                    <p class="green"> 80% </p>
                  </div>
                </div>
                <div class="record-box">
                  <div>
                    <h7>최고 달성 랭킹</h7>
                  </div>
                  <div>
                    <p> 상시 </p>
                    <p class="green"> 1위 </p>
                  </div>
                  <div>
                    <p> 챌린지 </p>
                    <p class="green"> 3위 </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ref 중복 사용 불가능하여 첫번째 슬라이드에만 ref 활성화 -->
            <div ref="sentinel" style="height:0"></div>
            <div class="activity__area-terms-tab">
              <div class="para-title" ref="targetSection">
                <h5> 획득한 배지 </h5>
                <p> 총 <span class="green"> 8개</span> 획득 </p>
              </div>
              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 연속인증 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--mission_streak_10.svg">10일 연속 인증</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--mission_streak_30.svg">30일 연속 인증</BadgeDefault>
                  </div>
                </div>
              </div>

              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 챌린지 참여 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--challenge_complete_1.svg"> 것모닝코리아 챌린지 1회 성공</BadgeDefault>
                  </div>
                </div>
              </div>

              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 팀장 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--new_leader.svg">팀장</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--proven_leader.svg">팀장의 자질</BadgeDefault>
                  </div>
                </div>
              </div>

              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 이벤트 뱃지 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--mission_start.svg">첫 인증</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--happy_birthday.svg">나의 생일</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--returning_hero.svg">복귀왕</BadgeDefault>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="activity__period-wrap">
              <p class="activity__period"> 25년 9월 - 26년 8월 </p>
            </div>
            <div class="activity__area-profile">
              <BadgeDefault img="pin--founders_crown_ambassador_60.svg" pointColor="use-profile">파운더스 크라운 앰버서더 60
              </BadgeDefault>
              <div class="wrap">
                <p class="name"> 김웨이 </p>
                <p class="during"> <span> 2025년 9월 </span>~ <span> 2026년 8월</span></p>
              </div>
            </div>
            <div class="activity__area-record">
              <div class="para-title">
                <h5> 나의 것모닝 기록 </h5>
              </div>
              <div class="activity__area-record-box-wrap">
                <div class="record-box">
                  <div>
                    <h7>인증횟수</h7>
                  </div>
                  <div>
                    <p> 누적 </p>
                    <p class="green"> 21개 </p>
                  </div>
                  <div>
                    <p>최대 연속 </p>
                    <p class="green"> 10개 </p>
                  </div>
                </div>
                <div class="record-box">
                  <div>
                    <h7>챌린지(회차)</h7>
                  </div>
                  <div>
                    <p> 참여 수 </p>
                    <p class="green"> 5회 </p>
                  </div>
                  <div>
                    <p> 성공 </p>
                    <p class="green"> 4회 </p>
                  </div>
                </div>
                <div class="record-box">
                  <div>
                    <h7>최고 인증률</h7>
                  </div>
                  <div>
                    <p> 상시 </p>
                    <p class="green"> 80% </p>
                  </div>
                  <div>
                    <p> 챌린지 </p>
                    <p class="green"> 80% </p>
                  </div>
                </div>
                <div class="record-box">
                  <div>
                    <h7>최고 달성 랭킹</h7>
                  </div>
                  <div>
                    <p> 상시 </p>
                    <p class="green"> 1위 </p>
                  </div>
                  <div>
                    <p> 챌린지 </p>
                    <p class="green"> 3위 </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ref 중복 사용 불가능하여 첫번째 슬라이드에만 ref 활성화 -->
            <!-- <div ref="sentinel" style="height:0"></div> -->
            <div class="activity__area-terms-tab">
              <div class="para-title" ref="targetSection">
                <h5> 획득한 배지 </h5>
                <p> 총 <span class="green"> 8개</span> 획득 </p>
              </div>
              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 연속인증 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--mission_streak_10.svg">10일 연속 인증</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--mission_streak_30.svg">30일 연속 인증</BadgeDefault>
                  </div>
                </div>
              </div>

              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 챌린지 참여 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--challenge_complete_1.svg"> 것모닝코리아 챌린지 1회 성공</BadgeDefault>
                  </div>
                </div>
              </div>

              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 팀장 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--new_leader.svg">팀장</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--proven_leader.svg">팀장의 자질</BadgeDefault>
                  </div>
                </div>
              </div>

              <div class="activity__area_badge-section">
                <div class="para-title-2rd">
                  <h6> 이벤트 뱃지 </h6>
                </div>
                <div class="badge-box-wrap">
                  <div class="badge-box">
                    <BadgeDefault img="badge--mission_start.svg">첫 인증</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--happy_birthday.svg">나의 생일</BadgeDefault>
                  </div>
                  <div class="badge-box">
                    <BadgeDefault img="badge--returning_hero.svg">복귀왕</BadgeDefault>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>

</template>

<style scoped>
.activity--sub {
  overflow: hidden;
}

.swiper {
  overflow: visible;
}

.activity__area_badge-section .badge-box-wrap .badge-box {
  width: auto;
}

.activity__area-record .record-box {
  width: 84%;
}

.activity__area-terms-tab .para-title {
  margin-bottom: 0;
}
</style>

<script>
import ContentHead from "@/components/ContentHead.vue";
import BadgeDefault from "@/components/BadgeDefault.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';

export default {
  name: "Gut_00038",
  data() {
    return {
      leftArea: "",
      isIntersecting: false,
      observer: null,
      refs: [],
    };
  },
  computed: {
    headerBgClass() {
      return this.isIntersecting ? 'bgGray' : 'bgWhite'
    },
  },
  components: {
    ContentHead,
    BadgeDefault,
    Swiper,
    SwiperSlide,
  },
  methods: {
    setRefs(el) {
      if (el && !this.elRefs.includes(el)) {
        this.elRefs.push(el);
      }
    }
  },
  setup() {
    const swiperOptions = {
      modules: [Navigation],
      navigation: {
        prevEl: '.arrow-left',
        nextEl: '.arrow-right',
      },
      slidesPerView: 1,
      spaceBetween: 40,
    };
    return { swiperOptions };
  },
  mounted() {


    this.$nextTick(() => {
      setTimeout(() => {
        const HEADER_HEIGHT = 72; // 헤더 높이(px)
        const sentinels = this.$refs.sentinel;
        this.observer = new IntersectionObserver(
          ([entry]) => {
            // sentinel이 사라지면(=섹션이 헤더를 지나면) bgGray → bgWhite
            this.isIntersecting = entry.isIntersecting || window.scrollY <= 2;
          },
          {
            rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
            threshold: 0.1
          }
        );
        this.observer.observe(sentinels);

        // 초기 상태 바로 반영
        const rect = sentinels.getBoundingClientRect();
        this.isIntersecting = rect.top >= HEADER_HEIGHT;

      }, 100);
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY <= 3) {
        this.isIntersecting = true;
      }
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
