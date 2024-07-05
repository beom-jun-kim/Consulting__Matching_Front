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
          <img
            src="@/assets/beta/step05사람.png"
            alt="사람"
            style="width: 50px; height: 50px"
          />
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

    <div
      class="d-flex flex-column justify-content-between align-items-center"
      style="width: 81rem; height: 41.5rem"
    >
      <div style="width: 76rem">
        <div class="my-3">
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 24px"
          >
            <span class="primeColor">2-4.</span> 사용자가 실제로 우리
            제품/서비스를 사용하면서 편하게 사용하고 있는지, 사용하면서 불편한
            점이나<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개선해야
            할 점은 없는지 기능이나 성능상의 문제점은 없는지를 확인하는 사용성
            평가를 실시합니다.
          </label>
        </div>

        <div class="my-3 justify-content-start align-items-center">
          <div class="mb-5">
            <label for="businessArea" class="preSB form-label fs-4">
              <span class="primeColor">2-4-1.</span>사용자가 우리 제품/서비스를
              얼마나 쉽고 편하게 그리고 효율적으로 사용하나요?</label
            >

            <div class="ps-5">
              <input
                type="radio"
                id="radio58_0"
                name="radio58"
                value="0"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_0" class="circle-radio preM">0</label>

              <input
                type="radio"
                id="radio58_1"
                name="radio58"
                value="1"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_1" class="circle-radio preM">1</label>

              <input
                type="radio"
                id="radio58_2"
                name="radio58"
                value="2"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_2" class="circle-radio preM">2</label>

              <input
                type="radio"
                id="radio58_3"
                name="radio58"
                value="3"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_3" class="circle-radio preM">3</label>

              <input
                type="radio"
                id="radio58_4"
                name="radio58"
                value="4"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_4" class="circle-radio preM">4</label>

              <input
                type="radio"
                id="radio58_5"
                name="radio58"
                value="5"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_5" class="circle-radio preM">5</label>

              <input
                type="radio"
                id="radio58_6"
                name="radio58"
                value="6"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_6" class="circle-radio preM">6</label>

              <input
                type="radio"
                id="radio58_7"
                name="radio58"
                value="7"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_7" class="circle-radio preM">7</label>

              <input
                type="radio"
                id="radio58_8"
                name="radio58"
                value="8"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_8" class="circle-radio preM">8</label>

              <input
                type="radio"
                id="radio58_9"
                name="radio58"
                value="9"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_9" class="circle-radio preM">9</label>

              <input
                type="radio"
                id="radio58_10"
                name="radio58"
                value="10"
                @click.prevent
                v-model="q58_1"
              />
              <label for="radio58_10" class="circle-radio preM">10</label>
            </div>
            <div class="d-flex" style="padding-left: 2.3rem">
              <div class="preM" style="color: #ff6e6e">매우 불필요</div>
              <div class="preM" style="color: #ffda7d; margin-left: 26.7rem">
                보통
              </div>
              <div class="preM" style="color: #13d260; margin-left: 28rem">
                매우 필요
              </div>
            </div>
          </div>

          <!--  -->
          <div class="mb-5">
            <label for="businessArea" class="preSB form-label fs-4">
              <span class="primeColor">2-4-2.</span>사용자가 우리 제품/서비스를
              사용하면서 얼마나 많은 불편함과 개선점을 요구하나요?</label
            >

            <div class="ps-5">
              <input
                type="radio"
                id="radio2_0"
                name="radio2"
                value="0"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_0" class="circle-radio preM">0</label>

              <input
                type="radio"
                id="radio2_1"
                name="radio2"
                value="1"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_1" class="circle-radio preM">1</label>

              <input
                type="radio"
                id="radio2_2"
                name="radio2"
                value="2"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_2" class="circle-radio preM">2</label>

              <input
                type="radio"
                id="radio2_3"
                name="radio2"
                value="3"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_3" class="circle-radio preM">3</label>

              <input
                type="radio"
                id="radio2_4"
                name="radio2"
                value="4"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_4" class="circle-radio preM">4</label>

              <input
                type="radio"
                id="radio2_5"
                name="radio2"
                value="5"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_5" class="circle-radio preM">5</label>

              <input
                type="radio"
                id="radio2_6"
                name="radio2"
                value="6"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_6" class="circle-radio preM">6</label>

              <input
                type="radio"
                id="radio2_7"
                name="radio2"
                value="7"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_7" class="circle-radio preM">7</label>

              <input
                type="radio"
                id="radio2_8"
                name="radio2"
                value="8"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_8" class="circle-radio preM">8</label>

              <input
                type="radio"
                id="radio2_9"
                name="radio2"
                value="9"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_9" class="circle-radio preM">9</label>

              <input
                type="radio"
                id="radio2_10"
                name="radio2"
                value="10"
                @click.prevent
                v-model="q58_2"
              />
              <label for="radio2_10" class="circle-radio preM">10</label>
            </div>
            <div class="d-flex" style="padding-left: 2.3rem">
              <div class="preM" style="color: #ff6e6e">매우 불필요</div>
              <div class="preM" style="color: #ffda7d; margin-left: 26.7rem">
                보통
              </div>
              <div class="preM" style="color: #13d260; margin-left: 28rem">
                매우 필요
              </div>
            </div>
          </div>
          <!--  -->
          <div>
            <label for="businessArea" class="preSB form-label fs-4">
              <span class="primeColor">2-4-3.</span>우리 제품/서비스에 기능이나
              성능상에 문제점이 얼마나 확인이 되고 있나요?</label
            >

            <div class="ps-5">
              <input
                type="radio"
                id="radio3_0"
                name="radio3"
                value="0"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_0" class="circle-radio preM">0</label>

              <input
                type="radio"
                id="radio3_1"
                name="radio3"
                value="1"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_1" class="circle-radio preM">1</label>

              <input
                type="radio"
                id="radio3_2"
                name="radio3"
                value="2"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_2" class="circle-radio preM">2</label>

              <input
                type="radio"
                id="radio3_3"
                name="radio3"
                value="3"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_3" class="circle-radio preM">3</label>

              <input
                type="radio"
                id="radio3_4"
                name="radio3"
                value="4"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_4" class="circle-radio preM">4</label>

              <input
                type="radio"
                id="radio3_5"
                name="radio3"
                value="5"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_5" class="circle-radio preM">5</label>

              <input
                type="radio"
                id="radio3_6"
                name="radio3"
                value="6"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_6" class="circle-radio preM">6</label>

              <input
                type="radio"
                id="radio3_7"
                name="radio3"
                value="7"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_7" class="circle-radio preM">7</label>

              <input
                type="radio"
                id="radio3_8"
                name="radio3"
                value="8"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_8" class="circle-radio preM">8</label>

              <input
                type="radio"
                id="radio3_9"
                name="radio3"
                value="9"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_9" class="circle-radio preM">9</label>

              <input
                type="radio"
                id="radio3_10"
                name="radio3"
                value="10"
                @click.prevent
                v-model="q58_3"
              />
              <label for="radio3_10" class="circle-radio preM">10</label>
            </div>
            <div class="d-flex" style="padding-left: 2.3rem">
              <div class="preM" style="color: #ff6e6e">매우 불필요</div>
              <div class="preM" style="color: #ffda7d; margin-left: 26.7rem">
                보통
              </div>
              <div class="preM" style="color: #13d260; margin-left: 28rem">
                매우 필요
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 d-flex justify-content-center align-items-center">
        <div class="score-bar">
          <div
            class="score-indicator58"
            :style="{ left: indicatorPosition58 }"
          ></div>
        </div>
      </div>
      <div
        class="w-100 d-flex justify-content-start align-items-center"
        style="margin-left: 8rem"
      >
        <div
          v-if="averageScore58 < 3"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #ff6e6e">● {{ averageScore58 }} : </span>지금
          출시하기에는 너무 부족한 점이 많아요 조금 더 고민해 볼까요?
        </div>
        <div
          v-else-if="averageScore58 >= 3 && averageScore58 < 6"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #f19b3d">● {{ averageScore58 }} : </span>고객의
          요구사항이나 불편사항을 다시 한 번 더 확인해 보시면 어떨까요?
        </div>
        <div
          v-else-if="averageScore58 > 5 && averageScore58 < 8"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #f7ca0d">● {{ averageScore58 }} : </span>조금만 더
          보완하시면 좋은 사업 아이템이 될 것 같아요.
        </div>
        <div
          v-else-if="averageScore58 >= 8 && averageScore58 < 10"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #b8e135">● {{ averageScore58 }} : </span>너무
          좋아요! 지금부터는 사업을 조금 더 구체화 시켜볼까요?
        </div>

        <div
          v-else
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #13d260">● {{ averageScore58 }} : </span>완벽해요!
          지금 바로 출시해 주세요!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import step58 from "../modal/js/step58.js";
