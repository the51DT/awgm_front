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
    <div v-if="isOpen" class="panel--content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArrowIcon from "@/assets/images/icon_arrow_down.svg";

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

<style>

</style>