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
          <img src="@/assets/bmds3/basicIcon1.png" alt="돋보기" style="width: 50px; height: 50px" />
          <div class="preEB" style="font-size: 35px; color: #fa9d1b">
            STEP 01 :
          </div>
          <div class="preEB" style="font-size: 35px">기회탐색</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">1-2 : 고객의 불편사항 파악</div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="mt-2 d-flex flex-column justify-content-center align-items-center">
        <div class="my-3" style="width: 75rem; border-radius: 20px">
          <label for="businessArea" class="preSB form-label" style="font-size: 27px">
            <span class="primeColor">2-2.</span> 시장에서 주로 사용되는
            제품(서비스)은 어떠한 것들이 있으며 가장 큰 장점과 단점은
            무엇입니까?
          </label>
          <div class="d-flex flex-column align-items-center">
            <div class="orangePropertyTop preSB" style="width: 13rem; font-size: 20px; z-index: 3">
              선택 항목
            </div>
            <div class="d-flex justify-content-center align-items-center" style="
                width: 100%;
                height: 10rem;
                border: 1px solid rgba(0, 0, 0, 0.5);
                border-radius: 15px;
                margin-top: -1rem;
                z-index: 1;
                padding: 2rem 3.5rem 1rem;
              ">
              <div class="d-flex justify-content-between align-items-center" style="width: 100%; height: 100%">
                <div class="d-flex flex-column justify-content-between align-items-start" style="height: 100%">
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 가격
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 보증 및 A/S
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 시장점유율
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-start" style="height: 100%">
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 브랜드 이미지
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 사용 편이성
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 유통채널
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-start" style="height: 100%">
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 제공하는 서비스
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 스타일과 디자인
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 고객만족도(고객평가)
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-start" style="height: 100%">
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 특정한 기능
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 고객지원 수준
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 기타
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-start" style="height: 100%">
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 기능수
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 구매조건
                  </div>
                  <div style="font-weight: 600"></div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-start" style="height: 100%">
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 제품/서비스 품질 및
                    신뢰성
                  </div>
                  <div style="font-weight: 600">
                    <span style="font-size: 10px">●</span> 제품/서비스에 대한
                    접근성
                  </div>
                  <div style="font-weight: 600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center" style="width:86%;">
          <!-- 제품 A 입력 -->
          <div type="text" id="productA" class="inText d-flex justify-content-center align-items-center">{{ productA }}
          </div>
          <!-- 제품 B 입력 -->
          <div type="text" id="productB" class="inText d-flex justify-content-center align-items-center">{{ productB }}
          </div>
          <!-- 제품 C 입력 -->
          <div type="text" id="productC" class="inText d-flex justify-content-center align-items-center">{{ productC }}
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center" style="width:71rem;">
          <div class="d-flex flex-column justify-content-end align-items-center"
            style="width: 1rem; height: 18rem; margin: 3rem 1.5rem 0 -4rem">
            <div class="preSB d-flex flex-column justify-content-center align-items-center" style="
                  width: 1rem;
                  height: 9rem;
                  font-size: 20px;
                  color: #fa9d1b;
                ">
              장점
            </div>
            <div class="preSB d-flex flex-column justify-content-center align-items-center" style="
                  width: 1rem;
                  height: 9rem;
                  font-size: 20px;
                  color: #fa9d1b;
                ">
              단점
            </div>
          </div>
          <div class="orangeProperty" style="width: 71rem">
            <div class="d-flex justify-content-between align-items-center" style="width: 23rem">
              <div class="orangePropertyTopDown" style="width: 8.5rem; height: 20rem">
                <div class="orangePropertyTop preSB">선택 항목</div>
                <div class="linearGra">
                  <div>
                    <div id="numbers " v-html="aPositiveTitle14_1" class="selectCss preSB"></div>
                  </div>
                  <div class="udLine">
                    <div id="numbers" v-html="aPositiveTitle14_2" class="selectCss preSB"></div>
                  </div>
                  <div class="dOrangeLine">
                    <div id="numbers" v-html="aPositiveTitle14_3" class="selectCss preSB"></div>
                  </div>
                  <div class="uOrangeLine">
                    <div id="numbers" v-html="aNegativeTitle14_1" class="selectCss preSB"></div>
                  </div>
                  <div class="udLine">
                    <div id="numbers" v-html="aNegativeTitle14_2" class="selectCss preSB"></div>
                  </div>
                  <div>
                    <div id="numbers" v-html="aNegativeTitle14_3" class="selectCss preSB"></div>
                  </div>
                </div>
              </div>
              <div class="orangePropertyTopDown" style="width: 14rem; height: 20rem">
                <div class="orangePropertyTop preSB">설명</div>
                <div class="textareaCss preSB" style="height: 18rem; padding: 0">
                  <input type="text" v-model="aPositiveContent14_1" class="inputCss" placeholder="가격이 저렴함" maxlength="10"
                    disabled />
                  <input type="text" v-model="aPositiveContent14_2" class="inputUdLine" maxlength="10" disabled />
                  <input type="text" v-model="aPositiveContent14_3" class="inputDOrangeLine" maxlength="10" disabled />
                  <input type="text" v-model="aNegativeContent14_1" class="inputUOrangeLine" placeholder="기능 수가 부족함"
                    maxlength="10" disabled />
                  <input type="text" v-model="aNegativeContent14_2" class="inputUdLine" maxlength="10" disabled />
                  <input type="text" v-model="aNegativeContent14_3" class="inputCss" maxlength="10" disabled />
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center preSB" style="width: 23rem">
              <div class="orangePropertyTopDown" style="width: 8.5rem; height: 20rem">
                <div class="orangePropertyTop preSB">선택 항목</div>
                <div class="linearGra">
                  <div>
                    <div id="numbers" v-html="bPositiveTitle14_1" class="selectCss" disabled></div>
                  </div>
                  <div class="udLine">
                    <div id="numbers" v-html="bPositiveTitle14_2" class="selectCss" disabled></div>
                  </div>
                  <div class="dOrangeLine">
                    <div id="numbers" v-html="bPositiveTitle14_3" class="selectCss" disabled></div>
                  </div>
                  <div class="uOrangeLine">
                    <div id="numbers" v-html="bNegativeTitle14_1" class="selectCss" disabled></div>
                  </div>
                  <div class="udLine">
                    <div id="numbers" v-html="bNegativeTitle14_2" class="selectCss" disabled></div>
                  </div>
                  <div>
                    <div id="numbers" v-html="bNegativeTitle14_3" class="selectCss" disabled></div>
                  </div>
                </div>
              </div>
              <div class="orangePropertyTopDown" style="width: 14rem; height: 20rem">
                <div class="orangePropertyTop preSB">설명</div>
                <div class="textareaCss" style="height: 18rem; padding: 0">
                  <input type="text" v-model="bPositiveContent14_1" class="inputCss" placeholder="가격이 저렴함" maxlength="10"
                    disabled />
                  <input type="text" v-model="bPositiveContent14_2" class="inputUdLine" maxlength="10" disabled />
                  <input type="text" v-model="bPositiveContent14_3" class="inputDOrangeLine" maxlength="10" disabled />
                  <input type="text" v-model="bNegativeContent14_1" class="inputUOrangeLine" placeholder="기능 수가 부족함"
                    maxlength="10" disabled />
                  <input type="text" v-model="bNegativeContent14_2" class="inputUdLine" maxlength="10" disabled />
                  <input type="text" v-model="bNegativeContent14_3" class="inputCss" maxlength="10" disabled />
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center preSB" style="width: 23rem">
              <div class="orangePropertyTopDown" style="width: 8.5rem; height: 20rem">
                <div class="orangePropertyTop preSB">선택 항목</div>
                <div class="linearGra">
                  <div>
                    <div id="numbers" v-html="cPositiveTitle14_1" class="selectCss" disabled></div>
                  </div>
                  <div class="udLine">
                    <div id="numbers" v-html="cPositiveTitle14_2" class="selectCss" disabled></div>
                  </div>
                  <div class="dOrangeLine">
                    <div id="numbers" v-html="cPositiveTitle14_3" class="selectCss" disabled></div>
                  </div>
                  <div class="uOrangeLine">
                    <div id="numbers" v-html="cNegativeTitle14_1" class="selectCss" disabled></div>
                  </div>
                  <div class="udLine">
                    <div id="numbers" v-html="cNegativeTitle14_2" class="selectCss" disabled></div>
                  </div>
                  <div>
                    <div id="numbers" v-html="cNegativeTitle14_3" class="selectCss" disabled></div>
                  </div>
                </div>
              </div>
              <div class="orangePropertyTopDown" style="width: 14rem; height: 20rem">
                <div class="orangePropertyTop preSB">설명</div>
                <div class="textareaCss" style="height: 18rem; padding: 0">
                  <input type="text" v-model="cPositiveContent14_1" class="inputCss" placeholder="가격이 저렴함" maxlength="10"
                    disabled />
                  <input type="text" v-model="cPositiveContent14_2" class="inputUdLine" maxlength="10" disabled />
                  <input type="text" v-model="cPositiveContent14_3" class="inputDOrangeLine" maxlength="10" disabled />
                  <input type="text" v-model="cNegativeContent14_1" class="inputUOrangeLine" placeholder="기능 수가 부족함"
                    maxlength="10" disabled />
                  <input type="text" v-model="cNegativeContent14_2" class="inputUdLine" maxlength="10" disabled />
                  <input type="text" v-model="cNegativeContent14_3" class="inputCss" maxlength="10" disabled />
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
import step14 from "../modal/js/step14.js";
export default {
  name: "step14Com",
  ...step14,
};
</script>

