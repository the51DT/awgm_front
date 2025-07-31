<template>
  <PopupDefault>
    <template v-slot:title>
      프로필 선택 및 PIN 번호 입력
    </template>
    <template v-slot:cont>
      <div class="content-area myWellness">
        <p class="gray999_text">
          *한 번 선택한 프로필은 변경이 불가합니다.
        </p>
        <div class="select_profile">
          <div class="select_profile_card" @click="imgChange($event)">
            <img :src="require(`@/assets/images/select_profile-gray.png`)" />
            <p>$공동사업자(이름)1$ </p>
          </div>
          <div class="select_profile_card" @click="imgChange($event)">
            <img :src="require(`@/assets/images/select_profile-gray.png`)" />
            <p>$공동사업자(이름)2$ </p>
          </div>
        </div>
        <div class="form-box mb0">
          <div class="input-area">
            <InputField type="pin" />
          </div>
        </div>
        <p class="gray333_text">
          마이웰니스 랩에서 PIN 번호를 확인해 주세요.
        </p>
      </div>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="md-b12" color="light">취소</CustomButton>
        <CustomButton size="md-b12">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<style scoped>
.gray999_text {
  color: #999;
  font-size: 11px;
  line-height: 16px;
}

.select_profile {
  margin-bottom: 12px;
}

.select_profile_card {
  padding-bottom: 16px;
}
</style>


<script>
// 텍스트로 해놓고 포커스 풀리면 패스워드 타입으로 변경


import PopupDefault from "@/components/PopupDefault.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

const imgChange = (e) => {
  e.currentTarget.classList.toggle('is-active');
};
export default {
  name: "Gut1001502",
  data() {
    return {
      imageUrl: null,
    };
  },
  components: {
    PopupDefault,
    InputField,
    CustomButton
  },
  mounted() {
    layerClose.layerClose("popup");
  },
  methods: {
    imgChange(e) {
      const cards = document.querySelectorAll('.select_profile_card');
      cards.forEach((card) => {
        card.classList.remove('is-active');
        const img = card.querySelector('img');
        img.src = require('@/assets/images/select_profile-gray.png');
      });

      const clickedCard = e.currentTarget;
      clickedCard.classList.add('is-active');
      const clickedImg = clickedCard.querySelector('img');
      clickedImg.src = require('@/assets/images/select_profile-green.png');
    }
  }
};
</script>