export default {
  name: "step58Com",
  ...step58,
};
</script>

<style scoped>
.score-bar {
  width: 90%; /* 막대기 전체 너비 */
  height: 20px; /* 막대기 높이 */
  background: linear-gradient(
    to right,
    #ff6e6e,
    #f19b3d,
    #f7ca0d,
    #b8e135,
    #13d260
  );
  position: relative;
}

.score-indicator58 {
  margin-top: -1rem;
  position: absolute;
  top: 0;
  width: 20px; /* 화살표 너비 */
  height: 20px; /* 화살표 높이 */
  border-left: 10px solid transparent; /* 왼쪽 테두리 */
  border-right: 10px solid transparent; /* 오른쪽 테두리 */
  border-top: 20px solid #262626; /* 아래쪽 테두리 (역삼각형 모양 생성) */
  transition: left 0.5s ease; /* 좌우로 이동하는 애니메이션 효과 */
}

input[type="radio"] {
  display: none;
  /* 라디오 버튼 숨김 */
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

input[type="radio"]:checked + .circle-radio {
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
input[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="checkbox"] + label:before {
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
input[type="checkbox"]:checked + label:before {
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

.d-flex.align-items-center > .label {
  flex: 3;
  /* label의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.d-flex.align-items-center > textarea {
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
</style>
