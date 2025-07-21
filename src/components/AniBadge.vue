<template>
  <div class="popup--badge">
    <button type="button" class="close-btn">
      <img class="ico-logo" :src="require('@/assets/images/icon/ico_close_w.svg')" alt="닫기" />
    </button>
    <div class="badge-wrap">
      <h3 v-if="type === 'badge'">NEW BADGE!</h3>
      <h3 v-else>LEVEL UP!</h3>
      <div ref="animationContainer" class="animation_bg"></div>
      <div class="badge">
        <div class="card" ref="box" :class="{ start: isReady }">
          <div class="card-img card-front">
            <img :src="require('@/assets/images/badgeImg/pin--ruby.svg')" class="badge-front" />
          </div>
          <div class="card-img card-back">
            <img :src="require('@/assets/images/badgeImg/back/pin--ruby-back.svg')" class="badge-back" />
          </div>
        </div>
        <div class="card--shadow"></div>
        <span class="badge-name">
          <slot />
        </span>
      </div>
      <div class="popup-message">
        <p>축하합니다!</p>
        <p v-if="type === 'badge'">새로운 배지를 획득하셨어요!</p>
        <p v-else>새로운 것모닝핀을 달성했습니다!</p>
      </div>
    </div>
    <div class="btn-wrap" v-if="type === 'pin'">
      <CustomButton>보러가기</CustomButton>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "AniBadge",
  components: { CustomButton },
  data() {
    return {
      isReady: false,
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    badgeName: {
      type: String,
      default: "",
    },
    pinName: {
      type: String,
      default: "",
    },
  },
  methods: {
    async startAnimation() {
      // 로딩 대기
      await new Promise(r => setTimeout(r, 300));
      const box = this.$refs.box;
      if (!box) return;

      // 애니메이션
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          box.animate(
            [
              { offset: 0, transform: 'rotateY(0deg)' },
              { offset: 0.05, transform: 'rotateY(360deg)' },
              { offset: 0.1, transform: 'rotateY(0deg)' },
              { offset: 0.2, transform: 'rotateY(360deg)' },
              { offset: 0.3, transform: 'rotateY(0deg)' },
              { offset: 0.45, transform: 'rotateY(360deg)' },
              { offset: 0.6, transform: 'rotateY(180deg)' },
              { offset: 0.7, transform: 'rotateY(90deg)' },
              { offset: 0.75, transform: 'rotateY(45deg)' },
              { offset: 0.8, transform: 'rotateY(0deg)' },
              { offset: 0.89, transform: 'rotateY(0deg) translateY(-55px)' },
              { offset: 0.96, transform: 'rotateY(0deg) translateY(-55px)' },
              { offset: 1, transform: 'rotateY(0deg) translateY(0)' }
            ],
            { duration: 2700, easing: 'ease-in', fill: 'forwards' }
          );
        });
      });

    }
  },

  mounted() {
    const play = lottie.loadAnimation({
      container: this.$refs.animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: '/json/confetti.json',
    });

    setTimeout(() => {
      play.play();
    }, 850);

    this.startAnimation();

  },
};
</script>
