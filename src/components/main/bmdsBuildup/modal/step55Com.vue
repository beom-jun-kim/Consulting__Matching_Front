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

    <div class="d-flex flex-column justify-content-start align-items-center modal-wrap">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label fs-4" style="width:78rem;">
          <span class="primeColor">2.</span> MVP를 고객에게 시현하거나 사용할 수
          있도록 하여 제품/서비스의 시장적합성을 구체적으로 확인할 수 있는 시장
          검증 방안을 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;설계하고 사용자 테스트와 사전 사용성 평가를 수행하여 고객
          데이터를 수집합니다.
        </label>

        <div class="mb-3" style="height:26rem;">
          <div>
            <label for="businessArea" class="preSB form-label fs-4">
              <span class="primeColor">2-1.</span>예비고객 선정하기(10명 ~ 100명을
              기준으로 하면 좋을 것 같아요.)</label>
            <div class="d-flex flex-column justify-content-start align-items-center" style="width: 74rem;height: 23rem;">
              <div class="ThirdProperty2">
                <div class="ThirdPropertyLeftRight2 me-1">
                  <div class="ThirdPropertyTopDown2" style="height: 23rem; width: 12rem">
                    <div class="ThirdPropertyTop2 preSB">그룹명</div>
                    <div style="
                      padding: 8px;
                      width: 100%;
                      
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    ">
                      <input class="form-control transparent-input preM text-center" placeholder="Group A"
                        v-model="groupName55_1" />
                      <hr class="custom-divider" />
                      <input class="form-control transparent-input preM text-center" placeholder="Group B"
                        v-model="groupName55_2" />
                      <hr class="custom-divider" />
                      <input class="form-control transparent-input preM text-center" placeholder="Group C"
                        v-model="groupName55_3" />
                      <hr class="custom-divider" />
                      <input class="form-control transparent-input preM text-center" v-model="groupName55_4" />
                      <hr class="custom-divider" />
                    </div>
                  </div>
                </div>
                <div class="ThirdPropertyLeftRight2 me-1">
                  <div class="ThirdPropertyTopDown2" style="height: 23rem; width: 9rem">
                    <div class="ThirdPropertyTop2 preSB">#수</div>
                    <div style="
                      padding: 8px;
                      width: 100%;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    ">
                      <input class="form-control transparent-input preM text-center" placeholder="15명"
                        v-model="groupCount55_1" />
                      <hr class="custom-divider" />
                      <input class="form-control transparent-input preM text-center" placeholder="15명"
                        v-model="groupCount55_2" />
                      <hr class="custom-divider" />
                      <input class="form-control transparent-input preM text-center" placeholder="15명"
                        v-model="groupCount55_3" />
                      <hr class="custom-divider" />
                      <input class="form-control transparent-input preM text-center" v-model="groupCount55_4" />
                      <hr class="custom-divider" />
                    </div>
                  </div>
                </div>
                <div class="ThirdPropertyLeftRight2 me-1">
                  <div class="ThirdPropertyTopDown2" style="height: 23rem; width: 25rem">
                    <div class="ThirdPropertyTop2 preSB">고객특성</div>
                    <div style="
                      padding: 8px;
                      width: 100%;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    ">
                      <textarea class="form-control transparent-input preM" v-model="customerChar55_1"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="customerChar55_2"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="customerChar55_3"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="customerChar55_4"></textarea>
                      <hr class="custom-divider" />
                    </div>
                  </div>
                </div>
                <div class="ThirdPropertyLeftRight2 me-1">
                  <div class="ThirdPropertyTopDown2" style="height: 23rem; width: 25rem">
                    <div class="ThirdPropertyTop2 preSB">모집방안</div>
                    <div style="
                      padding: 8px;
                      width: 100%;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    ">
                      <textarea class="form-control transparent-input preM" v-model="plan55_1"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="plan55_2"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="plan55_3"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="plan55_4"></textarea>
                      <hr class="custom-divider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <textarea placeholder="메모..." v-model="memo"
          style="width:74rem; height: 100px !important; resize: none; border: none;"
          class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep55">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step55 from "./js/step55.js";
export default {
  name: "step55Com",
  ...step55,
};
</script>

<style scoped>
.modal-wrap {
  width: 81rem;
  height: 41.5rem !important;
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
  height: 5rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  height: 5rem;
  /* Same height for both */
  resize: none;
  /* other styling properties */
}
</style>
