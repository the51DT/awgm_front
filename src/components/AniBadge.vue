<template>
  <div class="popup--badge">
    <button type="button" class="close-btn">
        <img class="ico-logo" :src="require(`@/assets/images/icon/ico_close_w.svg`)" alt="닫기" />
    </button>
    <div class="badge-wrap">
      <h3> NEW BADGE !</h3>
      <div class="badge">
        <img :src="require(`@/assets/images/badgeImg/badge__participate_2.svg`)" />
        <span class="badge-name"> 나의 생일 </span>
      </div>
      <div class="popup-message">
        <p> 축하합니다! </p>
        <p> 새로운 배지를 획득하셨어요!</p>
      </div>
    </div>
    <div class="btn-wrap">
      <CustomButton> 보러가기 </CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue"

export default{
  name: "AniBadge",
  data(){
    return{

    }
  },
  components:{
    CustomButton,
  }
}


</script>

<style>

</style>