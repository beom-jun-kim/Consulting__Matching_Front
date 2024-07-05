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
        <div class="d-flex justify-content-between" style="width: 24rem">
          <img
            src="@/assets/beta/step06집.png"
            alt="큐브"
            style="width: 60px; height: 60px"
          />
          <div class="preEB" style="font-size: 35px; color: #0098d5">
            STEP 06 :
          </div>
          <div class="preEB" style="font-size: 35px">시장 론칭</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="width: 37rem !important">
        6-1 : 인바운드/아웃바운드 채널 설계
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 28px"
        >
          <span class="primeColor">2.</span> 고객의 구매결정 과정을 확인하고
          소통하기 위한 인바운드/아웃바운드 마케팅 채널을 정의하고 설계합니다.
        </label>
      </div>
      <label
        for="businessArea"
        class="preSB form-label fs-4"
        style="margin-left: 3.5rem; margin-bottom: -2rem"
      >
        <span class="primeColor">1-1.</span>고객은 우리와 같은 제품이나 서비스를
        어떠한 방식으로 찾고 있거나 관련 정보를 알게 되나요?</label
      >
      <div
        class="my-3 d-flex justify-content-center align-items-center"
        style="height: 12.5rem"
      >
        <div
          class="d-flex justify-content-center align-items-center"
          style="border: #bfbfbf 1px solid; height: 10rem; border-radius: 3%"
        >
          <div
            class="d-flex flex-column justify-content-between align-items-start ms-4"
          >
            <div class="form-check" style="width: 14rem">
              <input
                class="form-check-input"
                type="checkbox"
                id="step62_1"
                value="인터넷 검색 사이트"
                v-model="check62_1"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_1">
                인터넷 검색 사이트
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="step62_2"
                value="온라인 리뷰"
                v-model="check62_2"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_2">
                온라인 리뷰
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="step62_3"
                value="이벤트 행사 참여"
                v-model="check62_3"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_3">
                이벤트 행사 참여
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="step62_4"
                value="인스타그램"
                v-model="check62_4"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_4">
                인스타그램
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
                id="step62_5"
                value="온라인 유통채널"
                v-model="check62_5"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_5">
                온라인 유통채널
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_6"
                value="가격 비교 사이트"
                v-model="check62_6"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_6">
                전시회 참여
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_7"
                value="유튜브"
                v-model="check62_7"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_7">
                유튜브
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_8"
                value="온라인 광고 및 마케팅"
                v-model="check62_8"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_8">
                온라인 광고 및 마케팅
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
                id="step62_9"
                value="문자 또는 메신저"
                v-model="check62_9"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_9">
                문자 또는 메신저
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_10"
                value="E-mail 문의"
                v-model="check62_10"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_10">
                E-mail 문의
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_11"
                value="오프라인 매장 방문"
                v-model="check62_11"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_11">
                오프라인 매장 방문
              </label>
            </div>
            <div class="d-flex align-items-start form-check">
              <input
                class="form-check-input ms-3"
                type="checkbox"
                id="otherOption"
                value="기타"
                v-model="check62_12"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="otherOption">
                기타
              </label>
              <input
                class="ms-2 preM"
                style="width: 20rem; height: 2rem; resize: none; outline: none"
                v-model="etc62_1"
                disabled
                placeholder="특별한 사유를 적어주세요."
              />
            </div>
          </div>
          <div
            class="d-flex flex-column justify-content-between align-items-start ms-4"
          >
            <div class="form-check" style="width: 18rem">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_12"
                value="직접 전화 문의"
                v-model="check62_13"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_12">
                직접 전화 문의
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_13"
                value="가격 비교 사이트"
                v-model="check62_14"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_13">
                가격 비교 사이트
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_14"
                value="주변인의 추천"
                v-model="check62_15"
                @click.prevent
              />
              <label class="preM form-check-label fs-5" for="step62_14">
                주변인의 추천
              </label>
            </div>
            <div class="form-check">
              <input
                class="preM form-check-input ms-3"
                type="checkbox"
                id="step62_15"
                value="지우지말것"
                @click.prevent
              />
            </div>
          </div>
        </div>
      </div>

      <div class="my-3 d-flex justify-content-center align-items-center">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">2-1.</span>우리가 고객과 소통하는 방식에서
            가장 효율적이고 효과적인 채널을 찾아 우선 순위화하고<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;각
            채널 단위로 실행 계획을 수립하여 실질적인 활동을 수행합니다.</label
          >
          <div
            class="d-flex flex-column justify-content-between align-items-center"
            style="width: 74rem; height: 0rem"
          >
            <div class="ThirdProperty2">
              <div class="ThirdPropertyLeftRight2 me-1">
                <div
                  class="ThirdPropertyTopDown2"
                  style="height: 29rem; width: 5rem"
                >
                  <div class="ThirdPropertyTop2 preSB">순위</div>
                  <div
                    style="
                      padding: 8px;
                      width: 100%;
                      height: 13.5rem;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    "
                  >
                    <div
                      class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center"
                    >
                      1
                    </div>
                    <hr class="custom-divider" />
                    <div
                      class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center"
                    >
                      2
                    </div>
                    <hr class="custom-divider" />
                    <div
                      class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center"
                    >
                      3
                    </div>
                    <hr class="custom-divider" />
                    <div
                      class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center"
                    >
                      4
                    </div>
                  </div>
                </div>
              </div>

              <div class="ThirdPropertyLeftRight2 me-1">
                <div
                  class="ThirdPropertyTopDown2"
                  style="height: 29rem; width: 15rem"
                >
                  <div class="ThirdPropertyTop2 preSB">선택 채널</div>
                  <div
                    style="
                      padding: 8px;
                      width: 100%;
                      height: 13.5rem;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    "
                  >
                    <div
                      class="form-control transparent-input preM"
                      style="color: grey"
                      v-html="channel62_1"
                    ></div>
                    <hr class="custom-divider" />

                    <div
                      class="form-control transparent-input preM"
                      style="color: grey"
                      v-html="channel62_2"
                    ></div>
                    <hr class="custom-divider" />

                    <div
                      class="form-control transparent-input preM"
                      style="color: grey"
                      v-html="channel62_3"
                    ></div>
                    <hr class="custom-divider" />

                    <div
                      class="form-control transparent-input preM"
                      style="color: grey"
                      v-html="channel62_4"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="ThirdPropertyLeftRight2 me-1">
                <div
                  class="ThirdPropertyTopDown2"
                  style="height: 29rem; width: 52rem"
                >
                  <div class="ThirdPropertyTop2 preSB">활동 계획</div>
                  <div
                    style="
                      padding: 8px;
                      width: 100%;
                      height: 13.5rem;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    "
                  >
                    <div
                      class="form-control transparent-input preM"
                      v-html="plan62_1"
                    ></div>
                    <hr class="custom-divider" />
                    <div
                      class="form-control transparent-input preM"
                      v-html="plan62_2"
                    ></div>
                    <hr class="custom-divider" />
                    <div
                      class="form-control transparent-input preM"
                      v-html="plan62_3"
                    ></div>
                    <hr class="custom-divider" />
                    <div
                      class="form-control transparent-input preM"
                      v-html="plan62_4"
                    ></div>
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
import step62 from "../modal/js/step62.js";
export default {
  name: "step62Com",
  ...step62,
};
</script>

