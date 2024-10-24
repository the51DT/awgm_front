<template>
  <div class="content-area">
    <div class="lottie-conts">
      <FrontIntro :lottieColorType="fontColorType" />
    </div>

    <div class="intro-text">
      <FrontCount desc="명이 함께하고 있어요!" total="1000" />
    </div>

    <KakaoButton />
    <ChildButton />
  </div>
</template>

<script>
import FrontIntro from "@/components/FrontIntro.vue";
import FrontCount from "@/components/FrontCount.vue";
import KakaoButton from "@/components/KakaoButton.vue";
import ChildButton from "@/components/ChildButton.vue";

export default {
  name: "Gut_00001",
  data() {
    return {    
        fontColorType : "green",
    };
  },
  components: {
    KakaoButton,
    ChildButton,
    FrontIntro,
    FrontCount
  },
};
</script>
