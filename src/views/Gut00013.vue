<template>
  <div class="content-area">
    <ContentHead title="팀원" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="list-top-wrap">
        <div class="tag">        
        </div>
        <div class="filter">
          <div class="box-wrap">
            <InputField type="checkbox"  name="checkbox1"
            :checkbox="[
              {id: 'checkbox1_1', value: 'checkbox1_1', checked: true, label: 'ABO 미인증 팀원'},
            ]"  />
          </div>
          <InputField type="select" placeholder="2024.09" :options="['2024.09', '2024.08', '2024.07']" active />
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2">
        <a href="#" class="card--link">
          <div class="card__top">
            <div class="card__profile__info"> 
              <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
              <div class="img-wrap on-flag">
                <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <p class="card__tit">팀장김웨이</p>
            </div>
            <div class="card__text__list">
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
        </a>
      </div>
      <div class="card card--border card--p16 card--shadowc2">
        <a href="#" class="card--link">
          <div class="card__top">
            <div class="card__profile__info"> 
              <div class="img-wrap">
                <img class="card__img" :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <p class="card__tit">김사무엘 유리카 딕슨 김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨김사무엘 유리카 딕슨</p>
            </div>
            <div class="card__text__list">
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
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";

export default {
  name: "Gut_00013",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {    
    ContentHead,
    InputField,
  },
};
</script>