<style scoped>
.basicContentBar {
  width: 46rem;
  background-color: #0098d5;
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
  color: #0098d5;
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
  color: #0098d5;
  /* 체크 마크의 색상 지정 */
}

.redPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
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

.transparent-input {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  height: 3rem;
}

.ThirdProperty {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight:nth-child(1) {
  flex-grow: 2;
}

.ThirdPropertyLeftRight:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight:nth-child(3) {
  flex-grow: 5;
}

.ThirdPropertyTopDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
  border-radius: 30px;
  color: white;
}

.ThirdtextareaCss {
  padding: 15px;
  width: 100%;
  height: 12rem;
  background: linear-gradient(180deg, #fdc6bf, #fff);
  border: none;
  resize: none;
  outline: none;
}

.custom-divider {
  border: 0;
  /* 기본 테두리 제거 */
  height: 1px;
  /* 선의 두께 */
  background-color: black;
  /* 선의 색상 */
  margin: 0;
  /* 상하 마진 제거 */
}

.ThirdProperty2 {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight2:nth-child(1) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(3) {
  flex-grow: 3;
}

.ThirdPropertyTopDown2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
  border-radius: 30px;
  color: white;
}

.transparent-input textarea {
  resize: none;
  /* 크기 조절 비활성화 */
  padding: 10px;
  /* 상하 패딩으로 수직 중앙에 가깝게 */
}

.d-flex.align-items-center {
  display: flex;
  width: 100%;
  height: 3rem;
}

.d-flex.align-items-center > .label {
  flex: 3;
  /* label의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.d-flex.align-items-center > textarea {
  flex: 7;
  /* textarea의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.form-control.transparent-input.preM {
  padding: 0;
  /* 필요한 경우 패딩 조절 */
}

select.form-control,
textarea.form-control {
  height: 3rem;
  /* Same height for both */
  resize: none;
  /* other styling properties */
}
</style>
