<template>
  <PopupDefault>
    <template v-slot:title>
      TITLE
    </template>
    <template v-slot:cont>
      <div class="box-wrap">
        <div class="box-gray">
          <div class="terms-conts">
            제1조 (목적)<br/>
            본 약관은 한국암웨이 주식회사(이하 "회사"라 합니다)가 제공하는 GUT Morning 미션 사이트와 관련된 "회사"와 "이용자" 간의 권리, 의무 및 책임사항과 절차 등을 규정함을 목적으로 합니다.<br/>
            <br/>
            제2조 (정의)<br/>
            본 약관에서 사용하는 용어의 의미는 다음과 같습니다.<br/>
            ① "이용자"란 GUT Morning 미션 사이트 회원을 말하는 것으로, GUT Morning 미션 사이트를 통해 "서비스"를 제공받을 수 있습니다.<br/>
            ② "서비스"란 GUT Morning 미션 사이트를 통해 "회사"가 "이용자"에게 제공하는 모든 프로그램 일체를 말합니다.<br/>
          </div>
        </div>
      </div>
      <ul class="info--list">
        <li>* 자녀계정은 부모계정에서 생성이 가능합니다.</li>
        <li>* 자녀계정 아이디는 부모계정에서 확인이 가능합니다.</li>
      </ul>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty04">        
        <InputField type="checkbox" name="checkbox1"
        :checkbox="[
        {id: 'checkbox1_1', value: 'checkbox1_1', checked: false, label: '오늘 하루 열지 않기'},
        ]"  />
        <CustomButton size="sm" class="pop-btn-Close">닫기</CustomButton>
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
  name: "Gut_0000101",
  components: {    
    PopupDefault,
    CustomButton,
    InputField,
  },
  mounted() {
    layerClose.layerClose("popup");
  }
};
</script>
