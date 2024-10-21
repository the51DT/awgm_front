<template>
  <!-- calendar 영역 정리 -->
  <!-- 
    - 캘린더 마크업 내 사용된 클래스 정리 [클래스명]
    1 팀 시작일 : (문구) [vc-day-content에 start 클래스 존재시]
    2 인증일 : (노란배경 + bold +텍스트흰색 , 선택시 ) [ vc-day-content에 success 클래스 존재사 ] 
    3 챌린지 진행 기간 : active (배경색 gray) [ vc-highlight-bg-light ]
    4 Today : today (문구 + 노란테두리) [vc-day-content에 today 클래스 존재시]
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
      const dateInfo = document.createElement("div");
      
      dateInfo.className = "date-info";
      day.appendChild(dateInfo);


      // 인증일 날짜 표시(success 클래스) - (data)개발 처리 필요
      if (dayDate.includes("2024년 10월 5일") || dayDate.includes("2024년 10월 8일") || dayDate.includes("2024년 10월 10일") || dayDate.includes("2024년 10월 11일") || dayDate.includes("2024년 10월 17일")) {
        day.classList.add("success");
      }

      // 시작 날짜 표시(start 클래스) - (data)개발 처리 필요
      if (dayDate.includes("2024년 10월 1일")) {       
        day.classList.add("start");
      }

      // 오늘 날짜 표시(today 클래스)
      const todayStr = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      if (dayDate.includes(todayStr)) {
        day.classList.add("today");
      }
    });
  });
};

onMounted(addMessages);
</script>
