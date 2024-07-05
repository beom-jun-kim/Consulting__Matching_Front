<template>
  <div>
    <RadarChart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
// Chart.js 및 필요한 컴포넌트를 임포트합니다.
import { Chart, registerables } from "chart.js";
// 모든 Chart.js 컴포넌트를 등록합니다.
Chart.register(...registerables);

// vue-chartjs의 Radar 컴포넌트를 임포트합니다.
import { Radar } from "vue-chartjs";

export default {
  components: {
    RadarChart: Radar,
  },
  data() {
    return {
      chartData: {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [4, 3, 2, 4, 3, 5, 3, 4, 3, 2],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 5,
            reverse: false, // 눈금 순서를 뒤집습니다.
            ticks: {
              beginAtZero: true, // 0에서 시작
              max: 5, // 최대값
              stepSize: 1.0, // 간격
            },
          },
        },
      },
    };
  },
  mounted() {
    console.log(this.chartData.datasets[0].data);
  },
};
</script>
