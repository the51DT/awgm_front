<template>
  <PopupDefault>
    <template v-slot:title>
      PIN 번호 입력
    </template>
    <template v-slot:cont>
      <div class="content-area myWellness">
        <p class="gray333_text">
          $이름$
        </p>
        <div class="form-box mb0">
          <div class="input-area">
            <div class="certify">
              <input type="tel" maxlength="1" min="0" max="9" onlyNumber>
              <input type="tel" maxlength="1" min="0" max="9" onlyNumber>
              <input type="tel" maxlength="1" min="0" max="9" onlyNumber>
              <input type="tel" maxlength="1" min="0" max="9" onlyNumber>
            </div>
          </div>
        </div>

      </div>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="md" color="light">취소</CustomButton>
        <CustomButton size="md">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.certify {
  margin-top: 2.4rem;
  text-align: center;
  padding: 0 1.6rem;
}

.certify input~input {
  margin-left: .6rem;
}

.certify input {
  padding: 0;
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  background-color: #f0f1f4;
  border-radius: .6rem;
}
</style>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import InputField from "@/components/InputField.vue";
import CustomButton from "@/components/CustomButton.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut1000702",
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
