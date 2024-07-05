import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      pathUrl53_1: "",
      title53_1: "",
      memo: "",
    };
  },
  methods: {
    handleClick() {
      this.$refs.fileInput.click();
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          this.pathUrl53_1 = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    // async saveBuildStep53() {
    //   if (confirm("저장하시겠습니까?")) {
    //     const formData = new FormData();
    //     const fileInput = this.$refs.fileInput;

    //     // 이미지 파일이 있는 경우에만 미리보기 업데이트
    //     if (fileInput.files.length > 0) {
    //       const file = fileInput.files[0];
    //       if (file.type.startsWith("image/")) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //           this.pathUrl53_1 = reader.result;
    //         };
    //         reader.readAsDataURL(file);
    //       }
    //       // 이미지 파일을 FormData에 추가
    //       formData.append("file", file);
    //     }

    //     // 나머지 필드 추가
    //     formData.append("title", this.title53_1);
    //     var data = {
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep53(this.$route.params.id, formData);
    //       await BuildupService.saveBuildStep53Memo(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep53(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep53(id) {
      await BuildupService.getBuildStep53(id)
        .then((res) => {
          this.pathUrl53_1 = res.data.pathUrl;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
    async getBuildStep51(id) {
      await BuildupService.getBuildStep51(id)
        .then((res) => {
          this.title53_1 = res.data.checkBool2;
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep53(this.$route.params.id);
    await this.getBuildStep51(this.$route.params.id);
  },
  async beforeDestroy() {
    const formData = new FormData();
    const fileInput = this.$refs.fileInput;

    // 이미지 파일이 있는 경우에만 미리보기 업데이트
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          this.pathUrl53_1 = reader.result;
        };
        reader.readAsDataURL(file);
      }
      // 이미지 파일을 FormData에 추가
      formData.append("file", file);
    }

    // 나머지 필드 추가
    formData.append("title", this.title53_1);
    var data = {
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep53(this.$route.params.id, formData);
      await BuildupService.saveBuildStep53Memo(this.$route.params.id, data);
      await this.getBuildStep53(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
