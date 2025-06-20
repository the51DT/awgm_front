<template>
  <!-- 팀원인증현황 - 상시(팀장) normal view-->
  <div class="content-area">
    <ContentHead title="팀원 인증 현황보기" headType="ty02" :leftArea=true :rightArea=true :sortIcon=true />
    <div class="team-box-wrap">
      <div class="tag_cont on">
        <div class="list-top-wrap">
          <div class="filter">
            <InputField type="select" :options="['2024.09', '2024.08', '2024.07']" active v-model="selectedDate"/>
            <InputField type="select" v-model="selectedMember" active
              :options="['전체', 'ABO 미인증 팀원', '오늘 인증 완료','오늘 미인증 팀원', '80% 이상 달성', '80% 미만 달성']" />
          </div>
        </div>
        <div class="list-btn-wrap">
          <span> 높은 랭킹순</span>
          <div class="list-btn-wrap-sort-list">
            <div> <BookMarkBtn /> </div>
            <div class="list-view"> 
              <div>
                <button class="list-view__btn" @click="toggleListView" :class="{ on: isActive == true }"> </button>
              </div>
            </div>
          </div>
        </div>
        <div class="list-conts-wrap">
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <BookMarkBtn />
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__top__profile_img">
                <div class="profile_img">
                  <div class="profile_img__info">
                    <!-- 팀장 마크 leaderOn 클래스 추가 -->
                    <div class="user_img-wrap on-flag leaderOn">
                      <div class="user_img">
                        <img :src="require(`@/assets/images/card_profile_1.png`)" alt="프로필 이미지" />
                      </div>
                    </div>
                    <p class="user__tit"> 팀장 김웨이 </p>
                  </div>
                </div>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>1위</dd>
                </dl>
                <dl>
                  <dt>이름</dt>
                  <dd>김웨이</dd>
                </dl>
                <dl>
                  <dt>전체 인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">999회</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>이 달의 인증</dt>
                  <dd>
                    <p> 9월 22회 <span class="green"> 60%</span> </p>
                  </dd>
                </dl>
                <dl>
                  <dt> 오늘 인증</dt>
                  <dd> <span class="green"> O </span></dd>
                </dl>
                <dl>
                  <div class="challenge__badge-wrap">
                    <div class="challenge__badge badge--abo">
                      <img src="@/assets/images/ico-abo-completed-badge.svg" alt="ABO 인증 완료 뱃지 아이콘" />
                      <span> ABO 인증 완료 </span>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16 card--shadowc2 card--link">
            <BookMarkBtn />
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__top__profile_img">
                <div class="profile_img">
                  <div class="profile_img__info">
                    <div class="user_img-wrap on-flag">
                      <div class="user_img">
                        <img :src="require(`@/assets/images/card_profile_1.png`)" alt="프로필 이미지" />
                      </div>
                    </div>
                    <p class="user__tit"> 김웨이 </p>
                  </div>
                </div>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>2위</dd>
                </dl>
                <dl>
                  <dt>이름</dt>
                  <dd>김웨이</dd>
                </dl>
                <dl>
                  <dt>전체 인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">999회</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>이 달의 인증</dt>
                  <dd>
                    <p> 9월 22회 <span class="green"> 60%</span> </p>
                  </dd>
                </dl>
                <dl>
                  <dt> 오늘 인증</dt>
                  <dd> <span class="green"> O </span></dd>
                </dl>
                <dl>
                  <div class="challenge__badge-wrap">
                    <div class="challenge__badge badge--abo not">
                      <img src="@/assets/images/ico-abo-completed-badge-not.svg" alt="ABO 인증 완료 뱃지 아이콘" />
                      <span> ABO 인증 완료 </span>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16 card--shadowc2 card--link">
            <BookMarkBtn />
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__top__profile_img">
                <div class="profile_img">
                  <div class="profile_img__info">
                    <div class="user_img-wrap on-flag">
                      <div class="user_img">
                        <img :src="require(`@/assets/images/card_profile_1.png`)" alt="프로필 이미지" />
                      </div>
                    </div>
                    <p class="user__tit"> 김웨이 </p>
                  </div>
                </div>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>2위</dd>
                </dl>
                <dl>
                  <dt>이름</dt>
                  <dd>김웨이</dd>
                </dl>
                <dl>
                  <dt>전체 인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">999회</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>이 달의 인증</dt>
                  <dd>
                    <p> 9월 22회 <span class="green"> 60%</span> </p>
                  </dd>
                </dl>
                <dl>
                  <dt> 오늘 인증</dt>
                  <dd> <span> X </span></dd>
                </dl>
                <dl>
                  <div class="challenge__badge-wrap">
                    <div class="challenge__badge badge--abo not">
                      <img src="@/assets/images/ico-abo-completed-badge-not.svg" alt="ABO 인증 완료 뱃지 아이콘" />
                      <span> ABO 인증 완료 </span>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>


          <!-- 자녀계정 -->
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <BookMarkBtn />
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__top__profile_img">
                <div class="profile_img">
                  <div class="profile_img__info">
                    <div class="user_img-wrap on-flag">
                      <div class="user_img">
                        <img :src="require(`@/assets/images/child_profile1.png`)" alt="프로필 이미지" />
                      </div>
                    </div>
                    <p class="user__tit"> 김사무엘주니어 </p>
                  </div>
                </div>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>2위</dd>
                </dl>
                <dl>
                  <dt>전체 인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">999회</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>이 달의 인증</dt>
                  <dd>
                    <p> 9월 22회 <span class="green"> 60%</span> </p>
                  </dd>
                </dl>
                <dl>
                  <dt> 오늘 인증</dt>
                  <dd> <span class="green"> O </span></dd>
                </dl>
              </div>
            </div>
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
      isActive : false,
      selectedDate: '2024.09',
      selectedMember :'전체'
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
