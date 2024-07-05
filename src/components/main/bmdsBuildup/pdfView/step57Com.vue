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
            <span class="primeColor">2-3.</span> 사용자가 실제로 우리
            제품/서비스를 얼마나 필요로 하는 지와 사용 후 만족도 및 실제
            구매의향을<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;파악
            하여 시장 적합성을 확인하고자 사용자 테스트를 수행합니다.
          </label>
        </div>

        <div class="my-3 justify-content-start align-items-center">
          <div class="mb-5">
            <label for="businessArea" class="preSB form-label fs-4">
              <span class="primeColor">2-3-1.</span>사용자가 우리 제품/서비스를
              사용하면서 정말 필요하다고 느끼고 있나요?</label
            >

            <div class="ps-5">
              <input
                type="radio"
                id="radio57_1_0"
                name="radio57_1"
                value="0"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_0" class="circle-radio preM">0</label>

              <input
                type="radio"
                id="radio57_1_1"
                name="radio57_1"
                value="1"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_1" class="circle-radio preM">1</label>

              <input
                type="radio"
                id="radio57_1_2"
                name="radio57_1"
                value="2"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_2" class="circle-radio preM">2</label>

              <input
                type="radio"
                id="radio57_1_3"
                name="radio57_1"
                value="3"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_3" class="circle-radio preM">3</label>

              <input
                type="radio"
                id="radio57_1_4"
                name="radio57_1"
                value="4"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_4" class="circle-radio preM">4</label>

              <input
                type="radio"
                id="radio57_1_5"
                name="radio57_1"
                value="5"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_5" class="circle-radio preM">5</label>

              <input
                type="radio"
                id="radio57_1_6"
                name="radio57_1"
                value="6"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_6" class="circle-radio preM">6</label>

              <input
                type="radio"
                id="radio57_1_7"
                name="radio57_1"
                value="7"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_7" class="circle-radio preM">7</label>

              <input
                type="radio"
                id="radio57_1_8"
                name="radio57_1"
                value="8"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_8" class="circle-radio preM">8</label>

              <input
                type="radio"
                id="radio57_1_9"
                name="radio57_1"
                value="9"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_9" class="circle-radio preM">9</label>

              <input
                type="radio"
                id="radio57_1_10"
                name="radio57_1"
                value="10"
                @click.prevent
                v-model="q57_1"
              />
              <label for="radio57_1_10" class="circle-radio preM">10</label>
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
              <span class="primeColor">2-3-2.</span>사용자가 우리 제품/서비스를
              사용하면서 정말 필요하다고 느끼는 만족도는 어느 정도
              인가요?</label
            >

            <div class="ps-5">
              <input
                type="radio"
                id="radio57_2_0"
                name="radio57_2"
                value="0"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_0" class="circle-radio preM">0</label>

              <input
                type="radio"
                id="radio57_2_1"
                name="radio57_2"
                value="1"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_1" class="circle-radio preM">1</label>

              <input
                type="radio"
                id="radio57_2_2"
                name="radio57_2"
                value="2"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_2" class="circle-radio preM">2</label>

              <input
                type="radio"
                id="radio57_2_3"
                name="radio57_2"
                value="3"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_3" class="circle-radio preM">3</label>

              <input
                type="radio"
                id="radio57_2_4"
                name="radio57_2"
                value="4"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_4" class="circle-radio preM">4</label>

              <input
                type="radio"
                id="radio57_2_5"
                name="radio57_2"
                value="5"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_5" class="circle-radio preM">5</label>

              <input
                type="radio"
                id="radio57_2_6"
                name="radio57_2"
                value="6"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_6" class="circle-radio preM">6</label>

              <input
                type="radio"
                id="radio57_2_7"
                name="radio57_2"
                value="7"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_7" class="circle-radio preM">7</label>

              <input
                type="radio"
                id="radio57_2_8"
                name="radio57_2"
                value="8"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_8" class="circle-radio preM">8</label>

              <input
                type="radio"
                id="radio57_2_9"
                name="radio57_2"
                value="9"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_9" class="circle-radio preM">9</label>

              <input
                type="radio"
                id="radio57_2_10"
                name="radio57_2"
                value="10"
                @click.prevent
                v-model="q57_2"
              />
              <label for="radio57_2_10" class="circle-radio preM">10</label>
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
              <span class="primeColor">2-3-3.</span>사용자가 우리 제품/서비스를
              실제로 구매할 의향이 얼마나 있나요?</label
            >

            <div class="ps-5">
              <input
                type="radio"
                id="radio57_3_0"
                name="radio57_3"
                value="0"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_0" class="circle-radio preM">0</label>

              <input
                type="radio"
                id="radio57_3_1"
                name="radio57_3"
                value="1"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_1" class="circle-radio preM">1</label>

              <input
                type="radio"
                id="radio57_3_2"
                name="radio57_3"
                value="2"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_2" class="circle-radio preM">2</label>

              <input
                type="radio"
                id="radio57_3_3"
                name="radio57_3"
                value="3"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_3" class="circle-radio preM">3</label>

              <input
                type="radio"
                id="radio57_3_4"
                name="radio57_3"
                value="4"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_4" class="circle-radio preM">4</label>

              <input
                type="radio"
                id="radio57_3_5"
                name="radio57_3"
                value="5"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_5" class="circle-radio preM">5</label>

              <input
                type="radio"
                id="radio57_3_6"
                name="radio57_3"
                value="6"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_6" class="circle-radio preM">6</label>

              <input
                type="radio"
                id="radio57_3_7"
                name="radio57_3"
                value="7"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_7" class="circle-radio preM">7</label>

              <input
                type="radio"
                id="radio57_3_8"
                name="radio57_3"
                value="8"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_8" class="circle-radio preM">8</label>

              <input
                type="radio"
                id="radio57_3_9"
                name="radio57_3"
                value="9"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_9" class="circle-radio preM">9</label>

              <input
                type="radio"
                id="radio57_3_10"
                name="radio57_3"
                value="10"
                @click.prevent
                v-model="q57_3"
              />
              <label for="radio57_3_10" class="circle-radio preM">10</label>
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
            class="score-indicator"
            :style="{ left: indicatorPosition }"
          ></div>
        </div>
      </div>
      <div
        class="w-100 d-flex justify-content-start align-items-center"
        style="margin-left: 8rem"
      >
        <div
          v-if="averageScore < 3"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #ff6e6e">● {{ averageScore }} : </span>지금
          출시하기에는 너무 부족한 점이 많아요 조금 더 고민해 볼까요?
        </div>
        <div
          v-else-if="averageScore >= 3 && averageScore < 6"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #f19b3d">● {{ averageScore }} : </span>고객의
          요구사항이나 불편사항을 다시 한 번 더 확인해 보시면 어떨까요?
        </div>
        <div
          v-else-if="averageScore > 5 && averageScore < 8"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #f7ca0d">● {{ averageScore }} : </span>조금만 더
          보완하시면 좋은 사업 아이템이 될 것 같아요.
        </div>
        <div
          v-else-if="averageScore >= 8 && averageScore < 10"
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #b8e135">● {{ averageScore }} : </span>너무
          좋아요! 지금부터는 사업을 조금 더 구체화 시켜볼까요?
        </div>

        <div
          v-else
          class="preM w-40 p-4 text-center"
          style="background-color: #f8f8fa"
        >
          <span style="color: #13d260">● {{ averageScore }} : </span>완벽해요!
          지금 바로 출시해 주세요!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step57 from "../modal/js/step57.js";
export default {
  name: "step57Com",
  ...step57,
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

.score-indicator {
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

/* 
.d-flex.align-items-center {
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
