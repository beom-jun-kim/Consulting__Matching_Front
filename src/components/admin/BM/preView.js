import stepTitleCom from "../../main/bmdsBuildup/pdfView/stepTitleCom.vue";
import step10Com from "../../main/bmdsBuildup/pdfView/step10Com.vue";
import step11Com from "../../main/bmdsBuildup/pdfView/step11Com.vue";
import step12Com from "../../main/bmdsBuildup/pdfView/step12Com.vue";
import step13Com from "../../main/bmdsBuildup/pdfView/step13Com.vue";
import step14Com from "../../main/bmdsBuildup/pdfView/step14Com.vue";
import step15Com from "../../main/bmdsBuildup/pdfView/step15Com.vue";
import step20Com from "../../main/bmdsBuildup/pdfView/step20Com.vue";
import step21Com from "../../main/bmdsBuildup/pdfView/step21Com.vue";
import step22Com from "../../main/bmdsBuildup/pdfView/step22Com.vue";
import step23Com from "../../main/bmdsBuildup/pdfView/step23Com.vue";
import step24Com from "../../main/bmdsBuildup/pdfView/step24Com.vue";
import step25Com from "../../main/bmdsBuildup/pdfView/step25Com.vue";
import step30Com from "../../main/bmdsBuildup/pdfView/step30Com.vue";
import step31Com from "../../main/bmdsBuildup/pdfView/step31Com.vue";
import step32Com from "../../main/bmdsBuildup/pdfView/step32Com.vue";
import step33Com from "../../main/bmdsBuildup/pdfView/step33Com.vue";
import step34Com from "../../main/bmdsBuildup/pdfView/step34Com.vue";
import step35Com from "../../main/bmdsBuildup/pdfView/step35Com.vue";
import step36Com from "../../main/bmdsBuildup/pdfView/step36Com.vue";
import step37Com from "../../main/bmdsBuildup/pdfView/step37Com.vue";
import step40Com from "../../main/bmdsBuildup/pdfView/step40Com.vue";
import step41Com from "../../main/bmdsBuildup/pdfView/step41Com.vue";
import step42Com from "../../main/bmdsBuildup/pdfView/step42Com.vue";
import step42_1Com from "../../main/bmdsBuildup/pdfView/step42_1Com.vue";
import step43Com from "../../main/bmdsBuildup/pdfView/step43Com.vue";
import step44Com from "../../main/bmdsBuildup/pdfView/step44Com.vue";
import step45Com from "../../main/bmdsBuildup/pdfView/step45Com.vue";
import step50Com from "../../main/bmdsBuildup/pdfView/step50Com.vue";
import step51Com from "../../main/bmdsBuildup/pdfView/step51Com.vue";
import step52Com from "../../main/bmdsBuildup/pdfView/step52Com.vue";
import step53Com from "../../main/bmdsBuildup/pdfView/step53Com.vue";
import step54Com from "../../main/bmdsBuildup/pdfView/step54Com.vue";
import step55Com from "../../main/bmdsBuildup/pdfView/step55Com.vue";
import step56Com from "../../main/bmdsBuildup/pdfView/step56Com.vue";
import step57Com from "../../main/bmdsBuildup/pdfView/step57Com.vue";
import step58Com from "../../main/bmdsBuildup/pdfView/step58Com.vue";
import step58_1Com from "../../main/bmdsBuildup/pdfView/step58_1Com.vue";
import step59Com from "../../main/bmdsBuildup/pdfView/step59Com.vue";
import step60Com from "../../main/bmdsBuildup/pdfView/step60Com.vue";
import step61Com from "../../main/bmdsBuildup/pdfView/step61Com.vue";
import step62Com from "../../main/bmdsBuildup/pdfView/step62Com.vue";
import step63Com from "../../main/bmdsBuildup/pdfView/step63Com.vue";
import step64Com from "../../main/bmdsBuildup/pdfView/step64Com.vue";
import step70Com from "../../main/bmdsBuildup/pdfView/step70Com.vue";
import step71Com from "../../main/bmdsBuildup/pdfView/step71Com.vue";
import step72Com from "../../main/bmdsBuildup/pdfView/step72Com.vue";
import step73Com from "../../main/bmdsBuildup/pdfView/step73Com.vue";
import step74Com from "../../main/bmdsBuildup/pdfView/step74Com.vue";
import step75Com from "../../main/bmdsBuildup/pdfView/step75Com.vue";
import step76Com from "../../main/bmdsBuildup/pdfView/step76Com.vue";
import stepLastCom from "../../main/bmdsBuildup/pdfView/stepLastCom.vue";

