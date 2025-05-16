<template>
  <div class="content-area">
    <ContentHead title="팀원 인증 현황보기" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="list-top-tag">
        <div class="tag-box-wrap">
          <div class="tag--wrap">
            <button type="button" class="tag on">이달의 랭킹</button>
            <button type="button" class="tag">전체인증 횟수</button>
            <button type="button" class="tag">가입일</button>
          </div>
          <div class="tag--wrap">
            <button type="button" class="order--icon"></button>
            <button type="button" class="order--icon on"></button> <!-- on 클래스 활성화인 경우(오름차순 정렬) / on 없을 경우(내림차순 정렬) -->
          </div>
        </div>
      </div>
      <div class="tag_cont on">
        <div class="list-top-wrap">
          <div class="filter">
            <InputField type="select" placeholder="2024.09" :options="['2024.09', '2024.08', '2024.07']" active />
            <InputField type="select" placeholder="전체"
              :options="['전체', 'ABO 미인증 팀원', '오늘 인증한 팀원', '80% 이상 달성 팀원', '80% 미만 달성 팀원']" />
          </div>
        </div>
        <div class="list-conts-wrap" v-for="(item, index) in profile" :key="index">
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <BookMarkBtn />
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <ProfileImg :data="item" />
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>{{ index + 1 }}위</dd>
                </dl>
                <dl>
                  <dt>이름</dt>
                  <dd>{{ item.name }}</dd>
                </dl>
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
                <dl>
                  <dt>인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">{{ item.count }}/1000회</p>
                      <p class="sub">($9$월 30회)</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>인증률</dt>
                  <dd>
                    <p class="green"> {{ item.rate }}%</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tag_cont">전체인증 횟수</div>
      <div class="tag_cont">가입일</div>
    </div>
  </div>
  <TopButton></TopButton>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import TopButton from "@/components/TopButton.vue"
import BookMarkBtn from "@/components/BookMarkBtn.vue"
import ProfileImg from "@/components/ProfileImg.vue";
import tabFn from "@/plugins/common.js";

import { profileList } from '@/router/profile.js'

export default {
  name: "Gut_00013",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      profile: profileList
    };
  },
  components: {
    ContentHead,
    InputField,
    TopButton,
    BookMarkBtn,
    ProfileImg
  },
  mounted() {
    tabFn.tabFn()
  },
  methods: {
    moveToTop(targetItem) {
      // 선택한 아이템 제외한 나머지 리스트
      const rest = this.list.filter(item => item.id !== targetItem.id)
      // 맨 앞에 targetItem 넣어서 정렬
      this.list = [targetItem, ...rest]
    }
  }
};
</script>

<style></style>
