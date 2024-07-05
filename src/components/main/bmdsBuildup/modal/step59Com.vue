<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Copyright 2023. MERAKL Inc. all rights reserved.
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 30rem">
          <img src="@/assets/beta/step05사람.png" alt="사람" style="width: 50px; height: 50px" />
          <div class="preEB" style="font-size: 35px; color: #0982d5">
            STEP 05 :
          </div>
          <div class="preEB" style="font-size: 35px">MVP 및 고객 평가</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="width: 37rem !important">
        5-2 : 시장 검증 시나리오 설계 및 고객 반응 평가
      </div>
    </div>

    <div class="modal-wrap">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 25px">
          <span class="primeColor">3.</span> 고객 평가를 진행하면서 얻은
          데이터를 기반으로 제품 또는 서비스를 신속하게 개선하여 시장 최적화된
          제품/서비스를 구현합니다.
        </label>

        <div class="w-100 d-flex justify-content-center align-items-center">
          <div style="width:78rem;">
            <div class="my-3 justify-content-start align-items-center" style="height: 34.5rem">
              <div class="mb-4">
                <label for="businessArea" class="preSB form-label fs-4">
                  <span class="primeColor">3-1.</span>고객 평가에서 얻은 데이터에서
                  우리 제품/서비스에 대한 사용 고객의 중요한 피드백은
                  무엇인가요?</label>
                <div class="memmoImg d-flex">
                  <div style="padding-top: 3rem; margin-right: 2.2rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="feedback59_1"></textarea>
                  </div>

                  <div style="padding-top: 3rem; margin-right: 2.2rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="feedback59_2"></textarea>
                  </div>

                  <div style="padding-top: 3rem; margin-right: 2.2rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="feedback59_3"></textarea>
                  </div>

                  <div style="padding-top: 3rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="feedback59_4"></textarea>
                  </div>
                </div>
              </div>

              <div>
                <label for="businessArea" class="preSB form-label fs-4">
                  <span class="primeColor">3-2.</span>고객의 의견을 어떻게 제품과 서비스에 적용할 것인지를 작성하여 주세요.</label>
                <div class="memmoImg2 d-flex">
                  <div style="padding-top: 3rem; margin-right: 2.2rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="plan59_1"></textarea>
                  </div>

                  <div style="padding-top: 3rem; margin-right: 2.2rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="plan59_2"></textarea>
                  </div>

                  <div style="padding-top: 3rem; margin-right: 2.2rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="plan59_3"></textarea>
                  </div>

                  <div style="padding-top: 3rem">
                    <textarea class="form-control transparent-input preM" style="width: 17rem; height: 9rem"
                      v-model="plan59_4"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <textarea placeholder="메모..." v-model="memo"
          style="width:76rem; height: 100px !important; resize: none; border: none;"
          class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep59">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step59 from "./js/step59.js";
export default {
  name: "step59Com",
  ...step59,
};
</script>

<style scoped>
.modal-wrap {
  width: 81rem;
  height: 41.5rem;
  overflow-y: scroll;
}

.modal-wrap::-webkit-scrollbar {
  width: 12px;
}

.modal-wrap::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 10px;
}

.modal-wrap::-webkit-scrollbar-track {
  background: none;
}

.memmoImg {
  background-image: url("@/assets/buildup/step59.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 76rem;
  height: 13rem;
}

.memmoImg2 {
  background-image: url("@/assets/buildup/step59_1.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 76rem;
  height: 13rem;
}

.circle-radio {
  font-size: 24px;
  margin-right: 3rem;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  /* border: 2px solid #0982d5; */
  text-align: center;
  /* line-height: 30px; */
  cursor: pointer;
  color: black;
  /* 선택되지 않은 상태의 텍스트 색상 */
  background: #f8f8fa;
}

input[type="radio"]:checked+.circle-radio {
  background-color: #f8f8fa;
  color: black;
  /* 선택된 상태의 텍스트 색상 */
  border: 3px solid #0982d5;
}

.basicContentBar {
  width: 46rem;
  background-color: #0982d5;
  color: white;
  border-radius: 12px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholderColor {
  font-size: 20px;
  color: #818181;
}

.primeColor {
  color: #0982d5;
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
input[type="checkbox"] {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
input[type="checkbox"]+label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="checkbox"]+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 4.5px;
  width: 20px;
  /* 체크 표시 크기 조절 */
  height: 20px;
  /* 체크 표시 크기 조절 */
  border: 2px solid #000;
  /* 체크 표시의 외곽선 스타일 지정 */
  background-color: #fff;
  /* 체크 표시의 배경색 지정 */
  border-radius: 4px;
  /* 체크 표시의 둥근 테두리 만들기 */
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
input[type="checkbox"]:checked+label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 6px;
  /* 체크 마크의 높이 조절 */
  color: #0982d5;
  /* 체크 마크의 색상 지정 */
}

.redPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0982d5;
  font-size: 21px;
  color: white;
}

.lightRedProp {
  width: 100%;
  background: #fee2de;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.borderTopBottomGray {
  border-width: 3px 0;
  border-style: solid;
  border-color: #e0d1cf;
}

.transparent-input {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  height: 6rem;
}

.ThirdProperty {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight:nth-child(1) {
  flex-grow: 2;
}

.ThirdPropertyLeftRight:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight:nth-child(3) {
  flex-grow: 5;
}

.ThirdPropertyTopDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0982d5;
  border-radius: 30px;
  color: white;
}

.ThirdtextareaCss {
  padding: 15px;
  width: 100%;
  height: 12rem;
  background: linear-gradient(180deg, #fdc6bf, #fff);
  border: none;
  resize: none;
  outline: none;
}

.custom-divider {
  border: 0;
  /* 기본 테두리 제거 */
  height: 1px;
  /* 선의 두께 */
  background-color: black;
  /* 선의 색상 */
  margin: 0;
  /* 상하 마진 제거 */
}

.ThirdProperty2 {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight2:nth-child(1) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(3) {
  flex-grow: 3;
}

.ThirdPropertyTopDown2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0982d5;
  border-radius: 30px;
  color: white;
}

.transparent-input textarea {
  resize: none;
  /* 크기 조절 비활성화 */
  padding: 10px;
  /* 상하 패딩으로 수직 중앙에 가깝게 */
}

/* .d-flex.align-items-center {
  display: flex;
  width: 100%;
  height: 4rem;
} */

.d-flex.align-items-center>.label {
  flex: 3;
  /* label의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.d-flex.align-items-center>textarea {
  flex: 7;
  /* textarea의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.form-control.transparent-input.preM {
  padding: 0;
  /* 필요한 경우 패딩 조절 */
}

select.form-control,
textarea.form-control {
  height: 6rem;
  /* Same height for both */
  resize: none;
  /* other styling properties */
}

.form-control.transparent-input.preM {
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.form-control.transparent-input.preM:focus {
  border-color: #0982d5;
  box-shadow: 0 0 8px rgba(9, 130, 213, 0.5);
}
</style>
