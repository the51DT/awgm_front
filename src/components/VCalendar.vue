<template>
  <!-- calendar 영역 정리 -->
  <!--
    * 캘린더 마크업 내 사용된 클래스 정리 [클래스명]
    1 팀 시작일 : (문구) [vc-day-content에 start 클래스 존재시]
    2 인증일 : (노란배경 + bold +텍스트흰색 , 선택시 ) [ vc-day-content에 success 클래스 존재사 ]
    3 챌린지 진행 기간 : active (배경색 gray) [ vc-highlight-bg-light ]
    4 Today : today (문구 + 노란테두리) [vc-day-content에 today 클래스 존재시]
  -->
  <div ref="calendarContainer">
    <h3 class="calendar-title">
      <slot name="title"></slot>
    </h3>
    <VCalendar borderless :initial-page="{ month: 10, year: 2024 }" :color="selectedColor" :attributes="attrs"
      @update:page="addMessages" :masks="{ title: 'YYYY. MMMM' }" disable-page-swipe>
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

    const calendarTextWrap = document.createElement("div");
    calendarTextWrap.className = "calendar-text-wrap";

    const desc = document.createElement("div");
    desc.className = "desc";
    // desc.innerHTML = `
    //   <p>이번 달 나의 미션 인증 횟수 <strong class="clear-count">6</strong>회</p>
    //   <p>전체 70일 중에 <span class="clear-day">28</span>일 인증 완료했습니다.</p>
    // `;
    desc.innerHTML = `
      <p>이번 달 나의 미션 인증 횟수 <strong class="clear-count">6</strong>회</p>
    `;
    calendarTextWrap.appendChild(desc);
    titleWrapper.appendChild(calendarTextWrap);

    const days = calendarContainer.value.querySelectorAll(".vc-day-content");

    days.forEach((day) => {
      const dayDate = day.getAttribute("aria-label");
      const parsedDate = parseDate(dayDate);

      const dateInfo = document.createElement("div");
      dateInfo.className = "date-info";
      day.appendChild(dateInfo);

      const successDates = [
        "2024-10-05",
        "2024-10-08",
        "2024-10-10",
        "2024-10-11",
        "2024-10-17",
      ];

      if (successDates.includes(parsedDate)) {
        day.classList.add("success");
      }

      if (parsedDate === "2024-10-01") {
        day.classList.add("start");
      }

      const today = new Date();
      const todayStr = `${today.getFullYear()}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

      if (parsedDate === todayStr) {
        day.classList.add("today");
      }
    });
  });
};

function parseDate(dateString) {
  if (!dateString) return "";

  // 영문 날짜 포맷 처리 (예: "October 5, 2024")
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  }

  // 한글 날짜 포맷 처리 (예: "2024년 10월 5일")
  const parts = dateString.match(/\d+/g);
  if (!parts || parts.length < 3) return "";
  return `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].padStart(
    2,
    "0"
  )}`;
}

onMounted(addMessages);
</script>
