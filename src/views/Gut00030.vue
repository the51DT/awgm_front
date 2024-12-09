<template>
  <div class="content-etc-wrap"> 
    <div class="content-etc-box">
      <div class="content-etc-img-area">
        <img :src="require('@/assets/images/icon/ico_etc03.png')" alt="500 에러페이지 아이콘">
      </div>
      <div class="content-etc-text-area">
        <h2 class="page-title">
          500 Unexpected Error
          <strong class="sub-title">서비스에 접속할 수 없습니다</strong>
        </h2>
        <p class="page-desc">
          기술적인 문제로 일시적으로 접속되지 않았습니다. <br/>잠시 후 다시 한번 확인하여 주시기 바랍니다.
        </p>
      </div>      
    </div>
    <CustomButton>재시작</CustomButton>  
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_00030",
  components: {
    CustomButton
  }
};
</script>
