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
        <div class="d-flex justify-content-between" style="width: 38rem">
          <img
            src="@/assets/선물.png"
            alt="선물"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #fe7403">
            STEP 02 :
          </div>
          <div class="preEB" style="font-size: 35px">
            아이디에이션(아이템 선정)
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar" style="background-color: #fe7403">
        2-2 : 고객 페르소나 설계(B2B)
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="mb-5">
        <div class="mb-3">
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">2.</span> 우리가 생각하는 고객을
            그려봅니다.
            <span style="font-size: 17px">(B2B 타입 페르소나 설계)</span></label
          >
          <div class="d-flex justify-content-between m-3">
            <div class="d-flex board flex-column primeColor fs-4 text-center">
              <div class="d-flex flex-column mb-5 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img
                      class="me-3"
                      src="@/assets/buildup/industryClassification.png"
                      alt="산업분류"
                      style="width: 50px; height: 50px"
                    />
                    <span class="preSB fs-3" style="color: black">
                      산업분류</span
                    >
                  </div>
                  <div
                    class="preM form-control bg-light p-2 rounded"
                    style="
                      border-style: none;
                      width: 20rem;
                      height: 2.5rem;
                      resize: none;
                    "
                    placeholder="*"
                    v-html="category23_1"
                  ></div>
                  <div
                    type="text"
                    class="preM form-control bg-light p-2 rounded"
                    style="border-style: none; width: 20rem; height: 2.5rem"
                    placeholder="상세 업종을 작성해주세요."
                    v-html="detailCategory23_1"
                  />
                </div>
              </div>
              <div class="d-flex flex-column mb-4 mt-1 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img
                      class="me-3"
                      src="@/assets/buildup/companySize.png"
                      alt="기업규모"
                      style="width: 50px; height: 50px"
                    />
                    <span class="preSB fs-3" style="color: black">
                      기업규모</span
                    >
                  </div>
                  <div
                    class="preM form-control bg-light p-2 rounded"
                    style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    "
                    placeholder="*"
                    v-html="scale23_1"
                  ></div>
                </div>
              </div>
              <div class="d-flex flex-column mt-5 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img
                      class="me-3"
                      src="@/assets/buildup/geographicalLocation.png"
                      alt="지리적 위치"
                      style="width: 50px; height: 50px"
                    />
                    <span class="preSB fs-3" style="color: black">
                      지리적 위치</span
                    >
                  </div>
                  <div
                    class="preM form-control bg-light p-2 rounded"
                    style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    "
                    placeholder="*"
                    v-html="logical23_1"
                  ></div>
                </div>
              </div>
            </div>
            <div class="d-flex board flex-column primeColor fs-4 justify-item-">
              <img
                width="627px"
                height="519px"
                src="@/assets/buildup/persona.png"
                alt="페르소나"
              />
            </div>
            <div class="d-flex board flex-column primeColor fs-4 text-start">
              <div class="d-flex flex-column mb-5">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img
                      class="me-3"
                      src="@/assets/buildup/purposeOfPurchase.png"
                      alt="구매 용도"
                      style="width: 50px; height: 50px"
                    />
                    <span class="preSB fs-3" style="color: black">
                      구매 용도</span
                    >
                  </div>
                  <div
                    class="preM form-control bg-light p-2 rounded"
                    style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    "
                    placeholder="*"
                    v-html="goal23_1"
                  ></div>
                </div>
              </div>
              <div class="d-flex flex-column mb-4 mt-1 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img
                      class="me-3"
                      src="@/assets/buildup/rightToPurchaseDecision.png"
                      alt="구매 결정권"
                      style="width: 50px; height: 50px"
                    />
                    <span class="preSB fs-3" style="color: black">
                      구매 결정권</span
                    >
                  </div>
                  <div
                    class="preM form-control bg-light p-2 rounded"
                    style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    "
                    placeholder="*"
                    v-html="selected23_1"
                  ></div>
                </div>
              </div>
              <div class="d-flex flex-column mt-5 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img
                      class="me-3"
                      src="@/assets/buildup/purchaseCycle.png"
                      alt="구매 주기"
                      style="width: 50px; height: 50px"
                    />
                    <span class="preSB fs-3" style="color: black">
                      구매 주기</span
                    >
                  </div>
                  <div
                    class="preM form-control bg-light p-2 rounded"
                    style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    "
                    placeholder="*"
                    v-html="cycle23_1"
                  ></div>
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
import step23 from "../modal/js/step23.js";
export default {
  name: "step23Com",
  ...step23,
};
</script>

<style scoped>
.basicContentBar {
  width: 24rem;
  height: 3.5rem;
  background-color: rgb(249, 156, 27);
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: #fe7403;
}

.form-control {
  width: 78rem;
  height: 5rem;
}

/* 체크박스 크기 변경 */

/* 체크 표시의 크기와 색상 변경 */
.form-check-input:checked {
  background-color: rgb(249, 156, 27);
  /* 부트스트랩 성공 색 */
  border-color: rgb(249, 156, 27);
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
input[type="radio"] {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
input[type="radio"] + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="radio"] + label:before {
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
input[type="radio"]:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
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
</style>
