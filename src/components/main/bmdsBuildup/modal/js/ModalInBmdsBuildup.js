import step10Com from "../step10Com.vue";
import step11Com from "../step11Com.vue";
import step12Com from "../step12Com.vue";
import step13Com from "../step13Com.vue";
import step14Com from "../step14Com.vue";
import step15Com from "../step15Com.vue";
import step20Com from "../step20Com.vue";
import step21Com from "../step21Com.vue";
import step22Com from "../step22Com.vue";
import step23Com from "../step23Com.vue";
import step24Com from "../step24Com.vue";
import step25Com from "../step25Com.vue";
import step30Com from "../step30Com.vue";
import step31Com from "../step31Com.vue";
import step32Com from "../step32Com.vue";
import step33Com from "../step33Com.vue";
import step34Com from "../step34Com.vue";
import step35Com from "../step35Com.vue";
import step36Com from "../step36Com.vue";
import step37Com from "../step37Com.vue";
import step40Com from "../step40Com.vue";
import step41Com from "../step41Com.vue";
import step42Com from "../step42Com.vue";
import step42_1Com from "../step42_1Com.vue";
import step43Com from "../step43Com.vue";
import step44Com from "../step44Com.vue";
import step45Com from "../step45Com.vue";
import step50Com from "../step50Com.vue";
import step51Com from "../step51Com.vue";
import step52Com from "../step52Com.vue";
import step53Com from "../step53Com.vue";
import step54Com from "../step54Com.vue";
import step55Com from "../step55Com.vue";
import step56Com from "../step56Com.vue";
import step57Com from "../step57Com.vue";
import step58Com from "../step58Com.vue";
import step58_1Com from "../step58_1Com.vue";
import step59Com from "../step59Com.vue";
import step60Com from "../step60Com.vue";
import step61Com from "../step61Com.vue";
import step62Com from "../step62Com.vue";
import step63Com from "../step63Com.vue";
import step64Com from "../step64Com.vue";
import step70Com from "../step70Com.vue";
import step71Com from "../step71Com.vue";
import step72Com from "../step72Com.vue";
import step73Com from "../step73Com.vue";
import step74Com from "../step74Com.vue";
import step75Com from "../step75Com.vue";
import step76Com from "../step76Com.vue";

export default {
  name: "BuildupBmds",
  props: {
    screenName: String,
    indexNum: Number,
  },
  data() {
    return {
      showSubmenu: [false, false, false, false, false, false, false, false],
      activeBtnIndex: "",
      bmds: [
        "기획탐색",
        "아이디에이션(아이템 선정)",
        "아이디어 컨셉 정의 및 개발",
        "제품 또는 서비스 개발",
        "MVP 및 고객 평가",
        "시장 론칭",
        "고객 개발 및 시장 확장",
      ],
      pageNum: 0,
    };
  },
  components: {
    step10Com,
    step11Com,
    step12Com,
    step13Com,
    step14Com,
    step15Com,
    step20Com,
    step21Com,
    step22Com,
    step23Com,
    step24Com,
    step25Com,
    step30Com,
    step31Com,
    step32Com,
    step33Com,
    step34Com,
    step35Com,
    step36Com,
    step37Com,
    step40Com,
    step41Com,
    step42Com,
    step42_1Com,
    step43Com,
    step44Com,
    step45Com,
    step50Com,
    step51Com,
    step52Com,
    step53Com,
    step54Com,
    step55Com,
    step56Com,
    step57Com,
    step58Com,
    step58_1Com,
    step59Com,
    step60Com,
    step61Com,
    step62Com,
    step63Com,
    step64Com,
    step70Com,
    step71Com,
    step72Com,
    step73Com,
    step74Com,
    step75Com,
    step76Com,
  },
  computed: {
    selectedComponent() {
      return `${this.activeBtnIndex}`;
    },
  },
  methods: {
    handleButtonClick(fileName) {
      this.activeBtnIndex = fileName;
    },
    showSubMenu(index) {
      this.$set(this.showSubmenu, index, !this.showSubmenu[index]);
      this.showSubmenu = this.showSubmenu.map((value, i) => i === index);
      this.indexNum = index;
    },
    modalScreen(screen) {
      this.activeBtnIndex = screen;
    },
  },
  mounted() {
    this.modalScreen(this.screenName);
    this.showSubMenu(this.indexNum);
  },
};
