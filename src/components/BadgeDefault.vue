<template>
  <div class="badge">
    <div class="badge__wrap" :class="width">
      <object type="image/svg"> 
        <img :src="imageSrc" alt="badge" :style="imgStyle" />
      </object>
    </div>
    <div class="badge__name">
      <span v-if="show" class="badge__name_tag"> 대표배지 </span>
      <p :class="pointColor"> <slot /> </p>
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
    width:{
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false,
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
      if (img.includes('beginner') || img.includes('mission_streak') ) return '#1EC159';
      if (img.includes('rookie') || img.includes('gold')) return '#FF8D2F';
      if (img.includes('bronze')) return '#B9876E';
      if (img.includes('silver')) return '#9DACAF';
      if (img.includes('platinum')) return '#636FE6';
      if (img.includes('ruby')) return '#FF5151';
      if (img.includes('sapphire')) return '#6E97FF';
      if (img.includes('emerald')) return '#29DEA5';
      if (img.includes('diamond') || img.includes('childrens_day')) return '#50CDFF';
      if (img.includes('founders_crown_ambassador')) return '#FF4999';
      if (img.includes('crown')) return '#A34EFF';
      if (img.includes('figure')) return '#415AFD';
      if (img.includes('amway')) return '#F79C22';
      if (img.includes('new_year')) return '#F98D18';
      if (img.includes('chuseok')) return '#3578FF';
      if (img.includes('mission_start')) return '#FFB80C';
      if (img.includes('family_day')) return '#B1FF7B';
      if (img.includes('octopus_mode')) return '#2F66D2';
      if (img.includes('birthday')) return '#98F055';
      if (img.includes('returning_hero')) return '#64D3FF';
      if (img.includes('early_bird')) return '#97D2FF';
      if (img.includes('womens_day')) return '#D084FF';
      if (img.includes('earth_day')) return '#3AE0C5';
      if (img.includes('halloween')) return '#5B1CA7';
      if (img.includes('valentines')) return '#F2497D';
      if (img.includes('liberation')) return '#05C7EB';
      if (img.includes('summer')) return '#3578FF';
      if (img.includes('winter')) return '#708EBB';
      if (img.includes('merry_christmas')) return '#F67171';
      if (img.includes('best_teammate')) return '#F14691';
      if (img.includes('family_power')) return '#74F158';

      return '#000000'; // fallback
    }
  }
}

// <BadgeDefault img="gold.svg" pointColor="gold-style">
</script>

<style>

</style>