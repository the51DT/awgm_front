<template>
  <div class="panel">
    <div class="panel--title" @click="toggle">
      <p>{{ title }}</p>
      <img
        :src=ArrowIcon
        :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}"
        alt="드롭박스 토글 버튼"
      />
    </div>
    <!-- <div v-if="isOpen" class="panel--content">
      <slot />
    </div> -->
    <transition name="panel-fade">
      <div v-if="isOpen" class="panel--content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArrowIcon from "@/assets/images/icon_arrow_down_gray.svg";

defineProps({
  title: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.panel-fade-enter-from,
.panel-fade-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.panel-fade-enter-to,
.panel-fade-leave-from {
  max-height: 500px; /* 최대 높이 예상값 */
  opacity: 1;
}
</style>