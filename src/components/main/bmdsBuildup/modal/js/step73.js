import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check73_1_1: true,
      check73_1_2: false,
      check73_1_3: false,
      check73_1_4: false,
      check73_1_5: false,
      check73_1_6: false,
      check73_1_7: false,
      check73_1_8: false,
      check73_1_9: false,
      check73_1_10: false,

      check73_2_1: false,
      check73_2_2: false,
      check73_2_3: false,
      check73_2_4: false,
      check73_2_5: false,
      check73_2_6: false,
      check73_2_7: false,
      check73_2_8: false,
      check73_2_9: false,
      check73_2_10: false,
      check73_2_11: false,
      check73_2_12: false,
      check73_2_13: false,
      etc73_1: "",
      etc73_2: "",
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      options[0] = this.check73_1_1 ? "신규 제품/서비스 개발" : "";
      options[1] = this.check73_1_2 ? "기존 제품/서비스 보완 및 개선" : "";
      options[2] = this.check73_1_3 ? "구매 고객 세분화" : "";
      options[3] = this.check73_1_4 ? "고객 프로파일링 변화" : "";
      options[4] = this.check73_1_5 ? "광고 및 홍보 효과 테스팅" : "";
      options[5] = this.check73_1_6 ? "매출 및 수요 예측" : "";
      options[6] = this.check73_1_7 ? "브랜드 인지도 조사" : "";
      options[7] = this.check73_1_8 ? "매출 및 수요 예측" : "";
      options[8] = this.check73_1_9 ? "마케팅 전략 수립 및 수정" : "";
      options[9] = this.check73_1_10 ? this.etc73_1 : "";
      options[10] = this.check73_2_1 ? "제품/서비스의 구매율" : "";
      options[11] = this.check73_2_2 ? "고객 리뷰와 피드백" : "";
      options[12] = this.check73_2_3 ? "고객 전환율" : "";
      options[13] = this.check73_2_4 ? "유입 채널 조사" : "";
      options[14] = this.check73_2_5 ? "DAU / MAU" : "";
      options[15] = this.check73_2_6 ? "고객 리텐션 비율" : "";
      options[16] = this.check73_2_7 ? "CTR / CTC" : "";
      options[17] = this.check73_2_8 ? "고객 만족도(CS)" : "";
      options[18] = this.check73_2_9 ? "NPS" : "";
      options[19] = this.check73_2_10 ? "재구매(방문)율" : "";
      options[20] = this.check73_2_11 ? "회전율" : "";
      options[21] = this.check73_2_12 ? "유저당 평균수입" : "";
      options[22] = this.check73_2_13 ? this.etc73_2 : "";

      return options;
    },
  },
  methods: {
    // async saveBuildStep72() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       checkList1_1: this.selectedOptions[0],
    //       checkList1_2: this.selectedOptions[1],
    //       checkList1_3: this.selectedOptions[2],
    //       checkList1_4: this.selectedOptions[3],
    //       checkList1_5: this.selectedOptions[4],
    //       checkList1_6: this.selectedOptions[5],
    //       checkList1_7: this.selectedOptions[6],
    //       checkList1_8: this.selectedOptions[7],
    //       checkList1_9: this.selectedOptions[8],
    //       checkList1_10: this.selectedOptions[9],

    //       checkList2_1: this.selectedOptions[10],
    //       checkList2_2: this.selectedOptions[11],
    //       checkList2_3: this.selectedOptions[12],
    //       checkList2_4: this.selectedOptions[13],
    //       checkList2_5: this.selectedOptions[14],
    //       checkList2_6: this.selectedOptions[15],
    //       checkList2_7: this.selectedOptions[16],
    //       checkList2_8: this.selectedOptions[17],
    //       checkList2_9: this.selectedOptions[18],
    //       checkList2_10: this.selectedOptions[19],
    //       checkList2_11: this.selectedOptions[20],
    //       checkList2_12: this.selectedOptions[21],
    //       checkList2_13: this.selectedOptions[22],
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep72(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep72(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep72(id) {
      await BuildupService.getBuildStep72(id)
        .then((res) => {
          this.check73_1_1 = res.data.checkList1_1 ? true : false;
          this.check73_1_2 = res.data.checkList1_2 ? true : false;
          this.check73_1_3 = res.data.checkList1_3 ? true : false;
          this.check73_1_4 = res.data.checkList1_4 ? true : false;
          this.check73_1_5 = res.data.checkList1_5 ? true : false;
          this.check73_1_6 = res.data.checkList1_6 ? true : false;
          this.check73_1_7 = res.data.checkList1_7 ? true : false;
          this.check73_1_8 = res.data.checkList1_8 ? true : false;
          this.check73_1_9 = res.data.checkList1_9 ? true : false;
          this.check73_1_10 = res.data.checkList1_10 ? true : false;
          this.check73_2_1 = res.data.checkList2_1 ? true : false;
          this.check73_2_2 = res.data.checkList2_2 ? true : false;
          this.check73_2_3 = res.data.checkList2_3 ? true : false;
          this.check73_2_4 = res.data.checkList2_4 ? true : false;
          this.check73_2_5 = res.data.checkList2_5 ? true : false;
          this.check73_2_6 = res.data.checkList2_6 ? true : false;
          this.check73_2_7 = res.data.checkList2_7 ? true : false;
          this.check73_2_8 = res.data.checkList2_8 ? true : false;
          this.check73_2_9 = res.data.checkList2_9 ? true : false;
          this.check73_2_10 = res.data.checkList2_10 ? true : false;
          this.check73_2_11 = res.data.checkList2_11 ? true : false;
          this.check73_2_12 = res.data.checkList2_12 ? true : false;
          this.check73_2_13 = res.data.checkList2_13 ? true : false;

          this.etc73_1 = this.check73_1_10 ? res.data.checkList1_10 : "";
          this.etc73_2 = this.check73_2_13 ? res.data.checkList2_13 : "";
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep72(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      checkList1_1: this.selectedOptions[0],
      checkList1_2: this.selectedOptions[1],
      checkList1_3: this.selectedOptions[2],
      checkList1_4: this.selectedOptions[3],
      checkList1_5: this.selectedOptions[4],
      checkList1_6: this.selectedOptions[5],
      checkList1_7: this.selectedOptions[6],
      checkList1_8: this.selectedOptions[7],
      checkList1_9: this.selectedOptions[8],
      checkList1_10: this.selectedOptions[9],

      checkList2_1: this.selectedOptions[10],
      checkList2_2: this.selectedOptions[11],
      checkList2_3: this.selectedOptions[12],
      checkList2_4: this.selectedOptions[13],
      checkList2_5: this.selectedOptions[14],
      checkList2_6: this.selectedOptions[15],
      checkList2_7: this.selectedOptions[16],
      checkList2_8: this.selectedOptions[17],
      checkList2_9: this.selectedOptions[18],
      checkList2_10: this.selectedOptions[19],
      checkList2_11: this.selectedOptions[20],
      checkList2_12: this.selectedOptions[21],
      checkList2_13: this.selectedOptions[22],
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep72(this.$route.params.id, data);
      await this.getBuildStep72(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
