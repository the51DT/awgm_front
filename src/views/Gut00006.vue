<template>
  <div class="main-bot-section bg-case">
    <div class="main-card-box active">
      <a href="#" class="text-link">
        <p class="card-title">챌린지</p>
      </a>
      <div class="card--icon">
        <img :src="require(`@/assets/images/content/conts-ico_challenge.png`)" alt="챌린지 아이콘" />
      </div>
      <div class="card card--border card--shadow00 card--p20 challenge__card--main">        
        <div class="challenge__card--main__top">
          <p class="font--c33 font--700 font--ls3">아침마다 오 마이 GUT Morning</p>
          <div>
            <p class="font--c11 font--700 font--ls2">성공조건 : 팀 인증 <span class="font--green">80%</span> 이상</p>
            <p class="font--c66 font--ls1">(2025.04.01 ~ 2025.06.10)</p>
          </div>
        </div>
        <div class="challenge__card--main__per">
          <div>
            <p class="font--700 font--ls1">팀 인증률</p>
            <p class="font--700 font--c11 font--ls1"><span class="font--green font--800 font--ls1">40</span>%</p>
          </div>
          <div class="card--per">
            <div class="card--per__gage" data-width="40%"></div>
            <div class="card--per__comp" data-width="20%">성공</div>
            <div class="card--per__target" data-left="60%"><img :src="require(`@/assets/images/icon_target.svg`)">목표치</div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-card-box"> <!-- active 클래스에 따라 펼침/닫힘 -->
      <div class="text-link">
        <a href="#" class="card-title">나의 팀</a>
      </div>
      <div class="card--icon">
        <img :src="require(`@/assets/images/content/conts-ico_team.png`)" alt="나의팀 아이콘" />
      </div>
      <div class="card card--border card--shadow00 card--p20 challenge__card--main">
        <div class="challenge__card--main__top"> <!-- 챌린지 진행시에만 노출 / -->
          <p class="font--c33 font--700 font--ls3">지금부터 우리는 GUT Morning</p>
          <div>
            <p class="font--c11 font--700 font--ls2">성공조건 : 팀 인증 <span class="font--green">80%</span> 이상</p>
            <p class="font--c66 font--ls1">2025.04.10에 참여</p>
          </div>
          <div class="card--sub-info">
            <p class="font--c11 font--700 font--ls2">랭킹 : <strong class="font--green">16</strong>위 / 팀원 수 : <strong class="font--green">25</strong>명</p>
          </div>
        </div>
        <div class="challenge__card--main__per">
          <div>
            <p class="font--700 font--ls1">이번 달 팀 인증률</p>
            <p class="font--700 font--c11 font--ls1"><span class="font--green font--800 font--ls1">60</span>%</p>
          </div>
          <div class="card--per">
            <div class="card--per__gage" data-width="60%"></div>
            <div class="card--per__comp" data-width="20%">성공</div>
            <div class="card--per__target ty02" data-left="60%">이전 달 인증률 <span class="font--800">80%</span> <img :src="require(`@/assets/images/icon_target.svg`)"></div>
            <div class="card--per__tooltip">
              <!-- 목표치 초과 시 -->
              <!-- <p class="desc--main">목표치를 초과 달성 중입니다.</p>
              <p class="desc--sub">챌린지 성공시 까지 계속 인증해 주세요.</p> -->
              <!-- 목표치 진행중일 시 -->
              <p class="desc--main">현재 <strong class="font--yellow">40%</strong>를 달성하였습니다.</p>
              <p class="desc--sub">목표치까지 <strong class="font--white">10%</strong> 남았습니다.</p>
              <div class="close--wrap">
                <button type="button" class="close--btn" title="툴팁 닫기"><span class="blind">닫기</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lottie-conts lottie-conts--white">
      <FrontIntro />
    </div>
    <AddBtnHome></AddBtnHome>
  </div>
  <AppNav :challenge="true"></AppNav>
</template>

<script>
import FrontIntro from "../components/FrontIntro.vue";
import AppNav from "@/layouts/AppNav.vue";
import AddBtnHome from "@/components/AddBtnHome.vue";

export default {
  name: "Gut_00006",
  components: {
    AppNav,
    AddBtnHome,
    FrontIntro,
  },
};
</script>

<style scoped></style>
