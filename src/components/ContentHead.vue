<template>
  <div class="head-area"
  :class="[
    headType === 'ty02' ? 'ty02' : '',
  ]">
    <a class="area-left" href="#" v-if="leftArea === true">
      <img class="ico-logo"
        :src="require(`@/assets/images/icon/ico_arrow_left.png`)"
        alt="이전페이지로 이동"
      />
    </a>
    <h2 class="page-title">{{ title }}</h2>
    <button type="button" class="area-right" v-if="rightArea === true">
      <img class="ico-logo"
        :src="require(`@/assets/images/icon/ico_close.png`)"
        alt="닫기"
      />
    </button>
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
  }
}
</script>