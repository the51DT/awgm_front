<template>
  <PopupDefault full :isTopBtn="true">
    <template v-slot:full>
      <div class="content-area">
        <ContentHead title="서비스 이용안내" :rightArea=true />
        <div class="service">
          <div class="tag--wrap">
            <div class="tag--wrap--service" ref="wrapRef">
              <swiper :modules="modules" :slides-per-view="'auto'" :freeMode="true" :space-between="4"
                :slidesOffsetBefore="20" :slidesOffsetAfter="20" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide><button class="tag on">것모닝 인증방법</button></swiper-slide>
                <swiper-slide><button class="tag">팀 만들기&팀원 초대</button></swiper-slide>
                <swiper-slide><button class="tag">팀원인증현황보기</button></swiper-slide>
                <swiper-slide><button class="tag">나의 활동 안내</button></swiper-slide>
              </swiper>
            </div>
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
                <p class="title__text">인증 사진 올리기</p>
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
              <p class="service__text">
                나의 것모닝 인증 내역을 이미지로 저장하거나, <br />
                카카오톡으로 공유해보세요.
              </p>
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
                  아이폰( <span class="img"><img :src="require('@/assets/images/safari_logo.svg')"></span> Safari) 사용자의 경우,
                  <br class="mo-only" />
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
                    파란색 다운로드 아이콘 <span class="safari_icon1"><img
                        :src="require('@/assets/images/safari_download.svg')"></span> 을 선택 <br class="mo-only" />
                    -> 메뉴에서 다운로드 <span class="safari_icon2"><img
                        :src="require('@/assets/images/safari_down_on.svg')"></span> 를 선택 <br class="mo-only" />
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
                팀장 자격 대상자의 경우 ABO인증 후 <br class="mo-only" />
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
                <img class="img2_4" :src="require('@/assets/images/service2_4.png')">
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
                <img class="img2_5" :src="require('@/assets/images/service2_5.png')">
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
                <img class="img2_6" :src="require('@/assets/images/service2_6.png')">
              </div>
            </div>

            <div class="service__label">팀원 초대하기</div>

            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">01</p>
                <p class="title__text">팀원 초대하기 버튼 선택하기</p>
              </div>
              <p class="service__text">
                팀 정보 오른쪽 상단의 <br />
                팀원 초대하기 버튼을 선택하세요.
              </p>
              <div class="service__img">
                <img class="img2_7" :src="require('@/assets/images/service2_7.png')">
              </div>
            </div>

            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">02</p>
                <p class="title__text">팀 초대하기 팝업</p>
              </div>
              <p class="service__text">
                카카오톡으로 초대하기 또는 <br />
                초대링크 복사하기를 통해 초대 링크를 전송하거나,<br />
                이전 팀의 팀원을 초대할 수 있습니다.
              </p>
              <div class="service__img">
                <img class="img2_8" :src="require('@/assets/images/service2_8.png')">
              </div>
            </div>

            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">03</p>
                <p class="title__text">이전 팀 팀원 초대</p>
              </div>
              <p class="service__text">
                이전 팀의 팀장이었을 경우, <br />
                이전 팀의 팀원 모두에게 <br />
                초대 메시지를 전송할 수 있습니다. <br />
                <span class="service__text_sm">
                  *초대 메시지는 팀원을 선택할 수 없으며, <br />
                  이전 팀원 모두에게 한번에 발송됩니다.
                </span>
              </p>
              <div class="service__img">
                <img class="img2_9" :src="require('@/assets/images/service2_9.png')">
              </div>
            </div>

            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">04</p>
                <p class="title__text">초대 수락 및 가입 여부 확인</p>
              </div>
              <p class="service__text">
                팀장은 '팀 정보'화면 하단에서 <br />
                '초대한 팀원 보기' 버튼을 통해 <br />
                팀원 가입 여부를 확인할 수 있으며, <br />
                초대받은 팀원의 경우, '나의 팀' 메뉴 내 <br />
                '초대받은 팀' 탭 화면에서 가입/거절이 가능합니다. <br />
                <span class="service__text_sm">
                  *카카오톡으로 초대하기와 초대링크 복사하기로 초대한 경우 <br />
                  초대받은 팀 목록에 표시되지 않습니다.
                </span>
              </p>
              <div class="service__img">
                <img class="img2_10" :src="require('@/assets/images/service2_10.png')">
              </div>
            </div>
          </div>

          <div class="tag_cont">
            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">01</p>
                <p class="title__text">다양해진 필터 조건</p>
              </div>
              <p class="service__text">
                팀원 리스트를 필터로 분류해서 보고, <br />
                즐겨찾기해서 자주 보는 팀원을 <br />
                더 쉽게 확인합니다.
              </p>
              <div class="service__img">
                <img class="img3_1" :src="require('@/assets/images/service3_1.png')">
              </div>
            </div>
            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">02</p>
                <p class="title__text">리스트 뷰 보기</p>
              </div>
              <p class="service__text">
                팀원의 인증 현황을 <br />
                간략하게 확인하실 수 있습니다.
              </p>
              <div class="service__img">
                <img class="img3_2" :src="require('@/assets/images/service3_2.png')">
              </div>
            </div>
            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">03</p>
                <p class="title__text">팀원 상세 보기</p>
              </div>
              <p class="service__text">
                팀원 간 상세 정보 확인이 가능하며, <br />
                팀장의 경우 팀원의 추가 정보 <br />
                (이름/ABO인증여부/것모닝구매여부)를 <br />
                확인하실 수 있습니다.
              </p>
              <div class="service__img">
                <img class="img3_3" :src="require('@/assets/images/service3_3.png')">
              </div>
            </div>
          </div>

          <div class="tag_cont">
            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">01</p>
                <p class="title__text">나의 것모닝 활동 기록 확인</p>
              </div>
              <p class="service__text">
                홈 화면 우측 하단의 ‘나의 활동’ 메뉴에서 <br />
                것모닝 핀과 나의 현재 기록, <br />
                배지 획득 현황을 확인할 수 있습니다.
                <br />
                <span class="service__text_sm">
                  *것모닝 핀, 현재 기록, 배지는 회계연도(매년 9월 시작) <br />
                  기반으로 누적 횟수가 인정됩니다.
                </span>
              </p>
              <div class="service__img">
                <img class="img4_1" :src="require('@/assets/images/service4_1.png')">
              </div>
            </div>
            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">02</p>
                <p class="title__text">것모닝 핀</p>
              </div>
              <p class="service__text">
                인증 횟수가 쌓일수록 <br />
                것모닝 핀이 올라갑니다.
              </p>
              <div class="service__img">
                <img class="img4_2" :src="require('@/assets/images/service4_2.png')">
              </div>
            </div>
            <div class="service__area">
              <div class="service__title">
                <p class="title__num orange">03</p>
                <p class="title__text">배지 활동</p>
              </div>
              <p class="service__text">
                연속 인증부터 팀장 활동, 이벤트 배지까지 <br />
                다양한 참여를 통해 배지를 획득할 수 있으며, <br />
                원하는 배지를 대표로 설정 가능합니다.
              </p>
              <div class="service__img">
                <img class="img4_3" :src="require('@/assets/images/service4_3.png')">
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopButton></TopButton>
    </template>
  </PopupDefault>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import tabFn from "@/plugins/common.js";
