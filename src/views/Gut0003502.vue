<template>
  <!-- 대표배지 설정 -->
  <PopupDefault>
    <template v-slot:cont>
      <div class="getBadge">
        <BadgeDefault img="badge--amway_korea.svg" pointColor="use-popup"> 나의 생일 </BadgeDefault>
        <p class="getBadge_txt"> 배지를 획득하셨어요!</p>
        <span class="badge__get_tag"> 획득방법 </span>
        <p> 본인 생일에 인증</p>
      </div>
    </template>
    <template v-slot:btn>
      <CustomButton size="md">
        대표배지 설정
      </CustomButton>
    </template>
  </PopupDefault>

  <!-- 대표배지 설정 해제 -->
  <!-- <PopupDefault>
    <template v-slot:cont>
      <div class="getBadge">
        <BadgeDefault img="badge--happy_birthday.svg" :show="true" pointColor="use-popup"> 나의 생일 </BadgeDefault>
        <p class="getBadge_txt"> 배지를 획득하셨어요!</p>
        <span class="badge__get_tag"> 획득방법 </span>
        <p> 본인 생일에 인증</p>
      </div>
    </template>
    <template v-slot:btn>
      <CustomButton size="md">
        대표배지 설정 해제
      </CustomButton>
    </template>
  </PopupDefault> -->

  <!-- 미획득 배지 선택 시 -->
  <!-- <PopupDefault>
    <template v-slot:cont>
      <div class="getBadge getBadge-lock">
        <BadgeDefault img="badge--lock.svg" pointColor="use-popup"> 스윗 것모닝 </BadgeDefault>
        <span class="badge__get_tag"> 획득방법 </span>
        <p> 2/14 발렌타인 데이 것모닝 인증 시 제공 </p>
      </div>
    </template>
  </PopupDefault> -->

</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import BadgeDefault from "@/components/BadgeDefault.vue"
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut0003502",
  components: {
    PopupDefault,
    CustomButton,
    BadgeDefault
  },
  mounted() {
    layerClose.layerClose("popup");
  },
};
</script>
