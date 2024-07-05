import BuildupService from "@/services/main/BuildupService";

export default {
  data() {
    return {
      productKey: "",
      priceKey: "",
      placeKey: "",
      promotionKey: "",
      productName: "",
      productFunc: "",
      productDesign: "",
      priceLevel: "",
      priceStrategy: "",
      priceSolution: "",
      placeSolution1: "",
      placeSolution2: "",
      placeChannel: "",
      placeChanne2: "",
      check37_1: false,
      check37_2: false,
      check37_3: false,
      check37_4: false,
      check37_5: false,
      check37_6: false,
      check37_7: false,
      check37_8: false,
      check37_9: false,
      memo: "",
    };
  },

  methods: {
    // async saveBuildStep37() {
    //   const data = {
    //     productKey: this.productKey,
    //     priceKey: this.priceKey,
    //     placeKey: this.placeKey,
    //     promotionKey: this.promotionKey,
    //     productName: this.productName,
    //     productFunc: this.productFunc,
    //     productDesign: this.productDesign,
    //     priceLevel: this.priceLevel,
    //     priceStratgy: this.priceStrategy,
    //     priceSolution: this.priceSolution,
    //     placeSolution1: this.placeSolution1,
    //     placeSolution2: this.placeSolution2,
    //     placeChannel: this.placeChannel,
    //     placeChanne2: this.placeChanne2,
    //     check37_1: this.check37_1,
    //     check37_2: this.check37_2,
    //     check37_3: this.check37_3,
    //     check37_4: this.check37_4,
    //     check37_5: this.check37_5,
    //     check37_6: this.check37_6,
    //     check37_7: this.check37_7,
    //     check37_8: this.check37_8,
    //     check37_9: this.check37_9,
    //     memo:this.memo,
    //   };
    //   if (confirm("저장하시겠습니까?")) {
    //     try {
    //       await BuildupService.saveBuildStep37(this.$route.params.id, data);
    //       alert("저장되었습니다.");
    //       await this.getBuildStep37();
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   } else {
    //     alert("취소되었습니다.");
    //   }
    // },

    async getBuildStep37() {
      try {
        const response = await BuildupService.getBuildStep37(
          this.$route.params.id
        );
        const data = response.data;

        this.productKey = data.productKey;
        this.priceKey = data.priceKey;
        this.placeKey = data.placeKey;
        this.promotionKey = data.promotionKey;
        this.promotionKey = data.promotionKey;
        this.productName = data.productName;
        this.productFunc = data.productFunc;
        this.productDesign = data.productDesign;
        this.priceLevel = data.priceLevel;
        this.priceStrategy = data.priceStratgy;
        this.priceSolution = data.priceSolution;
        this.placeSolution1 = data.placeSolution1;
        this.placeSolution2 = data.placeSolution2;
        this.placeChannel = data.placeChannel;
        this.placeChanne2 = data.placeChanne2;
        this.check37_1 = data.check37_1;
        this.check37_2 = data.check37_2;
        this.check37_3 = data.check37_3;
        this.check37_4 = data.check37_4;
        this.check37_5 = data.check37_5;
        this.check37_6 = data.check37_6;
        this.check37_7 = data.check37_7;
        this.check37_8 = data.check37_8;
        this.check37_9 = data.check37_9;
        this.memo = data.memo;
      } catch (e) {
        console.error(e);
      }
    },
  },

  async mounted() {
    this.getBuildStep37();
  },
  async beforeDestroy() {
    const data = {
      productKey: this.productKey,
      priceKey: this.priceKey,
      placeKey: this.placeKey,
      promotionKey: this.promotionKey,
      productName: this.productName,
      productFunc: this.productFunc,
      productDesign: this.productDesign,
      priceLevel: this.priceLevel,
      priceStratgy: this.priceStrategy,
      priceSolution: this.priceSolution,
      placeSolution1: this.placeSolution1,
      placeSolution2: this.placeSolution2,
      placeChannel: this.placeChannel,
      placeChanne2: this.placeChanne2,
      check37_1: this.check37_1,
      check37_2: this.check37_2,
      check37_3: this.check37_3,
      check37_4: this.check37_4,
      check37_5: this.check37_5,
      check37_6: this.check37_6,
      check37_7: this.check37_7,
      check37_8: this.check37_8,
      check37_9: this.check37_9,
      memo: this.memo,
    };
    try {
      await BuildupService.saveBuildStep37(this.$route.params.id, data);
      await this.getBuildStep37();
    } catch (e) {
      console.error(e);
    }
  },
};
