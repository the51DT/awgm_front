<template>
  <div ref="calendarContainer">
    <h3 class="calendar-title"><slot name="title"></slot></h3>
    <VCalendar
      borderless
      :initial-page="{ month: 10, year: 2024 }"
      :color="selectedColor"
      :attributes="attrs"
      @update:page="addMessages"
      :masks="{ title: 'YYYY. MMMM' }"
      disable-page-swipe
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
  const parts = dateString.match(/\d+/g);
  if (!parts || parts.length < 3) return "";
  return `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].padStart(
    2,
    "0"
  )}`;
}

onMounted(addMessages);
</script>
