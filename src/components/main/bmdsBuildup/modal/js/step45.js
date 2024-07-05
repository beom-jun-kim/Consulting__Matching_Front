import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      content45_: Array.from({ length: 8 }, () => ""),
      standard45_: Array.from({ length: 8 }, () => ""),
      amount45_: Array.from({ length: 8 }, () => ""),
      ect45_: Array.from({ length: 8 }, () => ""),

      plan45_: Array.from({ length: 4 }, () => ""),
      planAmount45_: Array.from({ length: 4 }, () => ""),
      planEct45_: Array.from({ length: 4 }, () => ""),
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep44() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       content1: this.content45_[0],
    //       content2: this.content45_[1],
    //       content3: this.content45_[2],
    //       content4: this.content45_[3],
    //       content5: this.content45_[4],
    //       content6: this.content45_[5],
    //       content7: this.content45_[6],
    //       content8: this.content45_[7],
    //       standard1: this.standard45_[0],
    //       standard2: this.standard45_[1],
    //       standard3: this.standard45_[2],
    //       standard4: this.standard45_[3],
    //       standard5: this.standard45_[4],
    //       standard6: this.standard45_[5],
    //       standard7: this.standard45_[6],
    //       standard8: this.standard45_[7],
    //       amount1: this.amount45_[0],
    //       amount2: this.amount45_[1],
    //       amount3: this.amount45_[2],
    //       amount4: this.amount45_[3],
    //       amount5: this.amount45_[4],
    //       amount6: this.amount45_[5],
    //       amount7: this.amount45_[6],
    //       amount8: this.amount45_[7],
    //       etc1: this.ect45_[0],
    //       etc2: this.ect45_[1],
    //       etc3: this.ect45_[2],
    //       etc4: this.ect45_[3],
    //       etc5: this.ect45_[4],
    //       etc6: this.ect45_[5],
    //       etc7: this.ect45_[6],
    //       etc8: this.ect45_[7],
    //       plan1: this.plan45_[0],
    //       plan2: this.plan45_[1],
    //       plan3: this.plan45_[2],
    //       plan4: this.plan45_[3],
    //       planAmount1: this.planAmount45_[0],
    //       planAmount2: this.planAmount45_[1],
    //       planAmount3: this.planAmount45_[2],
    //       planAmount4: this.planAmount45_[3],
    //       planEtc1: this.planEct45_[0],
    //       planEtc2: this.planEct45_[1],
    //       planEtc3: this.planEct45_[2],
    //       planEtc4: this.planEct45_[3],
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep44(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep44(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep44(id) {
      await BuildupService.getBuildStep44(id)
        .then((res) => {
          this.content45_ = [
            res.data.content1,
            res.data.content2,
            res.data.content3,
            res.data.content4,
            res.data.content5,
            res.data.content6,
            res.data.content7,
            res.data.content8,
            res.data.content9,
          ];

          this.standard45_ = [
            res.data.standard1,
            res.data.standard2,
            res.data.standard3,
            res.data.standard4,
            res.data.standard5,
            res.data.standard6,
            res.data.standard7,
            res.data.standard8,
            res.data.standard9,
          ];

          this.amount45_ = [
            res.data.amount1,
            res.data.amount2,
            res.data.amount3,
            res.data.amount4,
            res.data.amount5,
            res.data.amount6,
            res.data.amount7,
            res.data.amount8,
            res.data.amount9,
          ];

          this.ect45_ = [
            res.data.etc1,
            res.data.etc2,
            res.data.etc3,
            res.data.etc4,
            res.data.etc5,
            res.data.etc6,
            res.data.etc7,
            res.data.etc8,
            res.data.etc9,
          ];

          this.plan45_ = [
            res.data.plan1,
            res.data.plan2,
            res.data.plan3,
            res.data.plan4,
          ];

          this.planAmount45_ = [
            res.data.planAmount1,
            res.data.planAmount2,
            res.data.planAmount3,
            res.data.planAmount4,
          ];
          this.planEct45_ = [
            res.data.planEtc1,
            res.data.planEtc2,
            res.data.planEtc3,
            res.data.planEtc4,
          ];
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep44(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      content1: this.content45_[0],
      content2: this.content45_[1],
      content3: this.content45_[2],
      content4: this.content45_[3],
      content5: this.content45_[4],
      content6: this.content45_[5],
      content7: this.content45_[6],
      content8: this.content45_[7],
      standard1: this.standard45_[0],
      standard2: this.standard45_[1],
      standard3: this.standard45_[2],
      standard4: this.standard45_[3],
      standard5: this.standard45_[4],
      standard6: this.standard45_[5],
      standard7: this.standard45_[6],
      standard8: this.standard45_[7],
      amount1: this.amount45_[0],
      amount2: this.amount45_[1],
      amount3: this.amount45_[2],
      amount4: this.amount45_[3],
      amount5: this.amount45_[4],
      amount6: this.amount45_[5],
      amount7: this.amount45_[6],
      amount8: this.amount45_[7],
      etc1: this.ect45_[0],
      etc2: this.ect45_[1],
      etc3: this.ect45_[2],
      etc4: this.ect45_[3],
      etc5: this.ect45_[4],
      etc6: this.ect45_[5],
      etc7: this.ect45_[6],
      etc8: this.ect45_[7],
      plan1: this.plan45_[0],
      plan2: this.plan45_[1],
      plan3: this.plan45_[2],
      plan4: this.plan45_[3],
      planAmount1: this.planAmount45_[0],
      planAmount2: this.planAmount45_[1],
      planAmount3: this.planAmount45_[2],
      planAmount4: this.planAmount45_[3],
      planEtc1: this.planEct45_[0],
      planEtc2: this.planEct45_[1],
      planEtc3: this.planEct45_[2],
      planEtc4: this.planEct45_[3],
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep44(this.$route.params.id, data);
      await this.getBuildStep44(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
