import BuildupService from "@/services/main/BuildupService";

export default {
  data() {
    return {
      step12_1: "",
      step12_2: "",
      step12_3: "",
      step12_4: "",
      step12_5: "",
      step12_6: "",
      step12_7: "",
      step12_8: "",
      step12_9: "",
      step12_10: "",
      step12_11: "",
      step12_12: "",
      otherOption: false,
      otherOptionText: "",
      step36CheckList: [],
      selectedOption1: "",
      selectedOption2: "",
      selectedOption3: "",
      selectedOption4: "",
      selectedOption1Text: "",
      selectedOption2Text: "",
      selectedOption3Text: "",
      selectedOption4Text: "",
      selectedPriority1: "",
      selectedPriority2: "",
      selectedPriority3: "",
      selectedPriority4: "",
      memo: "",
    };
  },
  computed: {
    optionsForSelect1() {
      // 다른 셀렉트 박스에서 선택된 옵션들
      const selectedOptions = [
        this.selectedOption2,
        this.selectedOption3,
        this.selectedOption4,
      ];

      // 이미 선택된 옵션들을 제외한 목록 반환
      return this.step36CheckList.filter(
        (option) => !selectedOptions.includes(option)
      );
    },

    optionsForSelect2() {
      // 다른 셀렉트 박스에서 선택된 옵션들
      const selectedOptions = [
        this.selectedOption1,
        this.selectedOption3,
        this.selectedOption4,
      ];

      // 이미 선택된 옵션들을 제외한 목록 반환
      return this.step36CheckList.filter(
        (option) => !selectedOptions.includes(option)
      );
    },

    optionsForSelect3() {
      // 다른 셀렉트 박스에서 선택된 옵션들
      const selectedOptions = [
        this.selectedOption1,
        this.selectedOption2,
        this.selectedOption4,
      ];

      // 이미 선택된 옵션들을 제외한 목록 반환
      return this.step36CheckList.filter(
        (option) => !selectedOptions.includes(option)
      );
    },

    optionsForSelect4() {
      // 다른 셀렉트 박스에서 선택된 옵션들
      const selectedOptions = [
        this.selectedOption1,
        this.selectedOption2,
        this.selectedOption3,
      ];

      // 이미 선택된 옵션들을 제외한 목록 반환
      return this.step36CheckList.filter(
        (option) => !selectedOptions.includes(option)
      );
    },
  },
  watch: {
    otherOption(newVal) {
      if (newVal) {
        if (
          this.otherOptionText &&
          !this.step36CheckList.includes(this.otherOptionText)
        ) {
          this.step36CheckList.push(this.otherOptionText);
        }
      } else {
        const index = this.step36CheckList.indexOf(this.otherOptionText);
        if (index > -1) {
          this.step36CheckList.splice(index, 1);
        }
      }
    },
    otherOptionText(newVal, oldVal) {
      if (this.otherOption) {
        const index = this.step36CheckList.indexOf(oldVal);

        if (index > -1) {
          // 기존 값이 배열에 있으면 새 값으로 업데이트
          this.step36CheckList.splice(index, 1, newVal);
        } else if (newVal && !this.step36CheckList.includes(newVal)) {
          // 새 값이고 배열에 없으면 추가
          this.step36CheckList.push(newVal);
        }
      }
    },
  },

  methods: {
    updateCheckList(event) {
      const value = event.target.value;
      const checked = event.target.checked;

      // 셀렉트 박스에 이미 선택된 값인지 확인
      const isAlreadySelected = [
        this.selectedOption1,
        this.selectedOption2,
        this.selectedOption3,
        this.selectedOption4,
      ].includes(value);

      if (
        checked &&
        !this.step36CheckList.includes(value) &&
        !isAlreadySelected
      ) {
        this.step36CheckList.push(value);
      } else if (!checked) {
        const index = this.step36CheckList.indexOf(value);
        if (index > -1) {
          this.step36CheckList.splice(index, 1);
        }
      }
    },

    // async saveBuildStep36() {
    //   // 먼저 빈 객체 생성
    //   let data = {
    //     otherOption: this.otherOption,
    //     otherOptionText: this.otherOptionText,
    //     coreItem1: this.selectedOption1,
    //     coreItem2: this.selectedOption2,
    //     coreItem3: this.selectedOption3,
    //     coreItem4: this.selectedOption4,
    //     corePoint1: this.selectedOption1Text,
    //     corePoint2: this.selectedOption2Text,
    //     corePoint3: this.selectedOption3Text,
    //     corePoint4: this.selectedOption4Text,
    //     highLow1: this.selectedPriority1,
    //     highLow2: this.selectedPriority2,
    //     highLow3: this.selectedPriority3,
    //     highLow4: this.selectedPriority4,
    //     memo:this.memo,
    //   };

    //   // step36CheckList 배열의 각 항목을 객체에 추가
    //   for (let i = 0; i < this.step36CheckList.length; i++) {
    //     console.log("i", i);
    //     console.log("this.step36CheckList[i]", this.step36CheckList[i]);
    //     data["step12_" + (i + 1)] = this.step36CheckList[i];
    //   }

    //   if (confirm("저장하시겠습니까?")) {
    //     try {
    //       await BuildupService.saveBuildStep36(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep36();
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },

    async getBuildStep36() {
      try {
        const response = await BuildupService.getBuildStep36(
          this.$route.params.id
        );
        const data = response.data;
        if (data.step12_1) {
          this.step36CheckList.push(data.step12_1);
        }
        if (data.step12_2) {
          this.step36CheckList.push(data.step12_2);
        }
        if (data.step12_3) {
          this.step36CheckList.push(data.step12_3);
        }

        if (data.step12_4) {
          this.step36CheckList.push(data.step12_4);
        }

        if (data.step12_5) {
          this.step36CheckList.push(data.step12_5);
        }

        if (data.step12_6) {
          this.step36CheckList.push(data.step12_6);
        }

        if (data.step12_7) {
          this.step36CheckList.push(data.step12_7);
        }

        if (data.step12_8) {
          this.step36CheckList.push(data.step12_8);
        }

        if (data.step12_9) {
          this.step36CheckList.push(data.step12_9);
        }

        if (data.step12_10) {
          this.step36CheckList.push(data.step12_10);
        }

        if (data.step12_11) {
          this.step36CheckList.push(data.step12_11);
        }

        if (data.step12_12) {
          this.step36CheckList.push(data.step12_12);
        }

        this.otherOption = data.otherOption;

        this.otherOptionText = data.otherOptionText;
        this.selectedOption1 = data.coreItem1;
        this.selectedOption2 = data.coreItem2;
        this.selectedOption3 = data.coreItem3;
        this.selectedOption4 = data.coreItem4;
        this.selectedOption1Text = data.corePoint1;
        this.selectedOption2Text = data.corePoint2;
        this.selectedOption3Text = data.corePoint3;
        this.selectedOption4Text = data.corePoint4;
        this.selectedPriority1 = data.highLow1;
        this.selectedPriority2 = data.highLow2;
        this.selectedPriority3 = data.highLow3;
        this.selectedPriority4 = data.highLow4;
        this.memo = data.memo;
      } catch (e) {
        console.log(e);
      }
    },
  },

  async mounted() {
    await this.getBuildStep36();
  },
  async beforeDestroy() {
    let data = {
      otherOption: this.otherOption,
      otherOptionText: this.otherOptionText,
      coreItem1: this.selectedOption1,
      coreItem2: this.selectedOption2,
      coreItem3: this.selectedOption3,
      coreItem4: this.selectedOption4,
      corePoint1: this.selectedOption1Text,
      corePoint2: this.selectedOption2Text,
      corePoint3: this.selectedOption3Text,
      corePoint4: this.selectedOption4Text,
      highLow1: this.selectedPriority1,
      highLow2: this.selectedPriority2,
      highLow3: this.selectedPriority3,
      highLow4: this.selectedPriority4,
      memo: this.memo,
    };

    // step36CheckList 배열의 각 항목을 객체에 추가
    for (let i = 0; i < this.step36CheckList.length; i++) {
      console.log("i", i);
      console.log("this.step36CheckList[i]", this.step36CheckList[i]);
      data["step12_" + (i + 1)] = this.step36CheckList[i];
    }

    try {
      await BuildupService.saveBuildStep36(this.$route.params.id, data);
      await this.getBuildStep36();
    } catch (e) {
      console.error(e);
    }
  },
};
