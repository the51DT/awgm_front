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
            <button type="button" class="order--icon on"></button>
            <button type="button" class="order--icon"></button> <!-- on 클래스 활성화인 경우(오름차순 정렬) / on 없을 경우(내림차순 정렬) -->
          </div>
        </div>
      </div>
      <div class="tag_cont on">
        <div class="list-top-wrap">
          <div class="filter">
            <!-- <div class="filter-box-wrap">
              <InputField type="checkbox"  name="checkbox1"
              :checkbox="[
                {id: 'checkbox1_1', value: 'checkbox1_1', checked: true, label: 'ABO 미인증 팀원'},
              ]"  />
            </div> -->
            <InputField type="select" placeholder="2024.09" :options="['2024.09', '2024.08', '2024.07']" active />
            <InputField type="select" placeholder="전체"
              :options="['전체', 'ABO 미인증 팀원', '오늘 인증한 팀원', '80% 이상 달성 팀원', '80% 미만 달성 팀원']" />
          </div>
        </div>
        <div class="list-conts-wrap">
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__top">
              <div class="card__profile__info">
                <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
                <div class="img-wrap on-flag">
                  <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
                </div>
                <p class="card__tit">팀장김웨이</p>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>1위</dd>
                </dl>
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
                <dl>
                  <dt>인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">223/1000회</p>
                      <p class="sub">($9$월 30회)</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>ABO/Member</dt>
                  <dd>
                    <p class="badge-info">인증</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__top">
              <div class="card__profile__info">
                <div class="img-wrap">
                  <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
                </div>
                <p class="card__tit">김사무엘 유리카 딕슨 김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨</p>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>2위</dd>
                </dl>
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
                <dl>
                  <dt>인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">223/1000회</p>
                      <p class="sub">($9$월 30회)</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>ABO/Member</dt>
                  <dd>
                    <p class="badge-info">인증</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="img-wrap">
                  <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
                </div>
                <p class="card__tit">김사무엘 유리카 딕슨 김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨</p>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>3위</dd>
                </dl>
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
                <dl>
                  <dt>인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">223/1000회</p>
                      <p class="sub">($9$월 30회)</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>ABO/Member</dt>
                  <dd>
                    <p class="badge-info">인증</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="img-wrap">
                  <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
                </div>
                <p class="card__tit">김사무엘 유리카 딕슨 김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨</p>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>4위</dd>
                </dl>
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
                <dl>
                  <dt>인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">223/1000회</p>
                      <p class="sub">($9$월 30회)</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>ABO/Member</dt>
                  <dd>
                    <p class="badge-info">인증</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2 card--link">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="img-wrap">
                  <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
                </div>
                <p class="card__tit">김사무엘 유리카 딕슨 김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨</p>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>5위</dd>
                </dl>
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
                <dl>
                  <dt>인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">223/1000회</p>
                      <p class="sub">($9$월 30회)</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>ABO/Member</dt>
                  <dd>
                    <p class="badge-info">인증</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16 card--shadowc2 card--link"
            v-for="(item, index) in card_profile" :key="index">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__top">
              <div class="card__profile__info">
                <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
                <div class="img-wrap on-flag">
                  <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
                </div>
                <p class="card__tit">팀장김웨이</p>
              </div>
              <div class="card__text__list ty02">
                <dl>
                  <dt>랭킹</dt>
                  <dd>{{index}}</dd>
                </dl>
                <dl>
                  <dt>팀 가입일</dt>
                  <dd>2024.09.09</dd>
                </dl>
                <dl>
                  <dt>인증 횟수</dt>
                  <dd>
                    <div class="group-info">
                      <p class="main">223/1000회</p>
                      <p class="sub">($9$월 30회)</p>
                    </div>
                  </dd>
                </dl>
                <dl class="align-ctr">
                  <dt>ABO/Member</dt>
                  <dd>
                    <p class="badge-info">인증</p>
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
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import tabFn from "@/plugins/common.js";

export default {
  name: "Gut_00013",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      profile_img :{},

    };
  },
  components: {
    ContentHead,
    InputField,
  },
  mounted() {
    tabFn.tabFn()
  },
};
</script>
