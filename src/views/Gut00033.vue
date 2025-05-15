<template>
  <PopupDefault :isCloseBtn="false">
    <template v-slot:cont>
      <p class="gray333_text">
        6개월간 비밀번호를 변경하지 않았습니다. <br />
        비밀번호 변경이 필요한 경우, <br />
        <strong class="font--800">
          자녀계정을 생성한 부모계정의 MY > 자녀프로필 관리에서 비밀번호 재설정을 위한 링크를 공유받아 비밀번호를 재설정 해주세요.
        </strong>
      </p>
    </template>
    <template v-slot:btn>
      <InputField type="checkbox" title="" name="radio1" :checkbox="[
        { id: 'checkbox_1', value: 'checkbox_1', checked: false, label: '6개월 뒤에 변경하기' },
      ]" class="center" />
      <div class="btn-area ty03">
        <CustomButton size="md">닫기</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
import InputField from "@/components/InputField.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "AppLogin",
  components: {
    PopupDefault,
    CustomButton,
    InputField
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    checkbox: {
      type: Array,
      default: () => {
        return [{
          id: "id",
          value: "value",
          checked: false,
          label: "label",
        }]
      }
    },
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>

<style>
input[type="checkbox"]+label {
  font-family: RixSinHead;
  font-weight: 700;
  font-size: 13px;
  /* line-height: 24px; */
  letter-spacing: -0.5px;
  color: #111;
}
</style>