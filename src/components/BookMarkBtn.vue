<template>
  <div class="bookmark">
    <!-- 활성화 시 on 클래스 추가 -->
    <button class="bookmark__btn" @click="toggleBookMark" :class="{ on: isActive == true }"></button>
  </div>
</template>

<script>
export default {
  name: "BookMarkBtn",
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleBookMark() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style></style>