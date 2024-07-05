import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      selectedItem1: "",
      selectedItem2: "",
      selectedItem3: "",
      selectedItem4: "",
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      valueList: [],
      step34s: [],
      cause1_1: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },

      cause1_2: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },
      cause1_3: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },

      cause2_1: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },

      cause2_2: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },

      cause2_3: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },

      cause3_1: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },

      cause3_2: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },

      cause3_3: {
        bmdsId: this.$route.params.id,
        title: "",
        cause: "",
        definition: "",
        id: null,
      },
      memo: "",
    };
  },
  computed: {
    availableOptions1() {
      return this.valueList.filter(
        (item) =>
          ![
            this.selectedItem2,
            this.selectedItem3,
            this.selectedItem4,
          ].includes(item)
      );
    },
    availableOptions2() {
      return this.valueList.filter(
        (item) =>
          ![
            this.selectedItem1,
            this.selectedItem3,
            this.selectedItem4,
          ].includes(item)
      );
    },
    availableOptions3() {
      return this.valueList.filter(
        (item) =>
          ![
            this.selectedItem1,
            this.selectedItem2,
            this.selectedItem4,
          ].includes(item)
      );
    },
    availableOptions4() {
      return this.valueList.filter(
        (item) =>
          ![
            this.selectedItem1,
            this.selectedItem2,
            this.selectedItem3,
          ].includes(item)
      );
    },
    // 이하 다른 select 엘리먼트들에 대한 computed 속성
  },
  methods: {
    // async saveBuildStep33() {
    //   const userId = this.$route.params.id;
    //   const data1 = {
    //     selectedItem1: this.selectedItem1,
    //     selectedItem2: this.selectedItem2,
    //     selectedItem3: this.selectedItem3,
    //     selectedItem4: this.selectedItem4,
    //     description1: this.description1,
    //     description2: this.description2,
    //     description3: this.description3,
    //     description4: this.description4,
    //     memo:this.memo,
    //   };
    //   if (this.cause1_1) {
    //     this.step34s.push({
    //       title: this.selectedItem1,
    //       cause: this.cause1_1.cause,
    //       id: this.cause1_1.id ? this.cause1_1.id : null,
    //     });
    //   }

    //   if (this.cause1_2) {
    //     this.step34s.push({
    //       title: this.selectedItem1,
    //       cause: this.cause1_2.cause,
    //       id: this.cause1_2.id ? this.cause1_2.id : null,
    //     });
    //   }
    //   if (this.cause1_3) {
    //     this.step34s.push({
    //       title: this.selectedItem1,
    //       cause: this.cause1_3.cause,
    //       id: this.cause1_3.id ? this.cause1_3.id : null,
    //     });
    //   }
    //   if (this.cause2_1) {
    //     this.step34s.push({
    //       title: this.selectedItem2,
    //       cause: this.cause2_1.cause,
    //       id: this.cause2_1.id ? this.cause2_1.id : null,
    //     });
    //   }
    //   if (this.cause2_2) {
    //     this.step34s.push({
    //       title: this.selectedItem2,
    //       cause: this.cause2_2.cause,
    //       id: this.cause2_2.id ? this.cause2_2.id : null,
    //     });
    //   }

    //   if (this.cause2_3) {
    //     this.step34s.push({
    //       title: this.selectedItem2,
    //       cause: this.cause2_3.cause,
    //       id: this.cause2_3.id ? this.cause2_3.id : null,
    //     });
    //   }
    //   if (this.cause3_1) {
    //     this.step34s.push({
    //       title: this.selectedItem3,
    //       cause: this.cause3_1.cause,

    //       id: this.cause3_1.id ? this.cause3_1.id : null,
    //     });
    //   }
    //   if (this.cause3_2) {
    //     this.step34s.push({
    //       title: this.selectedItem3,
    //       cause: this.cause3_2.cause,
    //       id: this.cause3_2.id ? this.cause3_2.id : null,
    //     });
    //   }
    //   if (this.cause3_3) {
    //     this.step34s.push({
    //       title: this.selectedItem3,
    //       cause: this.cause3_3.cause,
    //       id: this.cause3_3.id ? this.cause3_3.id : null,
    //     });
    //   }
    //   if (confirm("저장하시겠습니까?")) {
    //     try {
    //       await BuildupService.saveBuildStep33(userId, data1);
    //       await BuildupService.saveBuildStep34(userId, this.step34s);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep33(userId);
    //       await this.getBuildStep34(userId);
    //     } catch (e) {
    //       alert("저장에 실패했습니다.");
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },
    async getBuildStep31(id) {
      await BuildupService.getBuildStep31(id)
        .then((res) => {
          if (res.data.func1) {
            this.valueList.push(res.data.func1);
          }
          if (res.data.func2) {
            this.valueList.push(res.data.func2);
          }
          if (res.data.per1) {
            this.valueList.push(res.data.per1);
          }
          if (res.data.per2) {
            this.valueList.push(res.data.per2);
          }
          if (res.data.design1) {
            this.valueList.push(res.data.design1);
          }
          if (res.data.design2) {
            this.valueList.push(res.data.design2);
          }
          if (res.data.design3) {
            this.valueList.push(res.data.design3);
          }
          if (res.data.quality1) {
            this.valueList.push(res.data.quality1);
          }
          if (res.data.quality2) {
            this.valueList.push(res.data.quality2);
          }
          if (res.data.service1) {
            this.valueList.push(res.data.service1);
          }
          if (res.data.service2) {
            this.valueList.push(res.data.service2);
          }
          if (res.data.service3) {
            this.valueList.push(res.data.service3);
          }
          if (res.data.service4) {
            this.valueList.push(res.data.service4);
          }
          if (res.data.service5) {
            this.valueList.push(res.data.service5);
          }
          if (res.data.service6) {
            this.valueList.push(res.data.service6);
          }
          if (res.data.service7) {
            this.valueList.push(res.data.service7);
          }
          if (res.data.price1) {
            this.valueList.push(res.data.price1);
          }
          if (res.data.price2) {
            this.valueList.push(res.data.price2);
          }
          if (res.data.price3) {
            this.valueList.push(res.data.price3);
          }
          if (res.data.purchase1) {
            this.valueList.push(res.data.purchase1);
          }
          if (res.data.purchase2) {
            this.valueList.push(res.data.purchase2);
          }
          if (res.data.purchase3) {
            this.valueList.push(res.data.purchase3);
          }
          if (res.data.purchase4) {
            this.valueList.push(res.data.purchase4);
          }
          if (res.data.purchase5) {
            this.valueList.push(res.data.purchase5);
          }
          if (res.data.ect1) {
            this.valueList.push(res.data.ect1);
          }
          if (res.data.ect2) {
            this.valueList.push(res.data.ect2);
          }
          if (res.data.ect3) {
            this.valueList.push(res.data.ect3);
          }
        })
        .catch(() => {});
    },
    async getBuildStep32(id) {
      await BuildupService.getBuildStep32(id)
        .then((res) => {
          if (res.data.tang1) {
            this.valueList.push(res.data.tang1);
          }
          if (res.data.tang2) {
            this.valueList.push(res.data.tang2);
          }
          if (res.data.tang3) {
            this.valueList.push(res.data.tang3);
          }
          if (res.data.reliabillty1) {
            this.valueList.push(res.data.reliabillty1);
          }
          if (res.data.reliabillty2) {
            this.valueList.push(res.data.reliabillty2);
          }
          if (res.data.reliabillty3) {
            this.valueList.push(res.data.reliabillty3);
          }
          if (res.data.reliabillty4) {
            this.valueList.push(res.data.reliabillty4);
          }
          if (res.data.reactivity1) {
            this.valueList.push(res.data.reactivity1);
          }
          if (res.data.reactivity2) {
            this.valueList.push(res.data.reactivity2);
          }
          if (res.data.reactivity3) {
            this.valueList.push(res.data.reactivity3);
          }
          if (res.data.reactivity4) {
            this.valueList.push(res.data.reactivity4);
          }
          if (res.data.reactivity5) {
            this.valueList.push(res.data.reactivity5);
          }
          if (res.data.reactivity6) {
            this.valueList.push(res.data.reactivity6);
          }
          if (res.data.ability1) {
            this.valueList.push(res.data.ability1);
          }

          if (res.data.ability2) {
            this.valueList.push(res.data.ability2);
          }
          if (res.data.etiquette1) {
            this.valueList.push(res.data.etiquette1);
          }
          if (res.data.etiquette2) {
            this.valueList.push(res.data.etiquette2);
          }
          if (res.data.credibility1) {
            this.valueList.push(res.data.credibility1);
          }
          if (res.data.stability1) {
            this.valueList.push(res.data.stability1);
          }
          if (res.data.stability2) {
            this.valueList.push(res.data.stability2);
          }
          if (res.data.understand1) {
            this.valueList.push(res.data.understand1);
          }
          if (res.data.understand2) {
            this.valueList.push(res.data.understand2);
          }
          if (res.data.understand3) {
            this.valueList.push(res.data.understand3);
          }
          if (res.data.communication1) {
            this.valueList.push(res.data.communication1);
          }
          if (res.data.communication2) {
            this.valueList.push(res.data.communication2);
          }
          if (res.data.availability1) {
            this.valueList.push(res.data.availability1);
          }
          if (res.data.availability2) {
            this.valueList.push(res.data.availability2);
          }
          if (res.data.availability3) {
            this.valueList.push(res.data.availability3);
          }
          if (res.data.ect1) {
            this.valueList.push(res.data.ect1);
          }
          if (res.data.ect2) {
            this.valueList.push(res.data.ect2);
          }
          if (res.data.ect3) {
            this.valueList.push(res.data.ect3);
          }
          this.memo = res.data.memo;
        })
        .catch(() => {});
    },

    async getBuildStep33(id) {
      await BuildupService.getBuildStep33(id)
        .then((res) => {
          this.selectedItem1 = res.data.selectedItem1;
          this.selectedItem2 = res.data.selectedItem2;
          this.selectedItem3 = res.data.selectedItem3;
          this.selectedItem4 = res.data.selectedItem4;
          this.description1 = res.data.description1;
          this.description2 = res.data.description2;
          this.description3 = res.data.description3;
          this.description4 = res.data.description4;
        })
        .catch(() => {});
    },

    async getBuildStep34(id) {
      await BuildupService.getBuildStep34(id)
        .then((res) => {
          this.step34s = res.data;
          const causes = res.data.map((item) => item);
          // 이제 causes 배열은 ['test1-1', 'test1-2', 'test1-3', ..., 'test3-3']와 같은 형태일 것입니다.
          // 이 배열을 이용하여 각 cause 속성에 값을 할당합니다.
          if (res.data.length > 0) {
            this.cause1_1 = causes[0];
            this.cause1_2 = causes[1];
            this.cause1_3 = causes[2];
            this.cause2_1 = causes[3];
            this.cause2_2 = causes[4];
            this.cause2_3 = causes[5];
            this.cause3_1 = causes[6];
            this.cause3_2 = causes[7];
            this.cause3_3 = causes[8];
          }
        })
        .catch(() => {});
    },
  },
  async mounted() {
    await this.getBuildStep31(this.$route.params.id);
    await this.getBuildStep32(this.$route.params.id);
    await this.getBuildStep33(this.$route.params.id);
    await this.getBuildStep34(this.$route.params.id);
  },
  async beforeDestroy() {
    const userId = this.$route.params.id;
    const data1 = {
      selectedItem1: this.selectedItem1,
      selectedItem2: this.selectedItem2,
      selectedItem3: this.selectedItem3,
      selectedItem4: this.selectedItem4,
      description1: this.description1,
      description2: this.description2,
      description3: this.description3,
      description4: this.description4,
      memo: this.memo,
    };
    if (this.cause1_1) {
      this.step34s.push({
        title: this.selectedItem1,
        cause: this.cause1_1.cause,
        id: this.cause1_1.id ? this.cause1_1.id : null,
      });
    }

    if (this.cause1_2) {
      this.step34s.push({
        title: this.selectedItem1,
        cause: this.cause1_2.cause,
        id: this.cause1_2.id ? this.cause1_2.id : null,
      });
    }
    if (this.cause1_3) {
      this.step34s.push({
        title: this.selectedItem1,
        cause: this.cause1_3.cause,
        id: this.cause1_3.id ? this.cause1_3.id : null,
      });
    }
    if (this.cause2_1) {
      this.step34s.push({
        title: this.selectedItem2,
        cause: this.cause2_1.cause,
        id: this.cause2_1.id ? this.cause2_1.id : null,
      });
    }
    if (this.cause2_2) {
      this.step34s.push({
        title: this.selectedItem2,
        cause: this.cause2_2.cause,
        id: this.cause2_2.id ? this.cause2_2.id : null,
      });
    }

    if (this.cause2_3) {
      this.step34s.push({
        title: this.selectedItem2,
        cause: this.cause2_3.cause,
        id: this.cause2_3.id ? this.cause2_3.id : null,
      });
    }
    if (this.cause3_1) {
      this.step34s.push({
        title: this.selectedItem3,
        cause: this.cause3_1.cause,

        id: this.cause3_1.id ? this.cause3_1.id : null,
      });
    }
    if (this.cause3_2) {
      this.step34s.push({
        title: this.selectedItem3,
        cause: this.cause3_2.cause,
        id: this.cause3_2.id ? this.cause3_2.id : null,
      });
    }
    if (this.cause3_3) {
      this.step34s.push({
        title: this.selectedItem3,
        cause: this.cause3_3.cause,
        id: this.cause3_3.id ? this.cause3_3.id : null,
      });
    }
    try {
      await BuildupService.saveBuildStep33(userId, data1);
      await BuildupService.saveBuildStep34(userId, this.step34s);
      await this.getBuildStep33(userId);
      await this.getBuildStep34(userId);
    } catch (e) {
      console.log(e);
    }
  },
};
