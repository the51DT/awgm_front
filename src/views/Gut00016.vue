<template>
  <div class="content-area bg-case">
    <ContentHead :leftArea=true title="개인회원 정보" headType="ty02" bgGray="true"/>
    <div class="my-page-box-info">
      <div class="my-page-wrap">      
        <div class="profile-area small">
          <!-- 부모 계정일 경우, 등록한 개인 프로필 아이콘 노출 -->
          <!-- 자녀 계정일 경우, 설정된 자녀 프로필 아이콘 노출 -->
          <div class="upload-label upload-set-img">
            <div class="img-wrap not-ico">
              <img
                class="ico-img"
                :src="require(`@/assets/images/icon/ico_profile.png`)"
                alt="프로필 설정 이미지"
              />
            </div>
          </div>
        </div>
        <div class="my-page-conts">
          <!-- 개인회원정보_노출 case -->
          <div class="my-page-conts-item">
            <div class="title-wrap">
              <p class="title">개인정보</p>
            </div>
            <div class="card card--shadow00">
              <div class="text-box-wrap ty03">
                <ul class="list-wrap">
                  <li>
                    <div class="list-wrap-icon">
                      <img
                        class="ico-img"
                        :src="require(`@/assets/images/icon/ico_info_user.png`)"
                        alt="사용자이름 아이콘"
                      />
                    </div>
                    <p class="list-wrap-txt">홍길동</p>
                  </li>
                  <li>
                    <div class="list-wrap-icon">
                      <img
                        class="ico-img"
                        :src="require(`@/assets/images/icon/ico_info_heart.png`)"
                        alt="성별 아이콘"
                      />
                    </div>
                    <p class="list-wrap-txt">남성</p>
                  </li>
                  <li>
                    <div class="list-wrap-icon">
                      <img
                        class="ico-img"
                        :src="require(`@/assets/images/icon/ico_info_calendar.png`)"
                        alt="생년 아이콘"
                      />
                    </div>
                    <p class="list-wrap-txt">1980년생</p>
                  </li>
                  <li>
                    <div class="list-wrap-icon">
                      <img
                        class="ico-img"
                        :src="require(`@/assets/images/icon/ico_info_phone.png`)"
                        alt="연락처 아이콘"
                      />
                    </div>
                    <p class="list-wrap-txt">010-1234-5678</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="my-page-conts-item">          
            <div class="title-wrap">
              <p class="title">카카오 UID</p>
            </div>
            <div class="card card--shadow00">
              <div class="text-box-wrap ty02 mt0 mb0">
                <div class="text-wrap">
                  <button type="button" class="copy-link"><span>123456789</span></button>
                </div>
              </div>
            </div>
            <ul class="info--list indent">
              <li>* 카카오 UID란?</li>
              <li>카카오로 회원가입 시 사용자에게 부여된 고유의 식별 아이디입니다.</li>
            </ul>
          </div><!-- 개인회원정보_노출 case -->
          <!-- 개인회원정보_자녀 노출 case -->
          <div class="my-page-conts-item">          
            <div class="title-wrap">
              <p class="title">아이디</p>
            </div>
            <div class="card card--shadow00">
              <div class="text-box-wrap ty02 mt0 mb0">
                <div class="text-wrap">
                  <p class="card-title">Idpeaceb</p>
                </div>
              </div>
            </div>
          </div><!-- //개인회원정보_자녀 노출 case -->
          <div class="section">
            <div class="btn-area">
              <a href="#" class="btn--text link">회원탈퇴</a>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- //my-page-box-info -->
  </div>
</template>

<script>
import ContentHead from "@/components/ContentHead.vue";

export default {
  name: "Gut_00016",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    ContentHead,
  },
  methods: {
  }
};
</script>
