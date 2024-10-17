<template>
  <div ref="calendarContainer">
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

const selectedColor = ref("blue");
const attrs = ref([
  {
    key: "test",
    highlight: true,
    dates: { start: new Date(2024, 9, 22), end: new Date(2024, 9, 28) },
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
    `;
    calendarTextWrap.appendChild(desc);
    titleWrapper.appendChild(calendarTextWrap);

    const days = calendarContainer.value.querySelectorAll(".vc-day-content");
    days.forEach((day) => {
      const dayDate = day.getAttribute("aria-label");

      // 시작 날짜 표시
      if (dayDate.includes("2024년 10월 22일")) {
        const startInfo = document.createElement("div");
        startInfo.className = "date-info";
        startInfo.innerHTML = "<p>Start</p>";
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
        todayInfo.className = "date-info";
        todayInfo.innerHTML = "<p>Today</p>";
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

  .vc-title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .desc {
    text-align: center;
  }

  .date-info {
    text-align: center;
    font-size: 0.8em; /* 작게 보이게 조정 */
    margin-top: 5px; /* 간격 조정 */
  }

  .vc-weeks {
    margin-top: 30px;
  }
  .date-info {
    display: block;
  }
}
</style>
