import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      pathUrl60_1: "",
    };
  },
  methods: {
    handleClick() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (this.containsKorean(file.name)) {
        alert("한글 파일 이름은 업로드할 수 없습니다.");
      } else {
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = () => {
            this.pathUrl60_1 = reader.result;
          };
          reader.readAsDataURL(file);
        } else {
          alert("이미지 파일만 업로드 해주세요.");
        }
      }
    },
    containsKorean(fileName) {
      // 정규 표현식을 사용하여 파일 이름에 한글이 포함되어 있는지 확인
      const koreanRegex = /[ㄱ-ㅎ가-힣]/;
      return koreanRegex.test(fileName);
    },
    // async saveBuildStep60() {
    //   if (confirm("저장하시겠습니까?")) {
    //     const formData = new FormData();
    //     formData.append("file", this.$refs.fileInput.files[0]);
    //     var data = {
    //       memo: this.memo,
    //     };
    //     try {
    //       await BuildupService.saveBuildStep60(this.$route.params.id, formData);
    //       await BuildupService.saveBuildStep60Memo(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep60(this.$route.params.id);
    //     } catch (error) {
    //       // 오류 처리 로직 추가
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep60(id) {
      await BuildupService.getBuildStep60(id)
        .then((res) => {
          this.pathUrl60_1 = res.data.pathUrl;
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },
  },

  async mounted() {
    await this.getBuildStep60(this.$route.params.id);
  },
  async beforeDestroy() {
    const formData = new FormData();
    formData.append("file", this.$refs.fileInput.files[0]);
    var data = {
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep60(this.$route.params.id, formData);
      await BuildupService.saveBuildStep60Memo(this.$route.params.id, data);
      await this.getBuildStep60(this.$route.params.id);
    } catch (error) {
      // 오류 처리 로직 추가
    }
  },
};
