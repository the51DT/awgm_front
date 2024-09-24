<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">권한 관리 등록</v-card-title>
        <div class="scroll-area">
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span>권한명</span>
            </v-col>
            <v-col cols="10" class="d-flex">
              <v-text-field
                :loading="loading"
                density="compact"
                label="권한명을 입력해 주세요."
                variant="outlined"
                hide-details
                single-line
                @click:append-inner="onClick"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span>사용여부</span>
            </v-col>
            <v-col cols="10" class="d-flex">
              <v-radio-group inline hide-details>
                <v-radio label="사용" value="exposed"></v-radio>
                <v-radio
                  label="미사용"
                  value="notExposed"
                  class="ml-4"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span>권한</span>
            </v-col>
            <v-col cols="2">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
            </v-col>
            <v-col cols="8">
              <v-checkbox inlin hide-details label="다운로드 권한"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="border pl-6 d-flex">
              <span>메인 관리</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- 배너 관리</span>
            </v-col>
            <v-col cols="8" class="d-flex pa-0 pl-3">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- 팝업 관리</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- 것모닝 제품링크 관리</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="border pl-6 d-flex">
              <span>게시판 관리</span>
            </v-col>
            <v-col cols="8" class="d-flex pa-0 pl-3">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- 공지사항</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- FAQ</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- C/S 소통 게시판</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="border pl-6 d-flex">
              <span>회원 관리</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- 회원 목록</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- 휴먼회원 목록</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span></span>
            </v-col>
            <v-col cols="2" class="pl-6 d-flex">
              <span>- 접속 로그</span>
            </v-col>
            <v-col cols="8" class="pa-0 pl-3 d-flex">
              <v-checkbox inlin hide-details label="전체 선택"></v-checkbox>
              <v-checkbox inlin hide-details label="읽기"></v-checkbox>
              <v-checkbox inlin hide-details label="쓰기"></v-checkbox>
              <v-checkbox inlin hide-details label="수정"></v-checkbox>
              <v-checkbox inlin hide-details label="삭제"></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <v-row class="footer-row">
          <!-- Save button on the left -->
          <v-col cols="2" class="d-flex justify-start">
            <v-btn class="ml-2 large" variant="flat">초기화</v-btn>
          </v-col>

          <!-- Pagination in the center -->
          <v-col cols="10" class="d-flex justify-end">
            <v-btn class="large" variant="outlined">목록</v-btn>
            <v-btn class="ml-2 large" variant="flat">저장</v-btn>
          </v-col>

          <!-- Register button on the right -->
          <v-col class="d-flex justify-end"> </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00054",
};
</script>
