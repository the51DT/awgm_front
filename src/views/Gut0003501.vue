<template>
  <PopupDefault full :isTopBtn="true">
    <template v-slot:full>
      <div class="activity-content-area">
        <ContentHead title="대표 배지 설정" :rightArea=true />
        <div class="represent__pop" v-if="hasBadges == true">
          <div class="activity__area_badge-section">
            <div class="badge-box-wrap">
              <div class="badge-box"> <BadgeDefault img="badge__continuous_10.svg">10일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_30.svg">30일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_60.svg">60일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_90.svg">90일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_100.svg">100일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_10.svg">10일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_30.svg">30일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_60.svg">60일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_90.svg">90일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_100.svg">100일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_10.svg">10일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_30.svg">30일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_60.svg">60일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_90.svg">90일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_100.svg">100일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_10.svg">10일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_30.svg">30일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_60.svg">60일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_90.svg">90일 연속 인증</BadgeDefault></div>
              <div class="badge-box"> <BadgeDefault img="badge__continuous_100.svg">100일 연속 인증</BadgeDefault></div>
            </div>
          </div>
          <div class="btn-area ty03">
            <CustomButton color="light" class="ty02">취소</CustomButton>
            <CustomButton>확인</CustomButton>
          </div>
        </div>
        <div class="represent__pop" v-else>
          <div class="activity__area_badge-section not-badges">
            <div class="activity-badge__not">
              <img :src="require(`@/assets/images/not-badges.svg`)">
              <p class="activity-badge__not__title">아직 획득한 배지가 없어요.</p>
            </div>
          </div>
          <div class="btn-area ty03">
            <CustomButton color="light" class="ty02">취소</CustomButton>
            <CustomButton>확인</CustomButton>
          </div>
        </div>
      </div>

    </template>
  </PopupDefault>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import tabFn from "@/plugins/common.js";
import PopupDefault from "@/components/PopupDefault.vue";
import BadgeDefault from "@/components/BadgeDefault.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "LoginMain",
  data(){
    return{
      hasBadges : true,
    }
  },  
  components: {
    ContentHead,
    PopupDefault,
    BadgeDefault,
    CustomButton
  },
  mounted() {
    tabFn.tabFn()
  },
};
</script>

<style scoped>
  .badge-box-wrap{
    gap: 8px;
  }
  .activity__area_badge-section{
    margin-bottom: 8px;
  }
</style>
