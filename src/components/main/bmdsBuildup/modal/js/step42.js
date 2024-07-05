import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      category42_: Array.from({ length: 11 }, () => ""),
      content42_: Array.from({ length: 11 }, () => ""),
      character42_: Array.from({ length: 11 }, () => ""),
      level42_: Array.from({ length: 11 }, () => ""),
      memo: "",
    };
  },
  methods: {
    formatAmount(value) {
      // Format the value with commas
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    updateAmount_1(index, event) {
      // Remove commas and update the amount array
      this.amount_1[index] = event.target.value.replace(/,/g, "");
    },
    updateAmount_2(index, event) {
      // Remove commas and update the amount array
      this.amount_2[index] = event.target.value.replace(/,/g, "");
    },
    async saveBuildStep41() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          category1: this.category42_[0],
          category2: this.category42_[1],
          category3: this.category42_[2],
          category4: this.category42_[3],
          category5: this.category42_[4],
          category6: this.category42_[5],
          category7: this.category42_[6],
          category8: this.category42_[7],
          category9: this.category42_[8],
          category10: this.category42_[9],
          category11: this.category42_[10],
          content1: this.content42_[0],
          content2: this.content42_[1],
          content3: this.content42_[2],
          content4: this.content42_[3],
          content5: this.content42_[4],
          content6: this.content42_[5],
          content7: this.content42_[6],
          content8: this.content42_[7],
          content9: this.content42_[8],
          content10: this.content42_[9],
          content11: this.content42_[10],
          character1: this.character42_[0],
          character2: this.character42_[1],
          character3: this.character42_[2],
          character4: this.character42_[3],
          character5: this.character42_[4],
          character6: this.character42_[5],
          character7: this.character42_[6],
          character8: this.character42_[7],
          character9: this.character42_[8],
          character10: this.character42_[9],
          character11: this.character42_[10],
          level1: this.level42_[0],
          level2: this.level42_[1],
          level3: this.level42_[2],
          level4: this.level42_[3],
          level5: this.level42_[4],
          level6: this.level42_[5],
          level7: this.level42_[6],
          level8: this.level42_[7],
          level9: this.level42_[8],
          level10: this.level42_[9],
          level11: this.level42_[10],
          memo: this.memo,
        };
        try {
          await BuildupService.saveBuildStep41(this.$route.params.id, data);
          alert("저장되었습니다.");
          await this.getBuildStep41(this.$route.params.id);
        } catch (error) {
          // 오류 처리 로직 추가
        }
      } else {
        alert("취소되었습니다.");
      }
    },
    async getBuildStep41(id) {
      await BuildupService.getBuildStep41(id)
        .then((res) => {
          this.category42_ = [
            res.data.category1,
            res.data.category2,
            res.data.category3,
            res.data.category4,
            res.data.category5,
            res.data.category6,
            res.data.category7,
            res.data.category8,
            res.data.category9,
            res.data.category10,
            res.data.category11,
          ];

          this.content42_ = [
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
          ];

          this.character42_ = [
            res.data.character1,
            res.data.character2,
            res.data.character3,
            res.data.character4,
            res.data.character5,
            res.data.character6,
            res.data.character7,
            res.data.character8,
            res.data.character9,
            res.data.character10,
            res.data.character11,
          ];

          this.level42_ = [
            res.data.level1,
            res.data.level2,
            res.data.level3,
            res.data.level4,
            res.data.level5,
            res.data.level6,
            res.data.level7,
            res.data.level8,
            res.data.level9,
            res.data.level10,
            res.data.level11,
          ];
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep41(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      category1: this.category42_[0],
      category2: this.category42_[1],
      category3: this.category42_[2],
      category4: this.category42_[3],
      category5: this.category42_[4],
      category6: this.category42_[5],
      category7: this.category42_[6],
      category8: this.category42_[7],
      category9: this.category42_[8],
      category10: this.category42_[9],
      category11: this.category42_[10],
      content1: this.content42_[0],
      content2: this.content42_[1],
      content3: this.content42_[2],
      content4: this.content42_[3],
      content5: this.content42_[4],
      content6: this.content42_[5],
      content7: this.content42_[6],
      content8: this.content42_[7],
      content9: this.content42_[8],
      content10: this.content42_[9],
      content11: this.content42_[10],
      character1: this.character42_[0],
      character2: this.character42_[1],
      character3: this.character42_[2],
      character4: this.character42_[3],
      character5: this.character42_[4],
      character6: this.character42_[5],
      character7: this.character42_[6],
      character8: this.character42_[7],
      character9: this.character42_[8],
      character10: this.character42_[9],
      character11: this.character42_[10],
      level1: this.level42_[0],
      level2: this.level42_[1],
      level3: this.level42_[2],
      level4: this.level42_[3],
      level5: this.level42_[4],
      level6: this.level42_[5],
      level7: this.level42_[6],
      level8: this.level42_[7],
      level9: this.level42_[8],
      level10: this.level42_[9],
      level11: this.level42_[10],
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep41(this.$route.params.id, data);
      await this.getBuildStep41(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
