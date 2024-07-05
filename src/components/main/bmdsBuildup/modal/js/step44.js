import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      content44_: Array.from({ length: 12 }, () => ""),
      month: [],
      month2: Array.from({ length: 12 }, () => ""),
      checkboxes: Array.from({ length: 12 }, () =>
        Array.from({ length: 12 }, () => ({
          isChecked: false,
          backgroundColor: "#ffffff",
        }))
      ),
      value44_: [],
      memo: "",
    };
  },
  methods: {
    toggleCheckbox(i, j, checkbox) {
      // 체크박스 상태를 업데이트합니다.
      checkbox.isChecked = !checkbox.isChecked;
      checkbox.backgroundColor = checkbox.isChecked ? "#4264AE" : "#ffffff";

      this.value44_[i] = [];

      // Update the array with checked checkboxes
      this.checkboxes[i].forEach((checkbox, index) => {
        if (checkbox.isChecked) {
          this.value44_[i].push(index + 1);
        }
      });
    },
    minMaxMonth() {
      // x값에 따라 그룹화
      const groupedByX = this.value44_.reduce((acc, values, index) => {
        const x = index + 1;
        if (!acc[x]) {
          acc[x] = [];
        }
        // Filter out empty strings ('') from values array
        const filteredValues = values.filter((value) => value !== "");
        acc[x] = acc[x].concat(filteredValues);
        return acc;
      }, {});

      // 각 그룹에서 y값의 최댓값과 최솟값 찾기
      const result = Object.entries(groupedByX).map(([x, yValues]) => {
        return {
          x: Number(x),
          max: yValues.length > 0 ? Math.max(...yValues) : 0,
          min: yValues.length > 0 ? Math.min(...yValues) : 0,
        };
      });

      // Update month2
      result.forEach(({ x, max, min }) => {
        this.month2[x - 1] = { max, min }; // Subtract 1 to match array index
      });
    },

    // async saveBuildStep43() {
    //   if (confirm("저장하시겠습니까?")) {
    //     this.minMaxMonth();
    //     var data = {
    //       content1: this.content44_[0],
    //       content2: this.content44_[1],
    //       content3: this.content44_[2],
    //       content4: this.content44_[3],
    //       content5: this.content44_[4],
    //       content6: this.content44_[5],
    //       content7: this.content44_[6],
    //       content8: this.content44_[7],
    //       content9: this.content44_[8],
    //       content10: this.content44_[9],
    //       content11: this.content44_[10],
    //       content12: this.content44_[11],
    //       startMonth1: this.month2[0].min,
    //       startMonth2: this.month2[1].min,
    //       startMonth3: this.month2[2].min,
    //       startMonth4: this.month2[3].min,
    //       startMonth5: this.month2[4].min,
    //       startMonth6: this.month2[5].min,
    //       startMonth7: this.month2[6].min,
    //       startMonth8: this.month2[7].min,
    //       startMonth9: this.month2[8].min,
    //       startMonth10: this.month2[9].min,
    //       startMonth11: this.month2[10].min,
    //       startMonth12: this.month2[11].min,
    //       endMonth1: this.month2[0].max,
    //       endMonth2: this.month2[1].max,
    //       endMonth3: this.month2[2].max,
    //       endMonth4: this.month2[3].max,
    //       endMonth5: this.month2[4].max,
    //       endMonth6: this.month2[5].max,
    //       endMonth7: this.month2[6].max,
    //       endMonth8: this.month2[7].max,
    //       endMonth9: this.month2[8].max,
    //       endMonth10: this.month2[9].max,
    //       endMonth11: this.month2[10].max,
    //       endMonth12: this.month2[11].max,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep43(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep43(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep43(id) {
      await BuildupService.getBuildStep43(id)
        .then((res) => {
          this.content44_ = [
            res.data.content1,
            res.data.content2,
            res.data.content3,
            res.data.content4,
            res.data.content5,
            res.data.content6,
            res.data.content7,
            res.data.content8,
            res.data.content9,
            res.data.content10,
            res.data.content11,
            res.data.content12,
          ];
          // 시작월과 끝월을 가져와서 사이값들과 같이 value에 저장
          this.value44_ = Array.from({ length: 12 }, (_, i) => {
            const startMonth = res.data[`startMonth${i + 1}`];
            const endMonth = res.data[`endMonth${i + 1}`];
            return Array.from({ length: endMonth - startMonth + 1 }, (_, j) =>
              startMonth + j == 0 ? "" : startMonth + j
            );
          });
          this.checkboxes.forEach((row, rowIndex) => {
            row.forEach((checkbox, colIndex) => {
              const isChecked = this.value44_[rowIndex].includes(colIndex + 1);
              checkbox.isChecked = isChecked;
              checkbox.backgroundColor = isChecked ? "#4264AE" : "#ffffff";
            });
          });
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep43(this.$route.params.id);
  },
  async beforeDestroy() {
    this.minMaxMonth();
    var data = {
      content1: this.content44_[0],
      content2: this.content44_[1],
      content3: this.content44_[2],
      content4: this.content44_[3],
      content5: this.content44_[4],
      content6: this.content44_[5],
      content7: this.content44_[6],
      content8: this.content44_[7],
      content9: this.content44_[8],
      content10: this.content44_[9],
      content11: this.content44_[10],
      content12: this.content44_[11],
      startMonth1: this.month2[0].min,
      startMonth2: this.month2[1].min,
      startMonth3: this.month2[2].min,
      startMonth4: this.month2[3].min,
      startMonth5: this.month2[4].min,
      startMonth6: this.month2[5].min,
      startMonth7: this.month2[6].min,
      startMonth8: this.month2[7].min,
      startMonth9: this.month2[8].min,
      startMonth10: this.month2[9].min,
      startMonth11: this.month2[10].min,
      startMonth12: this.month2[11].min,
      endMonth1: this.month2[0].max,
      endMonth2: this.month2[1].max,
      endMonth3: this.month2[2].max,
      endMonth4: this.month2[3].max,
      endMonth5: this.month2[4].max,
      endMonth6: this.month2[5].max,
      endMonth7: this.month2[6].max,
      endMonth8: this.month2[7].max,
      endMonth9: this.month2[8].max,
      endMonth10: this.month2[9].max,
      endMonth11: this.month2[10].max,
      endMonth12: this.month2[11].max,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep43(this.$route.params.id, data);
      await this.getBuildStep43(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
