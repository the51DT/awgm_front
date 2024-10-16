<template>
  <div class="content-area">
    <ContentHead title="팀원 관리" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="conts-area">
        <div class="profile-area small">
          <div class="img-wrap on-flag"> <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
            <img class="ico-logo" :src="require(`@/assets/images/content/dummy-profile-img.png`)" alt="프로필 아이콘" />
          </div>
          <div class="text-wrap">
            <h4 class="profile-name">김사무엘 유리카 닉슨</h4>
          </div>
        </div>        
        <div class="card card--border card--p16 card--shadowc2">
          <div class="card__top">
            <div class="card__text__list">
              <dl>
                <dt>팀 가입일</dt>
                <dd>2024.09.09</dd>
              </dl>
              <dl>
                <dt>인증 횟수</dt>
                <dd>223/1000회 (9월 22회)</dd>
              </dl>
              <dl class="align-ctr">
                <dt>ABO/Member</dt>
                <dd>
                  <p class="badge-info">인증</p>
                </dd>
              </dl>
            </div>
          </div>
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
            <!-- <h3 class="calendar-title">나의 챌린지 참여 현황</h3> -->
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
                      <!-- <p>전체 70일 중에 <span class="clear-day">28</span>일 인증 완료했습니다.</p> -->
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
                        <button type="button" class="date active select">9</button>
                        <button type="button" class="date active">10</button>
                        <button type="button" class="date active select">11</button>
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
                <swiper-slide>
                  <div class="calendar-header">
                    <div class="calendar-title-wrap">
                      <h4 class="date" id="currentMonth">2024. 08월</h4>
                    </div>
                  </div>
                  <div class="calendar-text-wrap">                  
                    <div class="desc">
                      <p>이번 달 나의 미션 인증 횟수 <strong class="clear-count">5</strong>회</p>
                      <!-- <p>전체 70일 중에 <span class="clear-day">28</span>일 인증 완료했습니다.</p> -->
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
              </swiper>
            </div>
            
            
          </div>
        </div>
      </div>
      <div class="team-btn-wrap">
        <div class="btn-area ty03">
          <CustomButton color="light">강퇴</CustomButton>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from "@/components/CustomButton.vue";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: "Gut_00032",
  components: {
    Swiper,
    SwiperSlide,
    ContentHead,
    CustomButton,
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
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },  
};
</script>
