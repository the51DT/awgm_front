<template>
  <div class="content-area">
    <ContentHead :leftArea=true title="보상 지급 이력" headType="ty02"/>
    <div class="my-page-wrap not">
      <img :src="require(`@/assets/images/none_gift.svg`)" alt="보상 지급 이력이 없습니다." />
      <p class="challenge--main__not__title">보상 지급 이력이 없습니다.</p>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import ContentHead from "@/components/ContentHead.vue";

export default {
  name: "Gut_00036",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    ContentHead,
  },
  methods: {
  }
};
</script>
