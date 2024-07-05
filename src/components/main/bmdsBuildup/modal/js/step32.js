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
      check28: "",
      check29: "",
      check30: "",
      check31: "",
      etc1: "",
      etc2: "",
      etc3: "",
      memo: "",
    };
  },
  computed: {
    selectedOptions() {
      const options = [];

      options[0] = this.check1 ? "기술이나장비가낡아보여서" : "";
      options[1] = this.check2 ? "시설이너무오래된것같아서" : "";
      options[2] = this.check3 ? "직원의태도가정중하지못해서" : "";
      options[3] = this.check4 ? "불만에대한대처정도가못마땅해서" : "";
      options[4] = this.check5 ? "서비스에대한반응이낮아서" : "";
      options[5] = this.check6 ? "약속된서비스가제대로이행되지않아서" : "";
      options[6] = this.check7 ? "나에대한정보를부실하게관리해서" : "";
      options[7] = this.check8 ? "서비스내용에대한설명이부족해서" : "";
      options[8] = this.check9 ? "서비스의질이만족스럽지못해서" : "";
      options[9] = this.check10 ? "요구에너무느리게반응해서" : "";
      options[10] = this.check11 ? "너무오랫동안기다리게해서" : "";
      options[11] = this.check12 ? "규정상안되는게너무많아서" : "";
      options[12] = this.check13 ? "직원이너무건성으로대응해서" : "";
      options[13] = this.check14 ? "서비스제공직원에대한신뢰가가지않아서" : "";
      options[14] = this.check15 ? "직원의서비스제공능력이부족해보여서" : "";
      options[15] = this.check16 ? "예의가없는직원의태도때문에" : "";
      options[16] = this.check17 ? "직원의과잉친절이부담스러워서" : "";
      options[17] = this.check18 ? "제공되는서비스나정보가믿을수없어서" : "";
      options[18] = this.check19
        ? "서비스제공시설이나공간이안전해보이지않아서"
        : "";
      options[19] = this.check20 ? "직원의업무처리가불안해보여서" : "";
      options[20] = this.check21 ? "고객의요구를못알아들어서" : "";
      options[21] = this.check22 ? "고객개인에대한관심이없어보여서" : "";
      options[22] = this.check23 ? "고객실수에의한고객부담이너무커서" : "";
      options[23] = this.check24 ? "직원과의소통이어려워서" : "";
      options[24] = this.check25
        ? "고객요구에무시하거나회피하는태도를보여서"
        : "";
      options[25] = this.check26 ? "이용시간이너무불편해서" : "";
      options[26] = this.check27 ? "제공내용이혼란스러워서" : "";
      options[27] = this.check28 ? "너무복잡해서사용하기어려워서" : "";
      options[28] = this.check29 ? this.etc1 : "";
      options[29] = this.check30 ? this.etc2 : "";
      options[30] = this.check31 ? this.etc3 : "";

      return options;
    },
  },
  methods: {
    // async saveBuildStep32() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       tang1: this.selectedOptions[0],
    //       tang2: this.selectedOptions[1],
    //       tang3: this.selectedOptions[2],
    //       reliabillty1: this.selectedOptions[3],
    //       reliabillty2: this.selectedOptions[4],
    //       reliabillty3: this.selectedOptions[5],
    //       reliabillty4: this.selectedOptions[6],
    //       reactivity1: this.selectedOptions[7],
    //       reactivity2: this.selectedOptions[8],
    //       reactivity3: this.selectedOptions[9],
    //       reactivity4: this.selectedOptions[10],
    //       reactivity5: this.selectedOptions[11],
    //       reactivity6: this.selectedOptions[12],
    //       ability1: this.selectedOptions[13],
    //       ability2: this.selectedOptions[14],
    //       etiquette1: this.selectedOptions[15],
    //       etiquette2: this.selectedOptions[16],
    //       credibility1: this.selectedOptions[17],
    //       stability1: this.selectedOptions[18],
    //       stability2: this.selectedOptions[19],
    //       understand1: this.selectedOptions[20],
    //       understand2: this.selectedOptions[21],
    //       understand3: this.selectedOptions[22],
    //       communication1: this.selectedOptions[23],
    //       communication2: this.selectedOptions[24],
    //       availability1: this.selectedOptions[25],
    //       availability2: this.selectedOptions[26],
    //       availability3: this.selectedOptions[27],
    //       ect1: this.selectedOptions[28],
    //       ect2: this.selectedOptions[29],
    //       ect3: this.selectedOptions[30],
    //       memo:this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep32(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep32(this.$route.params.id);
    //     } catch (e) {
    //       alert("저장에 실패했습니다.");
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep32(id) {
      await BuildupService.getBuildStep32(id)
        .then((res) => {
          this.check1 = res.data.tang1;
          this.check2 = res.data.tang2;
          this.check3 = res.data.tang3;
          this.check4 = res.data.reliabillty1;
          this.check5 = res.data.reliabillty2;
          this.check6 = res.data.reliabillty3;
          this.check7 = res.data.reliabillty4;
          this.check8 = res.data.reactivity1;
          this.check9 = res.data.reactivity2;
          this.check10 = res.data.reactivity3;
          this.check11 = res.data.reactivity4;
          this.check12 = res.data.reactivity5;
          this.check13 = res.data.reactivity6;
          this.check14 = res.data.ability1;
          this.check15 = res.data.ability2;
          this.check16 = res.data.etiquette1;
          this.check17 = res.data.etiquette2;
          this.check18 = res.data.credibility1;
          this.check19 = res.data.stability1;
          this.check20 = res.data.stability2;
          this.check21 = res.data.understand1;
          this.check22 = res.data.understand2;
          this.check23 = res.data.understand3;
          this.check24 = res.data.communication1;
          this.check25 = res.data.communication2;
          this.check26 = res.data.availability1;
          this.check27 = res.data.availability2;
          this.check28 = res.data.availability3;
          this.etc1 = res.data.ect1;
          this.etc2 = res.data.ect2;
          this.etc3 = res.data.ect3;
          this.memo = res.data.memo;

          if (this.etc1 != "") {
            this.check29 = true;
          }
          if (this.etc2 != "") {
            this.check30 = true;
          }
          if (this.etc3 != "") {
            this.check31 = true;
          }
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep32(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      tang1: this.selectedOptions[0],
      tang2: this.selectedOptions[1],
      tang3: this.selectedOptions[2],
      reliabillty1: this.selectedOptions[3],
      reliabillty2: this.selectedOptions[4],
      reliabillty3: this.selectedOptions[5],
      reliabillty4: this.selectedOptions[6],
      reactivity1: this.selectedOptions[7],
      reactivity2: this.selectedOptions[8],
      reactivity3: this.selectedOptions[9],
      reactivity4: this.selectedOptions[10],
      reactivity5: this.selectedOptions[11],
      reactivity6: this.selectedOptions[12],
      ability1: this.selectedOptions[13],
      ability2: this.selectedOptions[14],
      etiquette1: this.selectedOptions[15],
      etiquette2: this.selectedOptions[16],
      credibility1: this.selectedOptions[17],
      stability1: this.selectedOptions[18],
      stability2: this.selectedOptions[19],
      understand1: this.selectedOptions[20],
      understand2: this.selectedOptions[21],
      understand3: this.selectedOptions[22],
      communication1: this.selectedOptions[23],
      communication2: this.selectedOptions[24],
      availability1: this.selectedOptions[25],
      availability2: this.selectedOptions[26],
      availability3: this.selectedOptions[27],
      ect1: this.selectedOptions[28],
      ect2: this.selectedOptions[29],
      ect3: this.selectedOptions[30],
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep32(this.$route.params.id, data);
      await this.getBuildStep32(this.$route.params.id);
    } catch (e) {
      alert("저장에 실패했습니다.");
    }
  },
};
