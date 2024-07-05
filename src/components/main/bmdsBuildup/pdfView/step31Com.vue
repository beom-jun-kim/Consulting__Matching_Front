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
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 30px">
          <span class="primeColor">1.</span> 고객관점에서 불편요소를 정의하고
          원인을 분석합니다.
        </label>
      </div>
      <div class="my-3 d-flex justify-content-center align-items-center" style="height: 34rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">1-1.</span> 제품 분야에서 우리가 해결하고자
            하는 고객의 결정적인(Critical) 불편함(pain point)을 작성해
            봅니다.</label>
          <div class="d-flex flex-column justify-content-between align-items-center" style="width: 74rem; height: 32rem">
            <div class="redPropertyTop preM">
              제품(제조) 분야에서의 고객 불편요소
            </div>
            <div class="d-flex justify-content-between align-items-center" style="
                width: 74rem;
                height: 30rem;
                border: none;
                border-bottom: 2px solid #f75943;
              ">
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 8rem; height: 100%">
                <div class="preM lightRedProp" style="height: 3rem">기능</div>
                <div class="preM lightRedProp borderTopBottomGray" style="height: 3rem">
                  성능
                </div>
                <div class="preM lightRedProp" style="height: 3rem">디자인</div>
                <div class="preM lightRedProp borderTopBottomGray" style="height: 3rem">
                  품질
                </div>
                <div class="preM lightRedProp" style="height: 6rem">서비스</div>
                <div class="preM lightRedProp borderTopBottomGray" style="height: 3rem">
                  가격
                </div>
                <div class="preM lightRedProp" style="height: 6rem">
                  구매과정
                </div>
                <div class="preM lightRedProp borderTopBottomGray" style="height: 3rem">
                  기타
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 66rem; height: 100%">
                <div class="d-flex justify-content-start align-items-center" style="width: 66rem; height: 3rem">
                  <div class="form-check ms-2">
                    <input class="preM form-check-input" type="checkbox" id="step31_1" v-model="check1"
                      :disabled="!check1" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_1">
                      필요로 하거나 생각했던 기능이 없어서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="preM form-check-input" type="checkbox" id="step31_2" v-model="check2"
                      :disabled="!check2" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_2">
                      너무 복잡해서
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 3rem">
                  <div class="form-check ms-2">
                    <input class="preM form-check-input" type="checkbox" id="step31_3" v-model="check3"
                      :disabled="!check3" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_3">
                      성능이 기대했던 것 만큼 제대로 작동하지 않아서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="preM form-check-input" type="checkbox" id="step31_4" v-model="check4"
                      :disabled="!check4" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_4">
                      사용이 불편해서
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-center" style="width: 66rem; height: 3rem">
                  <div class="form-check ms-2">
                    <input class="preM form-check-input" type="checkbox" id="step31_5" v-model="check5"
                      :disabled="!check5" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_5">
                      크기가 너무 크거나 작아서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="preM form-check-input" type="checkbox" id="step31_6" v-model="check6"
                      :disabled="!check6" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_6">
                      색상이 마음에 안 들어서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="preM form-check-input" type="checkbox" id="step31_7" v-model="check7"
                      :disabled="!check7" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_7">
                      형태가 마음에 안 들어서
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 3rem">
                  <div class="form-check ms-2">
                    <input class="preM form-check-input" type="checkbox" id="step31_8" v-model="check8"
                      :disabled="!check8" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_8">
                      오래가지 못해서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="preM form-check-input" type="checkbox" id="step31_9" v-model="check9"
                      :disabled="!check9" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_9">
                      고장이 잘 나서
                    </label>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 66rem; height: 6rem">
                  <div class="d-flex justify-content-start align-items-center" style="width: 66rem; height: 3rem">
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_10" v-model="check10"
                        :disabled="!check10" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_10">
                        A/S 예약 및 활용과정이 불편해서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_11" v-model="check11"
                        :disabled="!check11" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_11">
                        A/S 비용이 높아서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_12" v-model="check12"
                        :disabled="!check2" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_12">
                        A/S 소요기간이 길어서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_13" v-model="check13"
                        :disabled="!check13" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_13">
                        A/S 보증기간이 짧아서
                      </label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start align-items-center" style="width: 66rem; height: 3rem">
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_14" v-model="check14"
                        :disabled="!check14" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_14">
                        고객대응이 길거나 불친절해서
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="preM form-check-input" type="checkbox" id="step31_15" v-model="check15"
                        :disabled="!check15" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_15">
                        잘못된 정보를 제공해서
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="preM form-check-input" type="checkbox" id="step31_16" v-model="check16"
                        :disabled="!check16" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_16">
                        온라인 정보가 없거나 접근하기 어려워서(홈페이지 포함)
                      </label>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 3rem">
                  <div class="form-check ms-2">
                    <input class="preM form-check-input" type="checkbox" id="step31_17" v-model="check17"
                      :disabled="!check17" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_17">
                      생각보다 너무 비싸서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="preM form-check-input" type="checkbox" id="step31_18" v-model="check18"
                      :disabled="!check18" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_18">
                      오히려 너무 싸서 믿을 수 없어서
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="preM form-check-input" type="checkbox" id="step31_19" v-model="check19"
                      :disabled="!check19" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_19">
                      고객 실수에 의한 고객 부담이 너무 커서
                    </label>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 66rem; height: 6rem">
                  <div class="d-flex justify-content-start align-items-center" style="width: 66rem; height: 3rem">
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_20" v-model="check20"
                        :disabled="!check20" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_20">
                        오프라인 구매처가 적어서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_21" v-model="check21"
                        :disabled="!check21" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_21">
                        배송기간이 너무 길어서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_22" v-model="check22"
                        :disabled="!check22" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_22">
                        반품 또는 환불이 힘들어서
                      </label>
                    </div>
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_23" v-model="check23"
                        :disabled="!check23" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_23">
                        배송비가 부담스러워서
                      </label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start align-items-center" style="width: 66rem; height: 3rem">
                    <div class="form-check ms-2">
                      <input class="preM form-check-input" type="checkbox" id="step31_24" v-model="check24"
                        :disabled="!check24" @click.prevent />
                      <label class="preM form-check-label fs-5" for="step31_24">
                        신뢰가 부족해서(브랜드 인지도가 너무 낮아서 구매에
                        어려움)
                      </label>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-center borderTopBottomGray"
                  style="width: 66rem; height: 3rem">
                  <div class="form-check ms-2 d-flex justify-content-center align-items-center">
                    <input class="preM form-check-input" type="checkbox" id="step31_25" v-model="check25"
                      :disabled="!check25" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_25">
                      :
                    </label>
                    <div type="text" class="ms-2 preM" style="width: 17rem" v-html="ect1" :disabled="!ect1"
                      @click.prevent />
                  </div>
                  <div class="form-check ms-1 d-flex align-items-center">
                    <input class="preM form-check-input" type="checkbox" id="step31_26" v-model="check26"
                      :disabled="!check26" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_26">
                      :
                    </label>
                    <div type="text" class="ms-2 preM" style="width: 17rem" v-html="ect2" :disabled="!ect2"
                      @click.prevent />
                  </div>
                  <div class="form-check ms-1 d-flex align-items-center">
                    <input class="preM form-check-input" type="checkbox" id="step31_27" v-model="check27"
                      :disabled="!check27" @click.prevent />
                    <label class="preM form-check-label fs-5" for="step31_27">
                      :
                    </label>
                    <div type="text" class="ms-2 preM" style="width: 17rem" v-html="ect3" :disabled="!ect3"
                      @click.prevent />
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
import step31 from "../modal/js/step31.js";
export default {
  name: "step31Com",
  ...step31,
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
</style>
