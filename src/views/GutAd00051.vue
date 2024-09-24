<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">관리자 관리 > 등록</v-card-title>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>관리자명</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="관리자명을 입력해 주세요."
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>관리자ID</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="Okta id를 입력해 주세요."
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
            <v-radio-group v-model="using" inline hide-details>
              <v-radio label="사용" value="use"></v-radio>
              <v-radio label="미사용" value="notUse" class="ml-4"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>권한</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-radio-group v-model="authority" inline hide-details>
              <v-radio label="슈퍼 관리" value="super"></v-radio>
              <v-radio label="일반 관리" value="common" class="ml-4"></v-radio>
              <v-radio label="회원 관리" value="member" class="ml-4"></v-radio>
              <v-radio label="챌린지 관리" value="challenge" class="ml-4"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row class="footer-row">
          <!-- Save button on the left -->
          <v-col cols="2" class="d-flex justify-start">
            <v-btn class="large" variant="flat">초기화</v-btn>
          </v-col>

          <!-- Pagination in the center -->
          <v-col cols="10" class="d-flex justify-end">
            <v-btn class="large" variant="outlined">목록</v-btn>
            <v-btn class="ml-2 large" variant="flat">저장</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00051",
  data() {
    return {
      using: "use",
    };
  },
};
</script>
