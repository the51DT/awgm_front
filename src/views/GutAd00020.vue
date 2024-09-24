<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">C/S 소통게시판 상세</v-card-title>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>제목</span>
          </v-col>
          <v-col class="d-flex justify-end pr-0" cols="2">
            <v-select
              label="전체"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              inline
              hide-details
              density="compact"
            ></v-select>
          </v-col>
          <v-col cols="8" class="d-flex">
            <span>소통합시다</span>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="2">
            <span>내용</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <span>
              소통 좋아요<br />
              너무 좋아요<br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              corporis velit delectus blanditiis cum! Aut eaque labore vel
              libero possimus, architecto repellendus officia ut, similique
              expedita, velit eveniet assumenda omnis.
            </span>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="2">
            <span>댓글</span>
          </v-col>
          <v-col cols="10" class="d-flex flex-column ga-4">
            <div class="d-flex align-center justify-space-between w-100">
              <div class="d-flex justify-space-between align-center w-100">
                <span>당신 의견 좋아요.</span>
                <span class="ml-2 flex-shrink-0">명의실</span>
              </div>
              <div class="ml-2 d-flex justify-end align-center">
                <v-btn class="large" variant="text">수정</v-btn>
                <v-btn class="ml-2 large" variant="text">삭제</v-btn>
              </div>
            </div>

            <div class="d-flex align-center justify-space-between w-100">
              <div class="d-flex justify-space-between align-center w-100">
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, modi? Totam eos voluptas ad commodi hic mollitia
                  voluptatum perspiciatis incidunt? Necessitatibus pariatur
                  repellendus molestiae quo sunt aspernatur, temporibus amet
                  doloremque? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Dolores eum tempora, nobis minus aliquid
                  ratione cum doloremque in mollitia, nemo sit! Ut repellendus
                  alias eligendi veniam, ex odit! Aspernatur, nulla.</span
                >
                <span class="ml-2 flex-shrink-0">고주영</span>
              </div>
              <div class="ml-2 d-flex justify-end align-center">
                <v-btn class="large" variant="text">수정</v-btn>
                <v-btn class="ml-2 large" variant="text">삭제</v-btn>
              </div>
            </div>

            <div class="d-flex align-center justify-space-between w-100">
              <div class="d-flex justify-space-between align-center w-100">
                <span>난 싫어요</span>
                <span class="ml-2 flex-shrink-0">고주영</span>
              </div>
              <div class="ml-2 d-flex justify-end align-center">
                <v-btn class="large" variant="text">수정</v-btn>
                <v-btn class="ml-2 large" variant="text">삭제</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="2">
            <span>댓글 달기</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-textarea
              :loading="loading"
              density="compact"
              label="댓글달기 영역"
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-textarea>
            <v-btn class="ml-4 large" variant="flat">댓글저장</v-btn>
          </v-col>
        </v-row>

        <v-row class="footer-row">
          <v-col cols="12" class="d-flex justify-center">
            <v-btn class="large" variant="outlined">목록</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00020",
};
</script>
