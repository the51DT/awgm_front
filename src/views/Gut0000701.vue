<template>
  <!-- 기본 -->
  <!-- <div class="popup">
    <div class="popup--img">
      <button class="popup--img__close"></button>
      <div class="card--img">
        <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
        <img :src="require(`@/assets/images/challenge_card_bg.png`)">
        <div class="card--img__text">
          <p class="card--img__date">2024.09.23 (월)</p>
          <p class="card--img__title">나의 미션 인증 횟수</p>
          <p class="card--img__num"><span>2</span>회</p>
        </div>
        <button class="share-btn"></button>
      </div>
    </div>
  </div> -->
  <!-- 공유하기 버튼 클릭 시 -->
  <div class="popup--pull">
    <div class="popup--pull__top">
      <p>챌린지 이력보기</p>
      <button class="popup--pull__close"></button>
    </div>
    <div class="popup--pull__cont">
      <div class="card--img">
        <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
        <img :src="require(`@/assets/images/challenge_card_bg.png`)">
        <div class="card--img__text">
          <p class="card--img__date">2024.09.23 (월)</p>
          <p class="card--img__title">나의 미션 인증 횟수</p>
          <p class="card--img__num"><span>2</span>회</p>
        </div>
        <p class="card--img__title"><span>팀장김웨이</span>님의<br />GUT Morning</p>
      </div>
      <div class="card card--border challenge__calendar--card">
        <!-- calendar 영역 정리 -->
        <!-- 
          - 캘린더 마크업 내 사용된 클래스 정리
          1. 팀 시작일 : start (문구)
          2. 인증일 : select (노란배경 + bold +텍스트흰색 , 선택시 )
          3. 챌린지 진행 기간 : active (배경색 gray )
          4. Today : today (문구 + 노란테두리)
        -->        
        <div class="calendar">
          <div class="calendar-container">
            <!-- <h3 class="calendar-title">나의 챌린지 참여 현황</h3> -->
            <!-- swiper 케이스
            <div class="calendar-swiper">
              <swiper 
                :modules="modules"
                navigation
                @swiper="onSwiper" 
                @slideChange="onSlideChange">
                <swiper-slide>
                  <div class="calendar-header">                    
                    <div class="calendar-title-wrap">
                      <h4 class="date" id="currentMonth">2024. 09월</h4>
                    </div>
                  </div>
                  <div class="calendar-text-wrap">                  
                    <div class="desc">
                      <p><span class="user">팀장김웨이</span>님, 이번 달 <strong class="clear-count">6</strong>회 인증 완료</p> 
                    </div>
                  </div>
                  <div class="calendar-box">
                    <div class="calendar-days">
                      <div class="day">일</div>
                      <div class="day">월</div>
                      <div class="day">화</div>
                      <div class="day">수</div>
                      <div class="day">목</div>
                      <div class="day">금</div>
                      <div class="day">토</div>
                    </div>
                    <div class="calendar-dates" id="calendarDates">
                      <div>
                        <button type="button" class="date">1</button>
                        <button type="button" class="date active start select">2<span></span></button>
                        <button type="button" class="date active">3</button>
                        <button type="button" class="date active select">4</button>
                        <button type="button" class="date active">5</button>
                        <button type="button" class="date active select">6</button>
                        <button type="button" class="date active">7</button>
                      </div>

                      <div>
                        <button type="button" class="date active">8</button>
                        <button type="button" class="date active">9</button>
                        <button type="button" class="date active">10</button>
                        <button type="button" class="date active">11</button>
                        <button type="button" class="date active select">12</button>
                        <button type="button" class="date active">13</button>
                        <button type="button" class="date active">14</button>
                      </div>

                      <div>
                        <button type="button" class="date active">15</button>
                        <button type="button" class="date active">16</button>
                        <button type="button" class="date active">17</button>
                        <button type="button" class="date active">18</button>
                        <button type="button" class="date active">19</button>
                        <button type="button" class="date active today">20<span></span></button>
                        <button type="button" class="date">21</button>
                      </div>

                      <div>
                        <button type="button" class="date">22</button>
                        <button type="button" class="date">23</button>
                        <button type="button" class="date">24</button>
                        <button type="button" class="date">25</button>
                        <button type="button" class="date">26</button>
                        <button type="button" class="date">27</button>
                        <button type="button" class="date">28</button>
                      </div>

                      <div>
                        <button type="button" class="date">29</button>
                        <button type="button" class="date">30</button>
                        <button type="button" class="date">31</button>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>             
            //swiper 케이스 -->

            <!-- swiper 아닌 기본 노출 케이스 -->
            <div class="calendar-header">                    
              <div class="calendar-title-wrap">
                <h4 class="date" id="currentMonth">2024. 09월</h4>
              </div>
            </div>
            <div class="calendar-text-wrap">                  
              <div class="desc">
                <p><span class="user">팀장김웨이</span>님, 이번 달 <strong class="clear-count">6</strong>회 인증 완료</p> 
              </div>
            </div>
            <div class="calendar-box">
              <div class="calendar-days">
                <div class="day">일</div>
                <div class="day">월</div>
                <div class="day">화</div>
                <div class="day">수</div>
                <div class="day">목</div>
                <div class="day">금</div>
                <div class="day">토</div>
              </div>
              <div class="calendar-dates" id="calendarDates">
                <div>
                  <button type="button" class="date">1</button>
                  <button type="button" class="date active start select">2<span></span></button>
                  <button type="button" class="date active select">3</button>
                  <button type="button" class="date active select">4</button>
                  <button type="button" class="date active">5</button>
                  <button type="button" class="date active select">6</button>
                  <button type="button" class="date active">7</button>
                </div>

                <div>
                  <button type="button" class="date active">8</button>
                  <button type="button" class="date active">9</button>
                  <button type="button" class="date active select">10</button>
                  <button type="button" class="date active">11</button>
                  <button type="button" class="date active select">12</button>
                  <button type="button" class="date active">13</button>
                  <button type="button" class="date active">14</button>
                </div>

                <div>
                  <button type="button" class="date active">15</button>
                  <button type="button" class="date active">16</button>
                  <button type="button" class="date active">17</button>
                  <button type="button" class="date active">18</button>
                  <button type="button" class="date active">19</button>
                  <button type="button" class="date active today">20<span></span></button>
                  <button type="button" class="date">21</button>
                </div>

                <div>
                  <button type="button" class="date">22</button>
                  <button type="button" class="date">23</button>
                  <button type="button" class="date">24</button>
                  <button type="button" class="date">25</button>
                  <button type="button" class="date">26</button>
                  <button type="button" class="date">27</button>
                  <button type="button" class="date">28</button>
                </div>

                <div>
                  <button type="button" class="date">29</button>
                  <button type="button" class="date">30</button>
                  <button type="button" class="date">31</button>
                </div>
              </div>
            </div>
            <!-- //swiper 아닌 기본 노출 케이스 -->
          </div>
        </div>
      </div>
      <div class="challenge__btn--wrap">
        <CustomButton color="yellow">카카오로 공유</CustomButton>
        <CustomButton>전체 이미지 저장</CustomButton>
        <CustomButton>오늘 인증 이미지 저장</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

// import { Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/navigation';

export default {
  name: "Gut_0000701",
  components: {
    // Swiper,
    // SwiperSlide,
    CustomButton,
  },
  // setup() {
  //   const onSwiper = (swiper) => {
  //     console.log(swiper);
  //   };
  //   const onSlideChange = () => {
  //     console.log('slide change');
  //   };
  //   return {
  //     onSwiper,
  //     onSlideChange,
  //     modules: [Navigation],
  //   };
  // },
};
</script>

<style scoped></style>
