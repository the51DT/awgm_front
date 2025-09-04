<template>
  <div class="team">
    <div class="team__add">
      <button>
        <img :src="require(`@/assets/images/icon_plus_white.svg`)">
        <span>팀만들기</span>
      </button>
    </div>
    <div class="team team--main">
      <div class="text__title__wrap">
        <p class="text__title">팀장김웨이님은</p>
        <p class="text__subtit"><span class="text__subtit--bold">0</span>개 팀에 참여중입니다.</p>
        <p class="text__desc mt8"> 팀 현황을 확인해보세요</p>
      </div>
      <div class="tag--wrap">
        <button class="tag">진행중</button>
        <button class="tag tag-gray">진행종료</button>
        <button class="tag on">초대받은 팀 <span> (0개) </span></button>
      </div>
      <div class="tag_cont ">
        <div class="team--nodata">
          <img :src="require(`@/assets/images/team_no_data.png`)">
          <p>지금은 참여중인 <br />팀이 없습니다.</p>
        </div>
      </div>

      <div class="tag_cont">
        탭2
      </div>
      <div class="tag_cont on">
        <div class="team--nodata">
          <img :src="require(`@/assets/images/team_no_data.png`)">
          <p>초대받은 팀이 없습니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 
    card__title--end : gray
    card__title--challenge

  -->

  <AppNav :team="true"></AppNav>
</template>

<script>
import AppNav from "@/layouts/AppNav.vue";
import CustomButton from "@/components/CustomButton.vue"
import IconButton from "@/components/IconButton.vue"
import tabFn from "@/plugins/common.js";

export default {
  name: "Gut0003402",
  components: {
    AppNav,
    CustomButton,
    IconButton,
  },
  mounted() {
    tabFn.tabFn()
  }
};
</script>

<style scoped></style>
