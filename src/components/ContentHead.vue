<template>
  <div class="head-area"
  :class="[
    headType === 'ty02' ? 'ty02' : '',
    headType === 'ty03' ? 'ty03' : '',
  ]">
    <a class="area-left" href="#" v-if="leftArea === true">
      <img class="ico-logo"
        :src="require(`@/assets/images/icon/ico_arrow_left.png`)"
        alt="이전페이지로 이동"
      />
    </a>
    <h2  v-if="headType === 'ty03'" class="page-title"><slot name="title"></slot></h2>
    <h2 v-else class="page-title">{{ title }}</h2>
    <div class="area-right" v-if="rightArea === true">
      <div v-if="rightIcon" class="area-right__icon">
        <button><img :src="require(`@/assets/images/icon_setting.svg`)"/></button>
        <button><img :src="require(`@/assets/images/icon_add_team.svg`)"/></button>
      </div>
      <button v-else type="button">
        <img class="ico-logo"
          :src="require(`@/assets/images/icon/ico_close.png`)"
          alt="닫기"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentHead",
  props: {
    title: String,
    headType: String,
    leftArea : Boolean,
    rightArea : Boolean,
    rightIcon: {
      type: Boolean,
      default: false,
    }
  }
}
</script>