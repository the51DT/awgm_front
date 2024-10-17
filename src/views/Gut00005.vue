<template>
  <div class="content-area">
    <ContentHead title="공지사항" headType="ty02" :leftArea=true />
    <div class="notice--list">
      <button class="card card--green card--shadow00">
        <p class="notice--list__title new"><span>것모닝 챌린지 NEW 프로젝트!</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--green card--shadow00">
        <p class="notice--list__title"><span>Gut morning 신제품 체험단을 모집합니다.</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--border">
        <p class="notice--list__title new"><span>Gut morning 챌린지 페이지 업데이트 소식</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--border">
        <p class="notice--list__title new"><span>챌린지 관련 공지사항 입니다.</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--border">
        <p class="notice--list__title"><span>자녀계정 중복 관련 공지사항입니다.</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--border">
        <p class="notice--list__title"><span>10월 Gut morning 이벤트 일정 공지사항을 알려드립니다.</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--border">
        <p class="notice--list__title"><span>자녀계정 중복 관련 공지사항입니다.</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--border">
        <p class="notice--list__title new"><span>10월 Gut morning 이벤트 일정 공지사항을 알려드립니다.</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>

      <button class="card card--border">
        <p class="notice--list__title"><span>자녀계정 중복 관련 공지사항입니다.</span></p>
        <p class="notice--list__date">2024.09.21</p>
      </button>
    </div>
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";

export default {
  name: "LoginMain",
  components: {
    ContentHead,
  }
};
</script>

<style scoped></style>