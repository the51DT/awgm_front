<template>
  <!-- calendar 영역 정리 -->
  <!-- 
    - 캘린더 마크업 내 사용된 클래스 정리 [클래스명]
    1 팀 시작일 : (문구) [date-info start]
    2 인증일 : (노란배경 + bold +텍스트흰색 , 선택시 ) [ vc-highlight active ] -- 해당 클래스에 active 클래스 존재시
    3 챌린지 진행 기간 : active (배경색 gray) [ vc-highlight-bg-light ]
    4 Today : today (문구 + 노란테두리) [date-info today]
  -->  
  <div ref="calendarContainer">
    <h3  class="calendar-title"><slot name="title"></slot></h3>
    <VCalendar
      borderless
      :initial-page="{ month: 10, year: 2024 }"
      :color="selectedColor"
      :attributes="attrs"
      @update:page="addMessages"
      :masks="{ title: 'YYYY. MMMM' }"
    >
      <template v-slot:title="{ month, year }">
        <span>{{ year }}. {{ month + 1 }}월</span>
      </template>
    </VCalendar>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";

const selectedColor = ref("orange");
const attrs = ref([
  {
    key: "calendarBox",
    highlight: true,
    dates: { start: new Date(2024, 9, 1), end: new Date(2024, 9, 18) },
  },
]);

const calendarContainer = ref(null);

const addMessages = () => {
  nextTick(() => {
    const titleWrapper =
      calendarContainer.value.querySelector(".vc-title-wrapper");

    // 추가 텍스트 wrap
    const calendarTextWrap = document.createElement("div");
    calendarTextWrap.className = "calendar-text-wrap";

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.innerHTML = `
      <p>이번 달 나의 미션 인증 횟수 <strong class="clear-count">5</strong>회</p>
      <p>전체 70일 중에 <span class="clear-day">28</span>일 인증 완료했습니다.</p>
    `;    
    calendarTextWrap.appendChild(desc);
    titleWrapper.appendChild(calendarTextWrap);

    const days = calendarContainer.value.querySelectorAll(".vc-day-content");
    
    days.forEach((day) => {
      const dayDate = day.getAttribute("aria-label");      


      // 인증일 날짜 표시 - (data)개발 처리 필요
      if (dayDate.includes("2024년 10월 5일")) {
        const todayInfo = document.createElement("div");
        todayInfo.className = "date-info success";
        day.appendChild(todayInfo);
      }

      // 시작 날짜 표시 - (data)개발 처리 필요
      if (dayDate.includes("2024년 10월 1일")) {
        const startInfo = document.createElement("div");
        startInfo.className = "date-info start";
        day.appendChild(startInfo);
      }

      // 오늘 날짜 표시
      const todayStr = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      if (dayDate.includes(todayStr)) {
        const todayInfo = document.createElement("div");
        todayInfo.className = "date-info today";
        day.appendChild(todayInfo);
      }
    });
  });
};

onMounted(addMessages);
</script>

<style>
.vc-container {
  width: 100%;
  font-family: "RixSinHead";
  font-weight: normal;
  .vc-header {
    height: auto;
    padding: 0;
    margin: 0;
  }

  .vc-title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 6px;
  }
  
  .vc-title span {
    color: #169e4a;
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
  }

  .calendar-text-wrap {
    margin-top: 5px; /* 간격 조정 */
  }

  .vc-weekdays {
    font-weight: 800;
    padding-bottom: 8px;
    .vc-weekday {
      color: #000; 
      font-size: 16px;
      left: 24px;
    }
  }
  .vc-weeks {
    padding: 20px 12px 0;
		text-align: center;
  }
  .vc-week {
    &:last-child {
      display: none;
    }
    padding-bottom: 16px;
    .vc-day:first-child {
      color: #f79c22;
    }
    .vc-day {
      color: #666;
      font-size: 14px;
      font-weight: 800;
      line-height: 24px;
      .vc-highlight-bg-light {
        background: #e5e5e5;
        padding: 16px 0;
        position: relative;
      }
      .vc-highlight-content-light {
        color: #666;
      }
      .vc-highlight-content-solid {
        background: #e5e5e5;
        color: #666;
        z-index: 0;
        &:hover {
          background: #e5e5e5;
        }
      }
    }
    .vc-day-content {
      width: 32px;
      height: 32px;
      font-weight: 800;
      &:hover, &:active, &:focus {
        outline: 0;
        border: 0;
        background: none;
      }
    }
  }

  .vc-orange {
    --vc-accent-600: #f79c22;
  }

  .desc {
    text-align: center;
  }

  .date-info {
    font-size: 10px;
    line-height: 16px;
    letter-spacing: -0.5px;
    &:after {
      display: block; 
      position: absolute;
      bottom: -14px;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 2px;
      color: #666;
    }
    &.success {
      &:before {
        content: "";
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 24px;
        background-color: #f79c22;
        border: 1px solid #f79c22;
        position: absolute;
        top: 0;
        left: 51%;
        transform: translateX(-50%);
        z-index: -1;
      }
    }
    &.today {
      color: #000 !important;
      &:before {
        content: "";
        border-radius: 24px;
        display: block;
        width: 32px;
        height: 32px;
        border: 4px solid #f79c22 !important;
        position: absolute;
        top: 0;
        left: 51%;
        transform: translateX(-50%);
        background-color: #fff !important;
        z-index: -1;
      }
      &:after {
        content: "Today";
      }
    }
    &.start {
      &:after {
        content: "Start";
      }
    }
  }
}
</style>
