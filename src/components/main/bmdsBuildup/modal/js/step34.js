import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      rows: [{ id: null, title: "", cause: "", definition: "" }], // 초기 행 설정
      selectedList: [],
      causeList: [],
      resData: [],
      filteredCauses: [],
      memo: "",
    };
  },
  watch: {
    rows: {
      handler: function () {
        this.updateCauses();
      },
      deep: true,
    },
  },

  methods: {
    addRow() {
      if (this.rows.length < 10) {
        this.rows.push(this.createEmptyRow());
      }
    },
    removeRow() {
      if (this.rows.length > 1) {
        this.rows.pop();
      }
    },
    createEmptyRow() {
      return {
        id: null,
        title: "",
        cause: "",
        definition: "",
        filteredCauses: [], // 추가된 필드
      };
    },

    updateCauses(row, index) {
      if (row.title) {
        this.$set(
          this.rows[index],
          "filteredCauses",
          this.causeList.filter((item) => item.selectedItem === row.title)
        );
      } else {
        this.$set(this.rows[index], "filteredCauses", []);
      }
    },
    handleCauseChange(row, index) {
      // 선택된 값이 row.cause에 저장됩니다.
      // 필요한 추가 작업을 여기에 구현합니다.
      this.rows[index].cause = row.cause;
    },

    // async saveBuildStep34_2() {
    //   if (confirm("저장하시겠습니까?")) {
    //     const data = [];
    //     for (let i = 0; i < this.rows.length; i++) {
    //       data.push({
    //         id: this.rows[i].id,
    //         title: this.rows[i].title,
    //         cause: this.rows[i].cause,
    //         definition: this.rows[i].definition,
    //         memo: this.memo,
    //       });
    //     }
    //     try {
    //       await BuildupService.saveBuildStep34_2(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep34_2();
    //     } catch (e) {
    //       console.log(e);
    //       alert("저장에 실패했습니다.");
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },

    async getBuildStep34() {
      try {
        const response = await BuildupService.getBuildStep34(
          this.$route.params.id
        );
        console.log(response.data);
        if (response.data.length > 0) {
          this.resData = response.data;
          for (let i = 0; i < response.data.length; i++) {
            if (!this.selectedList.includes(response.data[i].title)) {
              this.selectedList.push(response.data[i].title);
            }
            this.causeList.push({
              selectedItem: response.data[i].title,
              cause: response.data[i].cause,
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
    },

    async getBuildStep34_2() {
      try {
        const response = await BuildupService.getBuildStep34_2(
          this.$route.params.id
        );

        if (response.data.length > 0) {
          this.rows = response.data;
          this.memo = response.data[0].memo;
          console.log("response.data", response.data);
          // 데이터 로딩 후 각 행에 대해 updateCauses 함수 호출
          this.$nextTick(() => {
            this.rows.forEach((row, index) => {
              this.updateCauses(row, index);
            });
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.getBuildStep34();
    await this.getBuildStep34_2();
  },
  async beforeDestroy() {
    const data = [];
    for (let i = 0; i < this.rows.length; i++) {
      data.push({
        id: this.rows[i].id,
        title: this.rows[i].title,
        cause: this.rows[i].cause,
        definition: this.rows[i].definition,
        memo: this.memo,
      });
    }
    try {
      await BuildupService.saveBuildStep34_2(this.$route.params.id, data);
      await this.getBuildStep34_2();
    } catch (e) {
      console.log(e);
    }
  },
};
