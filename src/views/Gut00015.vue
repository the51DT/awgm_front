<template>
  <div class="content-area bg-case">
    <div class="my-page-wrap">
      <div class="profile-area small">
        <input
            type="file"
            id="uploadIcon"
            class="upload-icon"
            @change="onFileChange"
            hidden
          />
        <label for="uploadIcon" class="upload-label">
          <div class="img-wrap">
            <img
              v-if="imageUrl"
              class="uploaded-img"
              :src="imageUrl"
              alt="업로드된 이미지"
            />
            <img
              v-else
              class="ico-logo"
              :src="require(`@/assets/images/icon/ico_profile.png`)"
              alt="프로필 이미지 수정 아이콘"
            />
          </div>
        </label>
        <div class="text-wrap">
          <h4 class="profile-name">팀장김웨이</h4>
          <button type="button" class="btn-modify" title="프로필명 변경"><span class="blind">프로필명 변경</span></button>
        </div>
      </div>
      <div class="my-page-conts">
        <div class="my-page-conts-item">
          <p class="title">회원정보 관리</p>
          <div class="card card--shadow00">          
            <a href="#" class="link">
              개인회원 정보
            </a>
          </div>
        </div>
        <div class="my-page-conts-item">
          <p class="title">회원정보 관리</p>
          <div class="card card--shadow00">          
            <a href="#" class="link">
              개인회원 정보
            </a>
          </div>
        </div>
        <div class="my-page-conts-item">
          <p class="title">회원정보 관리</p>
          <div class="card card--shadow00">          
            <a href="#" class="link">
              개인회원 정보
            </a>
          </div>
        </div>
      </div>
      <div class="team-btn-wrap">
        <div class="btn-area ty03">
          <CustomButton color="light">강퇴</CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Gut_00015",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      imageUrl: null,
    };
  },
  components: {
    CustomButton
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
    }
  }
};
</script>
