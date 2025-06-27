<template>
  <!-- 뱃지 획득 시 -->
  <div class="popup--badge" v-if="isBadge === true">
    <button type="button" class="close-btn">
        <img class="ico-logo" :src="require(`@/assets/images/icon/ico_close_w.svg`)" alt="닫기" />
    </button>
    <div class="badge-wrap">
      <h3> NEW BADGE !</h3>
      <div ref="animationContainer" class="animation_bg"></div>
      <div class="badge">
        <img :src="require(`@/assets/images/badgeImg/pin--emerald.svg`)" />
        <span class="badge-name"> 나의 생일 </span>
      </div>
      <div class="popup-message">
        <p> 축하합니다! </p>
        <p> 새로운 배지를 획득하셨어요!</p>
      </div>
    </div>
  </div>

  <!-- 핀레벨 획득 시 -->
  <div class="popup--pin" v-else>
    <button type="button" class="close-btn">
        <img class="ico-logo" :src="require(`@/assets/images/icon/ico_close_w.svg`)" alt="닫기" />
    </button>
    <div class="badge-wrap">
      <div ref="animationContainer" class="animation_bg"></div>
      <div class="badge">
        <img :src="require(`@/assets/images/badgeImg/pin--emerald.svg`)" />
      </div>
      <div class="popup-message">
        <h3> NEW BADGE!</h3>
        <p> 축하합니다! </p>
        <p> 새로운 핀레벨을 달성했습니다!</p>
      </div>
    </div>
    <div class="btn-wrap">
      <CustomButton> 보러가기 </CustomButton>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import CustomButton from "@/components/CustomButton.vue"


export default {
  name: "AniBadge",
  components: { CustomButton },
  setup() {
    // const animationContainer = ref(null);
    // return { animationContainer };
  },
  data(){
    return{
      isBadge : false,
      // isPin : true,
    }
  },
  mounted(){
      lottie.loadAnimation({
      container: this.$refs.animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: '/json/ani_test2.json',
    });
  }


};

</script>

<style>

</style>