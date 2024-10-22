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
        {path: "https://lottie.host/1207fb35-4ac4-4f1c-979d-bfc773303977/F2ptuVKnVK.json"},
        {path: "https://lottie.host/b5fe3092-e245-474d-b760-a892d8665a0a/NNqHNlLL2S.json"},
        {path: "https://lottie.host/143d01f1-13c7-485c-84ec-46d2a12c4473/W6QABDh4RY.json"},
        {path: "https://lottie.host/88a3acf4-6312-4d56-892c-e76fb301a41f/e7dQZ0Y9V3.json"},
      ],
      typeWhite : [
        {path: "https://lottie.host/032b0ec2-ada4-40ae-a88c-c77598fc0fa2/ptWCAmtzvJ.json"},
        {path: "https://lottie.host/20e71e3a-2731-451d-9acd-afe7c49390ed/hVG2tM1hFE.json"},
        {path: "https://lottie.host/5b7e9799-ed2d-45f7-bc02-dcd132c8033a/r0nPTzQpMl.json"},
        {path: "https://lottie.host/b27c1973-a5b6-4490-98dc-c1da7c0db8d4/c2TweErqpP.json"},
      ]
    };
    
    fontColorType = document.querySelector(".intro").getAttribute("id");

    if(fontColorType == "green") {
      lottiePath = lottieItem.typeGreen[Math.floor(Math.random() * lottieItem.typeGreen.length)].path;
      console.log("type green: **** " + lottiePath);
    } else if(fontColorType == "white") {
      lottiePath = lottieItem.typeWhite[Math.floor(Math.random() * lottieItem.typeWhite.length)].path;  
      console.log("type white: **** " + lottiePath);
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