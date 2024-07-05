import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      valuesArray: [],
      computedAverage: 0,
      computedAverage58: 0,
      memo: "",
    };
  },
  async created() {
    try {
      const step57Data = await BuildupService.getBuildStep57(
        this.$route.params.id
      );
      const resultObject = {};
      for (const key in step57Data.data) {
        if (key !== "id" && key !== "bmdsId") {
          resultObject[key] = step57Data.data[key];
        }
      }
      this.valuesArray = Object.values(resultObject).filter(
        (value) => value !== ""
      );
      let sum = this.valuesArray[0] + this.valuesArray[1] + this.valuesArray[2];
      this.computedAverage = (sum / 3).toFixed(1);
    } catch (error) {
      console.error("데이터 로딩 중 오류:", error);
    }

    try {
      const step58Data = await BuildupService.getBuildStep58(
        this.$route.params.id
      );
      const resultObject58 = {};
      for (const key in step58Data.data) {
        if (key !== "id" && key !== "bmdsId") {
          resultObject58[key] = step58Data.data[key];
        }
      }
      this.valuesArray58 = Object.values(resultObject58).filter(
        (value) => value !== ""
      );
      let sum58 =
        this.valuesArray58[0] + this.valuesArray58[1] + this.valuesArray58[2];
      this.computedAverage58 = (sum58 / 3).toFixed(1);
    } catch (error) {
      console.error("데이터 로딩 중 오류:", error);
    }
  },
  mounted() {},
};
