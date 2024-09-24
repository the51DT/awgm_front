<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">권한 관리</v-card-title>

        <v-row class="input-row" align="center">
          <v-col cols="7"></v-col>
          <v-col cols="5" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="제목을 입력해주세요."
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
            <v-btn class="ml-2 large" variant="flat">검색</v-btn>
          </v-col>
        </v-row>
        <v-card class="custom-table mt-10 mb-10">
          <v-data-table
            height=""
            fixed-header
            class="custom-table"
            :headers="headers"
            :items="filteredBanners"
            :search="search"
            hide-default-footer
          >
          </v-data-table
        ></v-card>

        <v-row class="footer-row">
          <!-- Save button on the left -->
          <v-col class="d-flex justify-start"> </v-col>

          <!-- Pagination in the center -->
          <v-col class="d-flex justify-center">
            <v-pagination
              v-model="page"
              :length="totalPages"
              circle
              class="pagination"
              color="primary"
            ></v-pagination>
          </v-col>

          <!-- Register button on the right -->
          <v-col class="d-flex justify-end">
            <v-btn class="ml-2 large" variant="flat">
              등록
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00053",
  data() {
    return {
      search: "",
      selectedOption: "배너 종류",
      options: ["배너 종류", "메인 배너", "띠 배너"],
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "No",
        },
        { key: "bannertype", title: "배너 타입" },
        { key: "bannername", title: "배너명" },
        { key: "bannerstate", title: "노출여부" },
        { key: "write", title: "등록자" },
        { key: "ymdt", title: "등록일시" },
      ],
      banner: [
        {
          name: "1",
          bannertype: "메인 배너",
          bannername: "밸런스 위드인 365",
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "2",
          bannertype: "메인 배너",
          bannername: "뉴트리 파이토 푸로틴",
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "3",
          bannertype: "메인 배너",
          bannername: "뉴트리 키즈 푸로틴",
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "4",
          bannertype: "메인 배너",
          bannername: "12월 이벤트 첼린지 모집",
          bannerstate: "비노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "5",
          bannertype: "띠배너",
          bannername: 16.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "6",
          bannertype: 375,
          bannername: 0.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "7",
          bannertype: 392,
          bannername: 0.2,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "8",
          bannertype: 408,
          bannername: 3.2,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "9",
          bannertype: 452,
          bannername: 25.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "10",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "11",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "12",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "13",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "14",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "15",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
      ],
      page: 1,
      totalPages: 10, // Ensure this value is correct
    };
  },
  computed: {
    filteredBanners() {
      let filtered = this.banner;

      if (this.selectedOption === "메인 배너") {
        filtered = filtered.filter(
          (banner) => banner.bannertype === "메인 배너"
        );
      } else if (this.selectedOption === "띠 배너") {
        filtered = filtered.filter((banner) => banner.bannertype === "띠배너");
      }

      return filtered;
    },
  },
};
</script>
