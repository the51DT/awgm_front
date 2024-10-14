<template>
  <div class="content-area">    
    <div class="lottie-conts">
      <FrontIntro />
    </div>

    <div class="intro-text">
      <div class="text-group">
        <img
          class="ico-img"
          :src="require(`@/assets/images/content/conts-ico_people01.png`)"
          alt="참여인원 아이콘"
        />
        <p class="count-num">1,000,000</p>
      </div>
      <p class="desc">명이 함께하고 있어요!</p>
    </div>

    <KakaoButton />
    <ChildButton />
  </div>
</template>

<script>
import FrontIntro from "../components/FrontIntro.vue";
import KakaoButton from "@/components/KakaoButton.vue";
import ChildButton from "@/components/ChildButton.vue";

export default {
  name: "Gut_00001",
  data() {
    return {
      type: "",
    };
  },
  components: {
    KakaoButton,
    ChildButton,
    FrontIntro,
  },
};
</script>
