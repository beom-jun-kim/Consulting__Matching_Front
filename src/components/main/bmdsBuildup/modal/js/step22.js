import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      gender22_1: "남",
      age22_1: "", // 1-1-2
      inComeLevel22_1: "", // 1-1-3
      major22_1: "",
      socialActivity22_1: "",
      consumptionActivity22_1: "",
      memo: "",
    };
  },
  methods: {
    async saveBuildStep22() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          gender: this.gender22_1,
          age: this.age22_1,
          inComeLevel: this.inComeLevel22_1,
          major: this.major22_1,
          socialActivity: this.socialActivity22_1,
          consumptionActivity: this.consumptionActivity22_1,
          memo: this.memo,
        };
        try {
          await BuildupService.saveBuildStep22(this.$route.params.id, data);
          alert("저장되었습니다.");
          await this.getBuildStep22(this.$route.params.id);
        } catch (error) {
          // 오류 처리 로직 추가
        }
      } else {
        alert("취소되었습니다.");
      }
    },
    async getBuildStep22(id) {
      await BuildupService.getBuildStep22(id)
        .then((res) => {
          this.gender22_1 = res.data.gender;
          this.age22_1 = res.data.age;
          this.inComeLevel22_1 = res.data.inComeLevel;
          this.major22_1 = res.data.major;
          this.socialActivity22_1 = res.data.socialActivity;
          this.consumptionActivity22_1 = res.data.consumptionActivity;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep22(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      gender: this.gender22_1,
      age: this.age22_1,
      inComeLevel: this.inComeLevel22_1,
      major: this.major22_1,
      socialActivity: this.socialActivity22_1,
      consumptionActivity: this.consumptionActivity22_1,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep22(this.$route.params.id, data);
      await this.getBuildStep22(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
