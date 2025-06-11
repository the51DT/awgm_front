<template>
  <div class="content-area bg-case">
    <ContentHead title="팀 만들기" headType="ty02" :leftArea="true" bgGray="true" />
    <div class="create-team-wrap">
      <div class="profile-wrap">
        <div class="profile-area">
          <div class="upload-wrap">
            <input type="file" id="uploadIcon" class="upload-icon" @change="onFileChange" hidden />
            <label for="uploadIcon" class="upload-label">
              <img v-if="imageUrl" class="uploaded-img" :src="imageUrl" alt="업로드된 이미지" />
              <img v-else class="ico-logo" :src="require(`@/assets/images/icon/ico_file.png`)" alt="파일 업로드 등록 아이콘" />
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
              <InputField type="radio" title="" name="radio1" :radio="[
                {
                  id: 'radio1_1',
                  value: 'radio1_1',
                  checked: false,
                  label: '챌린지',
                },
                {
                  id: 'radio1_2',
                  value: 'radio1_2',
                  checked: true,
                  label: '상시',
                },
              ]" />
            </div>
          </div>
          <!-- 기간 : type2 -->
          <div class="form-item">
            <InputField type="date" title="기간" :date="[
              { value: '2024-09-30', disabled: false },
              { value: '2024-09-30', disabled: false, placeholder: '선택' },
            ]" />
            <div class="form-item--sub">
              <InputField type="checkbox" name="checkbox1" :checkbox="[
                {
                  id: 'checkbox1_1',
                  value: 'checkbox1_1',
                  checked: false,
                  label: '종료일 없음',
                },
              ]" />
            </div>
          </div>
          <div class="form-item">
          <h5 class="title">목표 인증률</h5>
          <div class="inputField__radio--wrap">
            <ul>
              <li>
                <input type="radio" name="targetRate" value="70" id="radio-select01" />
                <label for="radio-select01">70%</label>
              </li>
              <li>
                <input type="radio" name="targetRate" value="75" id="radio-select02" />
                <label for="radio-select02">75%</label>
              </li>
              <li>
                <input type="radio" name="targetRate" value="80" id="radio-select03" />
                <label for="radio-select03">80%</label>
              </li>
              <li>
                <input type="radio" name="targetRate" value="85" id="radio-select04" />
                <label for="radio-select04">85%</label>
              </li>
              <li>
                <input type="radio" name="targetRate" value="90" id="radio-select05" />
                <label for="radio-select05">90%</label>
              </li>
              <li>
                <input type="radio" name="targetRate" value="95" id="radio-select06" />
                <label for="radio-select06">95%</label>
              </li>
              <li>
                <input type="radio" name="targetRate" value="100" id="radio-select07" />
                <label for="radio-select07">100%</label>
              </li>
            </ul>
          </div>
        </div>
          <div class="form-item">
            <h5 class="title">참여 가능 팀원</h5>
            <p class="desc">5 ~ 99</p>
          </div>
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
  components: {
    ContentHead,
    InputField,
    CustomButton,
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
