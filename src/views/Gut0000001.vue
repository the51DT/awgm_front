<template>
  <PopupDefault lg>
    <template v-slot:title>
      TITLE
    </template>
    <template v-slot:cont>
      <div class="popup__scroll">
        <img src="https://placehold.co/600x1200">
        <div>
          Lorem ipsum dolor sit ame
        </div>
      </div>
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
