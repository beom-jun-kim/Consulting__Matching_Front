import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      pain15_1: "", // 2-1-1
      pain15_2: "", // 2-1-2
      pain15_3: "", // 2-1-3
      pain15_4: "", // 2-1-3
      disadvantage15_1: "", // 2-1-3
      disadvantage15_2: "", // 2-1-3
      disadvantage15_3: "", // 2-1-3
      disadvantage15_4: "", // 2-1-3
      cPoint15_1: "",
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep15() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       pain1: this.pain15_1, // 2-1-1
    //       pain2: this.pain15_2, // 2-1-2
    //       pain3: this.pain15_3, // 2-1-3
    //       pain4: this.pain15_4, // 2-1-3
    //       disadvantage1: this.disadvantage15_1, // 2-1-3
    //       disadvantage2: this.disadvantage15_2, // 2-1-3
    //       disadvantage3: this.disadvantage15_3, // 2-1-3
    //       disadvantage4: this.disadvantage15_4, // 2-1-3
    //       cPoint: this.cPoint15_1,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep15(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep15(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep15(id) {
      await BuildupService.getBuildStep15(id)
        .then((res) => {
          this.pain15_1 = res.data.pain1;
          this.pain15_2 = res.data.pain2;
          this.pain15_3 = res.data.pain3;
          this.pain15_4 = res.data.pain4;
          this.disadvantage15_1 = res.data.disadvantage1;
          this.disadvantage15_2 = res.data.disadvantage2;
          this.disadvantage15_3 = res.data.disadvantage3;
          this.disadvantage15_4 = res.data.disadvantage4;
          this.cPoint15_1 = res.data.cPoint;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep15(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      pain1: this.pain15_1, // 2-1-1
      pain2: this.pain15_2, // 2-1-2
      pain3: this.pain15_3, // 2-1-3
      pain4: this.pain15_4, // 2-1-3
      disadvantage1: this.disadvantage15_1, // 2-1-3
      disadvantage2: this.disadvantage15_2, // 2-1-3
      disadvantage3: this.disadvantage15_3, // 2-1-3
      disadvantage4: this.disadvantage15_4, // 2-1-3
      cPoint: this.cPoint15_1,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep15(this.$route.params.id, data);
      await this.getBuildStep15(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
