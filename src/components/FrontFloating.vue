<template>
  <div class="floating">
    <img :src="FloatingSrc" alt="홈화면에 추가" />
  </div>
</template>

<script>
export default {
  name: "FrontFloating",
  data() {
    return {
      FloatingSrc: require("@/assets/images/sample.svg"),
    };
  },
};
</script>
<style scoped></style>
