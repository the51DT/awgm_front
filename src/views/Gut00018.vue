<template>
  <div class="content-area">
    <ContentHead title="전체 팀원 보기" :leftArea=true headType="ty02" />
    <div class="team-box-wrap">
      <div class="list-conts-wrap" v-for="(item, index) in profile" :key="index">
        <div class="card card--border card--p16 card--shadowc2 card--link">
          <!-- 강퇴버튼 -->
          <button type="button" class="kickout-btn"  :class="{ 'leaderOn': item.isLeader }"> 강퇴 </button>
          <div class="card__top">
            <ProfileImg :data="item"/>
            <!-- <p class="card__tit">{{ item.nick }}</p> -->
            <div class="card__text__list ty02 team-list-view">
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TopButton></TopButton>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import TopButton from "@/components/TopButton.vue";
import CustomButton from "@/components/CustomButton.vue";
import ProfileImg from "@/components/ProfileImg.vue";

import { profileList } from '@/router/profile.js'

export default {
  name: "LoginMain",
  components: {
    ContentHead,
    TopButton,
    CustomButton,
    ProfileImg
  },
  data() {
    return {
      profile: profileList
    }
  }
};
</script>

<style scoped></style>