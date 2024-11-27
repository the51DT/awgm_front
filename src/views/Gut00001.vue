<template>
  <div class="loading-box-wrap">
    <div class="loading-wrap">
      <div class="content-etc-img-area active">
        <img
          :src="require('@/assets/images/icon/ico_etc02_loading.png')"
          alt="로딩페이지 아이콘"
        />
      </div>
    </div>
    <div class="content-area">
      <div class="lottie-conts">
        <FrontIntro :lottieColorType="fontColorType" />
      </div>

      <div class="intro-text">
        <FrontCount desc="참여자가 함께하고 있어요!" total="16160" />
      </div>

      <KakaoButton />
      <ChildButton />
    </div>
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
      fontColorType: "green",
    };
  },
  components: {
    KakaoButton,
    ChildButton,
    FrontIntro,
    FrontCount,
  },
  mounted() {
    this.loadingStart();
  },
  methods: {
    loadingStart() {
      const contentArea = document.querySelector(".content-area");
      const loadingArea = document.querySelector(
        ".loading-box-wrap .loading-wrap"
      );
      contentArea.style.display = "none";
      setTimeout(() => {
        loadingArea.style.display = "none";
      }, 500);
      contentArea.style.display = "block";
    },
  },
};
</script>