<style scoped>
.inText {
  width: 22rem;
  height: 4rem;
  border: 1px solid #fa9d1b;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
}

.basicContentBar {
  width: 26.1rem;
  background-color: #fa9d1b;
  color: white;
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
  color: rgb(249, 156, 27);
}

.form-control {
  width: 75rem;
  height: 15rem;
}

/* 체크박스 크기 변경 */

/* 체크 표시의 크기와 색상 변경 */
.form-check-input:checked {
  background-color: rgb(249, 156, 27);
  /* 부트스트랩 성공 색 */
  border-color: rgb(249, 156, 27);
}

.linearGra {
  width: 100%;
  height: 18rem;
  background: linear-gradient(180deg, #fff7ec, #fff);
}

.selectCss {
  width: 100%;
  height: 3rem;
  font-size: 13px;
  border: none;
  outline: none;
  background: none;
  padding: 6px;
}

.udLine {
  width: 100%;
  height: 3rem;
  font-size: 15px;
  border-width: 1px 0 1px 0;
  border-color: black;
  border-style: solid;
  background: none;
}

.dOrangeLine {
  width: 100%;
  height: 3rem;
  font-size: 15px;
  border-width: 0 0 1px 0;
  border-color: #fa9d1b;
  border-style: solid;
  background: none;
}

.uOrangeLine {
  width: 100%;
  height: 3rem;
  font-size: 15px;
  border-width: 1px 0 0 0;
  border-color: #fa9d1b;
  border-style: solid;
  background: none;
}

.inputCss {
  width: 100%;
  height: 3rem;
  font-size: 15px;
  border: none;
  outline: none;
  background: none;
  padding: 15px;
}

.inputUdLine {
  width: 100%;
  height: 3rem;
  font-size: 15px;
  border-width: 1px 0 1px 0;
  border-color: black;
  border-style: solid;
  outline: none;
  background: none;
  padding: 15px;
}

.inputDOrangeLine {
  width: 100%;
  height: 3rem;
  font-size: 15px;
  border-width: 0 0 1px 0;
  border-color: #fa9d1b;
  border-style: solid;
  outline: none;
  background: none;
  padding: 15px;
}

.inputUOrangeLine {
  width: 100%;
  height: 3rem;
  font-size: 15px;
  border-width: 1px 0 0 0;
  border-color: #fa9d1b;
  border-style: solid;
  outline: none;
  background: none;
  padding: 15px;
}
</style>
