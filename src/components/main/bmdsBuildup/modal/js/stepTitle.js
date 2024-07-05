/*eslint-disable*/
import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      buildTitle: "",
    };
  },

  methods: {
    async getBuildTitle(id) {
      try {
        const response = await BuildupService.getBuildUpBmdsById(id);
        this.buildTitle = response.data.title;
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    await this.getBuildTitle(this.$route.params.id);
  },
};
