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
        <div class="d-flex justify-content-between" style="width: 31rem">
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
      <div class="basicContentBar preSB">
        5-2 : 시장 검증 시나리오 설계 및 고객 반응 평가
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="mt-3" style="height: 41rem">
        <div class="ms-5">
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="preSB primeColor">2-2.</span> 고객에게 제공하려고 하는
            제품/서비스에 대한 예비고객들의 반응<span style="font-size: 17px"
              >(구매의향과 개선방향 및 정도)</span
            >을<br />조사하기 위한 사전계획을 수립하고 데이터 수집을 위해
            테스트를 진행합니다.</label
          >
          <div
            class="d-flex flex-column justify-content-between align-items-center"
            style="width: 74rem; height: 31rem"
          >
            <div class="blueProperty">
              <div class="bluePropertyLeftRight me-1">
                <div class="bluePropertyTopDown">
                  <div class="bluePropertyTop preSB">데이터 수집 방법 선정</div>
                  <div
                    class="d-flex flex-column justify-content-between align-items-center"
                    style="
                      padding: 0 8px 8px 8px;
                      width: 100%;
                      height: 14rem;
                      background: linear-gradient(180deg, #e8f5fe, #fff);
                    "
                  >
                    <div
                      class="d-flex justify-content-center align-items-center"
                      style="
                        width: 100%;
                        height: 3rem;
                        border-width: 0 0 1px 0;
                        border-style: solid;
                        border-color: #0982d5;
                      "
                    >
                      <div class="preM" style="font-size: 20px; color: #0982d5">
                        정량적 데이터 & 정성적 데이터
                      </div>
                    </div>
                    <div style="width: 100%; height: 10rem">
                      <div
                        class="d-flex flex-column justify-content-start align-items-center"
                        style="
                          width: 73rem;
                          height: 12rem;
                          border-radius: 20px;
                          z-index: 1;
                          position: relative;
                          margin-top: 1rem;
                        "
                      >
                        <div
                          class="d-flex justify-content-start align-items-center w-100"
                        >
                          <div
                            class="d-flex flex-column justify-content-between align-items-start ms-4"
                          >
                            <div class="form-check" style="width: 14rem">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="step56_1"
                                value="설문조사"
                                v-model="check56_1"
                                @click.prevent
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_1"
                              >
                                설문조사
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="step56_2"
                                value="포커스그룹토론(FGI)"
                                @click.prevent
                                v-model="check56_2"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_2"
                              >
                                포커스그룹토론(FGI)
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="step56_3"
                                value="로그및데이터분석"
                                @click.prevent
                                v-model="check56_3"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_3"
                              >
                                로그 및 데이터 분석
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="step56_4"
                                value="현장방문실지조사"
                                @click.prevent
                                v-model="check56_4"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_4"
                              >
                                현장 방문 실지 조사
                              </label>
                            </div>
                          </div>
                          <div
                            class="d-flex flex-column justify-content-between align-items-start ms-4"
                          >
                            <div class="form-check" style="width: 16rem">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_5"
                                value="관찰및사용자행동분석"
                                @click.prevent
                                v-model="check56_5"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_5"
                              >
                                관찰 및 사용자 행동 분석
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_6"
                                value="사용자피드백수집툴"
                                @click.prevent
                                v-model="check56_6"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_6"
                              >
                                사용자 피드백 수집 툴
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_7"
                                value="데이터베이스쿼리"
                                @click.prevent
                                v-model="check56_7"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_7"
                              >
                                데이터베이스 쿼리
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_8"
                                value="데이터마이닝"
                                @click.prevent
                                v-model="check56_8"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_8"
                              >
                                데이터마이닝
                              </label>
                            </div>
                          </div>
                          <div
                            class="d-flex flex-column justify-content-between align-items-start ms-4"
                          >
                            <div class="form-check" style="width: 16rem">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_9"
                                value="인터뷰"
                                @click.prevent
                                v-model="check56_9"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_9"
                              >
                                인터뷰
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_10"
                                value="소셜미디어분석"
                                @click.prevent
                                v-model="check56_10"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_10"
                              >
                                소셜 미디어 분석
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_11"
                                value="센서데이터수집"
                                @click.prevent
                                v-model="check56_11"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_11"
                              >
                                센서 데이터 수집
                              </label>
                            </div>
                            <div class="d-flex align-items-start form-check">
                              <input
                                class="form-check-input ms-3"
                                type="checkbox"
                                id="otherOption"
                                value="기타"
                                @click.prevent
                                v-model="check56_12"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="otherOption"
                              >
                                기타
                              </label>
                              <textarea
                                class="ms-2 preM"
                                style="
                                  width: 10rem;
                                  height: 2rem;
                                  resize: none;
                                  outline: none;
                                "
                                v-model="etc56_1"
                                disabled
                              ></textarea>
                            </div>
                          </div>
                          <div
                            class="d-flex flex-column justify-content-between align-items-start ms-4"
                          >
                            <div class="form-check" style="width: 18rem">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_12"
                                value="체크리스트및평가양식활용"
                                @click.prevent
                                v-model="check56_13"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_12"
                              >
                                체크리스트 및 평가 양식 활용
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_13"
                                value="웹사이트/앱분석도구"
                                @click.prevent
                                v-model="check56_14"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_13"
                              >
                                웹사이트/앱 분석 도구
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_14"
                                value="A/B테스트"
                                @click.prevent
                                v-model="check56_15"
                              />
                              <label
                                class="preM form-check-label fs-5"
                                for="step56_14"
                              >
                                A/B 테스트
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="preM form-check-input ms-3"
                                type="checkbox"
                                id="step56_15"
                                @click.prevent
                                value="지우지말것"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-100 d-flex justify-content-between align-items-center"
                >
                  <div class="bluePropertyTopDown" style="width: 48.5%">
                    <div class="bluePropertyTop preSB">사용자 테스트 항목</div>
                    <div
                      class="d-flex justify-content-between align-items-center"
                      style="
                        padding: 2rem;
                        width: 100%;
                        height: 11rem;
                        background: linear-gradient(180deg, #e8f5fe, #fff);
                      "
                    >
                      <div
                        class="d-flex flex-column justify-content-between align-items-center preB"
                      >
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 사용자 인터페이스(UI)평가
                        </div>
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 사용자 그룹 특성 분석
                        </div>
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 사용자 만족도 및 피드백 수집
                        </div>
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 보안검토
                        </div>
                      </div>
                      <div
                        class="d-flex flex-column justify-content-between align-items-center preB"
                      >
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 성능테스트
                        </div>
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 기능성 테스트
                        </div>
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 호환성 테스트
                        </div>
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 기타
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bluePropertyTopDown" style="width: 48.5%">
                    <div class="bluePropertyTop preSB">사용성 테스트 항목</div>
                    <div
                      class="d-flex justify-content-between align-items-center"
                      style="
                        padding: 2rem;
                        width: 100%;
                        height: 11rem;
                        background: linear-gradient(180deg, #e8f5fe, #fff);
                      "
                    >
                      <div
                        class="d-flex flex-column justify-content-between align-items-center preB"
                      >
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 효율성
                        </div>
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 학습 용이성
                        </div>
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 호감도
                        </div>
                        <div
                          style="width: 16rem; height: 2rem; text-align: start"
                        >
                          * 오류 방지성
                        </div>
                      </div>
                      <div
                        class="d-flex flex-column justify-content-between align-items-center preB"
                      >
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 유효성
                        </div>
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 유용성
                        </div>
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 친화성
                        </div>
                        <div
                          style="width: 12rem; height: 2rem; text-align: start"
                        >
                          * 기타
                        </div>
                      </div>
                    </div>
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
import step56 from "../modal/js/step56.js";
export default {
  name: "step56Com",
  ...step56,
};
</script>

<style scoped>
.basicContentBar {
  width: 40rem;
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

.blueProperty {
  width: 100%;
  height: 24.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bluePropertyLeftRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24.5rem;
}

.bluePropertyTopDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.bluePropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 2.5rem;
  background: #0982d5;
  border-radius: 30px;
  color: white;
}
</style>
