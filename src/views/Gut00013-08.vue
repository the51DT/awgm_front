<template>
  <!-- 팀원인증현황 - none -->
  <div class="content-area">
    <ContentHead title="팀원 인증 현황보기" headType="ty02" :leftArea=true :rightArea=true :sortIcon=true />
    <div class="team-box-wrap">
      <div class="tag_cont on">
        <div class="list-top-wrap">
          <div class="filter half">
            <InputField type="select" :options="['2024.09', '2024.08', '2024.07']" active v-model="selectedDate" />
            <InputField type="select" v-model="selectedMember" active
              :options="['전체', 'ABO 미인증 팀원', '오늘 인증 완료', '오늘 미인증 팀원', '80% 이상 달성', '80% 미만 달성']" />
          </div>
        </div>
        <div class="list-btn-wrap">
          <span> 높은 랭킹순</span>
          <div class="list-btn-wrap-sort-list">
            <div>
              <BookMarkBtn />
            </div>
            <div class="list-view">
              <div>
                <button class="list-view__btn" @click="toggleListView" :class="{ on: isActive == true }"> </button>
              </div>
            </div>
          </div>
        </div>
        <div class="list-conts-wrap">
          <div class="list-conts__not">
            <img :src="require(`@/assets/images/none_team_member.svg`)" alt="조회된 팀원이 없습니다" />
            <p class="challenge--main__not__title">조회된 팀원이 없습니다.</p>
          </div>
        </div>
      </div>
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
      isActive: false,
      selectedDate: '2024.08',
      selectedMember: '80% 미만 달성'
    };
  },
  components: {
    ContentHead,
    InputField,
    TopButton,
    BookMarkBtn,
  },
  mounted() {
    tabFn.tabFn()
  },
  methods: {
    toggleListView() {
      this.isActive = !this.isActive
    }
  }
};
</script>

<style></style>
