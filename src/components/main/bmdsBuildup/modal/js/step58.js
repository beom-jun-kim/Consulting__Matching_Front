import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      q58_1: "",
      q58_2: "",
      q58_3: "",
      memo: "",
    };
  },
  computed: {
    indicatorPosition58() {
      const positionPercentage58 = (this.averageScore58 / 10) * 100 - 1;
      // if (positionPercentage === 0) return "-0.9%";
      // if (positionPercentage === 100) return "99%";
      return positionPercentage58 + "%";
    },
    averageScore58() {
      let average58 = (
        (Number(this.q58_1) + Number(this.q58_2) + Number(this.q58_3)) /
        3
      ).toFixed(1);
      return average58.endsWith(".0") ? parseInt(average58) : average58;
    },
  },
  methods: {
    // async saveBuildStep58() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       q1: Number(this.q58_1),
    //       q2: Number(this.q58_2),
    //       q3: Number(this.q58_3),
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep58(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep58(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep58(id) {
      await BuildupService.getBuildStep58(id)
        .then((res) => {
          this.q58_1 = res.data.q1;
          this.q58_2 = res.data.q2;
          this.q58_3 = res.data.q3;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep58(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      q1: Number(this.q58_1),
      q2: Number(this.q58_2),
      q3: Number(this.q58_3),
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep58(this.$route.params.id, data);
      await this.getBuildStep58(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
