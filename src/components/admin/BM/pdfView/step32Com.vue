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
      <div class="basicContentBar preSB">
        3-1 : 고객관점 불편요소(pain point) 탐색 및 원인 분석
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div
        class="my-3 d-flex justify-content-center align-items-center"
        style="height: 39.5rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">1-2.</span> 서비스 분양에서 우리가
            해결하고자 하는 고객의 결정적인<span style="font-size: 17px"
              >(Critical)</span
            >
            불편함<span style="font-size: 17px">(pain point)</span>을 선택해
            봅니다.</label
          >
          <div
            class="d-flex flex-column justify-content-between align-items-center"
            style="width: 74rem; height: 34.5rem; margin-top: 1rem"
          >
            <div class="redPropertyTop preM">
              서비스 분야에서의 고객 불편요소
            </div>
            <div
              class="d-flex justify-content-between align-items-center"
              style="
                width: 74rem;
                height: 32.5rem;
                border: none;
                border-bottom: 2px solid #f75943;
              "
            >
              <div
                class="d-flex flex-column justify-content-between align-items-center"
                style="width: 8rem; height: 100%"
              >
                <div class="preM lightRedProp" style="height: 2.5rem">
                  유형성
                </div>
                <div
                  class="preM lightRedProp borderTopBottomGray"
                  style="height: 5rem"
                >
                  신뢰성
                </div>
                <div class="preM lightRedProp" style="height: 5rem">반응성</div>
                <div
                  class="preM lightRedProp borderTopBottomGray"
                  style="height: 2.5rem"
                >
                  능력
                </div>
                <div class="preM lightRedProp" style="height: 2.5rem">예절</div>
                <div
                  class="preM lightRedProp borderTopBottomGray"
                  style="height: 2.5rem"
                >
                  신용성
                </div>
                <div class="preM lightRedProp" style="height: 2.5rem">
                  안전성
                </div>
                <div
                  class="preM lightRedProp borderTopBottomGray"
                  style="height: 2.5rem"
                >
                  고객이해
                </div>
                <div class="preM lightRedProp" style="height: 2.5rem">
                  커뮤니케이션
                </div>
                <div
                  class="preM lightRedProp borderTopBottomGray"
                  style="height: 2.5rem"
                >
                  가용성
                </div>
                <div class="preM lightRedProp" style="height: 2.5rem">기타</div>
              </div>
              <div
                class="d-flex flex-column justify-content-between align-items-center"
                style="width: 66rem; height: 100%"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_1"
                      v-model="check1"
                      :disabled="!check1"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_1">
                      기술이나 장비가 낡아 보여서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_2"
                      v-model="check2"
                      :disabled="!check2"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_2">
                      시설이 너무 오래된 것 같아서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_3"
                      v-model="check3"
                      :disabled="!check3"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_3">
                      직원의 태도가 정중하지 못해서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex flex-column justify-content-between align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 5rem"
                >
                  <div
                    class="d-flex justify-content-start align-items-center"
                    style="width: 66rem; height: 2.5rem"
                  >
                    <div class="form-check ms-2">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_4"
                        v-model="check4"
                        :disabled="!check4"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_4">
                        불만에 대한 대처 정도가 못마땅해서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_5"
                        v-model="check5"
                        :disabled="!check5"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_5">
                        서비스에 대한 믿음이 낮아서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_6"
                        v-model="check6"
                        :disabled="!check6"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_6">
                        약속된 서비스가 제대로 이행되지 않아서
                      </label>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center"
                    style="width: 66rem; height: 2.5rem"
                  >
                    <div class="form-check ms-2">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_7"
                        v-model="check7"
                        :disabled="!check7"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_7">
                        나에 대한 정보를 부실하게 관리해서
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 66rem; height: 5rem"
                >
                  <div
                    class="d-flex justify-content-start align-items-center"
                    style="width: 66rem; height: 2.5rem"
                  >
                    <div class="form-check ms-2">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_8"
                        v-model="check8"
                        :disabled="!check8"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_8">
                        서비스 내용에 대한 설명이 부족해서
                      </label>
                    </div>
                    <div class="form-check ms-5">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_9"
                        v-model="check9"
                        :disabled="!check9"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_9">
                        서비스의 질이 만족스럽지 못해서
                      </label>
                    </div>
                    <div class="form-check ms-5">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_10"
                        v-model="check10"
                        :disabled="!check10"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_10">
                        요구에 너무 느리게 반응해서
                      </label>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center"
                    style="width: 66rem; height: 2.5rem"
                  >
                    <div class="form-check ms-2">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_11"
                        v-model="check11"
                        :disabled="!check11"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_11">
                        너무 오랫동안 기다리게 해서
                      </label>
                    </div>
                    <div class="form-check ms-5">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_12"
                        v-model="check12"
                        :disabled="!check12"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_12">
                        규정상 안 되는게 너무 많아서
                      </label>
                    </div>
                    <div class="form-check ms-5">
                      <input
                        class="preM form-check-input"
                        type="checkbox"
                        id="step32_13"
                        v-model="check13"
                        :disabled="!check13"
                        @click.prevent
                      />
                      <label class="preM form-check-label fs-5" for="step32_13">
                        직원이 너무 건성으로 대응해서
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_14"
                      v-model="check14"
                      :disabled="!check14"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_14">
                      서비스 제공 직원에 대한 신뢰가 가지 않아서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_15"
                      v-model="check15"
                      :disabled="!check15"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_15">
                      직원의 서비스 제공 능력이 부족해 보여서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_16"
                      v-model="check16"
                      :disabled="!check16"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_16">
                      예의가 없는 직원의 태도 때문에
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_17"
                      v-model="check17"
                      :disabled="!check17"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_17">
                      직원의 과잉 친절이 부담스러워서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_18"
                      v-model="check18"
                      :disabled="!check18"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_18">
                      제공되는 서비스나 정보가 믿을 수 없어서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_19"
                      v-model="check19"
                      :disabled="!check19"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_19">
                      서비스 제공 시설이나 공간이 안전해 보이지 않아서
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_20"
                      v-model="check20"
                      :disabled="!check20"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_20">
                      직원의 업무처리가 불안해 보여서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_21"
                      v-model="check21"
                      :disabled="!check21"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_21">
                      고객의 요구를 못 알아 들어서
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_22"
                      v-model="check22"
                      :disabled="!check22"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_22">
                      고객 개인에 대한 관심이 없어 보여서
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_23"
                      v-model="check23"
                      :disabled="!check23"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_23">
                      고객 실수에 의한 고객 부담이 너무 커서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_24"
                      v-model="check24"
                      :disabled="!check24"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_24">
                      직원과의 소통이 어려워서
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_25"
                      v-model="check25"
                      :disabled="!check25"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_25">
                      고객 요구에 무시하거나 회피하는 태도를 보여서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_26"
                      v-model="check26"
                      :disabled="!check26"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_26">
                      이용 시간이 너무 불편해서
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_27"
                      v-model="check27"
                      :disabled="!check27"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_27">
                      제공 내용이 혼란스러워서
                    </label>
                  </div>
                  <div class="form-check ms-2">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_20"
                      v-model="check28"
                      :disabled="!check28"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_28">
                      너무 복잡해서 사용하기 어려워서
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 66rem; height: 2.5rem"
                >
                  <div
                    class="preM form-check ms-2 d-flex justify-content-center align-items-center"
                  >
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_29"
                      v-model="check29"
                      :disabled="!check29"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_29">
                      :
                    </label>
                    <input
                      type="text"
                      class="ms-2"
                      style="width: 17rem"
                      v-model="etc1"
                      disabled
                    />
                  </div>
                  <div class="preM form-check ms-1 d-flex align-items-center">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_30"
                      v-model="check30"
                      :disabled="!check30"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_30">
                      :
                    </label>
                    <input
                      type="text"
                      class="ms-2"
                      style="width: 17rem"
                      v-model="etc2"
                      disabled
                    />
                  </div>
                  <div class="preM form-check ms-1 d-flex align-items-center">
                    <input
                      class="preM form-check-input"
                      type="checkbox"
                      id="step32_31"
                      v-model="check31"
                      :disabled="!check31"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-5" for="step32_31">
                      :
                    </label>
                    <input
                      type="text"
                      class="ms-2"
                      style="width: 17rem"
                      v-model="etc3"
                      disabled
                    />
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
import step32 from "../modal/js/step32.js";
export default {
  name: "step32Com",
  ...step32,
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
