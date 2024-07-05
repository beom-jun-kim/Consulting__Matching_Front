import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check62_1: false,
      check62_2: false,
      check62_3: false,
      check62_4: false,
      check62_5: false,
      check62_6: false,
      check62_7: false,
      check62_8: false,
      check62_9: false,
      check62_10: false,
      check62_11: false,
      check62_12: false,
      check62_13: false,
      check62_14: false,
      check62_15: false,
      etc62_1: "",
      channel62_1: "",
      channel62_2: "",
      channel62_3: "",
      channel62_4: "",
      plan62_1: "",
      plan62_2: "",
      plan62_3: "",
      plan62_4: "",
      opt: [],
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      if (this.opt != null) {
        if (this.check62_1) options.push("인터넷 검색 사이트");
        if (this.check62_2) options.push("온라인 리뷰");
        if (this.check62_3) options.push("이벤트 행사 참여");
        if (this.check62_4) options.push("인스타그램");
        if (this.check62_5) options.push("온라인 유통채널");
        if (this.check62_6) options.push("전시회 참여");
        if (this.check62_7) options.push("유튜브");
        if (this.check62_8) options.push("온라인 광고 및 마케팅");
        if (this.check62_9) options.push("문자 또는 메신저");
        if (this.check62_10) options.push("E-mail 문의");
        if (this.check62_11) options.push("오프라인 매장 방문");
        if (this.check62_12) {
          if (this.etc62_1) {
            options.push(this.etc62_1);
          }
        }
        if (this.check62_13) options.push("직접 전화 문의");
        if (this.check62_14) options.push("가격 비교 사이트");
        if (this.check62_15) options.push("주변인의 추천");
      } else {
        options.push(...this.opt);
      }

      return options;
    },
  },
  methods: {
    // async saveBuildStep61() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       channel1: this.channel62_1,
    //       channel2: this.channel62_2,
    //       channel3: this.channel62_3,
    //       channel4: this.channel62_4,
    //       plan1: this.plan62_1,
    //       plan2: this.plan62_2,
    //       plan3: this.plan62_3,
    //       plan4: this.plan62_4,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep61(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep61(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep61(id) {
      await BuildupService.getBuildStep61(id)
        .then((res) => {
          this.check62_1 =
            res.data.channel1 == "인터넷 검색 사이트" ||
            res.data.channel2 == "인터넷 검색 사이트" ||
            res.data.channel3 == "인터넷 검색 사이트" ||
            res.data.channel4 == "인터넷 검색 사이트";

          this.check62_2 =
            res.data.channel1 == "온라인 리뷰" ||
            res.data.channel2 == "온라인 리뷰" ||
            res.data.channel3 == "온라인 리뷰" ||
            res.data.channel4 == "온라인 리뷰";

          this.check62_3 =
            res.data.channel1 == "이벤트 행사 참여" ||
            res.data.channel2 == "이벤트 행사 참여" ||
            res.data.channel3 == "이벤트 행사 참여" ||
            res.data.channel4 == "이벤트 행사 참여";

          this.check62_4 =
            res.data.channel1 == "인스타그램" ||
            res.data.channel2 == "인스타그램" ||
            res.data.channel3 == "인스타그램" ||
            res.data.channel4 == "인스타그램";

          this.check62_5 =
            res.data.channel1 == "온라인 유통채널" ||
            res.data.channel2 == "온라인 유통채널" ||
            res.data.channel3 == "온라인 유통채널" ||
            res.data.channel4 == "온라인 유통채널";

          this.check62_6 =
            res.data.channel1 == "전시회 참여" ||
            res.data.channel2 == "전시회 참여" ||
            res.data.channel3 == "전시회 참여" ||
            res.data.channel4 == "전시회 참여";

          this.check62_7 =
            res.data.channel1 == "유튜브" ||
            res.data.channel2 == "유튜브" ||
            res.data.channel3 == "유튜브" ||
            res.data.channel4 == "유튜브";

          this.check62_8 =
            res.data.channel1 == "온라인 광고 및 마케팅" ||
            res.data.channel2 == "온라인 광고 및 마케팅" ||
            res.data.channel3 == "온라인 광고 및 마케팅" ||
            res.data.channel4 == "온라인 광고 및 마케팅";

          this.check62_9 =
            res.data.channel1 == "문자 또는 메신저" ||
            res.data.channel2 == "문자 또는 메신저" ||
            res.data.channel3 == "문자 또는 메신저" ||
            res.data.channel4 == "문자 또는 메신저";

          this.check62_10 =
            res.data.channel1 == "E-mail 문의" ||
            res.data.channel2 == "E-mail 문의" ||
            res.data.channel3 == "E-mail 문의" ||
            res.data.channel4 == "E-mail 문의";

          this.check62_11 =
            res.data.channel1 == "오프라인 매장 방문" ||
            res.data.channel2 == "오프라인 매장 방문" ||
            res.data.channel3 == "오프라인 매장 방문" ||
            res.data.channel4 == "오프라인 매장 방문";

          this.check62_13 =
            res.data.channel1 == "직접 전화 문의" ||
            res.data.channel2 == "직접 전화 문의" ||
            res.data.channel3 == "직접 전화 문의" ||
            res.data.channel4 == "직접 전화 문의";

          this.check62_14 =
            res.data.channel1 == "가격 비교 사이트" ||
            res.data.channel2 == "가격 비교 사이트" ||
            res.data.channel3 == "가격 비교 사이트" ||
            res.data.channel4 == "가격 비교 사이트";

          this.check62_15 =
            res.data.channel1 == "주변인의 추천" ||
            res.data.channel2 == "주변인의 추천" ||
            res.data.channel3 == "주변인의 추천" ||
            res.data.channel4 == "주변인의 추천";

          const checkedCount = [
            this.check62_1,
            this.check62_2,
            this.check62_3,
            this.check62_4,
            this.check62_5,
            this.check62_6,
            this.check62_7,
            this.check62_8,
            this.check62_9,
            this.check62_10,
            this.check62_11,
            this.check62_13,
            this.check62_14,
            this.check62_15,
          ].filter((isChecked) => isChecked).length;

          this.check62_12 = checkedCount == 4 ? false : true;

          this.opt = [
            res.data.channel1,
            res.data.channel2,
            res.data.channel3,
            res.data.channel4,
          ];
          const opt2 = [
            "인터넷 검색 사이트",
            "온라인 리뷰",
            "이벤트 행사 참여",
            "인스타그램",
            "온라인 유통채널",
            "전시회 참여",
            "유튜브",
            "온라인 광고 및 마케팅",
            "문자 또는 메신저",
            "E-mail 문의",
            "오프라인 매장 방문",
            "직접 전화 문의",
            "가격 비교 사이트",
            "주변인의 추천",
          ];

          // opt를 기준으로 opt2에 없는 값 가져오는것 (기타 문의사항)
          const difference = this.opt.filter((value) => !opt2.includes(value));

          this.etc62_1 = this.check62_12 ? difference[0] : "";

          this.channel62_1 = res.data.channel1;
          this.channel62_2 = res.data.channel2;
          this.channel62_3 = res.data.channel3;
          this.channel62_4 = res.data.channel4;
          this.plan62_1 = res.data.plan1;
          this.plan62_2 = res.data.plan2;
          this.plan62_3 = res.data.plan3;
          this.plan62_4 = res.data.plan4;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep61(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      channel1: this.channel62_1,
      channel2: this.channel62_2,
      channel3: this.channel62_3,
      channel4: this.channel62_4,
      plan1: this.plan62_1,
      plan2: this.plan62_2,
      plan3: this.plan62_3,
      plan4: this.plan62_4,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep61(this.$route.params.id, data);
      await this.getBuildStep61(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
