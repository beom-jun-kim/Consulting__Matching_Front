import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      check1: "",
      check2: "",
      check3: "",
      check4: "",
      check5: "",
      check6: "",
      check7: "",
      check8: "",
      check9: "",
      check10: "",
      check11: "",
      check12: "",
      check13: "",
      check14: "",
      check15: "",
      check16: "",
      check17: "",
      check18: "",
      check19: "",
      check20: "",
      check21: "",
      check22: "",
      check23: "",
      check24: "",
      check25: "",
      check26: "",
      check27: "",
      ect1: "",
      ect2: "",
      ect3: "",
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      options[0] = this.check1 ? "필요로하거나생각했던기능이없어서" : "";
      options[1] = this.check2 ? "너무복잡해서" : "";
      options[2] = this.check3
        ? "성능이기대했던것만큼제대로작동하지않아서"
        : "";
      options[3] = this.check4 ? "사용이불편해서" : "";
      options[4] = this.check5 ? "크기가너무크거나작아서" : "";
      options[5] = this.check6 ? "색상이마음에안들어서" : "";
      options[6] = this.check7 ? "형태가마음에안들어서" : "";
      options[7] = this.check8 ? "오래가지못해서" : "";
      options[8] = this.check9 ? "고장이잘나서" : "";
      options[9] = this.check10 ? "A/S예약및활용과정이불편해서" : "";
      options[10] = this.check11 ? "A/S비용이높아서" : "";
      options[11] = this.check12 ? "A/S소요기간이길어서" : "";
      options[12] = this.check13 ? "A/S보증기간이 짧아서" : "";
      options[13] = this.check14 ? "고객대응이길거나불친절해서" : "";
      options[14] = this.check15 ? "잘못된정보를제공해서" : "";
      options[15] = this.check16
        ? "온라인정보가없거나접근하기어려워서(홈페이지 포함)"
        : "";
      options[16] = this.check17 ? "생각보다너무비싸서" : "";
      options[17] = this.check18 ? "오히려너무싸서믿을수없어서" : "";
      options[18] = this.check19 ? "고객실수에의한고객부담이너무커서" : "";
      options[19] = this.check20 ? "오프라인구매처가적어서" : "";
      options[20] = this.check21 ? "배송기간이너무길어서" : "";
      options[21] = this.check22 ? "반품또는환불이힘들어서" : "";
      options[22] = this.check23 ? "배송비가부답스러워서" : "";
      options[23] = this.check24
        ? "신뢰가부족해서(브랜드인지도가너무낮아서구매에어려움)"
        : "";
      options[24] = this.check25 ? this.ect1 : "";
      options[25] = this.check26 ? this.ect2 : "";
      options[26] = this.check27 ? this.ect3 : "";

      return options;
    },
  },
  methods: {
    // async saveBuildStep31() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       func1: this.selectedOptions[0],
    //       func2: this.selectedOptions[1],
    //       per1: this.selectedOptions[2],
    //       per2: this.selectedOptions[3],
    //       design1: this.selectedOptions[4],
    //       design2: this.selectedOptions[5],
    //       design3: this.selectedOptions[6],
    //       quality1: this.selectedOptions[7],
    //       quality2: this.selectedOptions[8],
    //       service1: this.selectedOptions[9],
    //       service2: this.selectedOptions[10],
    //       service3: this.selectedOptions[11],
    //       service4: this.selectedOptions[12],
    //       service5: this.selectedOptions[13],
    //       service6: this.selectedOptions[14],
    //       service7: this.selectedOptions[15],
    //       price1: this.selectedOptions[16],
    //       price2: this.selectedOptions[17],
    //       price3: this.selectedOptions[18],
    //       purchase1: this.selectedOptions[19],
    //       purchase2: this.selectedOptions[20],
    //       purchase3: this.selectedOptions[21],
    //       purchase4: this.selectedOptions[22],
    //       purchase5: this.selectedOptions[23],
    //       ect1: this.selectedOptions[24],
    //       ect2: this.selectedOptions[25],
    //       ect3: this.selectedOptions[26],
    //       memo:this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep31(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep31(this.$route.params.id);
    //     } catch (error) {
    //       alert("저장에 실패했습니다.");
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep31(id) {
      await BuildupService.getBuildStep31(id)
        .then((res) => {
          this.check1 = res.data.func1;
          this.check2 = res.data.func2;
          this.check3 = res.data.per1;
          this.check4 = res.data.per2;
          this.check5 = res.data.design1;
          this.check6 = res.data.design2;
          this.check7 = res.data.design3;
          this.check8 = res.data.quality1;
          this.check9 = res.data.quality2;
          this.check10 = res.data.service1;
          this.check11 = res.data.service2;
          this.check12 = res.data.service3;
          this.check13 = res.data.service4;
          this.check14 = res.data.service5;
          this.check15 = res.data.service6;
          this.check16 = res.data.service7;
          this.check17 = res.data.price1;
          this.check18 = res.data.price2;
          this.check19 = res.data.price3;
          this.check20 = res.data.purchase1;
          this.check21 = res.data.purchase2;
          this.check22 = res.data.purchase3;
          this.check23 = res.data.purchase4;
          this.check24 = res.data.purchase5;
          this.ect1 = res.data.ect1;
          this.ect2 = res.data.ect2;
          this.ect3 = res.data.ect3;
          this.memo = res.data.memo;
          if (this.ect1 != "") {
            this.check25 = true;
          }
          if (this.ect2 != "") {
            this.check26 = true;
          }
          if (this.ect3 != "") {
            this.check27 = true;
          }
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep31(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      func1: this.selectedOptions[0],
      func2: this.selectedOptions[1],
      per1: this.selectedOptions[2],
      per2: this.selectedOptions[3],
      design1: this.selectedOptions[4],
      design2: this.selectedOptions[5],
      design3: this.selectedOptions[6],
      quality1: this.selectedOptions[7],
      quality2: this.selectedOptions[8],
      service1: this.selectedOptions[9],
      service2: this.selectedOptions[10],
      service3: this.selectedOptions[11],
      service4: this.selectedOptions[12],
      service5: this.selectedOptions[13],
      service6: this.selectedOptions[14],
      service7: this.selectedOptions[15],
      price1: this.selectedOptions[16],
      price2: this.selectedOptions[17],
      price3: this.selectedOptions[18],
      purchase1: this.selectedOptions[19],
      purchase2: this.selectedOptions[20],
      purchase3: this.selectedOptions[21],
      purchase4: this.selectedOptions[22],
      purchase5: this.selectedOptions[23],
      ect1: this.selectedOptions[24],
      ect2: this.selectedOptions[25],
      ect3: this.selectedOptions[26],
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep31(this.$route.params.id, data);
      await this.getBuildStep31(this.$route.params.id);
    } catch (error) {
      alert("저장에 실패했습니다.");
    }
  },
};
