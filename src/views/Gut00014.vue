<template>
  <div class="content-area bg-case">
    <ContentHead title="팀 만들기" headType="ty02" :leftArea="true" />
    <div class="create-team-wrap">
      <div class="profile-wrap">
        <div class="profile-area">
          <div class="upload-wrap">
            <input
              type="file"
              accept="image/*"
              id="uploadIcon"
              class="upload-icon"
              hidden
              @change="handleFileUpload"
              @click="openCamera"
            />
            <label for="uploadIcon" class="upload-label">
              <img
                class="ico-logo"
                :src="require(`@/assets/images/icon/ico_file.png`)"
                alt="파일 업로드 등록 아이콘"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2">
        <div class="input-area">
          <div class="form-item">
            <InputField title="팀명" placeholder="팀명을 입력해 주세요." />
          </div>
          <div class="form-item">
            <h5 class="title">팀 구분</h5>
            <div class="radio-wrap">
              <InputField
                type="radio"
                title=""
                name="radio1"
                :radio="[
                  {
                    id: 'radio1_1',
                    value: 'radio1_1',
                    checked: true,
                    label: '챌린지',
                  },
                  {
                    id: 'radio1_2',
                    value: 'radio1_2',
                    checked: false,
                    label: '상시',
                  },
                ]"
              />
            </div>
          </div>
          <!-- 기간 : type1 -->
          <div class="form-item">
            <h5 class="title">기간</h5>
            <p class="desc">2025.09.01 ~ 2025.11.15 (70일)</p>
          </div>
          <!-- 기간 : type2 -->
          <div class="form-item">
            <InputField
              type="date"
              title="기간"
              :date="[
                { value: '2024-09-30', disabled: false },
                { value: '2024-09-30', disabled: false, placeholder: '선택' },
              ]"
            />
            <div class="form-item--sub">
              <InputField
                type="checkbox"
                name="checkbox1"
                :checkbox="[
                  {
                    id: 'checkbox1_1',
                    value: 'checkbox1_1',
                    checked: true,
                    label: '종료일 없음',
                  },
                ]"
              />
            </div>
          </div>
          <!-- ABC 수령 case -->
          <div class="form-item">
            <h5 class="title">성공 보상</h5>
            <p class="desc">$보상명$</p>
          </div>
          <div class="form-item">
            <h5 class="title">보상수령방법</h5>
            <div class="radio-wrap">
              <InputField
                type="radio"
                title=""
                name="radio2"
                :radio="[
                  {
                    id: 'radio2_1',
                    value: 'radio2_1',
                    checked: true,
                    label: '팀장이 수령',
                  },
                  {
                    id: 'radio2_2',
                    value: 'radio2_2',
                    checked: false,
                    label: '팀별 개별수령',
                  },
                ]"
              />
            </div>
          </div>
          <div class="form-item">
            <h5 class="title">보상수령처</h5>
            <div class="select-wrap">
              <InputField
                type="select"
                placeholder="선택"
                :options="['값1', '값2', '값3']"
              />
            </div>
          </div>
          <!-- //ABC 수령 case -->
          <!-- 바우처 case -->
          <div class="form-item">
            <h5 class="title">성공조건</h5>
            <p class="desc">
              <span class="font--yellow">80% 이상</span> (인증횟수 300회 이상)
            </p>
          </div>
          <div class="form-item">
            <h5 class="title">참여 가능 팀원</h5>
            <p class="desc">5 ~ 99</p>
          </div>
          <div class="form-item">
            <h5 class="title">보상</h5>
            <p class="desc">$바우처명$ 바우처</p>
          </div>
          <!-- 바우처 case -->
        </div>
      </div>
      <div class="btn-area">
        <CustomButton>완료</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_00014",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      imageUrl: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    openCamera() {
      const input = document.getElementById("uploadIcon");
      input.capture = "environment"; // 후면 카메라 설정
      input.click();
    },
  },
  components: {
    ContentHead,
    InputField,
    CustomButton,
  },
};
</script>
