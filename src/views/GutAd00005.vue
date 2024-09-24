<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">배너 수정</v-card-title>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>노출여부</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-radio-group v-model="exposure" inline hide-details>
              <v-radio label="노출" value="exposed"></v-radio>
              <v-radio label="미노출" value="notExposed" class="ml-4"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>노출기간</span>
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
            <div class="ml-4 mr-4 date-sub">~</div>
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
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>배너명</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="밸런스 위드인 365"
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>배너링크</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="배너링크를 입력해 주세요."
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>배너 내용</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="배너내용을 입력해 주세요."
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>배너 이미지</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-file-input
              :loading="loading"
              density="compact"
              label="배너 이미지를 입력해 주세요."
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
              prepend-icon=""
              ref="file"
            ></v-file-input>
            <v-btn class="ml-2 large" variant="flat" @click="$refs.file.click()"
              >파일첨부</v-btn
            >
          </v-col>
        </v-row>

        <v-row class="footer-row">
          <!-- Save button on the left -->
          <v-col cols="2" class="d-flex justify-start">
            <v-btn class="large" variant="flat">삭제</v-btn>
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
  name: "GutAd00005",
  data() {
    return {
      exposure: "exposed",
    };
  },
};
</script>
