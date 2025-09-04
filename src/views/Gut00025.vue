<template>
  <div class="faq--wrap">
    <ContentHead title="FAQ" :leftArea=true headType="ty02" />
    <div class="faq">
      <div class="faq__tag" ref="wrapRef">
        <swiper :modules="modules" :slides-per-view="'auto'" :freeMode="true" :space-between="4"
          :slidesOffsetBefore="20" :slidesOffsetAfter="20" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide><button class="tag on">전체</button></swiper-slide>
          <swiper-slide><button class="tag">것모닝 코리아 챌린지</button></swiper-slide>
          <swiper-slide><button class="tag">기타</button></swiper-slide>
          <swiper-slide><button class="tag">미션</button></swiper-slide>
          <swiper-slide><button class="tag">자녀 프로필</button></swiper-slide>
          <swiper-slide><button class="tag">팀</button></swiper-slide>
        </swiper>
      </div>
      <div class="faq__cont">
        <div class="tag_cont on">
          <div class="faq__acco">
            <button class="acco">바탕화면 바로가기는 어떻게 하나요?</button>
            <div class="acco__cont">내용</div>
          </div>

          <div class="faq__acco">
            <button class="acco">ABO 인증은 어떻게 하나요?</button>
            <div class="acco__cont">내용</div>
          </div>

          <div class="faq__acco on">
            <button class="acco">이벤트 챌린지는 참여는 어떻게 하나요?</button>
            <div class="acco__cont">본 개인정보처리방침은 2024년 08월 26일부터 적용됩니다. 내용의 추가, 삭제 및 수정이 있을 시에는 시행일 이전에 공지사항 등을 통하여 고지할
              것입니다. 또한 개인정보 처리방침에 버전번호 및 공고일자, 시행일자 등을 부여하여 개정여부를 쉽게 알 수 있도록 하고 있습니다.</div>
          </div>

          <div class="faq__acco">
            <button class="acco">자주 묻는 질문 제목 입니다. 자주 묻는 질문 제목 입니다.</button>
            <div class="acco__cont">내용</div>
          </div>

          <div class="faq__acco">
            <button class="acco">자주 묻는 질문 제목 입니다.</button>
            <div class="acco__cont">내용</div>
          </div>
        </div>

        <div class="tag_cont">
          <div class="faq__acco">
            <button class="acco">탭1</button>
            <div class="acco__cont">내용</div>
          </div>
        </div>

        <div class="tag_cont">
          <div class="faq__acco">
            <button class="acco">탭2</button>
            <div class="acco__cont">내용</div>
          </div>
        </div>

        <div class="tag_cont">
          <div class="faq__acco">
            <button class="acco">탭3</button>
            <div class="acco__cont">내용</div>
          </div>
        </div>

        <div class="tag_cont">
          <div class="faq__acco">
            <button class="acco">탭4</button>
            <div class="acco__cont">내용</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ContentHead from "@/components/ContentHead.vue";
import tabFn from "@/plugins/common.js";

export default {
  name: "LoginMain",
  components: {
    Swiper,
    SwiperSlide,
    ContentHead,
  },
  data() {
    return {
      modules: [FreeMode],
      swiperRef: null,
    }
  },
  mounted() {
    this.faqAcco()
    tabFn.tabFn()
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
      const accoList = document.querySelectorAll(".faq__acco")
      tagList.forEach((el) => {
        el.addEventListener("click", () => {
          accoList.forEach((e) => {
            e.classList.remove("on")
          })
        })
      })

      const accoBtn = document.querySelectorAll(".acco")
      accoBtn.forEach((e) => {
        e.addEventListener("click", () => {
          e.closest(".faq__acco").classList.toggle("on")
        })
      })
    }
  }
};
</script>

<style scoped></style>