import printJS from "print-js";
import html2canvas from "html2canvas";
import NavCom from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import BuildupService from "@/services/main/BuildupService";
export default {
  data() {
    return {
      loading: false, // 로딩 상태
      isModalOpen: false,
      modalContent: "",
      selectedNumber: null,
      numbers: [1, 2, 3, 4, 5],
      content: "",
      isReview: false,
      legalAgreement: false,
      currentLoadingIndex: 0, // 현재 로딩 중인 컴포넌트 인덱스
      step51Data: null,
      visibleComponents: Array(53).fill(true),
    };
  },
  components: {
    NavCom,
    Footer,
    stepTitleCom,
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
    stepLastCom,
  },
  computed: {
    componentMap() {
      return {
        1: "stepTitleCom",
        2: "step10Com",
        3: "step11Com",
        4: "step12Com",
        5: "step13Com",
        6: "step14Com",
        7: "step15Com",
        8: "step20Com",
        9: "step21Com",
        10: "step22Com",
        11: "step23Com",
        12: "step24Com",
        13: "step25Com",
        14: "step30Com",
        15: "step31Com",
        16: "step32Com",
        17: "step33Com",
        18: "step34Com",
        19: "step35Com",
        20: "step36Com",
        21: "step37Com",
        22: "step40Com",
        23: "step41Com",
        24: "step42Com",
        25: "step42_1Com",
        26: "step43Com",
        27: "step44Com",
        28: "step45Com",
        29: "step50Com",
        30: "step51Com",
        31: "step52Com",
        32: "step53Com",
        33: "step54Com",
        34: "step55Com",
        35: "step56Com",
        36: "step57Com",
        37: "step58Com",
        38: "step58_1Com",
        39: "step59Com",
        40: "step60Com",
        41: "step61Com",
        42: "step62Com",
        43: "step63Com",
        44: "step64Com",
        45: "step70Com",
        46: "step71Com",
        47: "step72Com",
        48: "step73Com",
        49: "step74Com",
        50: "step75Com",
        51: "step76Com",
        52: "stepLastCom",
      };
    },
  },
  methods: {
    openMyModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    toggleCheckbox(index) {
      // 선택한 별부터 첫 번째 별까지의 체크 상태를 반전
      for (let i = 0; i <= index; i++) {
        this.isChecked[i] = !this.isChecked[index];
      }
    },
    async saveReview() {
      if (this.content == "") {
        alert("후기 작성을 부탁드립니다.");
        return false;
      }
      if (this.selectedNumber == null) {
        alert("만족도를 선택해주세요.");
        return false;
      }
      if (!this.legalAgreement) {
        alert("리뷰 작성에 따른 법적 책임을 확인하시고, 동의해주세요.");
        return false;
      }
      if (confirm("저장하시겠습니까?")) {
        var data = {
          score: this.selectedNumber,
          content: this.content,
        };
        try {
          await BuildupService.saveReview(this.$route.params.id, data);
          if (
            confirm(
              "저장되었습니다.\n소중한 리뷰 감사합니다.\nPDF로 전환을 시작합니다."
            )
          ) {
            this.closeModal();
            this.printContent();
          }
        } catch (error) {
          console.error(error);
        }
      }
    },

    async printContent() {
      this.loading = true; // 로딩 시작
      const images = [];

      for (let i = 1; i <= 52; i++) {
        this.currentLoadingIndex = i;
        const element = document.getElementById(`container-${i}`);
        const canvas = await html2canvas(element, {
          useCORS: true, // CORS 옵션 추가
          height: 890, // 캔버스 너비 설정 (픽셀 단위, A4의 너비)
          width: 1300, // 캔버스 높이 설정 (픽셀 단위, A4의 높이)
          scale: 1, // 해상도 조정
        });
        const image = canvas.toDataURL("image/png");
        images.push(image);
      }

      this.printImages(images);
      this.loading = false; // 로딩 종료
      this.currentLoadingIndex = 0;
    },

    async printImages(images) {
      await printJS({
        printable: images,
        type: "image",
        imageStyle: "width:100%; max-width: 100%; height: auto;",
      });
    },
    async checkReview() {
      try {
        const res = await BuildupService.getReview(this.$route.params.id);
        if (res.data) {
          this.isReview = true;
        }
      } catch (error) {
        console.error(error);
      }
    },

    getBorderStyle(index) {
      const baseStyle = "border-bottom: 2px #b4b4b4 solid";

      if (index === 1) {
        return `border-top: 1px #b4b4b4 solid; ${baseStyle}`;
      } else {
        // 여기서 visibleComponents 값을 확인하여 필요한 스타일을 추가 또는 제거
        if (!this.visibleComponents[index]) {
          return baseStyle.replace(`${baseStyle}`, ""); // border-bottom 스타일 제거
        } else {
          return baseStyle;
        }
      }
    },
  },
  async created() {
    // shouldRenderComponent 함수 대신에 여기서 visibleComponents를 업데이트하는 로직을 작성
    const step51length = await BuildupService.getBuildStep51(
      this.$route.params.id
    );
    const resultObject = {};
    for (const key in step51length.data) {
      if (key !== "id" && key !== "bmdsId") {
        resultObject[key] = step51length.data[key];
      }
    }
    const valuesArray = Object.values(resultObject).filter(
      (value) => value !== ""
    );

    // 예시: index가 30일 때만 해당 컴포넌트를 보이지 않도록 설정
    if (valuesArray.length == 1) {
      this.$set(this.visibleComponents, 32, false);
      this.$set(this.visibleComponents, 33, false);
    } else if (valuesArray.length == 2) {
      this.$set(this.visibleComponents, 34, false);
    }
  },
  async mounted() {
    await this.checkReview();
  },
};
