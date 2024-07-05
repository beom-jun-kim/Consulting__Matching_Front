import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check56_1: false,
      check56_2: false,
      check56_3: false,
      check56_4: false,
      check56_5: false,
      check56_6: false,
      check56_7: false,
      check56_8: false,
      check56_9: false,
      check56_10: false,
      check56_11: false,
      check56_12: false,
      check56_13: false,
      check56_14: false,
      check56_15: false,
      etc56_1: "",
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      if (this.check56_1) options[0] = "설문조사";
      if (this.check56_2) options[1] = "포커스그룹토론(FGI)";
      if (this.check56_3) options[2] = "로그및데이터분석";
      if (this.check56_4) options[3] = "현장방문실지조사";
      if (this.check56_5) options[4] = "관찰및사용자행동분석";
      if (this.check56_6) options[5] = "사용자피드백수집툴";
      if (this.check56_7) options[6] = "데이터베이스쿼리";
      if (this.check56_8) options[7] = "데이터마이닝";
      if (this.check56_9) options[8] = "인터뷰";
      if (this.check56_10) options[9] = "소셜미디어분석";
      if (this.check56_11) options[10] = "센서데이터수집";
      if (this.check56_12) options[11] = this.etc56_1;
      if (this.check56_13) options[12] = "체크리스트및평가양식활용";
      if (this.check56_14) options[13] = "웹사이트/앱분석도구";
      if (this.check56_15) options[14] = "A/B테스트";

      return options;
    },
  },
  methods: {
    // async saveBuildStep56() {
    //   if (confirm("저장하시겠습니까?")) {
    //     if (this.check56_12 == false) {
    //       this.selectedOptions[11] = "";
    //     }
    //     var data = {
    //       checkList1: this.selectedOptions[0] ? this.selectedOptions[0] : "",
    //       checkList2: this.selectedOptions[1] ? this.selectedOptions[1] : "",
    //       checkList3: this.selectedOptions[2] ? this.selectedOptions[2] : "",
    //       checkList4: this.selectedOptions[3] ? this.selectedOptions[3] : "",
    //       checkList5: this.selectedOptions[4] ? this.selectedOptions[4] : "",
    //       checkList6: this.selectedOptions[5] ? this.selectedOptions[5] : "",
    //       checkList7: this.selectedOptions[6] ? this.selectedOptions[6] : "",
    //       checkList8: this.selectedOptions[7] ? this.selectedOptions[7] : "",
    //       checkList9: this.selectedOptions[8] ? this.selectedOptions[8] : "",
    //       checkList10: this.selectedOptions[9] ? this.selectedOptions[9] : "",
    //       checkList11: this.selectedOptions[10] ? this.selectedOptions[10] : "",
    //       checkList12: this.selectedOptions[11] ? this.selectedOptions[11] : "",
    //       checkList13: this.selectedOptions[12] ? this.selectedOptions[12] : "",
    //       checkList14: this.selectedOptions[13] ? this.selectedOptions[13] : "",
    //       checkList15: this.selectedOptions[14] ? this.selectedOptions[14] : "",
    //       memo: this.memo,
    //     };
    //     console.log("data", data);
    //     try {
    //       await BuildupService.saveBuildStep56(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep56(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    getBuildStep56(id) {
      BuildupService.getBuildStep56(id)
        .then((res) => {
          this.check56_1 = res.data.checkList1 ? true : false;
          this.check56_2 = res.data.checkList2 ? true : false;
          this.check56_3 = res.data.checkList3 ? true : false;
          this.check56_4 = res.data.checkList4 ? true : false;
          this.check56_5 = res.data.checkList5 ? true : false;
          this.check56_6 = res.data.checkList6 ? true : false;
          this.check56_7 = res.data.checkList7 ? true : false;
          this.check56_8 = res.data.checkList8 ? true : false;
          this.check56_9 = res.data.checkList9 ? true : false;
          this.check56_10 = res.data.checkList10 ? true : false;
          this.check56_11 = res.data.checkList11 ? true : false;
          this.check56_12 = res.data.checkList12 ? true : false;
          this.check56_13 = res.data.checkList13 ? true : false;
          this.check56_14 = res.data.checkList14 ? true : false;
          this.check56_15 = res.data.checkList15 ? true : false;
          this.memo = res.data.memo;

          this.etc56_1 = this.check56_12 ? res.data.checkList12 : "";
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep56(this.$route.params.id);
  },
  async beforeDestroy() {
    if (this.check56_12 == false) {
      this.selectedOptions[11] = "";
    }
    var data = {
      checkList1: this.selectedOptions[0] ? this.selectedOptions[0] : "",
      checkList2: this.selectedOptions[1] ? this.selectedOptions[1] : "",
      checkList3: this.selectedOptions[2] ? this.selectedOptions[2] : "",
      checkList4: this.selectedOptions[3] ? this.selectedOptions[3] : "",
      checkList5: this.selectedOptions[4] ? this.selectedOptions[4] : "",
      checkList6: this.selectedOptions[5] ? this.selectedOptions[5] : "",
      checkList7: this.selectedOptions[6] ? this.selectedOptions[6] : "",
      checkList8: this.selectedOptions[7] ? this.selectedOptions[7] : "",
      checkList9: this.selectedOptions[8] ? this.selectedOptions[8] : "",
      checkList10: this.selectedOptions[9] ? this.selectedOptions[9] : "",
      checkList11: this.selectedOptions[10] ? this.selectedOptions[10] : "",
      checkList12: this.selectedOptions[11] ? this.selectedOptions[11] : "",
      checkList13: this.selectedOptions[12] ? this.selectedOptions[12] : "",
      checkList14: this.selectedOptions[13] ? this.selectedOptions[13] : "",
      checkList15: this.selectedOptions[14] ? this.selectedOptions[14] : "",
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep56(this.$route.params.id, data);
      await this.getBuildStep56(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
