<template>
  <div class="content-area">
    <ContentHead title="전체 팀원 보기" :leftArea=true headType="ty02" />
    <div class="team-box-wrap">
      <div class="list-conts-wrap" v-for="(item, index) in card_profile" :key="index">
        <div class="card card--border card--p16 card--shadowc2 card--link">
          <!-- 강퇴버튼 -->
          <button type="button" class="kickout-btn"  :class="{ 'leaderOn': item.isLeader }"> 강퇴 </button>
          <div class="card__top">
            <div class="card__profile__info">
              <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
              <div class="img-wrap on-flag" :class="{ 'leaderOn': item.isLeader }">
                <img class="card__img" :src="require(`@/assets/images/${item.img}`)" alt="프로필 이미지">
                <div class="certify-badge" :class="{ 'on': item.accreditABO }"></div>
              </div>
              <p class="card__tit">{{ item.nick }}</p>
            </div>
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

export default {
  name: "LoginMain",
  components: {
    ContentHead,
    TopButton,
    CustomButton
  },
  data() {
    return {
      card_profile: [
        { id: 1, nick: "팀장 김웨이", name: "김웨이", img: 'card_profile_1.png', count: '999', rate: '99', isLeader: true, accreditABO: true },
        { id: 2, nick: "유리카", name: "김사무엘 유리카 닉슨", img: 'card_profile_2.png', count: '223', rate: '74', isLeader: false, accreditABO: false, },
        { id: 3, nick: "다니엘", name: "다니엘 빌", img: 'card_profile_3.png', count: '223', rate: '52', isLeader: false, accreditABO: true, },
        { id: 4, nick: "코니", name: "코니 일렉스", img: 'card_profile_4.png', count: '223', rate: '29', isLeader: false, accreditABO: true, },
        { id: 5, nick: "김사무엘 주니어", name: "김*리", img: 'card_profile.png', count: '223', rate: '10', isLeader: false, accreditABO: false, },
      ],
    }
  }
};
</script>

<style scoped></style>