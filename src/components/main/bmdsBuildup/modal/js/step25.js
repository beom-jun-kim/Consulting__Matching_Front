import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      content25_1: "", // 1-1-1
      competitor25_1: "", // 1-1-2
      competitor25_2: "", // 1-1-3
      competitor25_3: "", // 1-1-3
      discrim25_1: "", // 1-1-3
      discrim25_2: "", // 1-1-3
      discrim25_3: "", // 1-1-3
      benefit25_1: "", // 1-1-3
      benefit25_2: "", // 1-1-3
      benefit25_3: "", // 1-1-3
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep25() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       content: this.content25_1,
    //       competitor1: this.competitor25_1,
    //       competitor2: this.competitor25_2,
    //       competitor3: this.competitor25_3,
    //       discrim1: this.discrim25_1,
    //       discrim2: this.discrim25_2,
    //       discrim3: this.discrim25_3,
    //       benefit1: this.benefit25_1,
    //       benefit2: this.benefit25_2,
    //       benefit3: this.benefit25_3,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep25(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep25(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep25(id) {
      await BuildupService.getBuildStep25(id)
        .then((res) => {
          this.content25_1 = res.data.content;
          this.competitor25_1 = res.data.competitor1;
          this.competitor25_2 = res.data.competitor2;
          this.competitor25_3 = res.data.competitor3;
          this.discrim25_1 = res.data.discrim1;
          this.discrim25_2 = res.data.discrim2;
          this.discrim25_3 = res.data.discrim3;
          this.benefit25_1 = res.data.benefit1;
          this.benefit25_2 = res.data.benefit2;
          this.benefit25_3 = res.data.benefit3;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep25(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      content: this.content25_1,
      competitor1: this.competitor25_1,
      competitor2: this.competitor25_2,
      competitor3: this.competitor25_3,
      discrim1: this.discrim25_1,
      discrim2: this.discrim25_2,
      discrim3: this.discrim25_3,
      benefit1: this.benefit25_1,
      benefit2: this.benefit25_2,
      benefit3: this.benefit25_3,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep25(this.$route.params.id, data);
      await this.getBuildStep25(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
