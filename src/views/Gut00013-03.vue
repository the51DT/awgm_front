<template>
  <!-- 팀원인증현황 - 상시(팀원) light view-->
  <div class="content-area">
    <ContentHead title="팀원 인증 현황보기" headType="ty02" :leftArea=true :rightArea=true :sortIcon=true />
    <div class="team-box-wrap">
      <div class="tag_cont on">
        <div class="list-top-wrap">
          <div class="filter half">
            <InputField type="select" :options="['2024.09', '2024.08', '2024.07']" active v-model="selectedDate" />
            <InputField type="select" v-model="selectedMember" active
              :options="['전체', '오늘 인증 완료', '오늘 미인증 팀원', '80% 이상 달성', '80% 미만 달성']" />
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
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__text__list ty02 light-view">
                <div>
                  <dl>
                    <dt>닉네임</dt>
                    <dd>김웨이</dd>
                  </dl>
                  <dl>
                    <dt>전체인증횟수</dt>
                    <dd>
                      <div class="group-info">
                        <p class="main">999회</p>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt> 오늘 인증</dt>
                    <dd> <img :src="require(`@/assets/images/today_prove_O.svg`)" /></dd>
                  </dl>
                  <dl>
                    <dt>이달의인증</dt>
                    <dd>
                      <p> 9월 22회 <span class="green"> 60%</span> </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__text__list ty02 light-view">
                <div>
                  <dl>
                    <dt>닉네임</dt>
                    <dd>김웨이</dd>
                  </dl>
                  <dl>
                    <dt>전체인증횟수</dt>
                    <dd>
                      <div class="group-info">
                        <p class="main">999회</p>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt> 오늘 인증</dt>
                    <dd> <img :src="require(`@/assets/images/today_prove_O.svg`)" /></dd>
                  </dl>
                  <dl>
                    <dt>이달의인증</dt>
                    <dd>
                      <p> 9월 22회 <span class="green"> 60%</span> </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__text__list ty02 light-view">
                <div>
                  <dl>
                    <dt>닉네임</dt>
                    <dd>김웨이</dd>
                  </dl>
                  <dl>
                    <dt>전체인증횟수</dt>
                    <dd>
                      <div class="group-info">
                        <p class="main">999회</p>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt> 오늘 인증</dt>
                    <dd> <img :src="require(`@/assets/images/today_prove_O.svg`)" /></dd>
                  </dl>
                  <dl>
                    <dt>이달의인증</dt>
                    <dd>
                      <p> 9월 22회 <span class="green"> 60%</span> </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__text__list ty02 light-view">
                <div>
                  <dl>
                    <dt>닉네임</dt>
                    <dd>김사무엘 주니어</dd>
                  </dl>
                  <dl>
                    <dt>전체인증횟수</dt>
                    <dd>
                      <div class="group-info">
                        <p class="main">999회</p>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt> 오늘 인증</dt>
                    <dd> <img :src="require(`@/assets/images/today_prove_X.svg`)" /></dd>
                  </dl>
                  <dl>
                    <dt>이달의인증</dt>
                    <dd>
                      <p> 9월 22회 <span class="green"> 60%</span> </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)" />
            </button>
            <div class="card__top">
              <div class="card__text__list ty02 light-view">
                <div>
                  <dl>
                    <dt>닉네임</dt>
                    <dd>코니 알렉스</dd>
                  </dl>
                  <dl>
                    <dt>전체인증횟수</dt>
                    <dd>
                      <div class="group-info">
                        <p class="main">999회</p>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt> 오늘 인증</dt>
                    <dd> <img :src="require(`@/assets/images/today_prove_O.svg`)" /></dd>
                  </dl>
                  <dl>
                    <dt>이달의인증</dt>
                    <dd>
                      <p> 9월 22회 <span class="green"> 60%</span> </p>
                    </dd>
                  </dl>
                </div>
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
      isActive: true,
      selectedDate: '2024.09',
      selectedMember: '전체'
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
