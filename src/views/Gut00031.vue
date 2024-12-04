<template>
  <div class="content-etc-area">
    <div class="content-etc-wrap"> 
      <div class="content-etc-box">
        <div class="content-etc-img-area">
          <img :src="require('@/assets/images/icon/ico_etc04.png')" alt="404 에러페이지 아이콘">
        </div>
        <div class="content-etc-text-area">
          <h2 class="page-title">
            404 Page Not Found
            <strong class="sub-title">페이지를 표시할 수 없습니다</strong>
          </h2>
          <p class="page-desc">
            찾으려는 페이지는 존재하지 않는 페이지입니다. <br/>
            입력하신 페이지 주소가 정확한지 <br/>
            다시 한번 확인하여 주시기 바랍니다. 
          </p>
        </div>      
      </div>
      <CustomButton>홈으로</CustomButton>  
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_00031",
  components: {
    CustomButton
  }
};
</script>
