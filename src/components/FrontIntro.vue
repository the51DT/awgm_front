<template>  
  <div class="intro">
    <div ref="animationContainer"></div>
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
    path: "https://lottie.host/88a3acf4-6312-4d56-892c-e76fb301a41f/e7dQZ0Y9V3.json" // 나의 건강과 미래를 바꾸기 시작하는 것모닝 하세요(ty04)
  });
});

</script>

<script>

export default {
  name: "FrontIntro",
};

</script>

<style scoped></style>



