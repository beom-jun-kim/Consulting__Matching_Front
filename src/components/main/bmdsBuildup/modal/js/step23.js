import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      category23_1: "",
      detailCategory23_1: "",
      scale23_1: "",
      logical23_1: "",
      goal23_1: "",
      selected23_1: "",
      cycle23_1: "",
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep23() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       category: this.category23_1,
    //       detailCategory: this.detailCategory23_1,
    //       scale: this.scale23_1,
    //       logical: this.logical23_1,
    //       goal: this.goal23_1,
    //       selected: this.selected23_1,
    //       cycle: this.cycle23_1,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep23(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep23(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep23(id) {
      await BuildupService.getBuildStep23(id)
        .then((res) => {
          this.category23_1 = res.data.category;
          this.detailCategory23_1 = res.data.detailCategory;
          this.scale23_1 = res.data.scale;
          this.logical23_1 = res.data.logical;
          this.goal23_1 = res.data.goal;
          this.selected23_1 = res.data.selected;
          this.cycle23_1 = res.data.cycle;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep23(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      category: this.category23_1,
      detailCategory: this.detailCategory23_1,
      scale: this.scale23_1,
      logical: this.logical23_1,
      goal: this.goal23_1,
      selected: this.selected23_1,
      cycle: this.cycle23_1,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep23(this.$route.params.id, data);
      await this.getBuildStep23(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
