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
      <div class="basicContentBar preSB">1-1 : 아이템이 속한 시장 이해</div>
    </div>

    <div class="preM modal-wrap">
      <div class="mt-2 d-flex flex-column justify-content-center align-items-center">
        <div class="my-3" style="width: 75rem; border-radius: 20px">
          <label for="businessArea" class="preSB form-label" style="font-size: 27px">
            <span class="primeColor">1-4.</span> 목표 시장에서 일어나고 있는 눈
            여겨 볼 만한 변화는 어떠한 것들이 있나요?(신제품 개발의 필요성 확인)
          </label>
          <div class="d-flex flex-column justify-content-center bg-light p-2 rounded align-items-center" style="
              width: 75rem;
              border-radius: 20px;
              z-index: 1;
              position: relative;
            ">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-column justify-content-between align-items-start">
                <div class="form-check" style="width: 21rem">
                  <input class="form-check-input" type="checkbox" id="step12_1" value="제품(서비스)에 대한 수요가 증가"
                    v-model="check12_1" :disabled="disableCheckboxes12(1)" />

                  <label class="preM form-check-label fs-5" for="step12_1">
                    제품(서비스)에 대한 수요가 증가
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="step12_2" value="새로운 기술이나 아이디어가 등장"
                    v-model="check12_2" :disabled="disableCheckboxes12(2)" />

                  <label class="preM form-check-label fs-5" for="step12_2">
                    새로운 기술이나 아이디어가 등장
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="step12_3" value="경쟁사가 새로운 제품(서비스) 출시"
                    v-model="check12_3" :disabled="disableCheckboxes12(3)" />

                  <label class="preM form-check-label fs-5" for="step12_3">
                    경쟁사가 새로운 제품(서비스) 출시
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-start">
                <div class="form-check ms-5" style="width: 22rem">
                  <input class="preM form-check-input" type="checkbox" id="step12_4" value="다수 고객의 새로운 피드백 발견"
                    v-model="check12_4" :disabled="disableCheckboxes12(4)" />

                  <label class="preM form-check-label fs-5" for="step12_4">
                    다수 고객의 새로운 피드백 발견
                  </label>
                </div>
                <div class="form-check ms-5">
                  <input class="preM form-check-input" type="checkbox" id="step12_5" value="소비자 행동이나 심리의 변화 발생"
                    v-model="check12_5" :disabled="disableCheckboxes12(5)" />

                  <label class="preM form-check-label fs-5" for="step12_5">
                    소비자 행동이나 심리의 변화 발생
                  </label>
                </div>
                <div class="form-check ms-5">
                  <input class="preM form-check-input" type="checkbox" id="step12_6" value="법적/제도적 규제나 조건의 변화 발생"
                    v-model="check12_6" :disabled="disableCheckboxes12(6)" />

                  <label class="preM form-check-label fs-5" for="step12_6">
                    법적/제도적 규제나 조건의 변화 발생
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-start">
                <div class="form-check ms-5" style="width: 22rem">
                  <input class="preM form-check-input" type="checkbox" id="step12_7" value="환경 문제와 같은 논란 현상 발생"
                    v-model="check12_7" :disabled="disableCheckboxes12(7)" />

                  <label class="preM form-check-label fs-5" for="step12_7">
                    환경 문제와 같은 논란 현상 발생
                  </label>
                </div>
                <div class="form-check ms-5">
                  <input class="preM form-check-input" type="checkbox" id="step12_8" value="특정 연도 또는 계절이나 행사를 고려"
                    v-model="check12_8" :disabled="disableCheckboxes12(8)" />

                  <label class="preM form-check-label fs-5" for="step12_8">
                    특정 연도 또는 계절이나 행사를 고려
                  </label>
                </div>
                <div class="form-check ms-5">
                  <input class="preM form-check-input" type="checkbox" id="step12_9" value="중ㆍ장기적인 비전과 목표 달성"
                    v-model="check12_9" :disabled="disableCheckboxes12(9)" />

                  <label class="preM form-check-label fs-5" for="step12_9">
                    중ㆍ장기적인 비전과 목표 달성
                  </label>
                </div>
              </div>
            </div>
            <div class="w-100 d-flex justify-content-start align-items-start">
              <div class="d-flex align-items-start form-check ms-4">
                <input class="form-check-input" type="checkbox" id="otherOption" value="기타" v-model="check12_10"
                  :disabled="disableCheckboxes12(10)" />

                <label class="preM form-check-label fs-5" for="otherOption">
                  기타 의견 작성
                </label>
                <textarea class="ms-2" :disabled="disableCheckboxes12(10)" style="
                    width: 20rem;
                    height: 3rem;
                    resize: none;
                    outline: none;
                  " v-model="etc12_1"></textarea>
              </div>
            </div>
            <label class="d-flex justify-content-end preM fs-5 w-100">
              * 최대 2개까지만 체크 가능합니다.
            </label>
          </div>
        </div>
        <div>
          <label class="preSB form-label" style="font-size: 27px">
            <span class="primeColor">1-5.</span> 
            목표시장에서 일어나고 있는 일들을 자세하게 설명해 주세요.(1-4. 문항에서 선택된 각 항목을
            구체적으로 설명)
          </label>
          <div class="orangeProperty">
            <div class="orangePropertyLeftRight">
              <div class="orangePropertyTopDown" style="height: 7rem">
                <div class="orangePropertyTop preSB">선택 항목</div>
                <select style="
                    padding: 15px;
                    width: 100%;
                    height: 5rem;
                    border: none;
                    outline: none;
                    background: linear-gradient(180deg, #fff7ec, #fff);
                  " v-model="choices1">
                  <option disabled selected>위쪽 체크한 목록</option>
                  <option v-for="(v, i) in selectedOptions12" :key="i" :value="v">
                    {{ v }}
                  </option>
                </select>
              </div>
              <div class="orangePropertyTopDown" style="height: 14rem">
                <div class="orangePropertyTop preSB">구체적인 설명</div>
                <textarea class="textareaCss" placeholder="작성해 주세요." v-model="description12_1">
                </textarea>
              </div>
            </div>
            <div class="orangePropertyLeftRight">
              <div class="orangePropertyTopDown" style="height: 7rem">
                <div class="orangePropertyTop preSB">선택 항목</div>
                <select style="
                    padding: 15px;
                    width: 100%;
                    height: 5rem;
                    border: none;
                    outline: none;
                    background: linear-gradient(180deg, #fff7ec, #fff);
                  " v-model="choices2">
                  <option disabled selected>위쪽 체크한 목록</option>
                  <option v-for="(v, i) in selectedOptions12" :key="i" :value="v">
                    {{ v }}
                  </option>
                </select>
              </div>
              <div class="orangePropertyTopDown" style="height: 14rem">
                <div class="orangePropertyTop preSB">구체적인 설명</div>
                <textarea class="textareaCss" placeholder="작성해 주세요." v-model="description12_2">
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <textarea placeholder="메모..." v-model="memo" class="form-control bg-light p-2 rounded fs-4 preM my-4 memo">
        </textarea>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep12">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step12 from "./js/step12.js";
export default {
  name: "step12Com",
  ...step12,
};
</script>

<style scoped>
.memo {
  height: 100px !important;
  resize: none;
  border: none;
}

.modal-wrap {
  width: 81rem;
  height: 41.5rem;
  overflow-y: scroll;
}

.modal-wrap::-webkit-scrollbar {
  width: 12px;
}

.modal-wrap::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 10px;
}

.modal-wrap::-webkit-scrollbar-track {
  background: none;
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
  line-height: 0;
  /* 체크 마크의 높이 조절 */
  color: rgb(249, 156, 27);
  /* 체크 마크의 색상 지정 */
}

.textareaCss {
  width: 96%;
  height: 14rem;
  border: none;
  resize: none;
  outline: none;
}
</style>
