import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      goal76_1: "",
      goal76_2: "",
      goal76_3: "",
      activity76_1: "",
      activity76_2: "",
      activity76_3: "",
      memo: "",
    };
  },
  methods: {
    // async saveBuildStep74() {
    //   if (confirm("저장하시겠습니까?")) {
    //     var data = {
    //       goal1: this.goal76_1,
    //       goal2: this.goal76_2,
    //       goal3: this.goal76_3,
    //       activity1: this.activity76_1,
    //       activity2: this.activity76_2,
    //       activity3: this.activity76_3,
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep74(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep74(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep74(id) {
      await BuildupService.getBuildStep74(id)
        .then((res) => {
          (this.goal76_1 = res.data.goal1),
            (this.goal76_2 = res.data.goal2),
            (this.goal76_3 = res.data.goal3),
            (this.activity76_1 = res.data.activity1),
            (this.activity76_2 = res.data.activity2),
            (this.activity76_3 = res.data.activity3);
          this.memo = res.data.memo;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    await this.getBuildStep74(this.$route.params.id);
  },
  async beforeDestroy() {
    var data = {
      goal1: this.goal76_1,
      goal2: this.goal76_2,
      goal3: this.goal76_3,
      activity1: this.activity76_1,
      activity2: this.activity76_2,
      activity3: this.activity76_3,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep74(this.$route.params.id, data);
      await this.getBuildStep74(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
