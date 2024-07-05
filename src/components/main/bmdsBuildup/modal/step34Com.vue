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
        <div class="d-flex justify-content-between" style="width: 37rem">
          <img src="@/assets/basicBulb.png" alt="돋보기" style="width: 50px; height: 50px" />
          <div class="preEB" style="font-size: 35px; color: #f75943">
            STEP 03 :
          </div>
          <div class="preEB" style="font-size: 35px">
            아이디어 컨셉 정의 및 개발
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="width: 18rem !important">
        3-2 : 해결안 설계
      </div>
    </div>

    <div class="modal-wrap">
      <div class="mt-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 28px">
          <span class="primeColor">2.</span> 고객의 욕구를 정확하게 해결하여 더
          나은 고객 경험을 제공하기 위해 해결해야 할 문제를 구체적으로
          정의하고<br />&nbsp;&nbsp;&nbsp;&nbsp;고객관점의 경쟁적이고 차별적인
          솔루션을 제시합니다.
        </label>
      </div>

      <div class="mb-5 d-flex justify-content-center align-items-center" style="height: 44rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">2-1.</span>고객의 불편함을 일으키는
            근본적인 원인을 우리가 해결하고자 하는 문제로 정의하세요.</label>
          <div class="d-flex flex-column justify-content-between align-items-center mt-3"
            style="width: 74rem; height: 39rem">
            <div class="ThirdProperty2">
              <div class="ThirdPropertyLeftRight2 me-1">
                <div class="ThirdPropertyTopDown2" style="height: 29rem">
                  <div class="ThirdPropertyTop2 preSB">선택항목</div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 27rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <!-- <div v-for="(row, index) in rows" :key="index">
                      <select
                        class="form-control transparent-input preM"
                        v-model="row.selectedItem"
                        @change="updateCauses(row, index)"
                        style="color: grey"
                      >
                        <option disabled selected value="">
                          선택하셨던 불편요소를 선택해주세요
                        </option>
                        <option
                          v-for="(item, index) in selectedList"
                          :key="index"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                 
                      </select>
                      <hr class="custom-divider" />
                    </div> -->
                    <div v-for="(row, index) in rows" :key="index">
                      <select class="form-control transparent-input preM text-center" v-model="row.title"
                        @change="updateCauses(row, index)" style="color: grey">
                        <option disabled value="">
                          선택하셨던 불편요소를 선택해주세요
                        </option>
                        <option v-for="(item, idx) in selectedList" :key="idx" :value="item"
                          :selected="item === row.title">
                          {{ item }}
                        </option>
                      </select>
                      <hr class="custom-divider" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="ThirdPropertyLeftRight2 me-1">
                <div class="ThirdPropertyTopDown2" style="height: 29rem">
                  <div class="ThirdPropertyTop2 preSB">원 인</div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 27rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <div v-for="(row, index) in rows" :key="index">
                      <select class="form-control transparent-input preM text-center" v-model="row.cause"
                        @change="handleCauseChange(row, index)" style="color: grey">
                        <option disabled value="">원인을 선택해주세요.</option>
                        <option v-for="(item, idx) in row.filteredCauses" :key="idx" :value="item.cause"
                          :selected="item.cause === row.cause">
                          {{ item.cause }}
                        </option>
                      </select>
                      <hr class="custom-divider" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ThirdPropertyLeftRight2 me-1">
                <div class="ThirdPropertyTopDown2" style="height: 29rem">
                  <div class="ThirdPropertyTop2 preSB">문제정의</div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 27rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <div v-for="(row, index) in rows" :key="index">
                      <textarea class="form-control transparent-input preM" v-model="row.definition" style="resize: none"
                        placeholder="인풋 1"></textarea>
                      <hr class="custom-divider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <textarea placeholder="메모..." v-model="memo" style="height: 100px !important; resize: none; border: none;"
              class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <button @click="addRow">행 추가</button>
      <button @click="removeRow">행 제거</button>
      <!-- <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep34_2">저장</b-button> -->
    </div>
  </div>
</template>

<script>
import step34 from "./js/step34.js";
export default {
  name: "step34Com",
  ...step34,
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

.basicContentBar {
  width: 46rem;
  background-color: #f75943;
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
  color: #f75943;
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
  color: #f75943;
  /* 체크 마크의 색상 지정 */
}

.redPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #f75943;
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
  background: #f75943;
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
  height: 29rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
}

.ThirdProperty2::-webkit-scrollbar {
  width: 12px;
}

.ThirdProperty2::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 10px;
}

.ThirdProperty2::-webkit-scrollbar-track {
  background: none;
}

.ThirdPropertyLeftRight2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 29rem;
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
  background: #f75943;
  border-radius: 30px;
  color: white;
}

.transparent-input textarea {
  resize: none;
  /* 크기 조절 비활성화 */
  padding: 10px;
  /* 상하 패딩으로 수직 중앙에 가깝게 */
}

.d-flex.align-items-center {
  display: flex;
  width: 100%;
  height: 4rem;
}

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
  height: 3rem;
  /* Same height for both */
  /* other styling properties */
}
</style>
