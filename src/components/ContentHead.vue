<!-- 2Depth Header -->
<template>
  <div class="head-area" :class="[
    headType === 'ty02' ? 'ty02' : '',
    headType === 'ty03' ? 'ty03' : '',
    { 'bgGray': bgGray },
    { 'scrolled': isScrolled },
    bgClass
  ]"
  >
    <a class="area-left" href="#" v-if="leftArea === true">
      <!-- <img class="ico-logo" :src="require(`@/assets/images/icon/ico_arrow_left.png`)" alt="이전페이지로 이동" /> -->
      <img
        class="ico-logo"
        :src="require(bgClass === 'bgGray'
          ? '@/assets/images/icon/ico_arrow_left.png'
          : '@/assets/images/icon_arrow_left_w.svg')"
        alt="이전페이지로 이동"
      />
    </a>
    <template v-if="headType === 'ty03'">
      <h2 class="page-title">
        <slot name="title">{{ title }}</slot>
      </h2>
    </template>
    <h2 v-else class="page-title">{{ title }}</h2>
    <div class="area-right" v-if="rightArea === true">
      <div v-if="rightIcon" class="area-right__icon">
        <!-- <button><img :src="require(`@/assets/images/icon_setting.svg`)" /></button>
        <button><img :src="require(`@/assets/images/icon_add_team.svg`)" /></button> -->
        <img
          :src="require(bgClass === 'bgGray'
            ? '@/assets/images/icon_setting.svg'
            : '@/assets/images/icon_setting_w.svg')"
          alt="설정"
        />
        <button>
          <img
            :src="require(bgClass === 'bgGray'
              ? '@/assets/images/icon_add_team.svg'
              : '@/assets/images/icon_add_team_w.svg')"
            alt="설정"
          />
        </button>
      </div>
      <button v-else type="button">
        <img class="ico-logo" :src="require(`@/assets/images/icon/ico_close.png`)" alt="닫기" />
      </button>
    </div>
  </div>
  <div v-if="headType === 'ty02'" class="header-space2"></div>

<!-- <div class="medal_btn">
<button><img :src="require(`@/assets/images/icon_medal.svg`)"></button>
<div class="medal_btn__pop on">
<span>메달 부여 기준</span>
<button class="medal_btn__pop__close"></button>
<ul>
  <li><p><img :src="require(`@/assets/images/gold_medal.png`)">금메달</p><span>1위</span></li>
  <li><p><img :src="require(`@/assets/images/silver_medal.png`)">은메달</p><span>2위~10위</span></li>
  <li><p><img :src="require(`@/assets/images/bronze_medal.png`)">동메달</p><span>11위~30위</span></li>
</ul>
</div>
</div> -->


</template>

<script>
export default {
  name: "ContentHead",
  data() {
    return {
      isScrolled: false
    }
  },
  props: {
    title: String,
    headType: String,
    leftArea: Boolean,
    rightArea: Boolean,
    rightIcon: {
      type: Boolean,
      default: false,
    },
    bgGray: {
      type: Boolean,
      default: false,
    },
    bgClass: {
      type: String,
      default: 'bgGray' // 기본 배경색 클래스
    }

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    }
  }
}
</script>