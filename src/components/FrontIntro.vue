<template>
  <div class="intro" :id="lottieColorType == 'green' ? 'green' : 'white'">
    <div ref="animationContainer"></div>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

</script>

<script>

const animationContainer = ref(null);

export default {
  name: "FrontIntro",
  data() {
    return {      
    }
  },
  props: {
    lottieColorType: String,
  },
  mounted() {
    let lottiePath = "";
    let fontColorType = "";
    let lottieItem = {
      typeGreen : [
        {path: "/json/gut_green.json"},
      ],
      typeWhite : [
        {path: "/json/gut_white.json"},
      ]
    };
    
    fontColorType = document.querySelector(".intro").getAttribute("id");

    // 여러개의 로티이미지 랜덤 json 노출 원할 경우 위해 기존 로직 호출 구조 남겨놓았음 (배열에 값 1개 있을 경우, 1개만 노출됨)
    if(fontColorType == "green") {
      lottiePath = lottieItem.typeGreen[Math.floor(Math.random() * lottieItem.typeGreen.length)].path;
    } else if(fontColorType == "white") {
      lottiePath = lottieItem.typeWhite[Math.floor(Math.random() * lottieItem.typeWhite.length)].path;
    }

    lottie.loadAnimation({
      container: animationContainer.value, // 애니메이션 들어갈 요소의 ref 값
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: lottiePath
    });
  }
};

</script>