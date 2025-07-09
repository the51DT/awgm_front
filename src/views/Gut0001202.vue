<template>
  <div class="content-area">
    <ContentHead title="상시 팀 관리" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="profile-area">
        <div class="img-wrap on-flag edit-profile"> 
          <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
          <img class="ico-logo" :src="require(`@/assets/images/content/dummy-profile-img.png`)" alt="프로필 아이콘" />
        </div>
      </div>
      <div class="list-conts-wrap">
        <div class="card card--border card--p16 card--shadowc2">
          <div class="input-area">
            <div class="form-item">
              <InputField title="팀명"/>
            </div>
            <div class="form-item">
              <h5 class="title">팀 구분</h5>
              <p class="desc">상시</p>
            </div>
            <!-- 기간 : type1 -->
            <!-- <div class="form-item">
              <h5 class="title">전체 기간</h5>
              <p class="desc">2025.01.01 ~ 2025.02.28</p>
            </div>
            <div class="form-item">
              <h5 class="title">1회차 진행</h5>
              <p class="desc">2025.01.01 ~ 2025.01.31</p>
            </div>
            <div class="form-item">
              <h5 class="title">전체 기간</h5>
              <p class="desc">2025.02.01 ~ 2025.02.28</p>
            </div> -->
            <!-- 기간 : type2 -->
            <div class="form-item">
              <InputField type="date" title="기간"
                :date="[
                  {value: '2024-02-14', disabled: true},
                  {disabled: false, placeholder: '선택'},
                ]" />
              <div class="form-item--sub">
                <InputField type="checkbox" name="checkbox1"
                  :checkbox="[
                    {id: 'checkbox1_1', value: 'checkbox1_1', checked: true, label: '종료일 없음'},
                  ]"  />
              </div>
            </div>
            <div class="form-item">
              <h5 class="title">참여 가능 팀원</h5>
              <p class="desc">5 ~ 99</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-area ty03">
        <CustomButton color="light" class="ty02">팀원</CustomButton>
        <CustomButton>수정</CustomButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .btn-area.ty03{
    margin-bottom: 0;
    gap: 8px;
  }
  .profile-area{
    margin-bottom: 44px;
  }
</style>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_00012",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    ContentHead,
    InputField,
    CustomButton
  },
};
</script>
