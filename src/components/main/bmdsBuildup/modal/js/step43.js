import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      imgUrl43_1: "",
      memo: "",
    };
  },
  methods: {
    handleClick() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 파일 이름에 한글이 포함되어 있는지 확인
        if (this.containsKorean(file.name)) {
          alert("한글 파일 이름은 업로드할 수 없습니다.");
        } else {
          if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => {
              this.imgUrl43_1 = reader.result;
            };
            reader.readAsDataURL(file);
          }
        }
      }
    },
    containsKorean(fileName) {
      // 정규 표현식을 사용하여 파일 이름에 한글이 포함되어 있는지 확인
      const koreanRegex = /[ㄱ-ㅎ가-힣]/;
      return koreanRegex.test(fileName);
    },
    // async saveBuildStep42() {
    //   if (confirm("저장하시겠습니까?")) {
    //     const formData = new FormData();
    //     formData.append("file", this.$refs.fileInput.files[0]);
    //     var data = {
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep42(this.$route.params.id, formData);
    //       await BuildupService.saveBuildStep42Memo(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep42(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep42(id) {
      try {
        const res = await BuildupService.getBuildStep42(id);
        this.imgUrl43_1 = res.data.imgUrl;
        this.memo = res.data.memo;
      } catch (error) {
        // 오류 처리 로직 추가
      }
    },
  },

  async mounted() {
    await this.getBuildStep42(this.$route.params.id);
  },
  async beforeDestroy() {
    const formData = new FormData();
    formData.append("file", this.$refs.fileInput.files[0]);
    var data = {
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep42(this.$route.params.id, formData);
      await BuildupService.saveBuildStep42Memo(this.$route.params.id, data);
      await this.getBuildStep42(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
