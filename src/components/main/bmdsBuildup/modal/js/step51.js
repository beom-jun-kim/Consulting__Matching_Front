import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check51_1: false,
      check51_2: false,
      check51_3: false,
      check51_4: false,
      check51_5: false,
      check51_6: false,
      check51_7: false,
      check51_8: false,
      check51_9: false,
      check51_10: false,
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      if (this.check51_1) options.push("sketch");
      if (this.check51_2) options.push("e-paper");
      if (this.check51_3) options.push("dummyMockups");
      if (this.check51_4) options.push("flintstoneMVP");
      if (this.check51_5) options.push("wireframe");
      if (this.check51_6) options.push("presentation");
      if (this.check51_7) options.push("landingPage");
      if (this.check51_8) options.push("shortcutVideo");
      if (this.check51_9) options.push("airbnbMVP");
      if (this.check51_10) options.push("etc");

      return options;
    },
  },
  methods: {
    disableCheckboxes(checkedIndex) {
      const checkedCount = [
        this.check51_1,
        this.check51_2,
        this.check51_3,
        this.check51_4,
        this.check51_5,
        this.check51_6,
        this.check51_7,
        this.check51_8,
        this.check51_9,
        this.check51_10,
      ].filter((isChecked) => isChecked).length;

      // 다른 체크박스의 경우, checkedIndex가 아닌 체크박스들을 비활성화
      return checkedCount >= 3 && !this["check51_" + checkedIndex];
    },
    // async saveBuildStep51() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       checkBool1: this.selectedOptions[0] ? this.selectedOptions[0] : "",
    //       checkBool2: this.selectedOptions[1] ? this.selectedOptions[1] : "",
    //       checkBool3: this.selectedOptions[2] ? this.selectedOptions[2] : "",
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep51(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep51(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep51(id) {
      await BuildupService.getBuildStep51(id)
        .then((res) => {
          this.check51_1 =
            res.data.checkBool1 == "sketch" ||
            res.data.checkBool2 == "sketch" ||
            res.data.checkBool3 == "sketch";

          this.check51_2 =
            res.data.checkBool1 == "e-paper" ||
            res.data.checkBool2 == "e-paper" ||
            res.data.checkBool3 == "e-paper";

          this.check51_3 =
            res.data.checkBool1 == "dummyMockups" ||
            res.data.checkBool2 == "dummyMockups" ||
            res.data.checkBool3 == "dummyMockups";

          this.check51_4 =
            res.data.checkBool1 == "flintstoneMVP" ||
            res.data.checkBool2 == "flintstoneMVP" ||
            res.data.checkBool3 == "flintstoneMVP";

          this.check51_5 =
            res.data.checkBool1 == "wireframe" ||
            res.data.checkBool2 == "wireframe" ||
            res.data.checkBool3 == "wireframe";

          this.check51_6 =
            res.data.checkBool1 == "presentation" ||
            res.data.checkBool2 == "presentation" ||
            res.data.checkBool3 == "presentation";

          this.check51_7 =
            res.data.checkBool1 == "landingPage" ||
            res.data.checkBool2 == "landingPage" ||
            res.data.checkBool3 == "landingPage";

          this.check51_8 =
            res.data.checkBool1 == "shortcutVideo" ||
            res.data.checkBool2 == "shortcutVideo" ||
            res.data.checkBool3 == "shortcutVideo";

          this.check51_9 =
            res.data.checkBool1 == "airbnbMVP" ||
            res.data.checkBool2 == "airbnbMVP" ||
            res.data.checkBool3 == "airbnbMVP";

          this.check51_10 =
            res.data.checkBool1 == "etc" ||
            res.data.checkBool2 == "etc" ||
            res.data.checkBool3 == "etc";

          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep51(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      checkBool1: this.selectedOptions[0] ? this.selectedOptions[0] : "",
      checkBool2: this.selectedOptions[1] ? this.selectedOptions[1] : "",
      checkBool3: this.selectedOptions[2] ? this.selectedOptions[2] : "",
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep51(this.$route.params.id, data);
      await this.getBuildStep51(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
