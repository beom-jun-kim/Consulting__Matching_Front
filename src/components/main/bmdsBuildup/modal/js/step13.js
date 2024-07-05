import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      pain13_1: "",
      pain13_2: "",
      pain13_3: "",
      pain13_4: "",
      pain13_5: "",
      pain13_6: "",
      pain13_7: "",
      pain13_8: "",
      req13_1: "",
      req13_2: "",
      req13_3: "",
      req13_4: "",
      req13_5: "",
      req13_6: "",
      req13_7: "",
      req13_8: "",
      um13_1: "",
      um13_2: "",
      um13_3: "",
      um13_4: "",
      um13_5: "",
      um13_6: "",
      um13_7: "",
      um13_8: "",
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep13() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       pain1: this.pain13_1,
    //       pain2: this.pain13_2,
    //       pain3: this.pain13_3,
    //       pain4: this.pain13_4,
    //       pain5: this.pain13_5,
    //       pain6: this.pain13_6,
    //       pain7: this.pain13_7,
    //       pain8: this.pain13_8,
    //       req1: this.req13_1,
    //       req2: this.req13_2,
    //       req3: this.req13_3,
    //       req4: this.req13_4,
    //       req5: this.req13_5,
    //       req6: this.req13_6,
    //       req7: this.req13_7,
    //       req8: this.req13_8,
    //       um1: this.um13_1,
    //       um2: this.um13_2,
    //       um3: this.um13_3,
    //       um4: this.um13_4,
    //       um5: this.um13_5,
    //       um6: this.um13_6,
    //       um7: this.um13_7,
    //       um8: this.um13_8,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep13(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep13(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep13(id) {
      await BuildupService.getBuildStep13(id)
        .then((res) => {
          this.pain13_1 = res.data.pain1;
          this.pain13_2 = res.data.pain2;
          this.pain13_3 = res.data.pain3;
          this.pain13_4 = res.data.pain4;
          this.pain13_5 = res.data.pain5;
          this.pain13_6 = res.data.pain6;
          this.pain13_7 = res.data.pain7;
          this.pain13_8 = res.data.pain8;
          this.req13_1 = res.data.req1;
          this.req13_2 = res.data.req2;
          this.req13_3 = res.data.req3;
          this.req13_4 = res.data.req4;
          this.req13_5 = res.data.req5;
          this.req13_6 = res.data.req6;
          this.req13_7 = res.data.req7;
          this.req13_8 = res.data.req8;
          this.um13_1 = res.data.um1;
          this.um13_2 = res.data.um2;
          this.um13_3 = res.data.um3;
          this.um13_4 = res.data.um4;
          this.um13_5 = res.data.um5;
          this.um13_6 = res.data.um6;
          this.um13_7 = res.data.um7;
          this.um13_8 = res.data.um8;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep13(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      pain1: this.pain13_1,
      pain2: this.pain13_2,
      pain3: this.pain13_3,
      pain4: this.pain13_4,
      pain5: this.pain13_5,
      pain6: this.pain13_6,
      pain7: this.pain13_7,
      pain8: this.pain13_8,
      req1: this.req13_1,
      req2: this.req13_2,
      req3: this.req13_3,
      req4: this.req13_4,
      req5: this.req13_5,
      req6: this.req13_6,
      req7: this.req13_7,
      req8: this.req13_8,
      um1: this.um13_1,
      um2: this.um13_2,
      um3: this.um13_3,
      um4: this.um13_4,
      um5: this.um13_5,
      um6: this.um13_6,
      um7: this.um13_7,
      um8: this.um13_8,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep13(this.$route.params.id, data);
      await this.getBuildStep13(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
