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
          <img
            src="@/assets/basicBulb.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
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
      <div class="basicContentBar preSB mb-4" style="width: 35rem">
        3-3 : 시장 적합성(KBF) 및 적응성 설계(4P)
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="mt-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">3.</span> 우리가 제시한 해결안과 고객의 핵심
          구매요소의 적합성을 확인하고 우리 제품<span style="font-size: 17px"
            >(서비스)</span
          >의 시장 수용성을 높이기<br />위해 고객과의 원활한 소통 방법을
          설계합니다.
        </label>
      </div>
      <div
        class="mb-3 d-flex justify-content-center align-items-center"
        style="height: 36rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">3-1.</span> 고객문제에 대한 우리의 해결안이
            수요 고객에게 결정적인 구매 요소를 충분히 제공하고 있나요?<br /><span
              style="font-size: 17px"
              >(핵심 구매 요소(Key Buying Factor)를 설계합니다.)</span
            ></label
          >
          <div class="d-flex flex-column align-items-center">
            <div
              class="orangePropertyTop preSB"
              style="
                width: 24rem;
                font-size: 20px;
                z-index: 3;
                background: #f75943;
              "
            >
              핵심 구매 요소(key buying factor)
            </div>
            <div
              class="d-flex flex-column justify-content-between align-items-start"
              style="
                width: 100%;
                height: 10rem;
                border: 1px solid rgba(0, 0, 0, 0.5);
                border-radius: 15px;
                margin-top: -1rem;
                z-index: 1;
                padding: 2rem 3.5rem 1rem;
              "
            >
              <div
                class="d-flex flex-column justify-content-between align-items-start"
              >
                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check" style="padding-left: 0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step12_1"
                      value="특별한기능"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('특별한기능')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_1">
                      특별한 기능
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step12_2"
                      value="경쟁력있는성능"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('경쟁력있는성능')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_2">
                      경쟁력 있는 성능
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step12_3"
                      value="우수한품질"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('우수한품질')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_3">
                      우수한 품질
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step12_4"
                      value="선호하는디자인"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('선호하는디자인')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_4">
                      선호하는 디자인
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step12_5"
                      value="가격경쟁력"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('가격경쟁력')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_5">
                      가격 경쟁력
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step12_6"
                      value="신속하고정확한서비스"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="
                        !step36CheckList.includes('신속하고정확한서비스')
                      "
                    />
                    <label class="preM form-check-label fs-5" for="step12_6">
                      신속하고 정확한 서비스
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-start">
                  <div class="form-check" style="padding-left: 0">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step12_7"
                      value="구매의용이성"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('구매의용이성')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_7">
                      구매의 용이성
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step12_8"
                      value="필요한정보제공력"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('필요한정보제공력')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_8">
                      필요한 정보 제공력
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step12_9"
                      value="고객경험담(사용후기)공유"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="
                        !step36CheckList.includes('고객경험담(사용후기)공유')
                      "
                    />
                    <label class="preM form-check-label fs-5" for="step12_9">
                      고객 경험담(사용후기) 공유
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step12_10"
                      value="다양한방식의광고"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('다양한방식의광고')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_10">
                      다양한 방식의 광고
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step12_11"
                      value="편리한결제방식"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="!step36CheckList.includes('편리한결제방식')"
                    />
                    <label class="preM form-check-label fs-5" for="step12_11">
                      편리한 결제 방식
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-start">
                  <div class="form-check" style="padding-left: 0">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step12_12"
                      value="프로모션(다양한 혜택 설계)"
                      @change="updateCheckList($event)"
                      v-model="step36CheckList"
                      @click.prevent
                      :disabled="
                        !step36CheckList.includes('프로모션(다양한 혜택 설계)')
                      "
                    />
                    <label class="preM form-check-label fs-5" for="step12_12">
                      프로모션(다양한 혜택 설계)
                    </label>
                  </div>
                  <div class="d-flex align-items-start form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="otherOption"
                      v-model="otherOption"
                      @click.prevent
                      :disabled="!otherOption"
                    />
                    <label class="preM form-check-label fs-5" for="otherOption">
                      기타 의견 작성
                    </label>
                    <textarea
                      v-if="otherOption"
                      v-model="otherOptionText"
                      class="ms-2 preM"
                      style="
                        width: 20rem;
                        height: 3rem;
                        resize: none;
                        outline: none;
                      "
                      disabled
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-column justify-content-between align-items-center preM"
            style="width: 74rem; height: 18rem; margin-top: 1rem"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="font-size: 20px; width: 16rem; color: #f75943"
              >
                핵심구매요소
              </div>
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="font-size: 20px; width: 48rem; color: #f75943"
              >
                고객에게 제공되는 결정적 구매 포인트(우리의 해결안)
              </div>
              <div
                class="preSB d-flex justify-content-center align-items-center"
                style="font-size: 20px; width: 10rem; color: #f75943"
              >
                적합성 정도
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="preB d-flex justify-content-center align-items-center"
                  style="
                    width: 3rem;
                    height: 3rem;
                    font-size: 60px;
                    color: #f75943;
                    background: white;
                    margin-right: -1.8rem;
                    z-index: 2;
                  "
                >
                  1
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center"
                style="
                  width: 74rem;
                  height: 3.5rem;
                  border: 3px solid #f75943;
                  border-radius: 15px;
                  padding: 10px 0 10px 0;
                  z-index: 1;
                "
              >
                <div
                  style="
                    width: 16rem;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;
                    font-size: 14px;
                  "
                  v-html="selectedOption1"
                ></div>

                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 52rem; height: 100%"
                >
                  <div
                    v-html="selectedOption1Text"
                    type="text"
                    style="
                      width: 48rem;
                      height: 3.5rem;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                    "
                  />
                </div>
                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 10rem; height: 100%"
                >
                  <div
                    style="
                      width: 10rem;
                      height: 3.5rem;
                      border: none;
                      outline: none;
                      text-align: center;
                    "
                    v-html="selectedPriority1"
                  ></div>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="preB d-flex justify-content-center align-items-center"
                  style="
                    width: 3rem;
                    height: 3rem;
                    font-size: 60px;
                    color: #f75943;
                    background: white;
                    margin-right: -1.8rem;
                    z-index: 2;
                  "
                >
                  2
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center"
                style="
                  width: 74rem;
                  height: 3.5rem;
                  border: 3px solid #f75943;
                  border-radius: 15px;
                  padding: 10px 0 10px 0;
                  z-index: 1;
                "
              >
                <div
                  style="
                    width: 16rem;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;
                    font-size: 14px;
                  "
                  v-html="selectedOption2"
                ></div>
                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 52rem; height: 100%"
                >
                  <div
                    v-html="selectedOption2Text"
                    type="text"
                    style="
                      width: 48rem;
                      height: 3.5rem;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                    "
                  />
                </div>
                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 10rem; height: 100%"
                >
                  <div
                    style="
                      width: 10rem;
                      height: 3.5rem;
                      border: none;
                      outline: none;
                      text-align: center;
                    "
                    v-html="selectedPriority2"
                  ></div>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="preB d-flex justify-content-center align-items-center"
                  style="
                    width: 3rem;
                    height: 3rem;
                    font-size: 60px;
                    color: #f75943;
                    background: white;
                    margin-right: -1.8rem;
                    z-index: 2;
                  "
                >
                  3
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center"
                style="
                  width: 74rem;
                  height: 3.5rem;
                  border: 3px solid #f75943;
                  border-radius: 15px;
                  padding: 10px 0 10px 0;
                  z-index: 1;
                "
              >
                <div
                  style="
                    width: 16rem;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;
                    font-size: 14px;
                  "
                  v-html="selectedOption3"
                ></div>

                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 52rem; height: 100%"
                >
                  <div
                    v-html="selectedOption3Text"
                    type="text"
                    style="
                      width: 48rem;
                      height: 3.5rem;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                    "
                  />
                </div>
                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 10rem; height: 100%"
                >
                  <div
                    style="
                      width: 10rem;
                      height: 3.5rem;
                      border: none;
                      outline: none;
                      text-align: center;
                    "
                    v-html="selectedPriority3"
                  ></div>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="preB d-flex justify-content-center align-items-center"
                  style="
                    width: 3rem;
                    height: 3rem;
                    font-size: 60px;
                    color: #f75943;
                    background: white;
                    margin-right: -1.8rem;
                    z-index: 2;
                  "
                >
                  4
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center"
                style="
                  width: 74rem;
                  height: 3.5rem;
                  border: 3px solid #f75943;
                  border-radius: 15px;
                  padding: 10px 0 10px 0;
                  z-index: 1;
                "
              >
                <div
                  style="
                    width: 16rem;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;
                    font-size: 14px;
                  "
                  v-html="selectedOption4"
                ></div>
                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 52rem; height: 100%"
                >
                  <div
                    v-html="selectedOption4Text"
                    type="text"
                    style="
                      width: 48rem;
                      height: 3.5rem;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                    "
                  />
                </div>
                <div
                  class="d-flex flex-column align-items-center"
                  style="width: 10rem; height: 100%"
                >
                  <div
                    style="
                      width: 10rem;
                      height: 3.5rem;
                      border: none;
                      outline: none;
                      text-align: center;
                    "
                    v-html="selectedPriority4"
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
import step36 from "../modal/js/step36.js";
export default {
  name: "step36Com",
  ...step36,
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
</style>
