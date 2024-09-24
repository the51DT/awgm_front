<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">공지사항 등록</v-card-title>

          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span>제목</span>
            </v-col>
            <v-col cols="10" class="d-flex">
              <v-text-field
                :loading="loading"
                density="compact"
                label="제목을 입력해 주세요."
                variant="outlined"
                hide-details
                single-line
                @click:append-inner="onClick"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="input-row">
            <v-col cols="2">
              <span>내용</span>
            </v-col>
            <v-col cols="10" class="d-flex">
              <v-textarea
                :loading="loading"
                density="compact"
                label="내용을 입력해주세요"
                variant="outlined"
                hide-details
                single-line
                @click:append-inner="onClick"
              ></v-textarea>
            </v-col>
          </v-row>
        <v-row class="footer-row">
          <v-col cols="2" class="d-flex justify-start">
            <v-btn class="large" variant="flat">초기화</v-btn>
          </v-col>
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
  name: "GutAd00013",
  data () {
    return {
      successCondition: "certification",
      amends: "voucher",
    }
  },
};
</script>