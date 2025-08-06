<template>
  <PopupDefault full>
    <template v-slot:full>
      <div class="activity-content-area">
        <ContentHead title="획득한 배지 전체보기" :rightArea=true />
        <div class="represent__pop">
          <div class="activity__area_badge-section">
            <div class="badge-box-wrap">
              <div class="badge-box">
                <BadgeDefault img="badge--event_figure_richDevos.svg">리치 디보스 탄생일</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--event_figure_jayVanAndel.svg">제이 벤 엔델 탄생일</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--amway_global.svg">한국암웨이 창립기념일 </BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--amway_global.svg">파운더스데이 </BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--happy_new_year.svg">새해 첫날</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--happy_chuseok.svg">추석</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--mission_start.svg">첫 인증</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--family_day.svg">패밀리데이</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--childrens_day.svg">어린이날</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--octopus_mode.svg">문어발</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--winter_gutmoring.svg">윈터 것모닝</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--merry_christmas.svg">메리 크리스마스</BadgeDefault>
              </div>
              <div class="badge-box">
                <BadgeDefault img="badge--best_teammate.svg">베스트 팀메이트</BadgeDefault>
              </div>
            </div>
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


export default {
  name: "Gut0003503",
  components: {
    ContentHead,
    PopupDefault,
    BadgeDefault,
  },
  mounted() {
    tabFn.tabFn()
  },
};
</script>

<style scoped>
.badge-box-wrap {
  gap: 8px;
}

.activity__area_badge-section {
  margin-bottom: 8px;
}
</style>
