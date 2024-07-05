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
      <div class="basicContentBar preSB">
        3-1 : 고객관점 불편요소(pain point) 탐색 및 원인 분석
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <!-- <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 30px">
          <span class="primeColor">1.</span> 고객관점에서 불편요소를 정의하고
          원인을 분석합니다.
        </label>
      </div> -->
      <div class="my-3 d-flex justify-content-center align-items-center" style="height: 14rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">1-3.</span> 우리가 해결하고자 하는 고객
            불편요소를 선정하고 불편함의 내용을 상세하게 작성한 다음
            우선순위화를 합니다.<br /><span class="fs-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(항목
              선택은 3~4가지 선택을 추천합니다.)</span></label>
          <div class="d-flex flex-column justify-content-between align-items-center" style="width: 74rem; height: 11rem">
            <div class="ThirdProperty">
              <div class="ThirdPropertyLeftRight me-1">
                <div class="ThirdPropertyTopDown" style="height: 12rem">
                  <div class="ThirdPropertyTop preSB">순 위</div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 10rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <div class="form-control transparent-input text-center preM" style="color: grey">
                      1순위
                    </div>
                    <hr class="custom-divider" />
                    <div class="form-control transparent-input text-center preM" style="color: grey">
                      2순위
                    </div>
                    <hr class="custom-divider" />

                    <div class="form-control transparent-input text-center preM" style="color: grey">
                      3순위
                    </div>
                    <hr class="custom-divider" />

                    <div class="form-control transparent-input text-center preM" style="color: grey">
                      4순위
                    </div>
                  </div>
                </div>
              </div>
              <div class="ThirdPropertyLeftRight me-1">
                <div class="ThirdPropertyTopDown" style="height: 12rem">
                  <div class="ThirdPropertyTop preSB">선택 항목</div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 10rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <!-- 첫 번째 select -->
                    <div class="form-control transparent-input preM" style="color: grey" v-html="selectedItem1"></div>
                    <!-- 두 번째 select -->
                    <div class="form-control transparent-input preM" style="color: grey" v-html="selectedItem2"></div>
                    <!-- 세 번째 select -->
                    <div class="form-control transparent-input preM" style="color: grey" v-html="selectedItem3"></div>
                    <!-- 네 번째 select -->
                    <div class="form-control transparent-input preM" style="color: grey" v-html="selectedItem4"></div>
                  </div>
                </div>
              </div>
              <div class="ThirdPropertyLeftRight">
                <div class="ThirdPropertyTopDown" style="height: 12rem">
                  <div class="ThirdPropertyTop preSB">상세 내용</div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 10rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <div type="text" class="form-control transparent-input preM" v-html="description1" />
                    <div type="text" class="form-control transparent-input preM" v-html="description2" />
                    <div type="text" class="form-control transparent-input preM" v-html="description3" />
                    <div type="text" class="form-control transparent-input preM" v-html="description4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-3 d-flex justify-content-center align-items-center" style="height: 11.5rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">1-4.</span>고객의 불편함을 일으키는
            근본적인 원인을 탐색합니다.</label>
          <div class="d-flex flex-column justify-content-between align-items-center" style="width: 74rem; height: 11rem">
            <div class="ThirdProperty2">
              <div class="ThirdPropertyLeftRight2 me-1">
                <div class="ThirdPropertyTopDown2" style="height: 16rem">
                  <div class="ThirdPropertyTop2 preSB">
                    1순위 | {{ selectedItem1 }}
                  </div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 14rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <div class="form-control transparent-input text-center preM" style="color: grey">
                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인1</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 1" v-html="cause1_1.cause"></div>
                      </div>
                      <hr class="custom-divider" />

                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인2</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 2" v-html="cause1_2.cause"></div>
                      </div>
                      <hr class="custom-divider" />

                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인3</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 3" v-html="cause1_3.cause"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ThirdPropertyLeftRight2 me-1">
                <div class="ThirdPropertyTopDown2" style="height: 16rem">
                  <div class="ThirdPropertyTop2 preSB">
                    2순위 |
                    {{ selectedItem2 }}
                  </div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 14rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <div class="form-control transparent-input text-center preM" style="color: grey">
                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인1</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 1" v-html="cause2_1.cause"></div>
                      </div>
                      <hr class="custom-divider" />

                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인2</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 2" v-html="cause2_2.cause"></div>
                      </div>
                      <hr class="custom-divider" />

                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인3</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 3" v-html="cause2_3.cause"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ThirdPropertyLeftRight2 me-1">
                <div class="ThirdPropertyTopDown2" style="height: 16rem">
                  <div class="ThirdPropertyTop2 preSB">
                    3순위 |
                    {{ selectedItem3 }}
                  </div>
                  <div style="
                      padding: 8px;
                      width: 100%;
                      height: 14rem;
                      background: linear-gradient(180deg, #fdc6bf, #fff);
                    ">
                    <div class="form-control transparent-input text-center preM" style="color: grey">
                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인1</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 1" v-html="cause3_1.cause"></div>
                      </div>
                      <hr class="custom-divider" />

                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인2</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 2" v-html="cause3_2.cause"></div>
                      </div>
                      <hr class="custom-divider" />

                      <div class="d-flex align-items-center mb-2">
                        <div class="label pe-2">원인3</div>
                        <div class="form-control transparent-input preM" placeholder="인풋 3" v-html="cause3_3.cause"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step33 from "../modal/js/step33.js";
export default {
  name: "step33Com",
  ...step33,
};
</script>

<style scoped>
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
  min-width: 3rem;
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
</style>
