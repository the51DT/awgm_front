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
        @reachEnd="uploadFn"
      >
        <swiper-slide>
          <div class="slider-wrap">
            <div class="card--img card--shadowc2">
              <img class="card--img__comp ani" :src="require(`@/assets/images/challenge_comp.png`)">
              <div class="card--img__uploaded">
                <img :src="require(`@/assets/images/challenge_card_bg.png`)">
              </div>
              <div class="card--img__text">
                <p class="card--img__text__date">2024.09.23 (월)</p>
                <p class="card--img__text__title">나의 미션 인증 횟수</p>
                <p class="card--img__text__num"><span>2</span>회</p>
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
              <div class="upload-wrap card--shadowc2 card--img" :class = "imageUrl ? 'upload-wrap--noborder' : ''">
                <img v-if="imageUrl" class="card--img__comp" :src="require(`@/assets/images/challenge_comp.png`)">
                <input
                  type="file"
                  id="uploadIcon"
                  class="upload-icon"
                  @change="onFileChange"
                  hidden
                />
                <label for="uploadIcon" class="upload-label" :class="imageUrl ? 'card--img__uploaded' : ''">
                  <img
                    v-if="imageUrl"
                    class="uploaded-img"
                    :src="imageUrl"
                    alt="업로드된 이미지"
                  />
                  <div v-else class="upload_ani">
                    <img
                      :src="require(`@/assets/images/${uploadAni}`)"
                    />
                  </div>
                </label>
                <p v-if="!imageUrl" class="date">2025년 5월 16일 (금)</p>
                <div v-if="imageUrl" class="card--img__text">
                  <p class="card--img__text__date">2024.09.23 (월)</p>
                  <p class="card--img__text__title">나의 미션 인증 횟수</p>
                  <p class="card--img__text__num"><span>2</span>회</p>
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
  <div class="home--bot-section bg-case">
    <div class="home-card-box sticky"> <!-- 1025 수정 : 클래스 구조 변경 - 
    sticky 클래스있는 경우에 따라 펼침/닫힘 적용 -->
      <a href="#" class="text-link">
        <p class="card-title">챌린지</p>
      </a>
      <div class="card--icon">
        <img :src="require(`@/assets/images/content/conts-ico_challenge.png`)" alt="챌린지 아이콘" />
      </div>
      <div class="card card--border card--shadow00 card--p20 challenge__card--main">        
        <div class="challenge__card--main__top">
          <p class="font--c33 font--700 font--ls3">아침마다 오 마이 GUT Morning</p>
          <div class="card--main-info">
            <p class="font--c11 font--700 font--ls2">성공조건 : 팀 인증 <span class="font--green">80%</span> 이상</p>
            <p class="font--c66 font--ls1">(2025.04.01 ~ 2025.06.10)</p>
          </div>
        </div>
        <div class="challenge__card--main__per">
          <div>
            <p class="font--700 font--ls1">팀 인증률</p>
            <p class="font--700 font--c11 font--ls1"><span class="font--green font--800 font--ls1">40</span>%</p>
          </div>
          <div class="card--per"> <!-- 목표달성 성공시, success 클래스 추가, 클래스 존재시 gage화살표 성공 영역으로 이동 -->
            <div class="card--per__gage" data-width="40%"></div>
            <div class="card--per__comp" data-width="20%">성공</div>
            <div class="card--per__target" data-left="60%"><img :src="require(`@/assets/images/icon_target.svg`)">목표치</div>
            <div class="card--per__tooltip">
              <!-- 목표치 초과 시 -->
              <!-- <p class="desc--main">목표치를 초과 달성 중입니다.</p>
              <p class="desc--sub">챌린지 성공시 까지 계속 인증해 주세요.</p> -->
              <!-- 목표치 진행중일 시 -->
              <p class="desc--main">현재 <strong class="font--light-yellow">40%</strong>를 달성하였습니다.</p>
              <p class="desc--sub">목표치까지 <strong class="font--white">10%</strong> 남았습니다.</p>
              <div class="close--wrap">
                <button type="button" class="close--btn" title="툴팁 닫기"><span class="blind">닫기</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 나의팀 : 챌린지 case -->
    <div class="home-card-box ty02"> <!-- 나의 팀 일경우, ty02 클래스 추가 -->
      <div class="text-link">
        <a href="#" class="card-title">나의 팀</a>
      </div>
      <div class="card--icon">
        <img :src="require(`@/assets/images/content/conts-ico_team.png`)" alt="나의팀 아이콘" />
      </div>
      <div class="card card--border card--shadow00 card--p20 challenge__card--main">
        <div class="challenge__card--main__top"> <!-- 챌린지 진행시에만 노출 / -->
          <div class="card--badge ty-green">
            <span class="font--ls1">챌린지</span> <!-- 챌린지 또는 상시 노출 (챌린지 : ty-green / 상시 : ty-orange) -->
          </div>
          <p class="font--c33 font--700 font--ls3">지금부터 우리는 GUT Morning</p>
          <div class="card--main-info">
            <p class="font--c66 font--ls1">2025.04.10에 참여</p>
          </div>
          <div class="card--sub-info">
            <p class="font--c11 font--700 font--ls2">랭킹 : <strong class="font--green">16</strong>위 / 팀원 수 : <strong class="font--green">25</strong>명</p>
          </div>
        </div>
        <!-- <div class="challenge__card--main__per">
          <div>
            <p class="font--700 font--ls1">이번 달 팀 인증률</p>
            <p class="font--700 font--c11 font--ls1"><span class="font--green font--800 font--ls1">60</span>%</p>
          </div>
          <div class="card--per"> 
            <div class="card--per__gage" data-width="60%"></div>
            <div class="card--per__target ty02" data-left="60%">이전 달 인증률 <span class="font--800">80%</span> <img :src="require(`@/assets/images/icon_target.svg`)"></div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- 나의팀 : 상시 case -->
    <div class="home-card-box ty02"> <!-- 나의 팀 일경우, ty02 클래스 추가 -->
      <div class="text-link">
        <a href="#" class="card-title">나의 팀</a>
      </div>
      <div class="card--icon">
        <img :src="require(`@/assets/images/content/conts-ico_team.png`)" alt="나의팀 아이콘" />
      </div>
      <div class="card card--border card--shadow00 card--p20 challenge__card--main">
        <div class="challenge__card--main__top"> 
          <div class="card--badge ty-orange">
            <span class="font--ls1">상시</span>
          </div>
          <p class="font--c33 font--700 font--ls3">지금부터 우리는 GUT Morning</p>
          <div class="card--main-info">
            <p class="font--c66 font--ls1">2025.04.10에 참여</p>
          </div>
          <div class="card--sub-info">
            <p class="font--c11 font--700 font--ls2">랭킹 : <strong class="font--green">16</strong>위 / 팀원 수 : <strong class="font--green">25</strong>명</p>
          </div>
        </div>
        <div class="challenge__card--main__per">
          <div>
            <p class="font--700 font--ls1">이번 달 팀 인증률</p>
            <p class="font--700 font--c11 font--ls1"><span class="font--green font--800 font--ls1">60</span>%</p>
          </div>
          <div class="card--per"> 
            <div class="card--per__gage" data-width="60%"></div>
            <div class="card--per__target ty02" data-left="60%">이전 달 인증률 <span class="font--800">80%</span> <img :src="require(`@/assets/images/icon_target.svg`)"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="lottie-conts lottie-conts--green">
      <FrontIntro :lottieColorType="fontColorType" />
    </div>    
  </div>
  <AddBtnHome></AddBtnHome>
  <AppNav :home="true"></AppNav>
  <!-- 인증방법 선택 팝업 -->
  <!-- <PopupDefault>
    <template v-slot:title>
      인증방법 선택
    </template>
    <template v-slot:cont>
      <div class="popup--photo">
        <button class="popup--photo__take"><img :src="require(`@/assets/images/icon_take_photo.svg`)"/>사진 찍기</button>
        <button class="popup--photo__storage"><img :src="require(`@/assets/images/icon_storage_photo.svg`)"/>사진 보관함</button>
        <button class="popup--photo__file"><img :src="require(`@/assets/images/icon_file.svg`)"/>파일 선택</button>
        <p class="popup--photo__caption">※ 얼굴이 포함된 사진은 업로드 하지 말아주세요.</p>
      </div>
    </template>
  </PopupDefault> -->

  <!-- 인증완료 팝업 -->
  <!-- <PopupDefault>
    <template v-slot:title>
      인증완료
    </template>
    <template v-slot:cont>
      2025년 2월 12일<br/>미션 인증이 완료되었습니다.
    </template>
    <template v-slot:btn>
      <CustomButton size="md">확인</CustomButton>
    </template>
  </PopupDefault> -->
  <TopButton style="display:none;"></TopButton>
