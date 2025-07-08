<template>
  <!-- <PopupDefault popupBg="popup--bg-none">
    <template v-slot:cont>
      <div class="card--img card--shadowc2">
        <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)" />
        <div class="card--img__uploaded">
          <img :src="require(`@/assets/images/challenge_card_bg.png`)" />
        </div>
        <div class="card--img__text">
          <p class="card--img__text__date">2024.09.23 (금)</p>
          <p class="card--img__text__title">누적 인증 횟수</p>
          <p class="card--img__text__num"><span>2</span>회</p>
        </div>
        <div class="btn_wrap">
          <button class="share-btn"></button>
          <button class="replace-btn"></button>
        </div>
      </div>
    </template>
  </PopupDefault> -->

  <div class="popup popup--bg-none" :id="id">
    <div class="popup__box" :class="[sm ? 'popup__box--sm' : '', lg ? 'popup__box--lg' : '']">
      <button class="popup__box--close">
        <img :src="require(`@/assets/images/icon_close_white.svg`)" />
      </button>
      <div class="popup__box--cont">
        <div class="popup__box--middle">
          <div class="card--img">
          <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)" />
          <div class="card--img__uploaded">
            <img :src="require(`@/assets/images/challenge_card_bg.png`)" />
          </div>
          <div class="card--img__text">
            <p class="card--img__text__date">2024.09.23 (금)</p>
            <p class="card--img__text__title">나의 미션 인증 횟수</p>
            <p class="card--img__text__num"><span>2</span>회</p>
          </div>
          <div class="btn_wrap">
            <button class="share-btn"></button>
            <button class="replace-btn"></button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .share-btn {
    background: url('../assets/images/icon_share-fill.svg') no-repeat center/100%;
    right: 64px;
  }
  .popup__box--close{
    top: 0;
  }
  .replace-btn {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    background: url('../assets/images/icon_replace-nonebg.svg') center/100%;
  }

</style>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut0000405",
  components: {
    PopupDefault,
    CustomButton,
  },
  mounted() {
    layerClose.layerClose("popup");
  },
  methods: {

  }
};
</script>
