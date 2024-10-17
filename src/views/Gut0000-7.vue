<template>
  <ContentHead title="나의 인증 현황" :leftArea=true />
  <div class="content-area">
    <VCalendar />
  </div>
  <CustomButton>
    인증 공유하기
  </CustomButton>
</template>

<script>
import VCalendar from "@/components/VCalendar.vue";
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "LoginMain",
  data() {
    return {
      type: "",
    };
  },
  components: {
    VCalendar,
    ContentHead,
    CustomButton,
  },
};
</script>

<style scoped></style>
