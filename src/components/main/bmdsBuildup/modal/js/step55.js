import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      groupName55_1: "",
      groupName55_2: "",
      groupName55_3: "",
      groupName55_4: "",
      groupCount55_1: "",
      groupCount55_2: "",
      groupCount55_3: "",
      groupCount55_4: "",
      customerChar55_1: "",
      customerChar55_2: "",
      customerChar55_3: "",
      customerChar55_4: "",
      plan55_1: "",
      plan55_2: "",
      plan55_3: "",
      plan55_4: "",
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep55() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       groupName1: this.groupName55_1,
    //       groupName2: this.groupName55_2,
    //       groupName3: this.groupName55_3,
    //       groupName4: this.groupName55_4,
    //       groupCount1: this.groupCount55_1,
    //       groupCount2: this.groupCount55_2,
    //       groupCount3: this.groupCount55_3,
    //       groupCount4: this.groupCount55_4,
    //       customerChar1: this.customerChar55_1,
    //       customerChar2: this.customerChar55_2,
    //       customerChar3: this.customerChar55_3,
    //       customerChar4: this.customerChar55_4,
    //       plan1: this.plan55_1,
    //       plan2: this.plan55_2,
    //       plan3: this.plan55_3,
    //       plan4: this.plan55_4,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep55(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep55(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep55(id) {
      await BuildupService.getBuildStep55(id)
        .then((res) => {
          (this.groupName55_1 = res.data.groupName1),
            (this.groupName55_2 = res.data.groupName2),
            (this.groupName55_3 = res.data.groupName3),
            (this.groupName55_4 = res.data.groupName4),
            (this.groupCount55_1 = res.data.groupCount1),
            (this.groupCount55_2 = res.data.groupCount2),
            (this.groupCount55_3 = res.data.groupCount3),
            (this.groupCount55_4 = res.data.groupCount4),
            (this.customerChar55_1 = res.data.customerChar1),
            (this.customerChar55_2 = res.data.customerChar2),
            (this.customerChar55_3 = res.data.customerChar3),
            (this.customerChar55_4 = res.data.customerChar4),
            (this.plan55_1 = res.data.plan1),
            (this.plan55_2 = res.data.plan2),
            (this.plan55_3 = res.data.plan3),
            (this.plan55_4 = res.data.plan4),
            (this.memo = res.data.memo);
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep55(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      groupName1: this.groupName55_1,
      groupName2: this.groupName55_2,
      groupName3: this.groupName55_3,
      groupName4: this.groupName55_4,
      groupCount1: this.groupCount55_1,
      groupCount2: this.groupCount55_2,
      groupCount3: this.groupCount55_3,
      groupCount4: this.groupCount55_4,
      customerChar1: this.customerChar55_1,
      customerChar2: this.customerChar55_2,
      customerChar3: this.customerChar55_3,
      customerChar4: this.customerChar55_4,
      plan1: this.plan55_1,
      plan2: this.plan55_2,
      plan3: this.plan55_3,
      plan4: this.plan55_4,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep55(this.$route.params.id, data);
      await this.getBuildStep55(this.$route.params.id);
    } catch (error) {
      console.log(error)
    }
  },
};
