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
      <div class="preSB basicContentBar">1-3 : 아이템 해결 가능성 확인</div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">3.</span> 고객의 입장에서 불만요소<span
            style="font-size: 18px"
            >(Pain Point)</span
          >
          개선에 대한 충분한 비용 지불 의사를 확인합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <label
            for="businessArea"
            class="preSB form-label2"
            style="width: 74rem; font-size: 27px"
          >
            <span class="primeColor">3-1.</span> 고객의 불편함과 요구사항 그리고
            불 충족 니즈 가운데에 우리가 해결 할 수 있는 문제는
            무엇일까요?</label
          >
        </div>
        <div
          class="d-flex flex-column justify-content-between align-items-center m-3"
          style="width: 78rem"
        >
          <div
            class="d-flex justify-content-between align-items-center mb-3"
            style="width: 100%"
          >
            <div
              class="preSB w-50 d-flex justify-content-center align-items-center"
              style="font-size: 25px; color: #fa9d1b"
            >
              고객의 불편함 요소
            </div>
            <div
              class="preSB w-50 d-flex justify-content-center align-items-center"
              style="font-size: 25px; color: #fa9d1b"
            >
              경쟁사 제품의 단점
            </div>
          </div>
          <div
            class="d-flex flex-column justify-content-between"
            style="width: 100%; height: 18rem"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                1순위
              </div>
              <input
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="pain15_1"
                disabled
              />
              <div
                class="d-flex justify-content-center align-items-center"
                style="width: 7rem; height: 3rem"
              >
                <img
                  src="../../../../assets/buildup/arrow.png"
                  alt="화살표"
                  class="arrowImg"
                  style="width: 7rem; height: 2rem"
                />
              </div>
              <input
                class="text-end"
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="disadvantage15_1"
                disabled
              />
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                1순위
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                2순위
              </div>
              <input
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="pain15_2"
                disabled
              />
              <div
                class="d-flex justify-content-center align-items-center"
                style="width: 7rem; height: 3rem"
              >
                <img
                  src="../../../../assets/buildup/arrow.png"
                  alt="화살표"
                  class="arrowImg"
                  style="width: 7rem; height: 2rem"
                />
              </div>
              <input
                class="text-end"
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="disadvantage15_2"
                disabled
              />
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                2순위
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                3순위
              </div>
              <input
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="pain15_3"
                disabled
              />
              <div
                class="d-flex justify-content-center align-items-center"
                style="width: 7rem; height: 3rem"
              >
                <img
                  src="../../../../assets/buildup/arrow.png"
                  alt="화살표"
                  class="arrowImg"
                  style="width: 7rem; height: 2rem"
                />
              </div>
              <input
                class="text-end"
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="disadvantage15_3"
                disabled
              />
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                3순위
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                4후보
              </div>
              <input
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="pain15_4"
                disabled
              />
              <div
                class="d-flex justify-content-center align-items-center"
                style="width: 7rem; height: 3rem"
              >
                <img
                  src="../../../../assets/buildup/arrow.png"
                  alt="화살표"
                  class="arrowImg"
                  style="width: 7rem; height: 2rem"
                />
              </div>
              <input
                class="text-end"
                type="text"
                style="width: 30.5rem; height: 3rem; border: 2px solid #fa9d1b"
                v-model="disadvantage15_4"
                disabled
              />
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="
                  width: 5rem;
                  height: 3rem;
                  color: #fa9d1b;
                  font-size: 20px;
                "
              >
                4후보
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mb-4 d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <label
            for="businessArea"
            class="preSB form-label2"
            style="width: 74rem; font-size: 27px"
          >
            <span class="primeColor">3-2.</span> 해결이 될 경우 고객이 우리 제품
            또는 서비스를 구매할 가능성은 충분히 있을까요?</label
          >
        </div>
        <div
          class="d-flex bg-light p-2 rounded align-items-center"
          style="width: 74rem; height: 5rem"
        >
          <div class="form-check ms-3">
            <input
              class="form-check-input ga"
              type="radio"
              id="marketUnderstanding1"
              name="marketUnderstanding1"
              value="잘모르겠어요"
              v-model="cPoint15_1"
              :disabled="cPoint15_1 !== '잘모르겠어요'"
            />
            <label
              class="preM form-check-label fs-4"
              for="marketUnderstanding1"
            >
              가. 잘 모르겠어요
            </label>
          </div>
          <div class="form-check ms-5">
            <input
              class="preM form-check-input ga"
              type="radio"
              id="marketUnderstanding2"
              name="marketUnderstanding1"
              value="그럴수있을것같아요"
              v-model="cPoint15_1"
              :disabled="cPoint15_1 !== '그럴수있을것같아요'"
            />
            <label
              class="form-check-label preM fs-4"
              for="marketUnderstanding2"
            >
              나. 그럴 수 있을 것 같아요
            </label>
          </div>
          <div class="form-check ms-5">
            <input
              class="preM form-check-input ga"
              name="marketUnderstanding1"
              type="radio"
              id="marketUnderstanding3"
              value="충분히그럴거에요"
              v-model="cPoint15_1"
              :disabled="cPoint15_1 !== '충분히그럴거에요'"
            />
            <label
              class="form-check-label preM fs-4"
              for="marketUnderstanding3"
            >
              다. 충분히 그럴거에요
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step15 from "../modal/js/step15.js";
export default {
  name: "step15Com",
  ...step15,
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

.arrowImg {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
</style>
