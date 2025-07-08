<template>
  <div class="activity bg-case">
    <div class="activity--sub">
      <div class="activity-content-area">
        <ContentHead title="이전 기록" headType="ty02" :leftArea="true" bgClass="bgGray" />
        <div class="represent__pop">
          <div class="activity__area_badge-section not-badges">
            <div class="activity-badge--not">
              <img :src="require(`@/assets/images/not-badges.svg`)">
              <p class="activity-badge--not__title">이전 기록이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import BadgeDefault from "@/components/BadgeDefault.vue";


export default {
  name: "Gut_00038",
  data() {
    return {
      leftArea: "",
      observer: null
    };
  },
  computed: {

  },
  components: {
    ContentHead,
    BadgeDefault,
  },

};
</script>

<style scoped>

</style>
