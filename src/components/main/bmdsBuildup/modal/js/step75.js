import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check75_1: false,
      check75_2: false,
      check75_3: false,
      check75_4: false,
      check75_5: false,
      check75_6: false,
      check75_7: false,
      check75_8: false,
      check75_9: false,
      check75_10: false,
      check75_11: false,
      check75_12: false,
      check75_13: false,
      check75_14: false,
      check75_15: false,
      check75_16: false,
      check75_17: false,
      check75_18: false,
      check75_19: false,
      check75_20: false,
      check75_21: false,
      check75_22: false,
      check75_23: false,
      check75_24: false,
      check75_25: false,
      check75_26: false,
      check75_27: false,
      check75_28: false,
      check75_29: false,
      check75_30: false,
      check75_31: false,
      etc75_1: "",
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      options[0] = this.check75_1 ? "시장 진입" : "";
      options[1] = this.check75_2 ? "시장 철수" : "";
      options[2] = this.check75_3 ? "M&A 결정" : "";
      options[3] = this.check75_4 ? "제품/서비스 라인업" : "";
      options[4] = this.check75_5 ? "포트폴리오 관리" : "";
      options[5] = this.check75_6 ? "글로벌 전략" : "";
      options[6] = this.check75_7
        ? "신규 기술 및 신제품(신서비스) 개발 및 투자"
        : "";
      options[7] = this.check75_8 ? "기술이전 및 도입" : "";
      options[8] = this.check75_9 ? "IT 시스템 구축" : "";
      options[9] = this.check75_10 ? "생산 계획 및 재고관리" : "";
      options[10] = this.check75_11 ? "양산 설비 확대 및 투자" : "";
      options[11] = this.check75_12 ? "디지털 전환(스마트팩토리)" : "";
      options[12] = this.check75_13 ? "설비 축소 또는 아웃소싱" : "";
      options[13] = this.check75_14 ? "자금조달(투자유치, 대출)" : "";
      options[14] = this.check75_15 ? "예산 편성(확대 또는 축소)" : "";
      options[15] = this.check75_16 ? "비용 절감 활동(CR)" : "";
      options[16] = this.check75_17 ? "마케팅 채널(확대 또는 축소)" : "";
      options[17] = this.check75_18 ? "판매촉진 활동(추가, 변경, 축소)" : "";
      options[18] = this.check75_19 ? "마케팅 전략" : "";
      options[19] = this.check75_20 ? "신규 인력 추가고용" : "";
      options[20] = this.check75_21 ? "인력 축소 또는 변경" : "";
      options[21] = this.check75_22 ? "교육 및 개발" : "";
      options[22] = this.check75_23 ? "공급 파트너사 추가 및 확대" : "";
      options[23] = this.check75_24 ? "공급 파트너사 축소 및 변경" : "";
      options[24] = this.check75_25 ? "구매 가격 조정" : "";
      options[25] = this.check75_26 ? "신규 판매 채널 확보" : "";
      options[26] = this.check75_27 ? "기존 판매 채널 변경" : "";
      options[27] = this.check75_28 ? "기존 판매 채널 확대" : "";
      options[28] = this.check75_29 ? "기존 판매 채널 축소" : "";
      options[29] = this.check75_30 ? "채널 통합" : "";
      options[30] = this.check75_31 ? this.etc75_1 : "";

      return options;
    },
  },
  methods: {
    // async saveBuildStep73() {
    //   if (confirm("저장하시겠습니까?")) {
    //     if (this.check75_31) {
    //       this.check75_31 = this.etc75_1;
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
    //       checkList16: this.selectedOptions[15] ? this.selectedOptions[15] : "",
    //       checkList17: this.selectedOptions[16] ? this.selectedOptions[16] : "",
    //       checkList18: this.selectedOptions[17] ? this.selectedOptions[17] : "",
    //       checkList19: this.selectedOptions[18] ? this.selectedOptions[18] : "",
    //       checkList20: this.selectedOptions[19] ? this.selectedOptions[19] : "",
    //       checkList21: this.selectedOptions[20] ? this.selectedOptions[20] : "",
    //       checkList22: this.selectedOptions[21] ? this.selectedOptions[21] : "",
    //       checkList23: this.selectedOptions[22] ? this.selectedOptions[22] : "",
    //       checkList24: this.selectedOptions[23] ? this.selectedOptions[23] : "",
    //       checkList25: this.selectedOptions[24] ? this.selectedOptions[24] : "",
    //       checkList26: this.selectedOptions[25] ? this.selectedOptions[25] : "",
    //       checkList27: this.selectedOptions[26] ? this.selectedOptions[26] : "",
    //       checkList28: this.selectedOptions[27] ? this.selectedOptions[27] : "",
    //       checkList29: this.selectedOptions[28] ? this.selectedOptions[28] : "",
    //       checkList30: this.selectedOptions[29] ? this.selectedOptions[29] : "",
    //       checkList31: this.selectedOptions[30] ? this.selectedOptions[30] : "",
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep73(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep73(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep73(id) {
      await BuildupService.getBuildStep73(id)
        .then((res) => {
          (this.check75_1 = res.data.checkList1),
            (this.check75_2 = res.data.checkList2),
            (this.check75_3 = res.data.checkList3),
            (this.check75_4 = res.data.checkList4),
            (this.check75_5 = res.data.checkList5),
            (this.check75_6 = res.data.checkList6),
            (this.check75_7 = res.data.checkList7),
            (this.check75_8 = res.data.checkList8),
            (this.check75_9 = res.data.checkList9),
            (this.check75_10 = res.data.checkList10),
            (this.check75_11 = res.data.checkList11),
            (this.check75_12 = res.data.checkList12),
            (this.check75_13 = res.data.checkList13),
            (this.check75_14 = res.data.checkList14),
            (this.check75_15 = res.data.checkList15),
            (this.check75_16 = res.data.checkList16),
            (this.check75_17 = res.data.checkList17),
            (this.check75_18 = res.data.checkList18),
            (this.check75_19 = res.data.checkList19),
            (this.check75_20 = res.data.checkList20),
            (this.check75_21 = res.data.checkList21),
            (this.check75_22 = res.data.checkList22),
            (this.check75_23 = res.data.checkList23),
            (this.check75_24 = res.data.checkList24),
            (this.check75_25 = res.data.checkList25),
            (this.check75_26 = res.data.checkList26),
            (this.check75_27 = res.data.checkList27),
            (this.check75_28 = res.data.checkList28),
            (this.check75_29 = res.data.checkList29),
            (this.check75_30 = res.data.checkList30),
            (this.check75_31 = res.data.checkList31);

          this.etc75_1 = this.check75_31 ? res.data.checkList31 : "";
          this.memo = res.data.memo;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    await this.getBuildStep73(this.$route.params.id);
  },
  async beforeDestroy() {
    if (this.check75_31) {
      this.check75_31 = this.etc75_1;
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
      checkList16: this.selectedOptions[15] ? this.selectedOptions[15] : "",
      checkList17: this.selectedOptions[16] ? this.selectedOptions[16] : "",
      checkList18: this.selectedOptions[17] ? this.selectedOptions[17] : "",
      checkList19: this.selectedOptions[18] ? this.selectedOptions[18] : "",
      checkList20: this.selectedOptions[19] ? this.selectedOptions[19] : "",
      checkList21: this.selectedOptions[20] ? this.selectedOptions[20] : "",
      checkList22: this.selectedOptions[21] ? this.selectedOptions[21] : "",
      checkList23: this.selectedOptions[22] ? this.selectedOptions[22] : "",
      checkList24: this.selectedOptions[23] ? this.selectedOptions[23] : "",
      checkList25: this.selectedOptions[24] ? this.selectedOptions[24] : "",
      checkList26: this.selectedOptions[25] ? this.selectedOptions[25] : "",
      checkList27: this.selectedOptions[26] ? this.selectedOptions[26] : "",
      checkList28: this.selectedOptions[27] ? this.selectedOptions[27] : "",
      checkList29: this.selectedOptions[28] ? this.selectedOptions[28] : "",
      checkList30: this.selectedOptions[29] ? this.selectedOptions[29] : "",
      checkList31: this.selectedOptions[30] ? this.selectedOptions[30] : "",
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep73(this.$route.params.id, data);
      await this.getBuildStep73(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
