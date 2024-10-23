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
            <div class="safari_title">
              아이폰( <span class="img"><img :src="require('@/assets/images/safari_logo.svg')"></span> Safari) 사용자의 경우, <br class="mo-only" />
              이미지 저장 가이드를 꼭 확인 해주세요!
            </div>
            <div class="service__title">
              <p class="title__num black">01</p>
              <p class="title__text">이미지 저장 버튼 선택 후, 팝업에서 <br class="mo-only" /><span>‘다운로드’</span> 선택</p>
            </div>
            <div class="safari_img">
              <img :src="require('@/assets/images/service1_safari1.png')">
            </div>
            <div class="service__title">
              <p class="title__num black">02</p>
              <p class="title__text">
                Safari 브라우저 왼쪽 하단의 <br class="mo-only" />
                파란색 다운로드 아이콘 <span class="safari_icon1"><img :src="require('@/assets/images/safari_download.svg')"></span> 을 선택 <br class="mo-only" />
                -> 메뉴에서 다운로드 <span class="safari_icon2"><img :src="require('@/assets/images/safari_down_on.svg')"></span> 를 선택 <br class="mo-only" />
                -> 이미지 저장
              </p>
            </div>
            <div class="safari_img">
              <img :src="require('@/assets/images/service1_safari2.png')">
            </div>
            <div class="service__title">
              <p class="title__num black">03</p>
              <p class="title__text">카메라 앨범에 저장된 사진을 <br class="mo-only" />카카오톡 또는 SNS 채널에 공유해 보세요.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="tag_cont">
        <div class="service__label">챌린지 팀 만들기</div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num orange">01</p>
            <p class="title__text">팀 만들기 버튼 선택하기</p>
          </div>
          <p class="service__text">
            나의팀 목록 오른쪽 하단의 <br class="mo-only" />
            팀 만들기 <span class="add_icon"><img :src="require('@/assets/images/service_add.svg')"></span> 버튼을 선택하세요.
          </p>
          <div class="service__img">
            <img class="img2_1" :src="require('@/assets/images/service2_1.png')">
          </div>
        </div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num orange">02</p>
            <p class="title__text">챌린지 팀 만들기</p>
          </div>
          <p class="service__text">
            ABO/Member 인증 회원인 경우 <br class="mo-only" />
            챌린지 팀을 만들 수 있습니다.
          </p>
          <div class="service__img">
            <img class="img2_2" :src="require('@/assets/images/service2_2.png')">
          </div>
        </div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num orange">03</p>
            <p class="title__text">팀 만들기 완료</p>
          </div>
          <p class="service__text">
            팀 만들기를 완료 하시면 <br class="mo-only" />
            나의 팀 목록화면으로 이동되며, <br class="mo-only" />
            생성된 챌린지팀 정보를 확인 할 수 있습니다.
          </p>
          <div class="service__img">
            <img class="img2_3" :src="require('@/assets/images/service2_3.png')">
          </div>
        </div>

        <div class="service__label">상시 팀 만들기</div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num orange">01</p>
            <p class="title__text">팀 만들기 버튼 선택하기</p>
          </div>
          <p class="service__text">
            나의팀 목록 오른쪽 하단의 <br class="mo-only" />
            팀 만들기 <span class="add_icon"><img :src="require('@/assets/images/service_add.svg')"></span> 버튼을 선택하세요.
          </p>
          <div class="service__img">
            <img class="img2_1" :src="require('@/assets/images/service2_4.png')">
          </div>
        </div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num orange">02</p>
            <p class="title__text">상시 팀 만들기</p>
          </div>
          <p class="service__text">
            ABO/Member 인증 회원인 경우 <br class="mo-only" />
            상시 팀을 만들 수 있습니다.
          </p>
          <div class="service__img">
            <img class="img2_2" :src="require('@/assets/images/service2_5.png')">
          </div>
        </div>

        <div class="service__area">
          <div class="service__title">
            <p class="title__num orange">03</p>
            <p class="title__text">팀 만들기 완료</p>
          </div>
          <p class="service__text">
            팀 만들기를 완료 하시면 <br class="mo-only" />
            나의 팀 목록화면으로 이동되며, <br class="mo-only" />
            생성된 상시팀정보를 확인 할 수 있습니다.
          </p>
          <div class="service__img">
            <img class="img2_3" :src="require('@/assets/images/service2_6.png')">
          </div>
        </div>
      </div>
    </div>
  </div>
  <TopButton></TopButton>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import tabFn from "../plugins/common.js";
import TopButton from "../components/TopButton.vue";

export default {
  name: "LoginMain",
  components: {
    ContentHead,
    TopButton,
  },
  mounted() {
    tabFn.tabFn()
  },
};
</script>

<style scoped></style>
