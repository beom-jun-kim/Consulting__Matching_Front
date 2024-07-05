import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      who24_1: "", // 1-1-1
      whened24_1: "", // 1-1-2
      whereed24_1: "", // 1-1-3
      what24_1: "",
      why24_1: "",
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep24() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       who: this.who24_1,
    //       whened: this.whened24_1,
    //       whereed: this.whereed24_1,
    //       what: this.what24_1,
    //       why: this.why24_1,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep24(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep24(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep24(id) {
      await BuildupService.getBuildStep24(id)
        .then((res) => {
          this.who24_1 = res.data.who;
          this.whened24_1 = res.data.whened;
          this.whereed24_1 = res.data.whereed;
          this.what24_1 = res.data.what;
          this.why24_1 = res.data.why;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep24(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      who: this.who24_1,
      whened: this.whened24_1,
      whereed: this.whereed24_1,
      what: this.what24_1,
      why: this.why24_1,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep24(this.$route.params.id, data);
      await this.getBuildStep24(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
