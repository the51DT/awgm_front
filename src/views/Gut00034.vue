<template>
  <!-- 참여중인 팀이 있을 때 -->
  <div class="team">
    <div class="team__add">
      <button>
        <img :src="require(`@/assets/images/icon_plus_white.svg`)">
        <span>팀만들기</span>
      </button>
    </div>
    <div class="team team--main">
      <div class="text__title__wrap">
        <p class="text__title">팀장김웨이님은</p>
        <p class="text__subtit"><span class="text__subtit--bold">$n$</span>개 팀에 참여중입니다.</p>
        <p class="text__desc mt8"> 팀 현황을 확인해보세요</p>
      </div>
      <div class="tag--wrap">
        <button type="button" class="tag">진행중</button>
        <button type="button" class="tag tag-gray">진행종료</button>
        <button type="button" class="tag on">초대받은 팀 <span> $n$ </span></button>
      </div>
      <div class="tag_cont">
        <div class="team--main__sub">
          <div class="card card--green card--p16 card--shadowc2">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__ranking">
              <div class="card__state">진행중</div>
              <div class="card__ranking--rank">
                <img :src="require(`@/assets/images/icon_ranking.svg`)">
                <p>챌린지팀 랭킹 <span>5</span>위</p>
              </div>
            </div>
            <p class="card__head">GUT Morning Korea Challenge</p>
            <div class="card__top">
              <div class="card__img card__leader">
                <img :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <div class="card__text">
                <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
                <div class="card__info">
                  <div class="card__title card__title--challenge">챌린지</div>
                  <div class="card__num">64명</div>
                </div>
                <p class="card__date">
                  <strong>전체기간</strong><br />
                  2025.09.01 ~ 2025.09.30 / 70일
                </p>
                <p class="card__date">
                  <strong>2회차 진행</strong><br />
                  2025.09.01 ~ 2025.09.30 / 70일
                </p>
              </div>
            </div>
            <div class="card__bottom">
              <p class="card--per__title">챌린지<br />인증률</p>
              <div class="card--per">
                <div class="card--per__gage--wrap">
                  <div class="card--per__gage" data-width="60%"></div>
                </div>
                <div class="card--per__comp" data-width="25%">성공!</div>
              </div>
              <p class="card--per__state">60%</p>
            </div>
          </div>

          <div class="card card--border card--p16 card--shadowc2">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__ranking">
              <div class="card__state">진행중</div>
              <div class="card__ranking--text">
                <p>상시팀 랭킹 <span>11</span>위</p>
                <div class="btn__wrap">
                  <button class="btn__star on"></button>
                  <button class="btn__person"></button>
                </div>
              </div>
            </div>
            <div class="card__top">
              <div class="card__img card__leader">
                <img :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <div class="card__text">
                <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
                <div class="card__info">
                  <div class="card__title card__title--always">상시</div>
                  <div class="card__num">99명</div>
                </div>
                <p class="card__date">2024.09.01 ~ 2025.08.31 / 365일</p>
              </div>
            </div>
            <div class="card__bottom">
              <p class="card--per__title">이번달<br />인증률</p>
              <div class="card--per">
                <div class="card--per__gage--wrap">
                  <div class="card--per__gage" data-width="50%"></div>
                </div>
              </div>
              <p class="card--per__state">50%</p>
            </div>
          </div>

          <div class="card card--border card--p16 card--shadowc2">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__ranking">
              <div class="card__state card__state--wait">진행대기</div>
              <div class="card__ranking--text">
                <p>상시팀 랭킹 <span>101</span>위</p>
                <div class="btn__wrap">
                  <button class="btn__star"></button>
                  <button class="btn__person"></button>
                </div>
              </div>
            </div>
            <div class="card__top">
              <div class="card__img">
                <img :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <div class="card__text">
                <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
                <div class="card__info">
                  <div class="card__title card__title--always">상시</div>
                  <div class="card__num">99명</div>
                </div>
                <p class="card__date">2024.09.01 ~ 2025.08.31 / 365일</p>
              </div>
            </div>
            <div class="card__bottom">
              <p class="card--per__title">이번달<br />인증률</p>
              <div class="card--per">
                <div class="card--per__gage--wrap">
                  <div class="card--per__gage" data-width="50%"></div>
                </div>
              </div>
              <p class="card--per__state">50%</p>
            </div>
          </div>
        </div>
      </div>

      <div class="tag_cont">
        <div class="team--main__sub">
          <div class="card card--border card--p16 card--shadowc2">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__ranking">
              <div class="card__state card__state--end">진행종료</div>
            </div>
            <div class="card__top">
              <div class="card__img">
                <img :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <div class="card__text">
                <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
                <div class="card__info">
                  <div class="card__title card__title--end">상시</div>
                  <div class="card__num">99명</div>
                </div>
                <p class="card__date">2024.09.01 ~ 2025.08.31</p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16 card--shadowc2">
            <button class="card__linkBtn">
              <img :src="require(`@/assets/images/icon_arrow_r.svg`)">
            </button>
            <div class="card__ranking">
              <div class="card__state card__state--end">진행종료</div>
            </div>
            <div class="card__top">
              <div class="card__img">
                <img :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <div class="card__text">
                <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
                <div class="card__info">
                  <div class="card__title card__title--end-challenge">챌린지</div>
                  <div class="card__num">64명</div>
                </div>
                <p class="card__date">
                  <strong>전체기간</strong><br />
                  2025.09.01 ~ 2025.09.30 / 70일
                </p>
                <p class="card__date">
                  <strong>2회차 진행</strong><br />
                  2025.09.01 ~ 2025.09.30 / 30일
                </p>
              </div>
            </div>
            <div class="card__comp">
              <img :src="require(`@/assets/images/challenge_comp_green.png`)">
            </div>
          </div>
        </div>
      </div>

      <div class="tag_cont on">
        <div class="team--main__sub">
          <div class="card card--border card--p16 card--shadowc2">
            <div class="card__top">
              <div class="card__img">
                <img :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <div class="card__text">
                <p class="card__text__title"> <b>우리몸은 GUT Morning을 원한다! </b></p>
                <div class="card__info">
                  <div class="card__title card__title--challenge">챌린지</div>
                  <div class="card__team--nick">팀장닉네임</div>
                </div>
                <p class="card__date">챌린지 시작까지 <strong> D-248 </strong> </p>
              </div>
            </div>
            <div class="card__bottom">
              <IconButton type="delete"> </IconButton>
              <CustomButton size="md-b12"> 참여하기 </CustomButton>
            </div>
          </div>
          <div class="card card--border card--p16 card--shadowc2">
            <div class="card__top">
              <div class="card__img">
                <img :src="require(`@/assets/images/card_profile.png`)">
              </div>
              <div class="card__text">
                <p class="card__text__title"> <b>우리몸은 GUT Morning을 원한다! </b></p>
                <div class="card__info">
                  <div class="card__title card__title--always">상시</div>
                  <div class="card__team--nick">팀장닉네임</div>
                </div>
              </div>
            </div>
            <div class="card__bottom">
              <IconButton type="delete"> </IconButton>
              <CustomButton size="md-b12"> 참여하기 </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 
    card__title--end : gray
    card__title--challenge
  
  -->

  <AppNav :team="true"></AppNav>
</template>

<script>
import AppNav from "@/layouts/AppNav.vue";
import CustomButton from  "@/components/CustomButton.vue"
import IconButton from "@/components/IconButton.vue"
import tabFn from "@/plugins/common.js";

export default {
  name: "Gut00034",
  components: {
    AppNav,
    CustomButton,
    IconButton,
  },
  mounted() {
    tabFn.tabFn()
  }
};
</script>

<style scoped></style>
