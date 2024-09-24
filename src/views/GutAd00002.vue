<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">DASHBOARD</v-card-title>
        <v-row class="input-row mt-6" align="center">
          <v-col>
            <h3>회원 누적 현황 <span>(12월 1일 ~ 12월 14일)</span></h3>
            <BarChart />
          </v-col>
        </v-row>
        <v-row class="input-row mt-12" align="center">
          <v-col>
            <h3>미션 누적 현황 <span>(12월 1일 ~ 12월 14일)</span></h3>
            <BarChart />
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>
<script>
import BarChart from "@/components/BarChart";

export default {
  name: "App",
  components: { BarChart },
};
</script>
<style scoped lang="scss"></style>
