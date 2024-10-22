<template>
  <div class="content-area">
    <ContentHead title="서비스 이용안내" :rightArea=true />
    <div class="service">
      <div class="tag--wrap tag--wrap--service">
        <div class="tag on">것모닝 인증방법 안내</div>
        <div class="tag">팀 만들기 안내</div>
      </div>
      <div class="tag_cont on">
        <div class="service__area">
          <div class="service__title">
            <p class="title__num">01</p>
            <p class="title__text"><span class="accent">오늘의 인증하기</span> 버튼 선택하기</p>
          </div>
          <p class="service__text">것모닝 홈화면 가운데 <br class="mo-only" />오늘의 인증하기 영역을 선택 하세요.</p>
          <div class="service__img">
            <img class="img1_1" :src="require('@/assets/images/service1_1.png')">
          </div>
        </div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num">02</p>
            <p class="title__text">사진 올리기</p>
          </div>
          <p class="service__division">Mobile Web</p>
          <p class="service__text">사진을 촬영하거나 내폰에 저장되어 있는 <br class="mo-only" />모든 사진을 불러오기 할 수 있습니다.</p>
          <div class="service__img">
            <img class="img1_2" :src="require('@/assets/images/service1_2.png')">
          </div>
          <p class="service__division">PC Web</p>
          <p class="service__text">개인 PC에 저장된 사진을 선택해주세요.</p>
          <p class="service__text--sub">*PC 또는 노트북 카메라로는 촬영이 불가합니다.</p>
          <div class="service__img">
            <img class="img1_3" :src="require('@/assets/images/service1_3.png')">
          </div>
        </div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num">03</p>
            <p class="title__text">것모닝 인증 내역 확인 및 공유하기</p>
          </div>
          <p class="service__text">챌린지를 성공 했을 경우 <br class="mo-only" />보상수령 방법을 선택 해주세요.</p>
          <div class="service__img">
            <img class="img1_4" :src="require('@/assets/images/service1_4.png')">
          </div>
        </div>

        <div class="service__area">
          <div class="service__title">
            <img class="title__img" :src="require('@/assets/images/apple_logo.svg')">
          </div>
          <div class="card card--border">
            <div class="service__title">
              <p class="title__num black">01</p>
              <p class="title__text">이미지 저장 버튼 선택 후, 팝업에서 <br class="mo-only" /><span>‘다운로드’</span> 선택</p>
            </div>
          </div>
        </div>
      </div>

      <div class="tag_cont">
        2
      </div>
    </div>
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import tabFn from "../plugins/common.js";

export default {
  name: "LoginMain",
  components: {
    ContentHead,
  },
  mounted() {
    tabFn.tabFn()
  },
};
</script>

<style scoped></style>
