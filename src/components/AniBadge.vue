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
        <span class="badge-name" v-if="type === 'badge'">
          <slot />
        </span>
        <span class="badge-name" v-else>
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
import CustomButton from "@/components/CustomButton.vue"


export default {
  name: "AniBadge",
  components: { CustomButton },
  data() {
    return {
      isReady: false
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    badgeName: {
      type: String,
      default: ""
    },
    pinName: {
      type: String,
      default: ""
    }
  },
  methods: {
    async startAnimation() {
      // 시뮬레이션 로딩 대기
      await new Promise(resolve => setTimeout(resolve, 300));

      // 렌더 완료 후 requestAnimationFrame
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          const box = this.$refs.box;

          if (!box) return;

          const startTime = performance.now(); // 🔸 애니메이션 시작 시점 기록

          const animation = box.animate(
            [
              { offset: 0, transform: 'rotateY(0deg)', transform: 'translateY(0)' },
              { offset: 0.05, transform: 'rotateY(360deg)', },

              { offset: 0.1, transform: 'rotateY(0deg)', },
              { offset: 0.15, transform: 'rotateY(360deg)', },

              { offset: 0.22, transform: 'rotateY(0deg)', },
              { offset: 0.29, transform: 'rotateY(360deg)', },

              { offset: 0.36, transform: 'rotateY(0deg)', },
              { offset: 0.48, transform: 'rotateY(180deg)', },
              { offset: 0.6, transform: 'rotateY(90deg)', },
              { offset: 0.73, transform: 'rotateY(0deg)', },

              { offset: 0.9, transform: 'rotateY(0deg)', transform: 'translateY(-48px)' },
              { offset: 0.93, transform: 'translateY(-50px)' },
              { offset: 0.99, transform: 'translateY(-50px)' },
              { offset: 1, transform: 'rotateY(0deg)', transform: 'translateY(0)' },
            ],
            {
              duration: 2700,
              easing: 'ease-out',
              fill: 'forwards'
            }
          );

          console.log('card animation started at', startTime);

          animation.onfinish = () => {
            console.log('card animation finished');
          };

          animation.oncancel = () => {
            console.warn('card animation canceled');
          };
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
      play.play()
    }, 850)
    // console.log(this.startAnimation) // ✅ 함수여야 함
    // this.startAnimation()
    this.startAnimation()
    // setTimeout(() => {

    // }, 2000)


    // // 애니메이션 시간 디버깅용(나중에삭제)
    // const box = this.$refs.box
    // if (box) {
    //   box.addEventListener('animationstart', () => {
    //     console.log('animationstart', performance.now())
    //   })

    //   box.addEventListener('animationend', () => {
    //     console.log('animationend', performance.now())
    //   })
    // }

  },




};

</script>

<style></style>