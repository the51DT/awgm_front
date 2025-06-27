<template>
  <div class="badge">
    <div class="badge__wrap">
      <img v-if="imageSrc" :src="imageSrc" alt="badge" :style="imgStyle"/>
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
    },
  },
  computed: {
    imageSrc() {
      try {
        return require(`@/assets/images/badgeImg/${this.img}`);
      } catch (e) {
        console.warn(`이미지 "${this.img}"를 찾을 수 없습니다.`);
        return null;
      }
    },
    imgStyle() {
      const color = this.getShadowColor(this.img);
      return {
        filter: `drop-shadow(0px 2px 4px ${color}80)` // 80 = 50% 투명도
      };
    }
  },
  methods:{
    getShadowColor(img) {
      if (img.includes('beginner')) return '#1EC159';
      if (img.includes('rookie')) return '#FF8D2F';
      if (img.includes('bronze')) return '#B9876E';
      if (img.includes('silver')) return '#9DACAF';
      if (img.includes('gold')) return '#FF8D2F';
      if (img.includes('platinum')) return '#636FE6';
      if (img.includes('ruby')) return '#FF5151';
      if (img.includes('sapphire')) return '#6E97FF';
      if (img.includes('emerald')) return '#29DEA5';
      if (img.includes('diamond')) return '#50CDFF';
      if (img.includes('founders_crown_ambassador')) return '#FF4999';
      if (img.includes('crown')) return '#A34EFF';
      return '#000000'; // fallback
    }
  }
}

// <BadgeDefault img="gold.svg" pointColor="gold-style">
</script>

<style>

</style>