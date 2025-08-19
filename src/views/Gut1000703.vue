<template>
  <PopupDefault sm>
    <template v-slot:title>
      마이웰니스 랩 분석 결과 조회
    </template>
    <template v-slot:cont>
      <div class="content-area myWellness">
        <p class="gray333_text">
          정확한 노화속도 분석을 위해 <br />
          가장 최근 건강검진 데이터를 연동해 주세요.
        </p>
        <div class="form-box mb0">
          <div class="input-area">
            <InputField type="radio" name="radio1" :radio="[
              { id: 'radio1_1', value: 'radio1_1', checked: true, label: '2025년 5월 26일 - 노화 속도 1.76배속', center_layout: true, },
              { id: 'radio1_2', value: 'radio1_2', checked: false, label: '2025년 4월 26일 - 노화 속도 1.84배속', center_layout: true, },
              { id: 'radio1_3', value: 'radio1_3', checked: false, label: '2024년 12월 15일 - 노화 속도 1.88배속', center_layout: true, },
            ]" />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="md" color="light">취소</CustomButton>
        <CustomButton size="md">선택 완료</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<style scoped>
.inputField__wrap {
  flex-direction: column;
}

.inputField__input__radio--wrap {
  margin-left: 0;

}

.inputField__input__radio {
  margin-top: 2px;
}
</style>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut1000701",
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
  }
};
</script>
