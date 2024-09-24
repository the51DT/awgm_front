<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "12월 01일",
          "12월 02일",
          "12월 03일",
          "12월 04일",
          "12월 05일",
          "12월 06일",
          "12월 07일",
          "12월 08일",
          "12월 09일",
          "12월 10일",
        ],
        datasets: [
          {
            label: "가입",
            yAxisID: 'y-left',
            backgroundColor: "#3CA877",
            data: [3000, 5000, 8000, 9000, 9500, 10000, 12000, 13000, 15000, 24000],
          },
          {
            label: "탈퇴",
            yAxisID: 'y-right',
            backgroundColor: "#f87979",
            data: [0, 0, 0, 0, 10, 15, 18, 21, 24, 27],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        'y-left': {
          position: 'left',
        },
        'y-right': {
          position: 'right',
        },
        scales: {
          'y-right': {
            suggestedMax: 1000,
            ticks: {
              stepSize: 200
            },
          },
        },
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      },
    };
  },
};
</script>
