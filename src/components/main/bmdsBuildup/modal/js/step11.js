/*eslint-disable*/
import BuildupService from "@/services/main/BuildupService";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Radar } from "vue-chartjs";
export default {
  components: {
    RadarChart: Radar,
  },
  data() {
    return {
      q11_1: "", // 1-1
      q11_2: "", // 1-2
      updateChart: false,
      q3a: 1,
      q3b: 1,
      q3c: 1,
      q3d: 1,
      q3e: 1,
      q3f: 1,
      q3g: 1,
      q3h: 1,
      q3i: 1,
      q3j: 1,
      memo: "",
      chartData: {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        datasets: [
          {
            label: "역량 점수",
            backgroundColor: "rgba(250,157,27,0.2)",
            borderColor: "rgba(250,157,27,1)",
            pointBackgroundColor: "rgba(250,157,27,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(250,157,27,1)",
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
  watch: {
    q3a(newVal) {
      this.$set(this.chartData.datasets[0].data, 0, newVal);
      this.updateChart = !this.updateChart;
    },
    q3b(newVal) {
      this.$set(this.chartData.datasets[0].data, 1, newVal);
      this.updateChart = !this.updateChart;
    },
    q3c(newVal) {
      this.$set(this.chartData.datasets[0].data, 2, newVal);
      this.updateChart = !this.updateChart;
    },
    q3d(newVal) {
      this.$set(this.chartData.datasets[0].data, 3, newVal);
      this.updateChart = !this.updateChart;
    },
    q3e(newVal) {
      this.$set(this.chartData.datasets[0].data, 4, newVal);
      this.updateChart = !this.updateChart;
    },
    q3f(newVal) {
      this.$set(this.chartData.datasets[0].data, 5, newVal);
      this.updateChart = !this.updateChart;
    },
    q3g(newVal) {
      this.$set(this.chartData.datasets[0].data, 6, newVal);
      this.updateChart = !this.updateChart;
    },
    q3h(newVal) {
      this.$set(this.chartData.datasets[0].data, 7, newVal);
      this.updateChart = !this.updateChart;
    },
    q3i(newVal) {
      this.$set(this.chartData.datasets[0].data, 8, newVal);
      this.updateChart = !this.updateChart;
    },
    q3j(newVal) {
      this.$set(this.chartData.datasets[0].data, 9, newVal);
      this.updateChart = !this.updateChart;
    },
  },
  methods: {
    // async saveBuildStep11() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       q1: this.q11_1,
    //       q2: this.q11_2,
    //       q3a: parseInt(this.q3a),
    //       q3b: parseInt(this.q3b),
    //       q3c: parseInt(this.q3c),
    //       q3d: parseInt(this.q3d),
    //       q3e: parseInt(this.q3e),
    //       q3f: parseInt(this.q3f),
    //       q3g: parseInt(this.q3g),
    //       q3h: parseInt(this.q3h),
    //       q3i: parseInt(this.q3i),
    //       q3j: parseInt(this.q3j),
    //       memo: this.memo,
    //     };

    //     try {
    //       await BuildupService.saveBuildStep11(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep11(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },

    // async getBuildStep11(id) {
    //   await BuildupService.getBuildStep11(id)
    //     .then((res) => {
    //       this.q11_1 = res.data.q1;
    //       this.q11_2 = res.data.q2;
    //       this.q3a = res.data.q3a;
    //       this.q3b = res.data.q3b;
    //       this.q3c = res.data.q3c;
    //       this.q3d = res.data.q3d;
    //       this.q3e = res.data.q3e;
    //       this.q3f = res.data.q3f;
    //       this.q3g = res.data.q3g;
    //       this.q3h = res.data.q3h;
    //       this.q3i = res.data.q3i;
    //       this.q3j = res.data.q3j;
    //     })
    //     .catch(() => {});
    // },

    async getBuildStep11(id) {
      try {
        const res = await BuildupService.getBuildStep11(id);
        this.q11_1 = res.data.q1;
        this.q11_2 = res.data.q2;
        this.q3a = res.data.q3a;
        this.q3b = res.data.q3b;
        this.q3c = res.data.q3c;
        this.q3d = res.data.q3d;
        this.q3e = res.data.q3e;
        this.q3f = res.data.q3f;
        this.q3g = res.data.q3g;
        this.q3h = res.data.q3h;
        this.q3i = res.data.q3i;
        this.q3j = res.data.q3j;
        this.memo = res.data.memo;
        // 차트 데이터 갱신
        await this.updateChartData();
      } catch (error) {
        // 오류 처리 로직
      }
    },
    async updateChartData() {
      this.chartData.datasets[0].data = await [
        parseInt(this.q3a),
        parseInt(this.q3b),
        parseInt(this.q3c),
        parseInt(this.q3d),
        parseInt(this.q3e),
        parseInt(this.q3f),
        parseInt(this.q3g),
        parseInt(this.q3h),
        parseInt(this.q3i),
        parseInt(this.q3j),
      ];

      // 차트 갱신을 위한 트리거
      this.updateChart = !this.updateChart;
    },
  },
  async mounted() {
    await this.getBuildStep11(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      q1: this.q11_1,
      q2: this.q11_2,
      q3a: parseInt(this.q3a),
      q3b: parseInt(this.q3b),
      q3c: parseInt(this.q3c),
      q3d: parseInt(this.q3d),
      q3e: parseInt(this.q3e),
      q3f: parseInt(this.q3f),
      q3g: parseInt(this.q3g),
      q3h: parseInt(this.q3h),
      q3i: parseInt(this.q3i),
      q3j: parseInt(this.q3j),
      memo: this.memo,
    };

    try {
      await BuildupService.saveBuildStep11(this.$route.params.id, data);
      await this.getBuildStep11(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
}
