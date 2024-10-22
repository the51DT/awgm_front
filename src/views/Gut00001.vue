<template>
  <div class="content-area">
    <div class="lottie-conts">
      <FrontIntro :lottieColorType="fontColorType" />
    </div>

    <div class="intro-text">
      <div class="text-group">
        <img
          class="ico-img"
          :src="require(`@/assets/images/content/conts-ico_people01.png`)"
          alt="참여인원 아이콘"
        />
        <p class="count-num" data-total="100000">100000</p>
        <!-- data-total값 추가 : 참여 인원 data값 공통 매핑 필요 -->
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
        fontColorType : "green"
    };
  },
  components: {
    KakaoButton,
    ChildButton,
    FrontIntro,
  },
  methods: {
    // 3자리수(천단위) , 체크 작업 필요
    countingType() {
      let countNum = document.querySelector(".count-num");
      let total = document.querySelector(".count-num").dataset.total;
      let now = total;
      const handle = setInterval(() => {
        countNum.innerHTML = Math.ceil(total - now);
        if (now < 1) {
          clearInterval(handle);
        }
        const step = now / 10;
        now -= step;
      }, 50);
    },
  },
  mounted() {
    this.countingType();
  },
};
</script>
