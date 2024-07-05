import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check12_1: false,
      check12_2: false,
      check12_3: false,
      check12_4: false,
      check12_5: false,
      check12_6: false,
      check12_7: false,
      check12_8: false,
      check12_9: false,
      check12_10: false,
      etc12_1: "",
      description12_1: "", // 3-1-2
      description12_2: "", // 3-1-2
      opt3: [],
      choices1: "",
      choices2: "",
      memo: "",
    };
  },
  computed: {
    selectedOptions12() {
      const options = [];
      if (this.opt3 != null) {
        if (this.check12_1) options.push("제품(서비스)에 대한 수요가 증가");
        if (this.check12_2) options.push("새로운 기술이나 아이디어가 등장");
        if (this.check12_3) options.push("경쟁사가 새로운 제품(서비스) 출시");
        if (this.check12_4) options.push("다수 고객의 새로운 피드백 발견");
        if (this.check12_5) options.push("소비자 행동이나 심리의 변화 발생");
        if (this.check12_6) options.push("법적/제도적 규제나 조건의 변화 발생");
        if (this.check12_7) options.push("환경 문제와 같은 논란 현상 발생");
        if (this.check12_8) options.push("특정 연도 또는 계절이나 행사를 고려");
        if (this.check12_9) options.push("중ㆍ장기적인 비전과 목표 달성");

        if (this.check12_10) {
          if (this.etc12_1) {
            options.push(this.etc12_1);
          }
        } else {
          this.etc12_1 = "";
        }
      } else {
        options.push(...this.opt3);
      }
      return options;
    },
  },
  methods: {
    disableCheckboxes12(checkedIndex) {
      const checkedCount = [
        this.check12_1,
        this.check12_2,
        this.check12_3,
        this.check12_4,
        this.check12_5,
        this.check12_6,
        this.check12_7,
        this.check12_8,
        this.check12_9,
        this.check12_10,
      ].filter((isChecked) => isChecked).length;

      // 다른 체크박스의 경우, checkedIndex가 아닌 체크박스들을 비활성화
      return checkedCount >= 2 && !this["check12_" + checkedIndex];
    },
    // async saveBuildStep12() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       selectedItem1: this.choices1,
    //       selectedItem2: this.choices2,
    //       description1: this.description12_1,
    //       description2: this.description12_2,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep12(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep12(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep12(id) {
      await BuildupService.getBuildStep12(id)
        .then((res) => {
          this.memo = res.data.memo;
          this.description12_1 = res.data.description1;
          this.description12_2 = res.data.description2;

          this.check12_1 =
            res.data.selectedItem1 == "제품(서비스)에 대한 수요가 증가" ||
            res.data.selectedItem2 == "제품(서비스)에 대한 수요가 증가";

          this.check12_2 =
            res.data.selectedItem1 == "새로운 기술이나 아이디어가 등장" ||
            res.data.selectedItem2 == "새로운 기술이나 아이디어가 등장";

          this.check12_3 =
            res.data.selectedItem1 == "경쟁사가 새로운 제품(서비스) 출시" ||
            res.data.selectedItem2 == "경쟁사가 새로운 제품(서비스) 출시";

          this.check12_4 =
            res.data.selectedItem1 == "다수 고객의 새로운 피드백 발견" ||
            res.data.selectedItem2 == "다수 고객의 새로운 피드백 발견";

          this.check12_5 =
            res.data.selectedItem1 == "소비자 행동이나 심리의 변화 발생" ||
            res.data.selectedItem2 == "소비자 행동이나 심리의 변화 발생";

          this.check12_6 =
            res.data.selectedItem1 == "법적/제도적 규제나 조건의 변화 발생" ||
            res.data.selectedItem2 == "법적/제도적 규제나 조건의 변화 발생";

          this.check12_7 =
            res.data.selectedItem1 == "환경 문제와 같은 논란 현상 발생" ||
            res.data.selectedItem2 == "환경 문제와 같은 논란 현상 발생";

          this.check12_8 =
            res.data.selectedItem1 == "특정 연도 또는 계절이나 행사를 고려" ||
            res.data.selectedItem2 == "특정 연도 또는 계절이나 행사를 고려";

          this.check12_9 =
            res.data.selectedItem1 == "중ㆍ장기적인 비전과 목표 달성" ||
            res.data.selectedItem2 == "중ㆍ장기적인 비전과 목표 달성";

          const checkedCount = [
            this.check12_1,
            this.check12_2,
            this.check12_3,
            this.check12_4,
            this.check12_5,
            this.check12_6,
            this.check12_7,
            this.check12_8,
            this.check12_9,
          ].filter((isChecked) => isChecked).length;

          this.check12_10 =
            checkedCount >= 2 || checkedCount == 0 ? false : true;
          this.etc12_1 = this.check12_10 ? res.data.selectedItem2 : "";

          this.opt3 = [res.data.selectedItem1, res.data.selectedItem2];
          const opt4 = [
            "제품(서비스)에 대한 수요가 증가",
            "새로운 기술이나 아이디어가 등장",
            "경쟁사가 새로운 제품(서비스) 출시",
            "다수 고객의 새로운 피드백 발견",
            "소비자 행동이나 심리의 변화 발생",
            "법적/제도적 규제나 조건의 변화 발생",
            "환경 문제와 같은 논란 현상 발생",
            "특정 연도 또는 계절이나 행사를 고려",
            "중ㆍ장기적인 비전과 목표 달성",
          ];

          // opt를 기준으로 opt2에 없는 값 가져오는것 (기타 문의사항)
          const difference = this.opt3.filter((value) => !opt4.includes(value));
          this.etc12_1 = this.check12_10 ? difference[0] : "";

          this.choices1 = res.data.selectedItem1;
          this.choices2 = res.data.selectedItem2;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep12(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      selectedItem1: this.choices1,
      selectedItem2: this.choices2,
      description1: this.description12_1,
      description2: this.description12_2,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep12(this.$route.params.id, data);
      await this.getBuildStep12(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
