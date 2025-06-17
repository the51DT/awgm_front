<!-- 2Depth Header -->
<template>
  <div class="head-area" :class="[
    headType === 'ty02' ? 'ty02' : '',
    headType === 'ty03' ? 'ty03' : '',
    { 'bgGray': bgGray },
    { 'scrolled': isScrolled },
    bgClass
  ]"
  >
    <a class="area-left" href="#" v-if="leftArea === true">
      <img
        class="ico-logo"
        :src="customLeftIcon || (
          bgClass === 'bgGreen' 
            ? require('@/assets/images/icon_arrow_left_w.svg')
            : require('@/assets/images/icon/ico_arrow_left.png')
        )"
        alt="이전페이지로 이동"
      />
    </a>
    <template v-if="headType === 'ty03'">
      <h2 class="page-title">
        <slot name="title">{{ title }}</slot>
      </h2>
    </template>
    <h2 v-else class="page-title">{{ title }}</h2>
    <div class="area-right" v-if="rightArea === true">
      <div v-if="rightIcon" class="area-right__icon">
        <img
          :src="require(bgClass === 'bgGray'
            ? '@/assets/images/icon_setting.svg'
            : '@/assets/images/icon_setting_w.svg')"
          alt="설정"
        />
        <button>
          <img
            :src="require(bgClass === 'bgGray'
              ? '@/assets/images/icon_add_team.svg'
              : '@/assets/images/icon_add_team_w.svg')"
            alt="팀원 추가"
          />
          <div class="invite_btn">
            <div class="invite_btn__pop on">
              <span>팀원을 초대해주세요</span>
              <button class="invite_btn__pop__close"></button>
            </div>
          </div>
        </button>
      </div>
      <div v-else-if="sortIcon && rightIcon == false" class="area-right__sort">
        <button class="sort__btn-wrap"  @click="toggleDropdown"> <img src="@/assets/images/icon-list-sort.svg" alt="리스트 정렬 선택 아이콘" /></button>
        <div v-show="showDropdown" class="sort__drop-down-list">
          <ul>
            <li @click="closeDropdown"> 높은 랭킹순</li>
            <li @click="closeDropdown"> 낮은 랭킹순</li>
            <li @click="closeDropdown"> 전체 인증횟수 높은 순</li>
            <li @click="closeDropdown"> 전제 인증횟수 낮은 순</li>
            <li @click="closeDropdown"> 닉네임 가나다순</li>
          </ul>
        </div>
      </div>
      <button v-else type="button">
        <img class="ico-logo" :src="require(`@/assets/images/icon/ico_close.png`)" alt="닫기" />
      </button>
    </div>
  </div>
  <div v-if="headType === 'ty02'" class="header-space2"></div>


</template>

<script>
import tabFn from "@/plugins/common.js";
import layerClose from "@/plugins/common.js";
import InputField from "@/components/InputField.vue";

export default {
  name: "ContentHead",
  data() {
    return {
      isScrolled: false,
      showDropdown: false,
    }
  },
  props: {
    title: String,
    headType: String,
    leftArea: Boolean,
    rightArea: Boolean,
    rightIcon: {
      type: Boolean,
      default: false,
    },
    sortIcon: {
      type: Boolean,
      default: true,
    },
    bgGray: {
      type: Boolean,
      default: false,
    },
    bgClass: {
      type: String,
      default: ' ' // 기본 배경색 클래스
    },
    customLeftIcon: {
      type: String,
      default: '', // 아이콘 강제 지정용
    },

  },
  components:{InputField},
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    tabFn.tabFn();
    layerClose.layerClose("invite");

  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.showDropdown = false;
    }
  }
}
</script>