import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check71_1: true,
      check71_2: false,
      check71_3: false,
      check71_4: false,
      check71_5: false,
      check71_6: false,
      check71_7: false,
      check71_8: false,
      check71_9: false,
      check71_10: false,
      check71_11: false,
      check71_12: false,
      check71_13: false,
      check71_14: false,
      check71_15: false,
      check71_16: false,
      check71_16_text: "",
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      options[0] = this.check71_1 ? "DAU(Daily Active Users)" : "";
      options[1] = this.check71_2 ? "MAU(Monthly Active Users)" : "";
      options[2] = this.check71_3 ? "방문 고객 수" : "";
      options[3] = this.check71_4 ? "누적 방문 고객 수" : "";
      options[4] = this.check71_5 ? "NPS(Net Promoter Score)" : "";
      options[5] = this.check71_6 ? "사용자 후기 및 피드백" : "";
      options[6] = this.check71_7 ? "사용자 이용 통계" : "";
      options[7] = this.check71_8 ? "CAC 고객획득비용" : "";
      options[8] = this.check71_9 ? "재구매(방문)율" : "";
      options[9] = this.check71_10 ? "매장내 고객 대기시간" : "";
      options[10] = this.check71_11 ? "테이블 회전율" : "";
      options[11] = this.check71_12 ? "평당 매출액" : "";
      options[12] = this.check71_13 ? "고객 이탈률" : "";
      options[13] = this.check71_14 ? "CTR(Click-Through Rate)" : "";
      options[14] = this.check71_15 ? "총 매출(매출 성장률)" : "";
      options[15] = this.check71_16 ? this.check71_16_text : "";

      return options;
    },
  },
  methods: {
    // async saveBuildStep71() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       checkList1: this.selectedOptions[0],
    //       checkList2: this.selectedOptions[1],
    //       checkList3: this.selectedOptions[2],
    //       checkList4: this.selectedOptions[3],
    //       checkList5: this.selectedOptions[4],
    //       checkList6: this.selectedOptions[5],
    //       checkList7: this.selectedOptions[6],
    //       checkList8: this.selectedOptions[7],
    //       checkList9: this.selectedOptions[8],
    //       checkList10: this.selectedOptions[9],
    //       checkList11: this.selectedOptions[10],
    //       checkList12: this.selectedOptions[11],
    //       checkList13: this.selectedOptions[12],
    //       checkList14: this.selectedOptions[13],
    //       checkList15: this.selectedOptions[14],
    //       checkList16: this.selectedOptions[15],
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep71(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep71(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep71(id) {
      await BuildupService.getBuildStep71(id)
        .then((res) => {
          this.check71_1 = res.data.checkList1 ? true : false;
          this.check71_2 = res.data.checkList2 ? true : false;
          this.check71_3 = res.data.checkList3 ? true : false;
          this.check71_4 = res.data.checkList4 ? true : false;
          this.check71_5 = res.data.checkList5 ? true : false;
          this.check71_6 = res.data.checkList6 ? true : false;
          this.check71_7 = res.data.checkList7 ? true : false;
          this.check71_8 = res.data.checkList8 ? true : false;
          this.check71_9 = res.data.checkList9 ? true : false;
          this.check71_10 = res.data.checkList10 ? true : false;
          this.check71_11 = res.data.checkList11 ? true : false;
          this.check71_12 = res.data.checkList12 ? true : false;
          this.check71_13 = res.data.checkList13 ? true : false;
          this.check71_14 = res.data.checkList14 ? true : false;
          this.check71_15 = res.data.checkList15 ? true : false;
          this.check71_16 = res.data.checkList16 ? true : false;
          this.check71_16_text = res.data.checkList16;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep71(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      checkList1: this.selectedOptions[0],
      checkList2: this.selectedOptions[1],
      checkList3: this.selectedOptions[2],
      checkList4: this.selectedOptions[3],
      checkList5: this.selectedOptions[4],
      checkList6: this.selectedOptions[5],
      checkList7: this.selectedOptions[6],
      checkList8: this.selectedOptions[7],
      checkList9: this.selectedOptions[8],
      checkList10: this.selectedOptions[9],
      checkList11: this.selectedOptions[10],
      checkList12: this.selectedOptions[11],
      checkList13: this.selectedOptions[12],
      checkList14: this.selectedOptions[13],
      checkList15: this.selectedOptions[14],
      checkList16: this.selectedOptions[15],
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep71(this.$route.params.id, data);
      await this.getBuildStep71(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
