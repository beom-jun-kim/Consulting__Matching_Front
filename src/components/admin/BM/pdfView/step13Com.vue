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
      <div class="preSB basicContentBar">1-2 : 고객의 불편사항 파악</div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="my-2">
        <label
          for="businessArea"
          class="preSB form-label"
          style="width: 74rem; font-size: 25px"
        >
          <span class="primeColor">2.</span> 시장내에서 주요하게 사용되고 있는
          기존의 제품/서비스를 조사하여 잠재 수요 고객이 가지고 있는 여러가지
          불편사항과 불충족니즈 및 요구사항을 확인해 봅니다.
        </label>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div>
          <label
            for="businessArea"
            class="preSB form-label2"
            style="width: 74rem; font-size: 27px"
          >
            <span class="primeColor">2-1.</span> 잠재 고객<span
              style="font-size: 17px"
              >(사람 또는 기업)</span
            >이 가지고 있는 불편한 점이나 요구사항 또는 필요로 하는 것들<span
              style="font-size: 17px"
              >(불 충족 니즈)</span
            >이<br />어떠한 게 있을까요?</label
          >
        </div>
        <div class="d-flex justify-content-between m-3" style="width: 78rem">
          <div class="preSB board primeColor fs-4 text-center">
            <div style="width: 10rem">고객의 불만사항(Pain Point)</div>
            <div
              class="bg-light p-2 rounded mb-1 mt-3 d-flex flex-column justify-content-between align-items-center"
              style="height: 23.5rem; width: 21rem"
            >
              <input
                type="text"
                class="inText"
                v-model="pain13_1"
                placeholder="▶ 양이 너무 작아요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="pain13_2"
                placeholder="▶ 가격이 너무 비싸요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="pain13_3"
                placeholder="▶ 안 이뻐요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="pain13_4"
                placeholder="▶ 너무 무거워요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="pain13_5"
                placeholder="▶ 동작이 잘 안되요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="pain13_6"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="pain13_7"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="pain13_8"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
            </div>
          </div>
          <div
            class="preSB d-flex board flex-column primeColor fs-4 text-center"
          >
            <div style="width: 10rem">고객의 요구사항(Requirements)</div>
            <div
              class="bg-light p-2 rounded mb-1 mt-3 d-flex flex-column justify-content-between align-items-center"
              style="height: 23.5rem; width: 21rem"
            >
              <input
                type="text"
                class="inText"
                v-model="req13_1"
                placeholder="▶ 내일까지 배달해 주세요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="req13_2"
                placeholder="▶ 포장을 이쁘게 해주세요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="req13_3"
                placeholder="▶ 조금 더(덜) 달게 해 주세요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="req13_4"
                placeholder="▶ 너무 무거워요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="req13_5"
                placeholder="▶ 동작이 잘 안되요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="req13_6"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="req13_7"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="req13_8"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
            </div>
          </div>
          <div
            class="preSB d-flex board flex-column primeColor fs-4 text-center"
          >
            <div style="width: 11rem">고객의 불충족욕구(Unmet Needs)</div>
            <div
              class="bg-light p-2 rounded mb-1 mt-3 d-flex flex-column justify-content-between align-items-center"
              style="height: 23.5rem; width: 21rem"
            >
              <input
                type="text"
                class="inText"
                v-model="um13_1"
                placeholder="▶ 조금만 더 커졌(작아졌)으면..."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="um13_2"
                placeholder="▶ 조금만 더 오래간다면..."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="um13_3"
                placeholder="▶ 조금만 더 이뻤으면..."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="um13_4"
                placeholder="▶ 조금만 더..."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="um13_5"
                placeholder="▶ 동작이 잘 안되요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="um13_6"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="um13_7"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
              <input
                type="text"
                class="inText"
                v-model="um13_8"
                placeholder="▶ 새로운 기능이 필요해요."
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step13 from "../modal/js/step13.js";
export default {
  name: "step13Com",
  ...step13,
};
</script>

<style scoped>
.inText {
  width: 100%;
  height: 2rem;
  font-size: 17px;
  border: none;
  outline: none;
}

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

.form-label {
  display: inline-block;
  /* 레이블이 인라인 블록 요소처럼 행동하도록 설정 */
  text-indent: -2rem;
  /* 첫 줄을 왼쪽으로 이동하여 들여쓰기를 취소 */
  padding-left: 2rem;
  /* 첫 줄을 제외한 나머지 줄에 들여쓰기 적용 */
  width: calc(100% - 4rem);
  /* 레이블의 너비를 조정하여 줄바꿈 위치를 조정 */
}

.form-label2 {
  display: inline-block;
  text-indent: -2rem;
  width: calc(100% - 4rem);
}

.board {
  width: 25rem;
  height: 29.5rem;
  border: solid 1px rgb(249, 156, 27);
  border-radius: 0.5rem;
  padding: 25px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
