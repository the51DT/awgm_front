<template>
  <div class="content-area">
    <ContentHead title="챌린지 팀 관리" headType="ty02" :leftArea=true />
    <div class="team-box-wrap">
      <div class="profile-area">
        <div class="img-wrap on-flag"> <!-- 팀장일 경우 on-flag 클래스 추가시 왕관 아이콘 활성화됨 -->
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
              <p class="desc">챌린지</p>
            </div>
            <!-- 기간 : type1 -->
            <div class="form-item">
              <h5 class="title">전체 기간</h5>
              <p class="desc">2025.09.01 ~ 2025.11.15 (70일)</p>
            </div>
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
              <h5 class="title">챌린지 시작일</h5>
              <p class="desc">2025.09.12</p>
            </div>
            <div class="form-item">
              <h5 class="title">참여 가능 팀원</h5>
              <p class="desc">5 ~ 99</p>
            </div>
            <div class="form-item">
              <h5 class="title">성공조건</h5>
              <p class="desc"><span class="font--800 font--yellow">80%</span></p>
            </div>
            <div class="form-item">
              <h5 class="title">성공 보상</h5>
              <p class="desc">$보상명$</p>
            </div>
            <div class="form-item">
              <h5 class="title">보상수령방법</h5>
              <div class="radio-wrap">
                <InputField type="radio" title="" name="radio1"
                :radio="[
                  {id: 'radio1_1', value: 'radio1_1', checked: true, label: '팀장이 수령'},
                  {id: 'radio1_2', value: 'radio1_2', checked: false, label: '팀별 개별수령'},
                ]" />
              </div>
            </div>
            <div class="form-item">
              <h5 class="title">보상수령처</h5>
              <div class="select-wrap">
                <InputField type="select" placeholder="선택" :options="['값1', '값2', '값3']" />
              </div>            
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
