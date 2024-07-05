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
        <div class="d-flex justify-content-between" style="width: 22rem">
          <img
            src="@/assets/bmds3/basicIcon1.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #fa9d1b">
            STEP 01 :
          </div>
          <div class="preEB" style="font-size: 35px">기회탐색</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar">1-1 : 아이템이 속한 시장 이해</div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">1.</span> 준비하고 계신 아이템 관련 시장에
          대한 이해도와 창업자가 보유하고 있는 역량 수준을 파악합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="mb-4">
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-1.</span> 생각하신 아이디어는 어떤
            비즈니스 분야에 속하나요?</label
          >
          <div
            type="text"
            class="form-control bg-light p-2 rounded fs-4 preM"
            id="businessArea"
            style="border-style: none"
            placeholder="ex. 카페, 과일가게, 생활용품, 식자재, 자동차 부품 제조, 생활용품 제조, 어플리케이션 등"
            v-html="q11_1"
          ></div>
        </div>
        <div class="mb-4">
          <label class="preSB form-label fs-3"
            ><span class="primeColor">1-2.</span> 관련 시장에 대해 얼마나
            이해하고 계시나요?</label
          >
          <div
            class="d-flex bg-light p-2 rounded align-items-center"
            style="width: 75rem; height: 3rem"
          >
            <div class="form-check ms-3">
              <input
                class="form-check-input ga"
                type="radio"
                id="radio11_1"
                name="radio11"
                value="전혀몰라요"
                v-model="q11_2"
                :disabled="q11_2 !== '전혀몰라요'"
              />
              <label class="preM form-check-label fs-4" for="radio11_1">
                가. 전혀 몰라요
              </label>
            </div>
            <div class="form-check ms-5">
              <input
                class="preM form-check-input ga"
                type="radio"
                id="radio11_2"
                name="radio1"
                value="경험이있어요"
                v-model="q11_2"
                :disabled="q11_2 !== '경험이있어요'"
              />
              <label class="form-check-label preM fs-4" for="radio11_2">
                나. 경험이 있어요
              </label>
            </div>
            <div class="form-check ms-5">
              <input
                class="preM form-check-input ga"
                name="radio11_3"
                type="radio"
                id="radio11"
                value="전문가수준이에요"
                v-model="q11_2"
                :disabled="q11_2 !== '전문가수준이에요'"
              />
              <label class="form-check-label preM fs-4" for="radio11_3">
                다. 전문가 수준이에요
              </label>
            </div>
          </div>
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-3"
            ><span class="preSB primeColor">1-3.</span> 아이디어를 구현하고
            실행하는 데 필요로 하는 역량을 어느정도 보유하고 계시나요?</label
          >
          <div
            class="d-flex bg-light p-3 rounded align-items-center"
            style="width: 75rem; height: 17.5rem"
          >
            <div
              class="d-flex flex-column justify-content-center align-items-center"
              style="width: 55rem; height: 100%"
            >
              <div
                class="d-flex justify-content-start align-items-center"
                style="width: 100%"
              >
                <div
                  class="d-flex justify-content-between align-items-center"
                  style="width: 30rem"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                    style="width: 6rem"
                  >
                    <div class="numBtn">1</div>
                    <div class="preM">매우 약함</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                    style="width: 4rem"
                  >
                    <div class="numBtn">2</div>
                    <div class="preM">약함</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                    style="width: 4rem"
                  >
                    <div class="numBtn">3</div>
                    <div class="preM">보통</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                    style="width: 4rem"
                  >
                    <div class="numBtn">4</div>
                    <div class="preM">강함</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                    style="width: 6rem"
                  >
                    <div class="numBtn">5</div>
                    <div class="preM">매우 강함</div>
                  </div>
                </div>
              </div>
              <hr
                style="width: 100%; height: 1px; border-bottom: 1px solid black"
              />
              <div class="d-flex" style="width: 100%">
                <div
                  class="d-flex flex-column justify-content-start align-items-start"
                  style="width: 50%"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupA1"
                      v-model="q3a"
                      value="1"
                      name="groupA"
                      :disabled="q3a !== '1'"
                    />
                    <label for="groupA1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupA2"
                      v-model="q3a"
                      value="2"
                      name="groupA"
                      :disabled="q3a !== '2'"
                    />
                    <label for="groupA2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupA3"
                      v-model="q3a"
                      value="3"
                      name="groupA"
                      :disabled="q3a !== '3'"
                    />
                    <label for="groupA3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupA4"
                      v-model="q3a"
                      value="4"
                      name="groupA"
                      :disabled="q3a !== '4'"
                    />
                    <label for="groupA4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupA5"
                      v-model="q3a"
                      value="5"
                      name="groupA"
                      :disabled="q3a !== '5'"
                    />
                    <label for="groupA5" class="numBtn">5</label>
                    <div class="preM mx-3">A.비즈니스 이해력</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-3"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupB1"
                      v-model="q3b"
                      value="1"
                      name="groupB"
                      :disabled="q3b !== '1'"
                    />
                    <label for="groupB1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupB2"
                      v-model="q3b"
                      value="2"
                      name="groupB"
                      :disabled="q3b !== '2'"
                    />
                    <label for="groupB2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupB3"
                      v-model="q3b"
                      value="3"
                      name="groupB"
                      :disabled="q3b !== '3'"
                    />
                    <label for="groupB3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupB4"
                      v-model="q3b"
                      value="4"
                      name="groupB"
                      :disabled="q3b !== '4'"
                    />
                    <label for="groupB4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupB5"
                      v-model="q3b"
                      value="5"
                      name="groupB"
                      :disabled="q3b !== '5'"
                    />
                    <label for="groupB5" class="numBtn">5</label>
                    <div class="preM mx-3">B.영업/마케팅 및 판매 능력</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center my-3"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupC1"
                      v-model="q3c"
                      value="1"
                      name="groupC"
                      :disabled="q3c !== '1'"
                    />
                    <label for="groupC1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupC2"
                      v-model="q3c"
                      value="2"
                      name="groupC"
                      :disabled="q3c !== '2'"
                    />
                    <label for="groupC2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupC3"
                      v-model="q3c"
                      value="3"
                      name="groupC"
                      :disabled="q3c !== '3'"
                    />
                    <label for="groupC3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupC4"
                      v-model="q3c"
                      value="4"
                      name="groupC"
                      :disabled="q3c !== '4'"
                    />
                    <label for="groupC4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupC5"
                      v-model="q3c"
                      value="5"
                      name="groupC"
                      :disabled="q3c !== '5'"
                    />
                    <label for="groupC5" class="numBtn">5</label>
                    <div class="preM mx-3">C.생산 및 제조 역량</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupD1"
                      v-model="q3d"
                      value="1"
                      :disabled="q3d !== '1'"
                      name="groupD"
                    />
                    <label for="groupD1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupD2"
                      v-model="q3d"
                      value="2"
                      :disabled="q3d !== '2'"
                      name="groupD"
                    />
                    <label for="groupD2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupD3"
                      v-model="q3d"
                      value="3"
                      :disabled="q3d !== '3'"
                      name="groupD"
                    />
                    <label for="groupD3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupD4"
                      v-model="q3d"
                      value="4"
                      :disabled="q3d !== '4'"
                      name="groupD"
                    />
                    <label for="groupD4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupD5"
                      v-model="q3d"
                      value="5"
                      :disabled="q3d !== '5'"
                      name="groupD"
                    />
                    <label for="groupD5" class="numBtn">5</label>
                    <div class="preM mx-3">D.보유 기술 및 노하우 역량</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupE1"
                      v-model="q3e"
                      value="1"
                      :disabled="q3e !== '1'"
                      name="groupE"
                    />
                    <label for="groupE1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupE2"
                      v-model="q3e"
                      value="2"
                      :disabled="q3e !== '2'"
                      name="groupE"
                    />
                    <label for="groupE2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupE3"
                      v-model="q3e"
                      value="3"
                      :disabled="q3e !== '3'"
                      name="groupE"
                    />
                    <label for="groupE3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupE4"
                      v-model="q3e"
                      value="4"
                      :disabled="q3e !== '4'"
                      name="groupE"
                    />
                    <label for="groupE4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupE5"
                      v-model="q3e"
                      value="5"
                      :disabled="q3e !== '5'"
                      name="groupE"
                    />
                    <label for="groupE5" class="numBtn">5</label>
                    <div class="preM mx-3">E.리더십과 팀 빌딩 수준</div>
                  </div>
                </div>
                <div
                  class="d-flex flex-column justify-content-start align-items-start"
                  style="width: 50%"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupF1"
                      v-model="q3f"
                      value="1"
                      :disabled="q3f !== '1'"
                      name="groupF"
                    />
                    <label for="groupF1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupF2"
                      v-model="q3f"
                      value="2"
                      :disabled="q3f !== '2'"
                      name="groupF"
                    />
                    <label for="groupF2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupF3"
                      v-model="q3f"
                      value="3"
                      :disabled="q3f !== '3'"
                      name="groupF"
                    />
                    <label for="groupF3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupF4"
                      v-model="q3f"
                      value="4"
                      :disabled="q3f !== '4'"
                      name="groupF"
                    />
                    <label for="groupF4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupF5"
                      v-model="q3f"
                      value="5"
                      :disabled="q3f !== '5'"
                      name="groupF"
                    />
                    <label for="groupF5" class="numBtn">5</label>
                    <div class="preM mx-3">F.도전정신과 적극적인 참여</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-3"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupG1"
                      v-model="q3g"
                      value="1"
                      :disabled="q3g !== '1'"
                      name="groupG"
                    />
                    <label for="groupG1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupG2"
                      v-model="q3g"
                      value="2"
                      :disabled="q3g !== '2'"
                      name="groupG"
                    />
                    <label for="groupG2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupG3"
                      v-model="q3g"
                      value="3"
                      :disabled="q3g !== '3'"
                      name="groupG"
                    />
                    <label for="groupG3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupG4"
                      v-model="q3g"
                      value="4"
                      :disabled="q3g !== '4'"
                      name="groupG"
                    />
                    <label for="groupG4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupG5"
                      v-model="q3g"
                      value="5"
                      :disabled="q3g !== '5'"
                      name="groupG"
                    />
                    <label for="groupG5" class="numBtn">5</label>
                    <div class="preM mx-3">G.보유 자금 수준</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center my-3"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupH1"
                      v-model="q3h"
                      value="1"
                      :disabled="q3h !== '1'"
                      name="groupH"
                    />
                    <label for="groupH1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupH2"
                      v-model="q3h"
                      value="2"
                      :disabled="q3h !== '2'"
                      name="groupH"
                    />
                    <label for="groupH2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupH3"
                      v-model="q3h"
                      value="3"
                      :disabled="q3h !== '3'"
                      name="groupH"
                    />
                    <label for="groupH3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupH4"
                      v-model="q3h"
                      value="4"
                      :disabled="q3h !== '4'"
                      name="groupH"
                    />
                    <label for="groupH4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupH5"
                      v-model="q3h"
                      value="5"
                      :disabled="q3h !== '5'"
                      name="groupH"
                    />
                    <label for="groupH5" class="numBtn">5</label>
                    <div class="preM mx-3">H.커뮤니케이션 스킬(설득력)</div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupI1"
                      v-model="q3i"
                      value="1"
                      :disabled="q3i !== '1'"
                      name="groupI"
                    />
                    <label for="groupI1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupI2"
                      v-model="q3i"
                      value="2"
                      :disabled="q3i !== '2'"
                      name="groupI"
                    />
                    <label for="groupI2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupI3"
                      v-model="q3i"
                      value="3"
                      :disabled="q3i !== '3'"
                      name="groupI"
                    />
                    <label for="groupI3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupI4"
                      v-model="q3i"
                      value="4"
                      :disabled="q3i !== '4'"
                      name="groupI"
                    />
                    <label for="groupI4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupI5"
                      v-model="q3i"
                      value="5"
                      :disabled="q3i !== '5'"
                      name="groupI"
                    />
                    <label for="groupI5" class="numBtn">5</label>
                    <div class="preM mx-3">
                      I.중ㆍ장기적인 비전과 목표 설정 능력
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupJ1"
                      v-model="q3j"
                      value="1"
                      :disabled="q3j !== '1'"
                      name="groupJ"
                    />
                    <label for="groupJ1" class="numBtn">1</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupJ2"
                      v-model="q3j"
                      value="2"
                      :disabled="q3j !== '2'"
                      name="groupJ"
                    />
                    <label for="groupJ2" class="numBtn">2</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupJ3"
                      v-model="q3j"
                      value="3"
                      :disabled="q3j !== '3'"
                      name="groupJ"
                    />
                    <label for="groupJ3" class="numBtn">3</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupJ4"
                      v-model="q3j"
                      value="4"
                      :disabled="q3j !== '4'"
                      name="groupJ"
                    />
                    <label for="groupJ4" class="numBtn">4</label>
                    <input
                      class="alphabet"
                      type="radio"
                      id="groupJ5"
                      v-model="q3j"
                      value="5"
                      :disabled="q3j !== '5'"
                      name="groupJ"
                    />
                    <label for="groupJ5" class="numBtn">5</label>
                    <div class="preM mx-3">J.서비스 마인드</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-center align-items-center"
              style="width: 20rem; height: 100%"
            >
              <RadarChart
                :key="updateChart"
                :data="chartData"
                :options="chartOptions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import step11 from "../modal/js/step11.js";
export default {
  name: "step11Com",
  ...step11,
};
</script>

<style scoped>
.basicContentBar {
  width: 25rem;
  background-color: rgb(249, 156, 27);
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: rgb(249, 156, 27);
}

.form-control {
  width: 75rem;
  height: 3rem;
}

/* 체크박스 크기 변경 */

/* 체크 표시의 크기와 색상 변경 */
.form-check-input:checked {
  background-color: rgb(249, 156, 27);
  /* 부트스트랩 성공 색 */
  border-color: rgb(249, 156, 27);
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
.ga {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
.ga + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
.ga + label:before {
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
.ga:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  position: absolute;
  left: 0;
  top: 4.5px;
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 40px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 0;
  /* 체크 마크의 높이 조절 */
  color: rgb(249, 156, 27);
  /* 체크 마크의 색상 지정 */
}

.numBtn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.alphabet {
  display: none;
}

.numBtn.selected::before {
}

.alphabet:checked + label:before {
  content: "\2713";
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  color: rgb(249, 156, 27);
  margin-top: -25px;
}
</style>
