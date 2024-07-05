import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      feedback59_1: "",
      feedback59_2: "",
      feedback59_3: "",
      feedback59_4: "",
      plan59_1: "",
      plan59_2: "",
      plan59_3: "",
      plan59_4: "",
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep59() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       feedback1: this.feedback59_1,
    //       feedback2: this.feedback59_2,
    //       feedback3: this.feedback59_3,
    //       feedback4: this.feedback59_4,
    //       plan1: this.plan59_1,
    //       plan2: this.plan59_2,
    //       plan3: this.plan59_3,
    //       plan4: this.plan59_4,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep59(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep59(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep59(id) {
      await BuildupService.getBuildStep59(id)
        .then((res) => {
          this.feedback59_1 = res.data.feedback1;
          this.feedback59_2 = res.data.feedback2;
          this.feedback59_3 = res.data.feedback3;
          this.feedback59_4 = res.data.feedback4;
          this.plan59_1 = res.data.plan1;
          this.plan59_2 = res.data.plan2;
          this.plan59_3 = res.data.plan3;
          this.plan59_4 = res.data.plan4;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep59(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      feedback1: this.feedback59_1,
      feedback2: this.feedback59_2,
      feedback3: this.feedback59_3,
      feedback4: this.feedback59_4,
      plan1: this.plan59_1,
      plan2: this.plan59_2,
      plan3: this.plan59_3,
      plan4: this.plan59_4,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep59(this.$route.params.id, data);
      await this.getBuildStep59(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
