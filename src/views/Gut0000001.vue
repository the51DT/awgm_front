<template>
  <PopupDefault lg>
    <template v-slot:title>
      TITLE
    </template>
    <template v-slot:cont>
      <div class="popup__scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, harum! Assumenda temporibus natus dicta, beatae maxime voluptas repellat eveniet magni ratione illo enim corrupti nemo illum molestiae, maiores harum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta excepturi nobis dignissimos, dolor error, a temporibus ipsum vel iusto sapiente non tempora optio quas esse nemo molestiae possimus, impedit explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum sequi minima quaerat unde eos expedita ratione obcaecati, laborum nesciunt ipsum aliquam. Iure doloremque fuga cum? Iusto quibusdam tempore doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolore cupiditate, possimus aperiam, eligendi, dolor facere provident necessitatibus delectus modi beatae eum! Optio quibusdam quos iste excepturi incidunt quo natus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto, quam quis voluptates libero nesciunt placeat in magnam excepturi et beatae delectus voluptate inventore necessitatibus ducimus fugit at. Porro, earum.
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
