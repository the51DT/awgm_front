<template>
  <div class="content-area bg-case">
    <div class="my-page-wrap">
      <div class="profile-area small">
        <input type="file" id="uploadIcon" class="upload-icon" @change="onFileChange" hidden />
        <label for="uploadIcon" class="upload-label">
          <div class="img-wrap">
            <img v-if="imageUrl" class="uploaded-img" :src="imageUrl" alt="업로드된 이미지" />
            <img v-else class="ico-logo" :src="require(`@/assets/images/icon/ico_profile.png`)" alt="프로필 이미지 수정 아이콘" />
          </div>
        </label>
        <!-- 프로필명 <-> 하단 modify 박스 토글 -->
        <div class="text-wrap">
          <div class="text-wrap-default" v-if="default">
            <p class="profile-name">팀장김웨이</p>
            <button @click="onEdit" type="button" class="btn-modify" title="프로필명 변경" ><span class="blind">프로필명 변경</span></button>
          </div>
          <div class="text-wrap-modify" v-else>
            <div class="text-wrap-modify-form">
              <InputField placeholder="자녀계정 아이디" />
              <CustomButton size="sm" color="gray-333" @click="onEdit">확인</CustomButton>
            </div>
            <p class="info-desc">※ 개인정보가 식별되는 닉네임사용은 자제해 주세요.</p>
          </div>
        </div>
      </div>
      <div class="my-page-conts">
        <div class="my-page-conts-item">
          <div class="title-wrap">
            <p class="title">회원정보</p>
          </div>
          <div class="card card--shadow00">
            <button><img :src="require(`@/assets/images/icon_arrow_r.svg`)"></button>
            <div class="text-box-wrap">
              <div class="text-wrap">
                <p class="card-title">개인회원 정보</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-page-conts-item">
          <div class="title-wrap">
            <p class="title">성공보상</p>
          </div>
          <div class="card card--shadow00">
            <button><img :src="require(`@/assets/images/icon_arrow_r.svg`)"></button>
            <div class="text-box-wrap">
              <div class="text-wrap">
                <p class="card-title">보상 지급 이력</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-page-conts-item">          
          <div class="title-wrap">
            <p class="title">ABO/Member 인증 </p>
          </div>
          <div class="card card--shadow00">
            <button><img :src="require(`@/assets/images/icon_arrow_r.svg`)"></button>
            <div class="text-box-wrap">
              <!-- 인증 전 case : default -->
              <div class="text-wrap">
                <p class="card-title">회원인증 하기</p>
                <p class="card-desc">*인증한 ABO/Member 정보는 변경할 수 없습니다.</p>
              </div>
              <!-- //인증 전 case : default -->
            </div>
          </div>
          <div class="card card--shadow00">
            <div class="text-box-wrap">
              <!-- 인증 후 case : 인증 후에는 우측 화살표 button 삭제 필요 -->
              <div class="text-wrap ty02">
                <p class="card-title">ABO 번호</p>
                <p class="card-desc">123456789</p>
              </div>
              <ul class="sub-wrap">
                <li><CustomButton size="sm" color="light">인증완료</CustomButton></li>
              </ul>
              <!-- //인증 후 case -->              
            </div>
          </div>
        </div>
        <div class="my-page-conts-item">
          <div class="title-wrap">
            <p class="title">자녀계정</p>
            <p class="sub">현재 등록된 자녀계정 : <strong>3개</strong></p>
          </div>
          <div class="card card--shadow00">
            <button><img :src="require(`@/assets/images/icon_arrow_r.svg`)"></button>
            <div class="text-box-wrap">
              <div class="text-wrap">
                <p class="card-title">자녀계정 등록/관리</p>
              </div>
            </div>
          </div>
          <!-- ABO 미인증 시 -->
          <div class="card card--shadow00">
            <div class="text-box-wrap">
              <div class="text-wrap">
                <p class="card-desc">자녀계정 등록을 위해서는 ABO/ Member 회원 인증이 필요합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- //ABO 미인증 시 -->
        <div class="my-page-conts-item">
          <div class="title-wrap">
            <p class="title">계정 연동 정보</p>
          </div>
          <div class="card-group">
            <!-- 카카오(성인) 일 때 -->
            <div class="card card--shadow00">
              <div class="text-box-wrap">
                <div class="text-wrap">
                  <p class="card-title">바디키</p>
                </div>
                <ul class="sub-wrap">
                  <li><CustomButton size="sm">연동하기</CustomButton></li>
                </ul>
              </div>
            </div>
            <div class="card card--shadow00">
              <div class="text-box-wrap">
                <div class="text-wrap">
                  <p class="card-title">다타익선</p>
                  <p class="card-desc">* 카카오 UID는 <a href="#">개인회원 정보 페이지</a>에서 확인 가능합니다.</p>
                </div>
                <ul class="sub-wrap">
                  <li><CustomButton size="sm">연동하기</CustomButton></li>
                </ul>
              </div>
            </div>
            <!-- 자녀계정일 때 -->
            <div class="card card--shadow00">
              <div class="text-box-wrap">
                <div class="text-wrap">
                  <p class="card-title">바디키</p>
                </div>
                <ul class="sub-wrap">
                  <li><CustomButton size="sm">연동하기</CustomButton></li>
                </ul>
              </div>
            </div>
            <div class="card card--shadow00">
              <div class="text-box-wrap">
                <div class="text-wrap">
                  <p class="card-title">다타익선</p>
                  <p class="card-desc">* 아이디는 <a href="#">개인회원 정보 페이지</a>에서 확인 가능합니다.</p>
                </div>
                <ul class="sub-wrap">
                  <li><CustomButton size="sm">연동하기</CustomButton></li>
                </ul>
              </div>
            </div>

            <!-- 인증 후 계정연동정보 -->
            <div class="card card--shadow00">
              <div class="text-box-wrap">
                <div class="text-wrap">
                  <p class="card-title">바디키</p>
                </div>
                <ul class="sub-wrap">
                  <li><p class="user-name">$프로필명$</p></li>
                  <li><CustomButton size="sm" color="light">연동완료</CustomButton></li>
                </ul>
              </div>
            </div>
            <div class="card card--shadow00">
              <div class="text-box-wrap">
                <div class="text-wrap">
                  <p class="card-title">다타익선</p>
                </div>
                <ul class="sub-wrap">
                  <li><p class="user-name">$프로필명$</p></li>
                  <li><CustomButton size="sm" color="light">연동완료</CustomButton></li>
                </ul>
              </div>
            </div>
            <div class="card card--shadow00">
              <div class="text-box-wrap">
                <div class="text-wrap">
                  <p class="card-title">그로잉랩</p>
                </div>
                <ul class="sub-wrap">
                  <li><p class="user-name">$프로필명$</p></li>
                  <li><CustomButton size="sm" color="light">연동완료</CustomButton></li>
                </ul>
              </div>
            </div>
            <ul class="info--list indent">
              <li class="font--green">* 계정 연동은 각 서비스에서 진행할 수 있습니다.</li>
            </ul>
          </div>
        </div>
        <div class="section">
          <div class="btn-area">
            <a href="#" class="btn--text">로그아웃</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ABO/Member 회원인증 팝업 -->
  <PopupDefault style="display:none;">
    <template v-slot:title>
      ABO/Member 회원인증
    </template>
    <template v-slot:cont>
      <div class="login-form">
        <div class="form-box mb0">
          <div class="input-area">
            <InputField placeholder="ABO 번호 / Member 아이디" />
            <InputField type="password" placeholder="비밀번호" />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:btn>
      <div class="btn-area ty03">
        <CustomButton size="sm" color="light">취소</CustomButton>
        <CustomButton size="sm">확인</CustomButton>
      </div>
    </template>
  </PopupDefault>
  <AppNav :my="true"></AppNav>
</template>
<script>
import CustomButton from "@/components/CustomButton.vue";
import InputField from '@/components/InputField.vue';
import PopupDefault from "@/components/PopupDefault.vue";
import AppNav from "@/layouts/AppNav.vue";

export default {
  name: "Gut_00015",
  data() {
    return {
      leftArea: "",
      rightArea: "",
      imageUrl: null,
      default : true,
    };
  },
  components: {
    CustomButton,
    InputField,
    PopupDefault,
    AppNav,
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
    onEdit(){
      this.default = !this.default
      
    }
  },
};
</script>
