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
        <div class="card">
          <div class="card-img card-front">
            <img :src="require('@/assets/images/badgeImg/pin--ruby.svg')" class="badge-front" />
          </div>
          <div class="card-img card-back">
            <img :src="require('@/assets/images/badgeImg/back/pin--ruby-back.svg')" class="badge-back" />
          </div>
        </div>
        <div class="card--shadow"></div>
        <span class="badge-name" v-if="type === 'badge'"> <slot /></span>
        <span class="badge-name" v-else> <slot /></span>
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
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: '/json/confetti.json',
    });
  }


};

</script>

<style></style>