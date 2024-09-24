<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">미션 인증 현황</v-card-title>
        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>아이디</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <span>36733232081</span>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>이름</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <span>고주영</span>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>연락처</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <span>01045802686</span>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>출생년도</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <span>1977</span>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>성별</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <span>남성</span>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>가입일자</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <span>20241201</span>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>미션인증</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-date-input
              :loading="loading"
              density="compact"
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
              prepend-icon=""
              append-inner-icon="$calendar"
            ></v-date-input>
            <v-btn class="ml-2 large" variant="outlined">인증하기</v-btn>
          </v-col>
        </v-row>

        <v-row class="footer-row">
          <!-- Save button on the left -->
          <v-col class="d-flex justify-start"> </v-col>

          <!-- Pagination in the center -->
          <v-col class="d-flex justify-center">

          </v-col>

          <!-- Register button on the right -->
          <v-col class="d-flex justify-end">
            <v-btn class="large" variant="outlined">
              목록
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00035",
};
</script>
