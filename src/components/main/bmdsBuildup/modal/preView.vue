<template>
  <div>
    <NavCom />
    <div>
      <div class="d-flex justify-content-center mb-5 transformBtn">
        <button class="preT prBtn" @click="isReview == false ? printContent() : openMyModal()"
          style="margin-bottom: 0.5rem; margin-top: 5rem">
          PDF로 전환하기
        </button>
      </div>
      <div class="container w-100 d-flex justify-content-end align-items-center mb-3">
        <button type="button" class="preT prBtn2" @click="listDetail">뒤로가기</button>
      </div>
      <div v-if="loading" class="loading-overlay">
        <div class="loading-message preEB me-3" style="color: #e0e0e0; font-size: 20px">
          PDF전환중...: {{ currentLoadingIndex }} / 52
        </div>
        <div class="loading-bar-container">
          <div :style="{ width: `${(currentLoadingIndex / 52) * 100}%` }" class="loading-bar"></div>
        </div>
      </div>
      <!-- 로딩 스피너 -->

      <!-- 로딩 인디케이터 -->
      <!-- <div class="pdf-container" ref="pdfContainer">
        <div v-for="index in 50" :key="index" :id="`container-${index}`" class="container p-2" :style="index === 1
          ? 'border-top: 1px #b4b4b4 solid; border-bottom: 2px #b4b4b4 solid'
          : 'border-bottom: 2px #b4b4b4 solid'
          ">
          <component :is="componentMap[index]" />
        </div>
      </div> -->
      <div class="pdf-container" ref="pdfContainer">
        <div v-for="index in 52" :key="index" :id="`container-${index}`" class="container p-2"
          :style="getBorderStyle(index)">
          <template v-if="visibleComponents[index]">
            <component :is="componentMap[index]" />
          </template>
        </div>
      </div>
    </div>

    <div class="modal" v-if="isModalOpen">
      <div class="d-flex justify-content-end" style="width: 750px">
        <button class="closeBtn" @click="closeModal">X</button>
      </div>
      <div class="modal-content">
        <!-- 모달 내용 -->
        <div class="d-flex flex-column justify-content-between align-items-start" style="
            width: 100%;
            height: 100%;
            padding: 1rem;
            border: 2px solid black;
            border-radius: 15px;
          ">
          <div class="preSB" style="font-size: 18px">
            <span style="font-size: 28px">리뷰작성</span><br />
            고객님의 소중한 후기는 BMDS가 발전할 수 있는 좋은 밑거름이 될
            것입니다.
          </div>
          <div class="satisfaction-container">
            <label for="selectNumber" class="label">만족도 :
              <div class="custom-select">
                <select id="selectNumber" v-model="selectedNumber" class="form-select">
                  <option disabled value="">Select an option</option>
                  <option v-for="number in numbers" :key="number" :value="number">
                    {{ number }} 점
                  </option>
                </select>
              </div>
            </label>
          </div>

          <textarea class="d-flex" style="width: 100%; height: 20rem" v-model="content"></textarea>
          <div>
            <label class="preM" for="legalAgreement" style="margin-top: 1rem">(주)메라클의 모든 상품 저작권은 (주)메라클에 있습니다. 관련
              컨텐츠 내용을 무단으로 복제, 전송(파일 업로드), 배포, 도용하여
              사용할 경우 사전 경고없이 '민.형사상 법적조치' 등 저작권법에 의한
              처벌을 받을 수 있습니다.<input type="checkbox" style="margin-left: 0.5rem" id="legalAgreement"
                v-model="legalAgreement" /></label>
          </div>
          <div style="width: 100%">
            <button type="button" class="btn btn-primary" style="float: right" @click="saveReview">
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
import preView from "@/components/main/bmdsBuildup/modal/js/preView.js";
export default {
  ...preView,
};
</script>

<style scoped>
@import url("../../../../../public/css/main/styles.css");

.container {
  width: 100%;
  height: auto;
}

/* .container:not(:last-child) {
  page-break-after: always;
} */

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

.loading-bar-container {
  width: 80%;
  background-color: #e0e0e0;
  border-radius: 25px;
  padding: 3px;
}

.loading-bar {
  height: 20px;
  /* background-color: #3498db; */
  border-radius: 20px;
  width: 0%;
  /* 초기 너비 */
  transition: width 0.5s ease;
  background-image: linear-gradient(45deg,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red);
  background-size: 400% 400%;

  /* 애니메이션 추가 */
  animation: gradient 0.5s ease infinite;
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
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
  background-color: #13a7d7;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
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

.prBtn2 {
  background-color: #13a7d7;
  color: white;
  padding: 8px 24px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
}

.prBtn2:hover {
  animation: rainbow 1s ease infinite;
  background-size: 200% 200%;
  background-color: #13a7d7;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(-4px);
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
  /* margin-bottom: 5rem; */
}
</style>
