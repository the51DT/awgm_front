<template>
  <div class="content-area">
    <ContentHead title="나의 인증 현황" :leftArea=true headType="ty02" />
    <div class="calendar">
      <VCalendar :show-detail="false"/>
    </div>
    <div class="btn-area ty05">
      <CustomButton>
        인증 공유하기
      </CustomButton>
    </div>
  </div>
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
