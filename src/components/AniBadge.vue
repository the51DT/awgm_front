<template>
  <div class="popup--badge" :class="isTopBtn === true ? 'sticky' : ''" :id="id">
    <button type="button" class="close-btn">
      <img class="ico-logo" :src="require('@/assets/images/icon/ico_close_w.svg')" alt="닫기" />
    </button>
    <div class="badge-wrap">
      <h3 v-if="type === 'badge'">NEW BADGE!</h3>
      <h3 v-else>LEVEL UP!</h3>
      <div ref="animationContainer" class="animation_bg"></div>
      <div class="badge">
        <div class="badge--wrap" ref="box" :class="{ start: isReady }">
          <div class="badge-img badge-front">
            <img :src="getImgSrc(frontImg)" class="badge-front" />
          </div>
          <div class="badge-img badge-back">
            <img :src="getImgSrc(backImg)" class="badge-back" />
          </div>
        </div>
        <div class="badge--shadow"></div>
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
/*
    사용 예시
    <AniBadge type="pin" frontImg="pin--ruby.svg" backImg="back/pin--ruby.svg"> $명칭$ </AniBadge>  
    
    - type : pin/badge 선택 
    - frontImg : 이미지 네임만 작성
    - backImg : back/이미지네임 작성
    - $명칭$ : 핀/배지 명칭 작성
*/
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
    frontImg: {
      type: String,
      required: true
    },
    backImg: {
      type: String,
      required: true
    }
  },
  methods: {
    startAnimation() {
      // 로딩 대기
      // await new Promise(r => setTimeout(r, 300));
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
    },

    getImgSrc(path) {
      try {
        return require(`@/assets/images/badgeImg/${path}`)
      } catch (e) {
        console.warn('이미지 경로 오류:', path)
        return ''
      }
    },
    scrollDisable() {
      document.body.classList.add('scroll-disable');
      document.body.addEventListener('wheel', this.preventScroll, { passive: false });
      document.body.addEventListener('touchmove', this.preventScroll, { passive: false });
      document.body.addEventListener('scroll', this.preventScroll, { passive: false });
    },

    scrollAble() {
      document.body.classList.remove('scroll-disable');
      document.body.removeEventListener('wheel', this.preventScroll);
      document.body.removeEventListener('touchmove', this.preventScroll);
      document.body.removeEventListener('scroll', this.preventScroll);
    },

    preventScroll(e) {
      e.preventDefault();
    }
  },

  mounted() {
    const play = lottie.loadAnimation({
      container: this.$refs.animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: '/json/confetti2.json',
    });

    setTimeout(() => {
      play.play();

      const container = this.$refs.animationContainer;
      if (container) {
        container.style.display = 'block'; // ✅ 표시
      }
    }, 2700);

    // play.play();

    this.startAnimation();

    this.scrollDisable();

  },
  unmounted() {
    this.scrollAble();
  },
};
</script>