import TopButton from "@/components/TopButton.vue";
import PopupDefault from "@/components/PopupDefault.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: "LoginMain",
  components: {
    ContentHead,
    TopButton,
    PopupDefault,
    Swiper,
    SwiperSlide,
  },
  mounted() {
    tabFn.tabFn()
  },
  data() {
    return {
      modules: [FreeMode],
      swiperRef: null,
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiperRef = swiper;
      this.checkIsEnd();
    },
    onSlideChange() {
      this.checkIsEnd();
    },
    checkIsEnd() {
      setTimeout(() => {
        const swiper = this.swiperRef;
        if (!swiper) return;

        const isEnd = swiper.isEnd; // ✅ swiper가 끝에 도달했는지 체크
        const wrapEl = this.$refs.wrapRef;

        if (wrapEl) {
          wrapEl.classList.toggle('is-end', isEnd);
        }
      }, 100); // freeMode에서 정확한 상태 반영을 위해 약간의 delay
    },
    faqAcco() {
      const tagList = document.querySelectorAll(".tag")
      const accoList = document.querySelectorAll(".tag_cont")
      tagList.forEach((el) => {
        el.addEventListener("click", () => {
          accoList.forEach((e) => {
            e.classList.remove("on")
          })
        })
      })

      const accoBtn = document.querySelectorAll(".tag")
      accoBtn.forEach((e) => {
        e.addEventListener("click", () => {
          e.closest(".tag_cont").classList.toggle("on")
        })
      })
    }
  }

};
</script>

<style scoped>
.tag--wrap {
  margin-top: 40px;
}

.popup--full__wrap {
  overflow-y: visible !important;
}
</style>
