<template>
  <PopupDefault>
    <template v-slot:title>
      프로필 선택
    </template>
    <template v-slot:cont>
      <div class="select_profile">
        <div class="select_profile_card" @click="imgChange($event)">
          <img :src="require(`@/assets/images/select_profile-gray.png`)" />
          <p>$영문 아이디 02$ </p>
          <p> <small> (인증완료)</small></p>
        </div>
        <div class="select_profile_card" @click="imgChange($event)">
          <img :src="require(`@/assets/images/select_profile-gray.png`)" />
          <p>$영문 아이디 02$ </p>
        </div>
      </div>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="sm" color="light">취소</CustomButton>
        <CustomButton size="sm">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>
<style></style>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

const imgChange = (e) => {
  e.currentTarget.classList.toggle('is-active');
};

export default {
  name: "Gut0000402",
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
