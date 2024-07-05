<template>
  <div>
    <div class="container">
      <NavCom></NavCom>
    </div>
    <div>
      <div class="d-flex justify-content-center">
        <button
          class="preT prBtn"
          @click="isReview == true ? printContent() : openMyModal()"
          style="margin-bottom: 0.5rem; margin-top: 5rem"
        >
          PDF로 전환하기
        </button>
      </div>
      <div v-if="loading" class="loading-overlay">
        <div class="loading-spinner"></div>
        <!-- 로딩 스피너 -->
      </div>
      <!-- 로딩 인디케이터 -->
      <div class="pdf-container" ref="pdfContainer">
        <div
          v-for="index in 32"
          :key="index"
          :id="`container-${index}`"
          class="container"
        >
          <component :is="`beta${index}Com`" />
        </div>
      </div>
    </div>

    <div class="modal" v-if="isModalOpen">
      <div class="d-flex justify-content-end" style="width: 750px">
        <button class="closeBtn" @click="closeModal">X</button>
      </div>
      <div class="modal-content">
        <!-- 모달 내용 -->
        <div
          class="d-flex flex-column justify-content-between align-items-start"
          style="
            width: 100%;
            height: 100%;
            padding: 1rem;
            border: 2px solid black;
            border-radius: 15px;
          "
        >
          <div class="preSB" style="font-size: 18px">
            <span style="font-size: 28px">리뷰작성</span><br />
            고객님의 소중한 후기는 BMDS가 발전할 수 있는 좋은 밑거름이 될
            것입니다.
          </div>
          <div class="satisfaction-container">
            <label for="selectNumber" class="label"
              >만족도 :
              <div class="custom-select">
                <select
                  id="selectNumber"
                  v-model="selectedNumber"
                  class="form-select"
                >
                  <option disabled value="">Select an option</option>
                  <option
                    v-for="number in numbers"
                    :key="number"
                    :value="number"
                  >
                    {{ number }} 점
                  </option>
                </select>
              </div>
            </label>
          </div>

          <textarea
            class="d-flex"
            style="width: 100%; height: 20rem"
            v-model="content"
          ></textarea>
          <div>
            <label class="preM" for="legalAgreement" style="margin-top: 1rem"
              >(주)메라클의 모든 상품 저작권은 (주)메라클에 있습니다. 관련
              컨텐츠 내용을 무단으로 복제, 전송(파일 업로드), 배포, 도용하여
              사용할 경우 사전 경고없이 '민.형사상 법적조치' 등 저작권법에 의한
              처벌을 받을 수 있습니다.<input
                type="checkbox"
                style="margin-left: 0.5rem"
                id="legalAgreement"
                v-model="legalAgreement"
            /></label>
          </div>
          <div style="width: 100%">
            <button
              type="button"
              class="btn btn-primary"
              style="float: right"
              @click="saveReview"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
const betaComponents = {};

for (let i = 1; i <= 32; i++) {
  betaComponents[`beta${i}Com`] = () =>
    import(`@/components/main/bmdsBeta/pdfView/beta${i}Com.vue`);
}

import printJS from "print-js";
import html2canvas from "html2canvas";
import NavCom from "@/common/main/Nav.vue";
import PreViewModal from "./preViewModal.vue";
import BetaService from "@/services/main/BetaService";
import Footer from "@/common/main/Footer.vue";
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
    };
  },
  components: {
    NavCom,
    ...betaComponents,
    PreViewModal,
    Footer,
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
    saveReview() {
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
        BetaService.saveReview(this.$route.params.id, data)
          .then(() => {
            if (
              confirm(
                "저장되었습니다.\n소중한 리뷰 감사합니다.\nPDF로 전환을 시작합니다."
              ) == true
            ) {
              this.closeModal();
              this.printContent();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    async printContent() {
      this.loading = true; // 로딩 시작
      const images = [];
      for (let i = 1; i <= 32; i++) {
        const element = document.getElementById(`container-${i}`);
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL("image/png");
        images.push(image);
      }

      this.printImages(images);
      this.loading = false; // 로딩 종료
    },

    printImages(images) {
      printJS({
        printable: images,
        type: "image",
        imageStyle: "width:100%;",
      });
    },
    checkReview() {
      BetaService.getReview(this.$route.params.id)
        .then((res) => {
          if (res.data) {
            this.isReview = true;
          }
        })
        .catch((e) => {
          console.log("e", e);
        });
    },
  },
  mounted() {
    this.checkReview();
  },
};
</script>
<style scoped>
@import url("../../../../../public/css/main/styles.css");

.container {
  width: 100%;
  /* 프린트 페이지의 너비에 맞게 조정 */
  height: auto;
  /* 높이는 자동으로 설정 */
  page-break-after: always;
  /* 각 컴포넌트 후에 페이지 브레이크 적용 */
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  /* 높은 z-index 값으로 설정 */
}

.loading-spinner {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.prBtn {
  /* background-color: #4caf50; 버튼 기본 배경 색상 */
  background-color: #13a7d7;
  color: white;
  /* 글자 색상 */
  padding: 12px 24px;
  /* 패딩 */
  border: none;
  /* 테두리 제거 */
  border-radius: 25px;
  /* 둥근 모서리 */
  font-size: 18px;
  /* 글자 크기 */
  font-weight: bold;
  /* 글자 두께 */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* 그림자 효과 */
  cursor: pointer;
  /* 커서 모양 */
  /* ...기타 스타일 속성... */
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  /* 색상, 그림자, 변환에 대한 전환 효과 추가 */
  width: 15rem;
}

.prBtn:hover {
  /* background-image: linear-gradient(
    45deg,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  ); 마우스 오버 시 무지개 색 그라디언트 적용 */
  background-color: #13a7d7;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.3);
  /* 마우스 오버 시 그림자 효과 증가 */
  transform: translateY(-4px);
  /* 마우스 오버 시 위로 이동 */
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.prBtn:hover {
  animation: rainbow 1s ease infinite;
  background-size: 200% 200%;
}

.test {
  color: wheat;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 650px;
  /* 내부 모달 창의 너비 조절 */
  height: 620px;
  /* 내부 모달 창의 높이 조절 */
  background-color: white;
  padding: 20px;
  border-radius: 15px;
}

.closeBtn {
  border-radius: 50%;
  border: none;
  background: white;
  font-size: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-select {
  position: relative;
  width: 150px;
  /* Adjust the width as needed */
}

.form-select {
  appearance: none;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
}

.form-select:focus {
  outline: none;
}

/* Add an arrow for styling */
.form-select::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}
.container {
  /* background-image: url("@/assets/워터마크.png"); */
  margin-bottom: 5rem;
}
</style>
