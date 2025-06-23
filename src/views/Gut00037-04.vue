<template>
  <!-- 초대한 팀원보기 - 참여대기 팀원X -->
  <div class="content-area">
    <ContentHead title="초대한 팀원 보기" headType="ty02" :leftArea=true />
    <div class="team">
      <div class="team team--main">
        <div class="text__title__wrap">
          <p class="text__title">팀장김웨이님이</p>
          <p class="text__subtit"><span class="text__subtit--bold">초대한 팀원 이력입니다.</span></p>
        </div>
        <div class="tag--wrap">
          <button type="button" class="tag">전체 <span>1</span></button>
          <button type="button" class="tag on">참여 대기 <span>0</span></button>
          <button type="button" class="tag">참여 완료 <span>1</span></button>
        </div>
        <div class="tag_cont">
          <div class="team--main__sub">
            <div class="card card--d8border card--shadowc2 card--flex3">
              <div class="card card--flex3-left card--invite_people">
                <div class="img-wrap on-flag">
                  <img class="ico-logo" :src="require(`@/assets/images/ico_profile.png`)" alt="프로필 이미지">
                </div>
                <div class="member-info">
                  <dl>
                    <dt>이름</dt>
                    <dd>유리카</dd>
                  </dl>
                  <dl>
                    <dt>닉네임</dt>
                    <dd>율리카</dd>
                  </dl>
                </div>
              </div>
              <div class="card--flex3-right card--invite_people completed--join">
                <img src="@/assets/images/completed_member.svg" alt="팀원 참여 대기 아이콘" />
                <p> 참여 완료 </p>
              </div>
            </div>
          </div>
        </div>
        <div class="tag_cont on">
          <!-- 리스트 목록 없을시 not 클래스 추가 -->
          <div class="team--main__sub not">
            <img :src="require(`@/assets/images/none_team_member.svg`)" alt="조회된 팀원이 없습니다" />
            <p class="challenge--main__not__title">참여 대기 팀원이 없습니다.</p>
          </div>
        </div>
        <div class="tag_cont">
          <!-- 리스트 목록 없을시 not 클래스 추가 -->
          <div class="team--main__sub">
            <div class="card card--d8border card--shadowc2 card--flex3">
              <div class="card card--flex3-left card--invite_people">
                <div class="img-wrap on-flag">
                  <img class="ico-logo" :src="require(`@/assets/images/ico_profile.png`)" alt="프로필 이미지">
                </div>
                <div class="member-info">
                  <dl>
                    <dt>이름</dt>
                    <dd>유리카</dd>
                  </dl>
                  <dl>
                    <dt>닉네임</dt>
                    <dd>율리카</dd>
                  </dl>
                </div>
              </div>
              <div class="card--flex3-right card--invite_people completed--join">
                <img src="@/assets/images/completed_member.svg" alt="팀원 참여 대기 아이콘" />
                <p> 참여 완료 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from  "@/components/CustomButton.vue"
import IconButton from "@/components/IconButton.vue"
import tabFn from "@/plugins/common.js";

export default {
  name: "Gut_00037",
  data() {
    return {
      leftArea: "",
      imageUrl: null,
    };
  },
  components: {
    ContentHead,
    CustomButton,
    IconButton,
  },
  mounted() {
    tabFn.tabFn()
  }
};
</script>

<style scoped>
  .team--main__sub{
    padding-bottom: 32px;
  }
</style>
