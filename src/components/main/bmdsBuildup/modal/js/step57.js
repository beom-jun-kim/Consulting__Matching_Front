import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      q57_1: "",
      q57_2: "",
      q57_3: "",
      memo: "",
    };
  },
  computed: {
    indicatorPosition() {
      const positionPercentage = (this.averageScore / 10) * 100 - 1;
      // if (positionPercentage === 0) return "-0.9%";
      // if (positionPercentage === 100) return "99%";
      return positionPercentage + "%";
    },
    averageScore() {
      let average = (
        (Number(this.q57_1) + Number(this.q57_2) + Number(this.q57_3)) /
        3
      ).toFixed(1);
      return average.endsWith(".0") ? parseInt(average) : average;
    },
  },

  methods: {
    // async saveBuildStep57() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       q1: Number(this.q57_1),
    //       q2: Number(this.q57_2),
    //       q3: Number(this.q57_3),
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep57(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep57(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep57(id) {
      await BuildupService.getBuildStep57(id)
        .then((res) => {
          this.q57_1 = res.data.q1;
          this.q57_2 = res.data.q2;
          this.q57_3 = res.data.q3;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep57(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      q1: Number(this.q57_1),
      q2: Number(this.q57_2),
      q3: Number(this.q57_3),
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep57(this.$route.params.id, data);
      await this.getBuildStep57(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