</template>

<script>
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AppNav from "@/layouts/AppNav.vue";
import layerClose from "@/plugins/common.js";
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import AddBtnHome from "@/components/AddBtnHome.vue";
import FrontIntro from "@/components/FrontIntro.vue";
import TopButton from "@/components/TopButton.vue";



export default {
  name: "Gut_00004",
  components: {
    Swiper,
    SwiperSlide,
    AppNav,
    // eslint-disable-next-line vue/no-unused-components
    PopupDefault,
    // eslint-disable-next-line vue/no-unused-components
    CustomButton,
    AddBtnHome,
    FrontIntro,
    TopButton,
  },
  data() {
    return {
      imageUrl: null,
      uploadAni: "upload.png",
      fontColorType: "white",
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
  mounted() {
    document.addEventListener("scroll", this.scrollEvents, true);
    layerClose.layerClose("card");
  },
  beforeUnmount() {
    document.addEventListener("scroll", this.scrollEvents);
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
    uploadFn() {
      this.uploadAni = "upload_ani.gif";
    },
    scrollEvents(event) {
      //1024 수정 : 클래스 구조 변경에 따른 내용 수정
      let scrollY = window.scrollY;      
      const homeAddBtn = document.querySelector(".home--addBtn");
      const stickyCardBox = document.querySelector(".home--bot-section .home-card-box:first-child");
      const stickyCardBoxY = stickyCardBox.offsetTop;
      const stickyNotCardBox = document.querySelectorAll(".home-card-box:not(.home-card-box.sticky)");
      
          
      
      if( scrollY >= stickyCardBoxY) {
        stickyCardBox.classList.remove("sticky");
        homeAddBtn.classList.add("active");
      } else {
        stickyCardBox.classList.add("sticky");
        homeAddBtn.classList.remove("active");
      }
    },
  },
};
</script>
