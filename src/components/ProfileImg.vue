<template>
  <div class="profile_img">
    <div class="profile_img__info">
      <div class="user_img-wrap on-flag" :class="data.isLeader ? 'leaderOn' : ''">
        <div class="user_img">
          <img :src="require(`@/assets/images/${data.img}`)" alt="프로필 이미지" />
          <div class="certify-badge" :class="data.accreditABO ? 'on' : ''"></div>
        </div>
        <!-- <div class="profile_badge-wrap">
          <button v-if="badgeType === 'edit'" class="badge__edit"></button>
          <button v-if="badgeType === 'camera'" class="badge__camera"></button>
          <button v-if="badgeType === 'delete'" class="badge__delete"></button>
          <div v-if="badgeType === 'none'"></div>
        </div> -->
      </div>
      <p class="user__tit"> {{ data.nick }} </p>
    </div>
  </div>

  <!--
    <ProfileImg :data="객체" />
    > 부모 컴포넌트에 데이터 있어야함
  -->


  <!-- 옵션 -->
  <!-- 
    1. 왕관 (팀장) o
    2. ABO인증마크 -> 수정예정
    3. 크기 부모에서
    4. 수정 표시 (프로필 관리 시) o
  -->
</template>

<script>
export default {
  name: "ProfileImg",
  props: {
    data: {
      type: Object,
      required: true
    },
    badgeType: {
      type: String,
      default: 'none'
    },
  },
  methods: {

  },

}
</script>

<style></style>