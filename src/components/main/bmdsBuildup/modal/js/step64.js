import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      maxLength: 5,
      check64_1: false,
      check64_2: false,
      check64_3: false,
      check64_4: false,
      check64_5: false,
      check64_6: false,
      check64_7: false,
      check64_8: false,
      check64_9: false,
      check64_10: false,
      check64_11: false,
      check64_12: false,
      check64_13: false,
      check64_14: false,
      check64_15: false,
      check64_16: false,
      check64_17: false,
      check64_18: false,
      title64_1: "",
      title64_2: "",
      title64_3: "",
      price64_1: "",
      price64_2: "",
      price64_3: "",
      player64_1: "",
      player64_2: "",
      player64_3: "",
      packageTitle64_1_1: "",
      packageContent64_1_1: "",
      packageTitle64_1_2: "",
      packageContent64_1_2: "",
      packageTitle64_1_3: "",
      packageContent64_1_3: "",
      packageTitle64_1_4: "",
      packageContent64_1_4: "",
      packageTitle64_1_5: "",
      packageContent64_1_5: "",
      packageTitle64_1_6: "",
      packageContent64_1_6: "",
      packageTitle64_2_1: "",
      packageContent64_2_1: "",
      packageTitle64_2_2: "",
      packageContent64_2_2: "",
      packageTitle64_2_3: "",
      packageContent64_2_3: "",
      packageTitle64_2_4: "",
      packageContent64_2_4: "",
      packageTitle64_2_5: "",
      packageContent64_2_5: "",
      packageTitle64_2_6: "",
      packageContent64_2_6: "",
      packageTitle64_3_1: "",
      packageContent64_3_1: "",
      packageTitle64_3_2: "",
      packageContent64_3_2: "",
      packageTitle64_3_3: "",
      packageContent64_3_3: "",
      packageTitle64_3_4: "",
      packageContent64_3_4: "",
      packageTitle64_3_5: "",
      packageContent64_3_5: "",
      packageTitle64_3_6: "",
      packageContent64_3_6: "",
      memo: "",
    };
  },
  methods: {
    getTruncatedText(text) {
      if (text.length > this.maxLength) {
        return text.substring(0, this.maxLength) + "...";
      } else {
        return text;
      }
    },

    // async saveBuildStep63() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       packageBool1_1: this.check64_1,
    //       packageBool1_2: this.check64_2,
    //       packageBool1_3: this.check64_3,
    //       packageBool1_4: this.check64_4,
    //       packageBool1_5: this.check64_5,
    //       packageBool1_6: this.check64_6,
    //       packageBool2_1: this.check64_7,
    //       packageBool2_2: this.check64_8,
    //       packageBool2_3: this.check64_9,
    //       packageBool2_4: this.check64_10,
    //       packageBool2_5: this.check64_11,
    //       packageBool2_6: this.check64_12,
    //       packageBool3_1: this.check64_13,
    //       packageBool3_2: this.check64_14,
    //       packageBool3_3: this.check64_15,
    //       packageBool3_4: this.check64_16,
    //       packageBool3_5: this.check64_17,
    //       packageBool3_6: this.check64_18,
    //       title1: this.title64_1,
    //       title2: this.title64_2,
    //       title3: this.title64_3,
    //       price1: this.price64_1,
    //       price2: this.price64_2,
    //       price3: this.price64_3,
    //       player1: this.player64_1,
    //       player2: this.player64_2,
    //       player3: this.player64_3,
    //       packageTitle1_1: this.packageTitle64_1_1,
    //       packageTitle1_2: this.packageTitle64_1_2,
    //       packageTitle1_3: this.packageTitle64_1_3,
    //       packageTitle1_4: this.packageTitle64_1_4,
    //       packageTitle1_5: this.packageTitle64_1_5,
    //       packageTitle1_6: this.packageTitle64_1_6,
    //       packageTitle2_1: this.packageTitle64_2_1,
    //       packageTitle2_2: this.packageTitle64_2_2,
    //       packageTitle2_3: this.packageTitle64_2_3,
    //       packageTitle2_4: this.packageTitle64_2_4,
    //       packageTitle2_5: this.packageTitle64_2_5,
    //       packageTitle2_6: this.packageTitle64_2_6,
    //       packageTitle3_1: this.packageTitle64_3_1,
    //       packageTitle3_2: this.packageTitle64_3_2,
    //       packageTitle3_3: this.packageTitle64_3_3,
    //       packageTitle3_4: this.packageTitle64_3_4,
    //       packageTitle3_5: this.packageTitle64_3_5,
    //       packageTitle3_6: this.packageTitle64_3_6,
    //       packageContent1_1: this.packageContent64_1_1,
    //       packageContent1_2: this.packageContent64_1_2,
    //       packageContent1_3: this.packageContent64_1_3,
    //       packageContent1_4: this.packageContent64_1_4,
    //       packageContent1_5: this.packageContent64_1_5,
    //       packageContent1_6: this.packageContent64_1_6,
    //       packageContent2_1: this.packageContent64_2_1,
    //       packageContent2_2: this.packageContent64_2_2,
    //       packageContent2_3: this.packageContent64_2_3,
    //       packageContent2_4: this.packageContent64_2_4,
    //       packageContent2_5: this.packageContent64_2_5,
    //       packageContent2_6: this.packageContent64_2_6,
    //       packageContent3_1: this.packageContent64_3_1,
    //       packageContent3_2: this.packageContent64_3_2,
    //       packageContent3_3: this.packageContent64_3_3,
    //       packageContent3_4: this.packageContent64_3_4,
    //       packageContent3_5: this.packageContent64_3_5,
    //       packageContent3_6: this.packageContent64_3_6,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep63(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep63(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep63(id) {
      await BuildupService.getBuildStep63(id)
        .then((res) => {
          this.check64_1 = res.data.packageBool1_1 == 1 ? true : false;
          this.check64_2 = res.data.packageBool1_2 == 1 ? true : false;
          this.check64_3 = res.data.packageBool1_3 == 1 ? true : false;
          this.check64_4 = res.data.packageBool1_4 == 1 ? true : false;
          this.check64_5 = res.data.packageBool1_5 == 1 ? true : false;
          this.check64_6 = res.data.packageBool1_6 == 1 ? true : false;
          this.check64_7 = res.data.packageBool2_1 == 1 ? true : false;
          this.check64_8 = res.data.packageBool2_2 == 1 ? true : false;
          this.check64_9 = res.data.packageBool2_3 == 1 ? true : false;
          this.check64_10 = res.data.packageBool2_4 == 1 ? true : false;
          this.check64_11 = res.data.packageBool2_5 == 1 ? true : false;
          this.check64_12 = res.data.packageBool2_6 == 1 ? true : false;
          this.check64_13 = res.data.packageBool3_1 == 1 ? true : false;
          this.check64_14 = res.data.packageBool3_2 == 1 ? true : false;
          this.check64_15 = res.data.packageBool3_3 == 1 ? true : false;
          this.check64_16 = res.data.packageBool3_4 == 1 ? true : false;
          this.check64_17 = res.data.packageBool3_5 == 1 ? true : false;
          this.check64_18 = res.data.packageBool3_6 == 1 ? true : false;
          this.title64_1 = res.data.title1;
          this.title64_2 = res.data.title2;
          this.title64_3 = res.data.title3;
          this.price64_1 = res.data.price1;
          this.price64_2 = res.data.price2;
          this.price64_3 = res.data.price3;
          this.player64_1 = res.data.player1;
          this.player64_2 = res.data.player2;
          this.player64_3 = res.data.player3;
          this.packageTitle64_1_1 = res.data.packageTitle1_1;
          this.packageTitle64_1_2 = res.data.packageTitle1_2;
          this.packageTitle64_1_3 = res.data.packageTitle1_3;
          this.packageTitle64_1_4 = res.data.packageTitle1_4;
          this.packageTitle64_1_5 = res.data.packageTitle1_5;
          this.packageTitle64_1_6 = res.data.packageTitle1_6;
          this.packageTitle64_2_1 = res.data.packageTitle2_1;
          this.packageTitle64_2_2 = res.data.packageTitle2_2;
          this.packageTitle64_2_3 = res.data.packageTitle2_3;
          this.packageTitle64_2_4 = res.data.packageTitle2_4;
          this.packageTitle64_2_5 = res.data.packageTitle2_5;
          this.packageTitle64_2_6 = res.data.packageTitle2_6;
          this.packageTitle64_3_1 = res.data.packageTitle3_1;
          this.packageTitle64_3_2 = res.data.packageTitle3_2;
          this.packageTitle64_3_3 = res.data.packageTitle3_3;
          this.packageTitle64_3_4 = res.data.packageTitle3_4;
          this.packageTitle64_3_5 = res.data.packageTitle3_5;
          this.packageTitle64_3_6 = res.data.packageTitle3_6;
          this.packageContent64_1_1 = res.data.packageContent1_1;
          this.packageContent64_1_2 = res.data.packageContent1_2;
          this.packageContent64_1_3 = res.data.packageContent1_3;
          this.packageContent64_1_4 = res.data.packageContent1_4;
          this.packageContent64_1_5 = res.data.packageContent1_5;
          this.packageContent64_1_6 = res.data.packageContent1_6;
          this.packageContent64_2_1 = res.data.packageContent2_1;
          this.packageContent64_2_2 = res.data.packageContent2_2;
          this.packageContent64_2_3 = res.data.packageContent2_3;
          this.packageContent64_2_4 = res.data.packageContent2_4;
          this.packageContent64_2_5 = res.data.packageContent2_5;
          this.packageContent64_2_6 = res.data.packageContent2_6;
          this.packageContent64_3_1 = res.data.packageContent3_1;
          this.packageContent64_3_2 = res.data.packageContent3_2;
          this.packageContent64_3_3 = res.data.packageContent3_3;
          this.packageContent64_3_4 = res.data.packageContent3_4;
          this.packageContent64_3_5 = res.data.packageContent3_5;
          this.packageContent64_3_6 = res.data.packageContent3_6;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep63(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      packageBool1_1: this.check64_1,
      packageBool1_2: this.check64_2,
      packageBool1_3: this.check64_3,
      packageBool1_4: this.check64_4,
      packageBool1_5: this.check64_5,
      packageBool1_6: this.check64_6,
      packageBool2_1: this.check64_7,
      packageBool2_2: this.check64_8,
      packageBool2_3: this.check64_9,
      packageBool2_4: this.check64_10,
      packageBool2_5: this.check64_11,
      packageBool2_6: this.check64_12,
      packageBool3_1: this.check64_13,
      packageBool3_2: this.check64_14,
      packageBool3_3: this.check64_15,
      packageBool3_4: this.check64_16,
      packageBool3_5: this.check64_17,
      packageBool3_6: this.check64_18,
      title1: this.title64_1,
      title2: this.title64_2,
      title3: this.title64_3,
      price1: this.price64_1,
      price2: this.price64_2,
      price3: this.price64_3,
      player1: this.player64_1,
      player2: this.player64_2,
      player3: this.player64_3,
      packageTitle1_1: this.packageTitle64_1_1,
      packageTitle1_2: this.packageTitle64_1_2,
      packageTitle1_3: this.packageTitle64_1_3,
      packageTitle1_4: this.packageTitle64_1_4,
      packageTitle1_5: this.packageTitle64_1_5,
      packageTitle1_6: this.packageTitle64_1_6,
      packageTitle2_1: this.packageTitle64_2_1,
      packageTitle2_2: this.packageTitle64_2_2,
      packageTitle2_3: this.packageTitle64_2_3,
      packageTitle2_4: this.packageTitle64_2_4,
      packageTitle2_5: this.packageTitle64_2_5,
      packageTitle2_6: this.packageTitle64_2_6,
      packageTitle3_1: this.packageTitle64_3_1,
      packageTitle3_2: this.packageTitle64_3_2,
      packageTitle3_3: this.packageTitle64_3_3,
      packageTitle3_4: this.packageTitle64_3_4,
      packageTitle3_5: this.packageTitle64_3_5,
      packageTitle3_6: this.packageTitle64_3_6,
      packageContent1_1: this.packageContent64_1_1,
      packageContent1_2: this.packageContent64_1_2,
      packageContent1_3: this.packageContent64_1_3,
      packageContent1_4: this.packageContent64_1_4,
      packageContent1_5: this.packageContent64_1_5,
      packageContent1_6: this.packageContent64_1_6,
      packageContent2_1: this.packageContent64_2_1,
      packageContent2_2: this.packageContent64_2_2,
      packageContent2_3: this.packageContent64_2_3,
      packageContent2_4: this.packageContent64_2_4,
      packageContent2_5: this.packageContent64_2_5,
      packageContent2_6: this.packageContent64_2_6,
      packageContent3_1: this.packageContent64_3_1,
      packageContent3_2: this.packageContent64_3_2,
      packageContent3_3: this.packageContent64_3_3,
      packageContent3_4: this.packageContent64_3_4,
      packageContent3_5: this.packageContent64_3_5,
      packageContent3_6: this.packageContent64_3_6,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep63(this.$route.params.id, data);
      await this.getBuildStep63(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
