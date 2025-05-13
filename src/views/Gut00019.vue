<template>
  <div class="content-area">
    <ContentHead title="자녀계정 등록/관리" :leftArea="true" />
    <!-- 자녀계정이 있는 경우 -->
    <div class="my__list">
      <p class="my__list__title">
        팀장김웨이님은<br /><span>총 4개</span>의 자녀계정이 있습니다.
      </p>
      <div class="my__list--items">
        <div class="card card--border card--p16 card--shadow00">
          <button class="favorites_btn on"></button>
          <div class="card__top">
            <ChildIcon img_num="1" />
            <div class="my__list__text">
              <p class="id">qwert123456</p>
              <p class="name">니노막시무스카에저소제소냐도르앤스파르타</p>
              <p class="num">총 <span>2회</span> 인증</p>
            </div>
          </div>
          <div class="btn_wrap">
            <CustomButton>자녀활동 보기</CustomButton>
            <CustomButton color="white">비밀번호 재설정</CustomButton>
          </div>
        </div>

        <div class="card card--border card--p16 card--shadow00">
          <button class="favorites_btn"></button>
          <div class="card__top">
            <ChildIcon img_num="2" />
            <div class="my__list__text">
              <p class="id">qwert123456</p>
              <p class="name">니노막시무스카에저소제소냐도르앤스파르타</p>
              <p class="num">총 <span>2회</span> 인증</p>
            </div>
          </div>
          <div class="btn_wrap">
            <CustomButton>자녀활동 보기</CustomButton>
            <CustomButton color="white">비밀번호 재설정</CustomButton>
          </div>
        </div>

        <div class="card card--border card--p16 card--shadow00">
          <button class="favorites_btn"></button>
          <div class="card__top">
            <ChildIcon img_num="3" />
            <div class="my__list__text">
              <p class="id">qwert123456</p>
              <p class="name">니노막시무스카에저소제소냐도르앤스파르타</p>
              <p class="num">총 <span>2회</span> 인증</p>
            </div>
          </div>
          <div class="btn_wrap">
            <CustomButton>자녀활동 보기</CustomButton>
            <CustomButton color="white">비밀번호 재설정</CustomButton>
          </div>
        </div>

        <div class="card card--border card--p16 card--shadow00">
          <button class="favorites_btn"></button>
          <div class="card__top">
            <ChildIcon img_num="4" />
            <div class="my__list__text">
              <p class="id">qwert123456</p>
              <p class="name">니노막시무스카에저소제소냐도르앤스파르타</p>
              <p class="num">총 <span>2회</span> 인증</p>
            </div>
          </div>
          <div class="btn_wrap">
            <CustomButton>자녀활동 보기</CustomButton>
            <CustomButton color="white">비밀번호 재설정</CustomButton>
          </div>
        </div>

        <div class="card card--border card--p16 card--shadow00">
          <button class="delete_btn"></button>
          <div class="card__top">
            <ChildIcon img_num="5" />
            <div class="my__list__text">
              <p class="incomplete">미완료 계정 ①</p>
              <p class="explain">
                계정 등록 링크를 통해 자녀가 직접 계정 정보를 입력해야 계정
                생성이 완료됩니다.
              </p>
            </div>
          </div>
          <div class="btn_wrap">
            <CustomButton color="white"
              >자녀계정 등록 링크 다시 공유</CustomButton
            >
          </div>
        </div>
        <div class="card card--border card--p16 card--shadow00">
          <div class="card__top">
            <div class="my__list__img">
              <img :src="require(`@/assets/images/child_profile5.png`)" />
            </div>
            <div class="my__list__text">
              <p class="incomplete">자녀 계정 ID</p>
              <p class="id">qwert123456</p>
              <p class="name">회원탈퇴가 진행중에 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my__list--add">
        <CustomButton
          >자녀계정 생성하기
          <img :src="require(`@/assets/images/icon_plus_white.svg`)"
        /></CustomButton>
      </div>
    </div>

    <!-- 자녀계정이 없는 경우 -->
    <!-- <div class="my__list">
      <p class="my__list__title">팀장김웨이님은<br/><span>총 0개</span>의 자녀계정이 있습니다.</p>
      <div class="my__list--add">
        <CustomButton>자녀계정 생성하기 <img :src="require(`@/assets/images/icon_plus_white.svg`)"></CustomButton>
      </div>
    </div> -->
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import CustomButton from "@/components/CustomButton.vue";
import ChildIcon from "../components/ChildIcon.vue";

export default {
  name: "LoginMain",
  data() {
    return {
      type: "",
    };
  },
  components: {
    ContentHead,
    CustomButton,
    ChildIcon,
  },
};
</script>

<style scoped></style>
