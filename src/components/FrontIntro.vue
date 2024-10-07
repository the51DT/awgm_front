<template>
  <div class="intro">
    <div ref="animationContainer" style="width: 500px; height: 500px;"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

const animationContainer = ref(null);

onMounted(() => {
  lottie.loadAnimation({
    container: animationContainer.value, // 애니메이션 들어갈 요소의 ref 값
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/6fe10512-efda-4a53-a2ed-29edb17fae6d/ujD16R84gk.json'
  });
});
</script>

<script>
export default {
  name: "FrontIntro",
};
</script>

<style scoped></style>
