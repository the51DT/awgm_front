<template>
  <div class="home">
    <div class="home__speech">
      <!-- 챌린지 인증 전 -->
      <p class="home__speech__title">이벤트 챌린지 시작 D-8일</p>
      <p class="home__speech__text">이벤트 챌린지 참여를 위해, 챌린지 시작 전 팀에 가입해 주세요.</p>
      <!-- 챌린지 인증 후 -->
      <!-- <p class="home__speech__title">이벤트 챌린지 68일째 참여 중</p>
      <p class="home__speech__text">이벤트 챌린지 보상 수령을 위해 ‘마이’에서 암웨이 계정을 인증해 주세요.</p> -->
    </div>

    <div class="home__date">
      <div class="date select">일</div>
      <div class="date select">월</div>
      <div class="date">화</div>
      <div class="date select">수</div>
      <div class="date select">목</div>
      <div class="date select today">금</div>
      <div class="date">토</div>
      <button class="date--more"><img :src="require(`@/assets/images/icon_plus.svg`)"><span>더보기</span></button>
    </div>
    
    <div class="swiper__area">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="24"
        :slidesOffsetBefore="20"
        :slidesOffsetAfter="20"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="slider-wrap">
            <div class="card--img card--shadowc2">
              <img class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
              <img :src="require(`@/assets/images/challenge_card_bg.png`)">
              <div class="card--img__text">
                <p class="card--img__date">2024.09.23 (월)</p>
                <p class="card--img__title">나의 미션 인증 횟수</p>
                <p class="card--img__num"><span>2</span>회</p>
              </div>
              <div class="btn_wrap">
                <button class="share-btn"></button>
                <button class="replace-btn"></button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-wrap">
            <div class="profile-area">
              <div class="upload-wrap card--shadowc2" :class = "imageUrl ? 'upload-wrap--noborder' : ''">
                <img v-if="imageUrl" class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
                <input
                  type="file"
                  id="uploadIcon"
                  class="upload-icon"
                  @change="onFileChange"
                  hidden
                />
                <label for="uploadIcon" class="upload-label">
                  <img
                    v-if="imageUrl"
                    class="uploaded-img"
                    :src="imageUrl"
                    alt="업로드된 이미지"
                  />
                  <img
                    v-else
                    class="ico-logo"
                    :src="require(`@/assets/images/icon/ico_file.png`)"
                    alt="파일 업로드 등록 아이콘"
                  />
                </label>
                <p v-if="!imageUrl" class="date">2025년 5월 16일 (금)</p>
                <p v-if="!imageUrl" class="accent">오늘의 <span>인증</span>하기</p>
                <div v-if="imageUrl" class="card--img__text">
                  <p class="card--img__date">2024.09.23 (월)</p>
                  <p class="card--img__title">나의 미션 인증 횟수</p>
                  <p class="card--img__num"><span>2</span>회</p>
                </div>
                <div v-if="imageUrl" class="btn_wrap">
                  <button class="share-btn"></button>
                  <button class="replace-btn"></button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <AppNav :home="true"></AppNav>
</template>

<script>
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AppNav from "@/layouts/AppNav.vue";

export default {
  name: "LoginMain",
  components: {
    Swiper,
    SwiperSlide,
    AppNav,
  },
  data() {
    return {
      imageUrl: null,
    }
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped></style>
