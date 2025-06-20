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
                <img src="../assets/images/badgeImg/badge_profile-test1.svg" />
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
                      <h7>챌린지</h7>
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
            </swiper-slide>
            <swiper-slide>
              <div class="activity__period-wrap">
                <p class="activity__period"> 26년 9월 - 27년 10월 </p>
              </div>
              <div class="activity__area-profile">
                <img src="../assets/images/badgeImg/badge_profile-test1.svg" />
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
                      <h7>챌린지</h7>
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
            </swiper-slide>
        </swiper>
      </div>
      <div ref="sentinel" style="height:0"></div>
      <div class="activity__area-terms-tab" >
        <div class="para-title" ref="targetSection">
          <h5> 획득 배지 </h5>
          <p> 총 <span class="green"> 8개</span> 획득 </p>
        </div>
        <div class="activity__area_badge-section">
          <div class="para-title-2rd">
            <h6> 연속인증 </h6>
          </div>
          <div class="badge-box-wrap">
            <div class="badge-box"> <BadgeDefault img="badge__continuous_10.svg">10일 연속 인증</BadgeDefault></div>
            <div class="badge-box"> <BadgeDefault img="badge__continuous_30.svg">30일 연속 인증</BadgeDefault></div>
          </div>
        </div>

        <div class="activity__area_badge-section">
          <div class="para-title-2rd">
            <h6> 챌린지 참여 </h6>
          </div>
          <div class="badge-box-wrap">
            <div class="badge-box"> <BadgeDefault img="badge__participate_1.svg"> 것모닝코리아 챌린지 1회 성공</BadgeDefault></div>
          </div>
        </div>

        <div class="activity__area_badge-section">
          <div class="para-title-2rd">
            <h6> 팀장 </h6>
          </div>
          <div class="badge-box-wrap"> 
            <div class="badge-box"> <BadgeDefault img="badge__iAmLeader.svg">팀장</BadgeDefault></div>
            <div class="badge-box"> <BadgeDefault img="badge__talentedLeader.svg">팀장의 자질</BadgeDefault></div>
          </div>
        </div>

        <div class="activity__area_badge-section">
          <div class="para-title-2rd">
            <h6> 이벤트 뱃지 </h6>
          </div>
          <div class="badge-box-wrap"> 
            <div class="badge-box"> <BadgeDefault img="badge__firstAttendance.svg">첫 인증</BadgeDefault></div>
            <div class="badge-box"> <BadgeDefault img="badge__birthday.svg">나의 생일</BadgeDefault></div>
            <div class="badge-box"> <BadgeDefault img="badge__welcomBack.svg">복귀왕</BadgeDefault></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

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
      observer: null
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
  setup() {
    const swiperOptions = {
      modules: [Navigation],
      navigation: {
        prevEl: '.arrow-left',
        nextEl: '.arrow-right',
      },
    };
    return { swiperOptions };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const HEADER_HEIGHT = 72; // 헤더 높이(px)
        const sentinel = this.$refs.sentinel;
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
        this.observer.observe(sentinel);
        
        // 초기 상태 바로 반영
        const rect = sentinel.getBoundingClientRect();
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

<style scoped>
.activity__area-record .record-box{
  width: 84%;
}
.activity__area-terms-tab .para-title{
  margin-bottom: 0;
}

</style>
