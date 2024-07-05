import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      quadrant1: [],
      quadrant2: [],
      quadrant3: [],
      quadrant4: [],
    };
  },
  methods: {
    async getBuildStep41(id) {
      try {
        const response = await BuildupService.getBuildStep41(id);
        if (response.data.level1 == "하") {
          this.quadrant3.push({
            level: response.data.level1,
            category: response.data.category1,
            character: response.data.character1,
            content: response.data.content1,
          });
        } else {
          switch (response.data.character1) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level1,
                category: response.data.category1,
                character: response.data.character1,
                content: response.data.content1,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level1,
                category: response.data.category1,
                character: response.data.character1,
                content: response.data.content1,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level1,
                category: response.data.category1,
                character: response.data.character1,
                content: response.data.content1,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level2 == "하") {
          this.quadrant3.push({
            level: response.data.level2,
            category: response.data.category2,
            character: response.data.character2,
            content: response.data.content2,
          });
        } else {
          switch (response.data.character2) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level2,
                category: response.data.category2,
                character: response.data.character2,
                content: response.data.content2,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level2,
                category: response.data.category2,
                character: response.data.character2,
                content: response.data.content2,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level2,
                category: response.data.category2,
                character: response.data.character2,
                content: response.data.content2,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level3 == "하") {
          this.quadrant3.push({
            level: response.data.level3,
            category: response.data.category3,
            character: response.data.character3,
            content: response.data.content3,
          });
        } else {
          switch (response.data.character3) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level3,
                category: response.data.category3,
                character: response.data.character3,
                content: response.data.content3,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level3,
                category: response.data.category3,
                character: response.data.character3,
                content: response.data.content3,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level3,
                category: response.data.category3,
                character: response.data.character3,
                content: response.data.content3,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level4 == "하") {
          this.quadrant3.push({
            level: response.data.level4,
            category: response.data.category4,
            character: response.data.character4,
            content: response.data.content4,
          });
        } else {
          switch (response.data.character4) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level4,
                category: response.data.category4,
                character: response.data.character4,
                content: response.data.content4,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level4,
                category: response.data.category4,
                character: response.data.character4,
                content: response.data.content4,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level4,
                category: response.data.category4,
                character: response.data.character4,
                content: response.data.content4,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level5 == "하") {
          this.quadrant3.push({
            level: response.data.level5,
            category: response.data.category5,
            character: response.data.character5,
            content: response.data.content5,
          });
        } else {
          switch (response.data.character5) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level5,
                category: response.data.category5,
                character: response.data.character5,
                content: response.data.content5,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level5,
                category: response.data.category5,
                character: response.data.character5,
                content: response.data.content5,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level5,
                category: response.data.category5,
                character: response.data.character5,
                content: response.data.content5,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level6 == "하") {
          this.quadrant3.push({
            level: response.data.level6,
            category: response.data.category6,
            character: response.data.character6,
            content: response.data.content6,
          });
        } else {
          switch (response.data.character6) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level6,
                category: response.data.category6,
                character: response.data.character6,
                content: response.data.content6,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level6,
                category: response.data.category6,
                character: response.data.character6,
                content: response.data.content6,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level6,
                category: response.data.category6,
                character: response.data.character6,
                content: response.data.content6,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level7 == "하") {
          this.quadrant3.push({
            level: response.data.level7,
            category: response.data.category7,
            character: response.data.character7,
            content: response.data.content7,
          });
        } else {
          switch (response.data.character7) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level7,
                category: response.data.category7,
                character: response.data.character7,
                content: response.data.content7,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level7,
                category: response.data.category7,
                character: response.data.character7,
                content: response.data.content7,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level7,
                category: response.data.category7,
                character: response.data.character7,
                content: response.data.content7,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level8 == "하") {
          this.quadrant3.push({
            level: response.data.level8,
            category: response.data.category8,
            character: response.data.character8,
            content: response.data.content8,
          });
        } else {
          switch (response.data.character8) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level8,
                category: response.data.category8,
                character: response.data.character8,
                content: response.data.content8,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level8,
                category: response.data.category8,
                character: response.data.character8,
                content: response.data.content8,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level8,
                category: response.data.category8,
                character: response.data.character8,
                content: response.data.content8,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level9 == "하") {
          this.quadrant3.push({
            level: response.data.level9,
            category: response.data.category9,
            character: response.data.character9,
            content: response.data.content9,
          });
        } else {
          switch (response.data.character9) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level9,
                category: response.data.category9,
                character: response.data.character9,
                content: response.data.content9,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level9,
                category: response.data.category9,
                character: response.data.character9,
                content: response.data.content9,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level9,
                category: response.data.category9,
                character: response.data.character9,
                content: response.data.content9,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level10 == "하") {
          this.quadrant3.push({
            level: response.data.level10,
            category: response.data.category10,
            character: response.data.character10,
            content: response.data.content10,
          });
        } else {
          switch (response.data.character10) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level10,
                category: response.data.category10,
                character: response.data.character10,
                content: response.data.content10,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level10,
                category: response.data.category10,
                character: response.data.character10,
                content: response.data.content10,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level10,
                category: response.data.category10,
                character: response.data.character10,
                content: response.data.content10,
              });
              break;
            default:
              break;
          }
        }
        if (response.data.level11 == "하") {
          this.quadrant3.push({
            level: response.data.level11,
            category: response.data.category11,
            character: response.data.character11,
            content: response.data.content11,
          });
        } else {
          switch (response.data.character11) {
            case "기본":
              this.quadrant4.push({
                level: response.data.level11,
                category: response.data.category11,
                character: response.data.character11,
                content: response.data.content11,
              });
              break;
            case "경쟁":
              this.quadrant1.push({
                level: response.data.level11,
                category: response.data.category11,
                character: response.data.character11,
                content: response.data.content11,
              });
              break;
            case "매력":
              this.quadrant2.push({
                level: response.data.level11,
                category: response.data.category11,
                character: response.data.character11,
                content: response.data.content11,
              });
              break;
            default:
              break;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    await this.getBuildStep41(this.$route.params.id);
  },
};
