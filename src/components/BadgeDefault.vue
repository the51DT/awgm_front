<template>
  <div class="badge">
    <div class="badge__wrap">
      <img v-if="imageSrc" :src="imageSrc" alt="badge" />
    </div>
    <div class="badge__name" >
      <p :class="pointColor"> <slot /> </p>
      <div v-if="isTag">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    pointColor: {
      type: String,
      default: ''
    },
    isTag: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageSrc() {
      try {
        return require(`@/assets/images/badgeImg/${this.img}`);
      } catch (e) {
        console.warn(`이미지 "${this.img}"를 찾을 수 없습니다.`);
        return null;
      }
    }
  }
}

// <BadgeDefault img="gold.svg" pointColor="gold-style">
</script>

<style>

</style>