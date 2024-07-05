import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      q21_1: "", // 1-1-1
      q21_2: "", // 1-1-2
      qYear21_1: "",
      qYear21_2: "",
      qYear21_3: "",
      qYear21_4: "",
      qScale21_1: "",
      qScale21_2: "",
      qScale21_3: "",
      qCagr21_1: 0,
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep21() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       q1: this.q21_1,
    //       q2: this.q21_2,
    //       qYear1: this.qYear21_1,
    //       qYear2: this.qYear21_2,
    //       qYear3: this.qYear21_3,
    //       qYear4: this.qYear21_4,
    //       qScale1: this.qScale21_1,
    //       qScale2: this.qScale21_2,
    //       qScale3: this.qScale21_3,
    //       qCagr: parseFloat(this.qCagr21_1),
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep21(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep21(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep21(id) {
      await BuildupService.getBuildStep21(id)
        .then((res) => {
          this.q21_1 = res.data.q1;
          this.q21_2 = res.data.q2;
          this.qYear21_1 = res.data.qYear1;
          this.qYear21_2 = res.data.qYear2;
          this.qYear21_3 = res.data.qYear3;
          this.qYear21_4 = res.data.qYear4;
          this.qScale21_1 = res.data.qScale1;
          this.qScale21_2 = res.data.qScale2;
          this.qScale21_3 = res.data.qScale3;
          this.qCagr21_1 = res.data.qCagr;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep21(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      q1: this.q21_1,
      q2: this.q21_2,
      qYear1: this.qYear21_1,
      qYear2: this.qYear21_2,
      qYear3: this.qYear21_3,
      qYear4: this.qYear21_4,
      qScale1: this.qScale21_1,
      qScale2: this.qScale21_2,
      qScale3: this.qScale21_3,
      qCagr: parseFloat(this.qCagr21_1),
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep21(this.$route.params.id, data);
      await this.getBuildStep21(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
