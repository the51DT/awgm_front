<template>
  <!-- 상시 팀 랭킹 -->
  <div class="team">
    <ContentHead title="상시 팀 랭킹" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="list-top-tag">
        <div class="tag-box-wrap">
          <div class="tag--wrap">
            <button class="tag on">인증률</button>
            <button class="tag">인증횟수</button>
            <button class="tag">추가 혜택 순위</button>
          </div>

          <!-- 추가 혜택 순위 view에서 .plus 추가 시 메달 display none -->
          <div class="medal_btn">
            <button><img :src="require(`@/assets/images/icon_medal.svg`)"></button>
            <div class="medal_btn__pop on">
              <span>메달 부여 기준</span>
              <button class="medal_btn__pop__close"></button>
              <ul>
                <li>
                  <p><img :src="require(`@/assets/images/gold_medal.png`)">금메달</p><span>1위</span>
                </li>
                <li>
                  <p><img :src="require(`@/assets/images/silver_medal.png`)">은메달</p><span>2위~10위</span>
                </li>
                <li>
                  <p><img :src="require(`@/assets/images/bronze_medal.png`)">동메달</p><span>11위~30위</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tag_cont on">
        <div class="list-top-wrap">
          <div class="filter">
            <InputField type="radio" name="radio1" size="font-12" :radio="[
              { id: 'radio1_1', value: 'radio1_1', checked: false, label: '월별' },
              { id: 'radio1_2', value: 'radio1_2', checked: true, label: '시즌' },
            ]" />
          </div>
          <div class="filter">
            <InputField type="select" :options="['전체', '24.09 ~ 25.01', '25.02 ~ 25.06']" v-model="selectedDate" />
            <InputField type="select" :options="['전체', '0~20명', '21명~50명', '51명~100명', '100명 이상']"
              v-model="selectedMember" />
          </div>
        </div>
        <div class="team--ranking">
          <p class="team--ranking__caption">2025.09.17 10:49:00 기준</p>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <div class="card__medal gold">1위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">우리몸은 GUT Morning을 원한다!</p>
                <div class="card__info">
                  <div class="card__num ph-4">231명</div>
                </div>
                <p class="card__date">팀 인증률 <span>100%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--green card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <div class="card__medal silver">2위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>95%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <div class="card__medal silver">3위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>90%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <div class="card__medal silver">10위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>70%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <div class="card__medal bronze">11위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>50%</span></p>
              </div>
            </div>
          </div>

          <!-- 추가 혜택 순위용 -->
          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <!-- .plus 추가 -->
                  <div class="card__medal plus">1위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>40%</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="team--ranking__my">
          <div class="card card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <div class="card__medal">77위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>95%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tag_cont">
        인증횟수
      </div>
      <div class="tag_cont">
        <div class="list-top-wrap">
          <div class="filter">
            <InputField type="radio" name="radio1" size="font-12" :radio="[
              { id: 'radio1_1', value: 'radio1_1', checked: false, label: '월별' },
              { id: 'radio1_2', value: 'radio1_2', checked: true, label: '시즌' },
            ]" />
          </div>
          <div class="filter">
            <InputField type="select" :options="['전체', '24.09 ~ 25.01', '25.02 ~ 25.06']" v-model="selectedDate" />
            <InputField type="select" :options="['전체', '0~20명', '21명~50명', '51명~100명', '100명 이상']"
              v-model="selectedMember" />
          </div>
        </div>
        <div class="team--ranking">
          <p class="team--ranking__caption">2025.09.17 10:49:00 기준</p>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <!-- .plus 추가 -->
                  <div class="card__medal plus">1위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">우리몸은 GUT Morning을 원한다!</p>
                <div class="card__info">
                  <div class="card__num ph-4">231명</div>
                </div>
                <p class="card__date">팀 인증률 <span>100%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--green card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <!-- .plus 추가 -->
                  <div class="card__medal plus">2위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>95%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <!-- .plus 추가 -->
                  <div class="card__medal plus">3위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>90%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <!-- .plus 추가 -->
                  <div class="card__medal plus">4위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>70%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <!-- .plus 추가 -->
                  <div class="card__medal plus">5위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>50%</span></p>
              </div>
            </div>
          </div>

          <div class="card card--border card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <!-- .plus 추가 -->
                  <div class="card__medal plus">6위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>40%</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="team--ranking__my">
          <div class="card card--p16">
            <div class="card__top">
              <div class="card__profile__info">
                <div class="card__img">
                  <div class="card__medal">77위</div>
                  <img :src="require(`@/assets/images/card_profile.png`)">
                </div>
              </div>
              <div class="card__text">
                <p class="card__text__title">아침마다 오 마이 GUT Morning</p>
                <div class="card__info">
                  <div class="card__num ph-4">99명</div>
                </div>
                <p class="card__date">팀 인증률 <span>95%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter .inputField__input {
  font-size: 12px;
}

.tag--wrap {
  margin-top: 0;
}
</style>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import tabFn from "@/plugins/common.js";
import layerClose from "@/plugins/common.js";

export default {
  name: "LoginMain",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      selectedDate: '24.09 ~ 25.01',
      selectedMember: '0~20명'
    };
  },
  components: {
    ContentHead,
    InputField,
  },
  mounted() {
    tabFn.tabFn();
    layerClose.layerClose("medal");

    const medalBtn = document.querySelector(".medal_btn");
    const tabBtns = document.querySelectorAll(".tag")

    tabBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        medalBtn.classList.toggle('plus', idx === 2);
      });
    });


  },
};
</script>
