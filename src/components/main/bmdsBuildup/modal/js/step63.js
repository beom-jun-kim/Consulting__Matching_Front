import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      imgUrl63_1: "",

      imgCheck63_1: false,
      imgCheck63_2: false,
      imgCheck63_3: false,
      imgCheck63_4: false,
      imgCheck63_5: false,
      imgCheck63_6: false,
      imgCheck63_7: false,
      imgEtc63_1: "",
      selectedFileName: null,
      bmdsId: 0,

      fileName22: "",
      maxFileNameLength: 20,
      check63_1: false,
      check63_2: false,
      check63_3: false,
      check63_4: false,
      check63_5: false,
      check63_6: false,
      check63_7: false,
      check63_8: false,
      check63_9: false,
      check63_10: false,
      check63_11: false,
      check63_12: false,
      check63_13: false,
      check63_14: false,
      check63_15: false,
      check63_16: false,
      etc63_1: "",
      channel63_1: "",
      channel63_2: "",
      channel63_3: "",
      channel63_4: "",
      plan63_1: "",
      plan63_2: "",
      plan63_3: "",
      plan63_4: "",
      opt: [],
      optEtc: [],
      memo: "",
    };
  },
  computed: {
    truncatedFileName() {
      if (
        this.selectedFileName &&
        this.selectedFileName.length > this.maxFileNameLength
      ) {
        return this.selectedFileName.slice(0, this.maxFileNameLength) + "...";
      } else {
        return this.selectedFileName || " + 파일업로드";
      }
    },
    selectedOptions() {
      const options = [];

      if (this.opt != null) {
        if (this.check63_1) options.push("광고 캠페인");
        if (this.check63_2) options.push("이벤트 행사");
        if (this.check63_3) options.push("콘텐츠 마케팅");
        if (this.check63_4) options.push("고객 참여 마케팅");
        if (this.check63_5) options.push("쿠폰 및 리베이트");
        if (this.check63_6) options.push("제휴 마케팅");
        if (this.check63_7) options.push("가격 할인 및 프로모션");
        if (this.check63_8) options.push("리워드 프로그램");
        if (this.check63_9) options.push("멤버십(우대)");
        if (this.check63_10) options.push("PR 활동");
        if (this.check63_11) options.push("판촉물 제공");
        if (this.check63_12) options.push("무료 샘플 제공");
        if (this.check63_13) options.push("프리미엄");
        if (this.check63_14) options.push("시연회 또는 설명회");
        if (this.check63_15) options.push("1+1(or 2+1) 행사");
        if (this.check63_16) {
          if (this.etc63_1) {
            options.push(this.etc63_1);
          }
        }
      } else {
        options.push(...this.opt);
      }
      return options;
    },
    selectedOptions63_2() {
      const option = [];

      if (this.imgCheck63_1) option[0] = "홈페이지";
      if (this.imgCheck63_2) option[1] = "회사(제품)소개서";
      if (this.imgCheck63_3) option[2] = "회사(제품)소개영상";
      if (this.imgCheck63_4) option[3] = "포스터";
      if (this.imgCheck63_5) option[4] = "책자및리플렛";
      if (this.imgCheck63_6) option[5] = "배너(블로그,인스타 등)";
      if (this.imgCheck63_7) {
        if (this.imgEtc63_1) {
          option[6] = this.imgEtc63_1;
        }
      }

      return option;
    },
  },
  methods: {
    async handleFileChange() {
      const fileInput = this.$refs.fileInput;
      const files = fileInput.files;

      if (files.length > 0) {
        this.selectedFileName = files[0]?.name;
      } else {
        this.selectedFileName = null;
      }
      const formData = new FormData();
      formData.append("file", this.$refs.fileInput.files[0]);

      try {
        await BuildupService.saveBuildStep62_1(this.$route.params.id, formData);
      } catch (error) {
        // 오류 처리 로직 추가
      }
    },
    downloadFile() {
      var AWS = require("aws-sdk");

      // 서버 측에서 자격증명을 관리하거나, 다른 안전한 방법을 사용하세요.
      AWS.config.update({
        region: "ap-northeast-2",
        accessKeyId: "AKIASEB4FW67ZAW624GJ",
        secretAccessKey: "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",
        // 자격증명을 여기에 포함시키지 마세요.
      });

      var s3 = new AWS.S3();
      var params = { Bucket: "dev.new.bmds", Key: this.fileName22 };

      s3.getObject(params, (err, data) => {
        if (err) {
          console.log(err, err.stack); // 오류 발생 시
        } else {
          // 성공적으로 다운로드한 데이터
          console.log(data);
          this.saveFile(data.Body, this.fileName22);
        }
      });
    },

    saveFile(data, filename) {
      var blob = new Blob([data], { type: "application/octet-stream" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    },

    // async saveBuildStep62() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       check1: this.selectedOptions63_2[0]
    //         ? this.selectedOptions63_2[0]
    //         : "",
    //       check2: this.selectedOptions63_2[1]
    //         ? this.selectedOptions63_2[1]
    //         : "",
    //       check3: this.selectedOptions63_2[2]
    //         ? this.selectedOptions63_2[2]
    //         : "",
    //       check4: this.selectedOptions63_2[3]
    //         ? this.selectedOptions63_2[3]
    //         : "",
    //       check5: this.selectedOptions63_2[4]
    //         ? this.selectedOptions63_2[4]
    //         : "",
    //       check6: this.selectedOptions63_2[5]
    //         ? this.selectedOptions63_2[5]
    //         : "",
    //       check7: this.selectedOptions63_2[6]
    //         ? this.selectedOptions63_2[6]
    //         : "",
    //       channel1: this.channel63_1,
    //       channel2: this.channel63_2,
    //       channel3: this.channel63_3,
    //       channel4: this.channel63_4,
    //       plan1: this.plan63_1,
    //       plan2: this.plan63_2,
    //       plan3: this.plan63_3,
    //       plan4: this.plan63_4,
    //       memo: this.memo,
    //     };

    //     try {
    //       await BuildupService.saveBuildStep62(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep62(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    getBuildStep62(id) {
      BuildupService.getBuildStep62(id)
        .then((res) => {
          this.imgUrl63_1 = res.data.pathUrl1;

          this.check63_1 =
            res.data.channel1 == "광고 캠페인" ||
            res.data.channel2 == "광고 캠페인" ||
            res.data.channel3 == "광고 캠페인" ||
            res.data.channel4 == "광고 캠페인";

          this.check63_2 =
            res.data.channel1 == "이벤트 행사" ||
            res.data.channel2 == "이벤트 행사" ||
            res.data.channel3 == "이벤트 행사" ||
            res.data.channel4 == "이벤트 행사";

          this.check63_3 =
            res.data.channel1 == "콘텐츠 마케팅" ||
            res.data.channel2 == "콘텐츠 마케팅" ||
            res.data.channel3 == "콘텐츠 마케팅" ||
            res.data.channel4 == "콘텐츠 마케팅";

          this.check63_4 =
            res.data.channel1 == "고객 참여 마케팅" ||
            res.data.channel2 == "고객 참여 마케팅" ||
            res.data.channel3 == "고객 참여 마케팅" ||
            res.data.channel4 == "고객 참여 마케팅";

          this.check63_5 =
            res.data.channel1 == "쿠폰 및 리베이트" ||
            res.data.channel2 == "쿠폰 및 리베이트" ||
            res.data.channel3 == "쿠폰 및 리베이트" ||
            res.data.channel4 == "쿠폰 및 리베이트";

          this.check63_6 =
            res.data.channel1 == "제휴 마케팅" ||
            res.data.channel2 == "제휴 마케팅" ||
            res.data.channel3 == "제휴 마케팅" ||
            res.data.channel4 == "제휴 마케팅";

          this.check63_7 =
            res.data.channel1 == "가격 할인 및 프로모션" ||
            res.data.channel2 == "가격 할인 및 프로모션" ||
            res.data.channel3 == "가격 할인 및 프로모션" ||
            res.data.channel4 == "가격 할인 및 프로모션";

          this.check63_8 =
            res.data.channel1 == "리워드 프로그램" ||
            res.data.channel2 == "리워드 프로그램" ||
            res.data.channel3 == "리워드 프로그램" ||
            res.data.channel4 == "리워드 프로그램";

          this.check63_9 =
            res.data.channel1 == "멤버십(우대)" ||
            res.data.channel2 == "멤버십(우대)" ||
            res.data.channel3 == "멤버십(우대)" ||
            res.data.channel4 == "멤버십(우대)";

          this.check63_10 =
            res.data.channel1 == "PR 활동" ||
            res.data.channel2 == "PR 활동" ||
            res.data.channel3 == "PR 활동" ||
            res.data.channel4 == "PR 활동";

          this.check63_11 =
            res.data.channel1 == "판촉물 제공" ||
            res.data.channel2 == "판촉물 제공" ||
            res.data.channel3 == "판촉물 제공" ||
            res.data.channel4 == "판촉물 제공";

          this.check63_12 =
            res.data.channel1 == "무료 샘플 제공" ||
            res.data.channel2 == "무료 샘플 제공" ||
            res.data.channel3 == "무료 샘플 제공" ||
            res.data.channel4 == "무료 샘플 제공";

          this.check63_13 =
            res.data.channel1 == "프리미엄" ||
            res.data.channel2 == "프리미엄" ||
            res.data.channel3 == "프리미엄" ||
            res.data.channel4 == "프리미엄";

          this.check63_14 =
            res.data.channel1 == "시연회 또는 설명회" ||
            res.data.channel2 == "시연회 또는 설명회" ||
            res.data.channel3 == "시연회 또는 설명회" ||
            res.data.channel4 == "시연회 또는 설명회";

          this.check63_15 =
            res.data.channel1 == "1+1(or 2+1) 행사" ||
            res.data.channel2 == "1+1(or 2+1) 행사" ||
            res.data.channel3 == "1+1(or 2+1) 행사" ||
            res.data.channel4 == "1+1(or 2+1) 행사";

          this.opt = [
            res.data.channel1,
            res.data.channel2,
            res.data.channel3,
            res.data.channel4,
          ];
          const opt2 = [
            "광고 캠페인",
            "이벤트 행사",
            "콘텐츠 마케팅",
            "고객 참여 마케팅",
            "쿠폰 및 리베이트",
            "제휴 마케팅",
            "가격 할인 및 프로모션",
            "리워드 프로그램",
            "멤버십(우대)",
            "PR 활동",
            "판촉물 제공",
            "무료 샘플 제공",
            "프리미엄",
            "시연회 또는 설명회",
            "1+1(or 2+1) 행사",
          ];

          // opt를 기준으로 opt2에 없는 값 가져오는것 (기타 문의사항)
          const difference = this.opt.filter((value) => !opt2.includes(value));
          this.check63_16 = difference[0] ? true : false;
          this.etc63_1 = this.check63_16 ? difference[0] : "";

          this.channel63_1 = res.data.channel1;
          this.channel63_2 = res.data.channel2;
          this.channel63_3 = res.data.channel3;
          this.channel63_4 = res.data.channel4;
          this.plan63_1 = res.data.plan1;
          this.plan63_2 = res.data.plan2;
          this.plan63_3 = res.data.plan3;
          this.plan63_4 = res.data.plan4;
          this.imgCheck63_1 = res.data.check1 ? true : false;
          this.imgCheck63_2 = res.data.check2 ? true : false;
          this.imgCheck63_3 = res.data.check3 ? true : false;
          this.imgCheck63_4 = res.data.check4 ? true : false;
          this.imgCheck63_5 = res.data.check5 ? true : false;
          this.imgCheck63_6 = res.data.check6 ? true : false;
          this.imgCheck63_7 = res.data.check7 ? true : false;
          this.selectedFileName = res.data.fileName62;
          this.bmdsId = res.data.bmdsId;
          this.fileName22 = res.data.fileKey;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep62(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      check1: this.selectedOptions63_2[0] ? this.selectedOptions63_2[0] : "",
      check2: this.selectedOptions63_2[1] ? this.selectedOptions63_2[1] : "",
      check3: this.selectedOptions63_2[2] ? this.selectedOptions63_2[2] : "",
      check4: this.selectedOptions63_2[3] ? this.selectedOptions63_2[3] : "",
      check5: this.selectedOptions63_2[4] ? this.selectedOptions63_2[4] : "",
      check6: this.selectedOptions63_2[5] ? this.selectedOptions63_2[5] : "",
      check7: this.selectedOptions63_2[6] ? this.selectedOptions63_2[6] : "",
      channel1: this.channel63_1,
      channel2: this.channel63_2,
      channel3: this.channel63_3,
      channel4: this.channel63_4,
      plan1: this.plan63_1,
      plan2: this.plan63_2,
      plan3: this.plan63_3,
      plan4: this.plan63_4,
      memo: this.memo,
    };

    try {
      await BuildupService.saveBuildStep62(this.$route.params.id, data);
      await this.getBuildStep62(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
