import BuildupService from "@/services/main/BuildupService";

export default {
  data() {
    return {
      cause1: "",
      cause2: "",
      cause3: "",
      direction1_1: "",
      direction1_2: "",
      direction1_3: "",
      direction2_1: "",
      direction2_2: "",
      direction2_3: "",
      direction3_1: "",
      direction3_2: "",
      direction3_3: "",
      solution1_1: "",
      solution1_2: "",
      solution1_3: "",
      solution2_1: "",
      solution2_2: "",
      solution2_3: "",
      solution3_1: "",
      solution3_2: "",
      solution3_3: "",
      problemList: [],
      memo: "",
    };
  },

  methods: {
    // async saveBuildStep35One() {
    //   const data = {
    //     cause1: this.cause1,
    //     cause2: this.cause2,
    //     cause3: this.cause3,
    //     direction1_1: this.direction1_1,
    //     direction1_2: this.direction1_2,
    //     direction1_3: this.direction1_3,
    //     direction2_1: this.direction2_1,
    //     direction2_2: this.direction2_2,
    //     direction2_3: this.direction2_3,
    //     direction3_1: this.direction3_1,
    //     direction3_2: this.direction3_2,
    //     direction3_3: this.direction3_3,
    //     solution1_1: this.solution1_1,
    //     solution1_2: this.solution1_2,
    //     solution1_3: this.solution1_3,
    //     solution2_1: this.solution2_1,
    //     solution2_2: this.solution2_2,
    //     solution2_3: this.solution2_3,
    //     solution3_1: this.solution3_1,
    //     solution3_2: this.solution3_2,
    //     solution3_3: this.solution3_3,
    //     memo:this.memo,
    //   };
    //   if (confirm("저장하시겠습니까?")) {
    //     try {
    //       await BuildupService.saveBuildStep35One(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep35One();
    //     } catch (e) {
    //       console.log(e);
    //       alert("저장에 실패했습니다.");
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },

    async getBuildStep34_2() {
      try {
        const response = await BuildupService.getBuildStep34_2(
          this.$route.params.id
        );

        if (response.data.length > 0) {
          for (let i = 0; i < response.data.length; i++) {
            this.problemList.push(response.data[i].definition);
          }
        }
      } catch (e) {
        console.log(e);
      }
    },

    async getBuildStep35One() {
      try {
        const response = await BuildupService.getBuildStep35One(
          this.$route.params.id
        );
        if (response.data) {
          this.cause1 = response.data.cause1;
          this.cause2 = response.data.cause2;
          this.cause3 = response.data.cause3;
          this.direction1_1 = response.data.direction1_1;
          this.direction1_2 = response.data.direction1_2;
          this.direction1_3 = response.data.direction1_3;
          this.direction2_1 = response.data.direction2_1;
          this.direction2_2 = response.data.direction2_2;
          this.direction2_3 = response.data.direction2_3;
          this.direction3_1 = response.data.direction3_1;
          this.direction3_2 = response.data.direction3_2;
          this.direction3_3 = response.data.direction3_3;
          this.solution1_1 = response.data.solution1_1;
          this.solution1_2 = response.data.solution1_2;
          this.solution1_3 = response.data.solution1_3;
          this.solution2_1 = response.data.solution2_1;
          this.solution2_2 = response.data.solution2_2;
          this.solution2_3 = response.data.solution2_3;
          this.solution3_1 = response.data.solution3_1;
          this.solution3_2 = response.data.solution3_2;
          this.solution3_3 = response.data.solution3_3;
          this.memo = response.data.memo;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },

  async mounted() {
    await this.getBuildStep34_2();
    await this.getBuildStep35One();
  },
  async beforeDestroy() {
    const data = {
      cause1: this.cause1,
      cause2: this.cause2,
      cause3: this.cause3,
      direction1_1: this.direction1_1,
      direction1_2: this.direction1_2,
      direction1_3: this.direction1_3,
      direction2_1: this.direction2_1,
      direction2_2: this.direction2_2,
      direction2_3: this.direction2_3,
      direction3_1: this.direction3_1,
      direction3_2: this.direction3_2,
      direction3_3: this.direction3_3,
      solution1_1: this.solution1_1,
      solution1_2: this.solution1_2,
      solution1_3: this.solution1_3,
      solution2_1: this.solution2_1,
      solution2_2: this.solution2_2,
      solution2_3: this.solution2_3,
      solution3_1: this.solution3_1,
      solution3_2: this.solution3_2,
      solution3_3: this.solution3_3,
      memo: this.memo,
    };

    try {
      await BuildupService.saveBuildStep35One(this.$route.params.id, data);
      await this.getBuildStep35One();
    } catch (e) {
      console.log(e);
    }
  },
};
