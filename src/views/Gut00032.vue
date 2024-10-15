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
        <div class="calendar">
          <div class="calendar-container">
            <h3 class="calendar-title">나의 챌린지 참여 현황</h3>
            <div class="calendar-header">
              <button type="button" class="calendar-btn" id="prevBtn">이전</button>
              <div class="calendar-title-wrap">
                <h4 class="date" id="currentMonth">2024. 09월</h4>                
              </div>
              <button type="button" class="calendar-btn" id="nextBtn">다음</button>
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
                <div class="date">1</div>
                <div class="date">2</div>
                <div class="date">3</div>
                <div class="date">4</div>
                <div class="date">5</div>
                <div class="date">6</div>
                <div class="date">7</div>
                <div class="date">8</div>
                <div class="date">9</div>
                <div class="date">10</div>
                <div class="date">11</div>
                <div class="date">12</div>
                <div class="date">13</div>
                <div class="date">14</div>
                <div class="date">15</div>
                <div class="date">16</div>
                <div class="date">17</div>
                <div class="date">18</div>
                <div class="date">19</div>
                <div class="date">20</div>
                <div class="date">21</div>
                <div class="date">22</div>
                <div class="date">23</div>
                <div class="date">24</div>
                <div class="date">25</div>
                <div class="date">26</div>
                <div class="date">27</div>
                <div class="date">28</div>
                <div class="date">29</div>
                <div class="date">30</div>
                <div class="date">31</div>
              </div>
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

export default {
  name: "Gut_00032",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    ContentHead,
    CustomButton
  },
};
</script>
