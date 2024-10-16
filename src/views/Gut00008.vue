<template>
  <div class="challenge challenge--main">
    <button class="link-arrow">챌린지 이력보기<img :src="require(`@/assets/images/icon_link_arrow.svg`)"></button>
    <div class="text__title__wrap">
      <p class="text__title">GUT Morning<br />Korea Challenge</p>
      <p class="text__subtit text__subtit--mt8"><span class="text__subtit--bold">16</span>일째 참여중입니다.</p>
    </div>
    <div class="card card--border card--shadow00 card--p20 challenge__card--main">
      <button><img :src="require(`@/assets/images/icon_arrow_r.svg`)"></button>
      <div class="challenge__card--main__top">
        <p class="font--c33 font--700 font--ls3">팀명: 아침마다 오 마이 GUT Morning</p>
        <div>
          <p class="font--c11 font--700 font--ls2">성공조건 : 팀 인증 <span class="font--green">80%</span> 이상</p>
          <p class="font--c66 font--ls1">2025.04.01 ~ 2025.06.10 / <span class="font--800">70</span>일</p>
        </div>
      </div>
      <div class="challenge__card--main__per">
        <div>
          <p class="font--700 font--ls1">팀 인증률</p>
          <p class="font--700 font--c11 font--ls1"><span class="font--green font--800 font--ls1">40</span>%</p>
        </div>
        <div class="card--per">
          <div class="card--per__gage" data-width="40%"></div>
          <div class="card--per__comp" data-width="20%">성공</div>
          <div class="card--per__target" data-left="60%"><img :src="require(`@/assets/images/icon_target.svg`)">목표치</div>
        </div>
      </div>
      <p class="font--c66 font--ls1"><span class="font--800">* 목표치란,</span> 챌린지를 성공하기 위하여 오늘까지 달성해야 할 최소한의 인증률을 말합니다.</p>
    </div>
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
        <h3 class="calendar-title">나의 챌린지 참여 현황</h3>
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
                  <p>이번 달 나의 미션 인증 횟수 <strong class="clear-count">6</strong>회</p>
                  <p>전체 70일 중에 <span class="clear-day">28</span>일 인증 완료했습니다.</p>
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
                    <button type="button" class="date active select">10</button>
                    <button type="button" class="date active">11</button>
                    <button type="button" class="date active select">12</button>
                    <button type="button" class="date active">13</button>
                    <button type="button" class="date active">14</button>
                  </div>

                  <div>
                    <button type="button" class="date active">15</button>
                    <button type="button" class="date active">16</button>
                    <button type="button" class="date active select">17</button>
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
            <swiper-slide>
              <div class="calendar-header">
                <div class="calendar-title-wrap">
                  <h4 class="date" id="currentMonth">2024. 08월</h4>
                </div>
              </div>
              <div class="calendar-text-wrap">                  
                <div class="desc">
                  <p>이번 달 나의 미션 인증 횟수 <strong class="clear-count">6</strong>회</p>
                  <p>전체 70일 중에 <span class="clear-day">28</span>일 인증 완료했습니다.</p>
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
                    <button type="button" class="date active start">2<span></span></button>
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
      </div>
    </div>
    <CustomButton>
      챌린지 인증 공유하기
    </CustomButton>
  </div>
  <AppNav :challenge="true"></AppNav>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import AppNav from "@/layouts/AppNav.vue";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: "LoginMain",
  components: {
    Swiper,
    SwiperSlide,
    CustomButton,
    AppNav,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped></style>
