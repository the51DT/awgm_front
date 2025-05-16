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
        <div class="list-conts-wrap" v-for="(item, index) in card_profile" :key="index">
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <BookMarkBtn />
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__profile__info">
                <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
                <div class="img-wrap on-flag" :class="{ 'leaderOn': item.isLeader }">
                  <img class="card__img" :src="require(`@/assets/images/${item.img}`)" alt="프로필 이미지">
                  <div class="certify-badge" :class="{ 'on': item.accreditABO }"></div>
                </div>
                <p class="card__tit">{{ item.nick }}</p>
              </div>
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
import tabFn from "@/plugins/common.js";

export default {
  name: "Gut_00013",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      card_profile: [
        { id: 1, nick: "팀장 김웨이", name: "김웨이", img: 'card_profile_1.png', count: '999', rate: '99', isLeader: true, accreditABO: true, },
        { id: 2, nick: "유리카", name: "김사무엘 유리카 닉슨", img: 'card_profile_2.png', count: '223', rate: '74', isLeader: false, accreditABO: false, },
        { id: 3, nick: "다니엘", name: "다니엘 빌", img: 'card_profile_3.png', count: '223', rate: '52', isLeader: false, accreditABO: true, },
        { id: 4, nick: "코니", name: "코니 일렉스", img: 'card_profile_4.png', count: '223', rate: '29', isLeader: false, accreditABO: true, },
        { id: 5, nick: "김사무엘 주니어", name: "김*리", img: 'card_profile.png', count: '223', rate: '10', isLeader: false, accreditABO: false, },
      ],
    };
  },
  components: {
    ContentHead,
    InputField,
    TopButton,
    BookMarkBtn
  },
  mounted() {
    tabFn.tabFn()
  },
};
</script>

<style></style>
