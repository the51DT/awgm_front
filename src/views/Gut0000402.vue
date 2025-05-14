<template>
  <PopupDefault>
    <template v-slot:title>
      인증방법 선택
    </template>
    <template v-slot:cont>
      <!-- 사진 찍기 버튼 -->
      <div>
        <input type="file" accept = "image/*" id="takePicture" @change="onFileChange" capture="environment" hidden />
        <label for="takePicture">
          <div class="picture-btn">
            <div class="picture-btn-icon">
              <img :src="require(`@/assets/images/icon/ico_take-a-picture.svg`)" alt="사진 찍기 아이콘" />
            </div>
            <span> 사진 찍기 </span>
          </div>
        </label>
      </div>
      <!-- 사진 보관함  -->
      <div style="margin-top: 8px">
        <input type="file" accept = "image/*" id="uploadPicture" @change="onFileChange" hidden />
        <label for="uploadPicture">
          <div class="picture-btn">
            <div class="picture-btn-icon">
              <img :src="require(`@/assets/images/icon/ico_picture-box.svg`)" alt="사진 보관함 아이콘" />
            </div>
            <span> 사진 보관함 </span>
          </div>
        </label>
      </div>
    </template>
  </PopupDefault>
</template>

<style>

</style>

<script>
import PopupDefault from "@/components/PopupDefault.vue";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut0000402",
  data() {
    return {
      imageUrl: null,
    };
  },
  components: {
    PopupDefault,
  },
  mounted() {
    layerClose.layerClose("popup");
  },
  methods: {
    openCamera() {
      const input = document.getElementById("uploadPicture");
      input.capture = "environment"; // 후면 카메라 설정
      input.click();
    },
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
  }
};
</script>
