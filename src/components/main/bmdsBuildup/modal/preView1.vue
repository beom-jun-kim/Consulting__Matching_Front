<template>
  <div>
    <button @click="generatePDF">Generate PDF</button>
    <div class="pdf-container">
      <div v-for="index in 32" :key="index" class="container">
        <component :is="`beta${index}Com`" />
      </div>
    </div>
  </div>
</template>

<script>
const betaComponents = {};

for (let i = 1; i <= 32; i++) {
  betaComponents[`beta${i}Com`] = () =>
    import(`@/components/main/bmdsBeta/pdfView/beta${i}Com.vue`);
}
import html2pdf from "html2pdf.js";
export default {
  components: {
    ...betaComponents,
  },
  methods: {
    generatePDF() {
      // Get the element that you want to convert to PDF
      const element = document.querySelector(".pdf-container");

      // Set options for html2pdf
      const options = {
        margin: 10,
        filename: "bmds.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: [380, 280], orientation: "landscape" }, // [width, height]
      };

      // Use html2pdf to generate the PDF
      html2pdf(element, options);
    },
  },
};
</script>
<style scoped>
@import url("../../../../../public/css/main/styles.css");

.container {
  /* 페이지 브레이크 적용 */
  page-break-after: always;
}
</style>
