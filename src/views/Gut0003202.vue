<template>
  <div class="content-area">
    <ContentHead title="팀원 상세" headType="ty02" :leftArea=true />
    <div class="team-box-wrap child-manage">
      <div class="conts-area">
        <div class="profile-area small">
          <div class="img-wrap">
            <img class="ico-logo" :src="require(`@/assets/images/ico_profile.png`)" alt="프로필 이미지">
          </div>
          <div class="text-wrap manage">
            <h3> 김사무엘 주니어 </h3>
          </div>
        </div>        
        <div class="card card--border card--p1220 card--shadowc2">
          <div class="card__top">
            <div class="card__text__list manage">
              <dl>
                <dt>팀 가입일</dt>
                <dd>2024.09.09</dd>
              </dl>
              <dl>
                <dt>인증 횟수</dt>
                <dd>223/1000회 (9월 22회)</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="team-btn-wrap ">
        <div class="btn-area ty03">
          <CustomButton color="light" class="ty02">팀에서 내보내기</CustomButton>
        </div>
      </div>
    </div>
  </div>
  
</template>


<script>
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_0003202",
  components: {
    ContentHead,
    CustomButton,
  },
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },  
};
</script>
