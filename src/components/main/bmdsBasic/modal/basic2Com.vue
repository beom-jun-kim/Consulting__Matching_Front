<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Business Model Design Solution
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 20rem">
          <img src="@/assets/bmds3/basicIcon1.png" alt="돋보기" style="width: 50px; height: 50px" />
          <div class="preEB" style="font-size: 30px; color: #fa9d1b">STEP 01 :</div>
          <div class="preEB" style="font-size: 30px">기회탐색</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar">
        1-1 : 아이템이 속한 시장 이해
      </div>
    </div>

    <div style="width: 81rem;">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 27px;">
          <span class="primeColor">1.</span> 준비하고 있는 아이템과 관련하여 창업자가 가진 역량 수준을 파악하고 아이템이 속한 시장에 대해서 얼마나 이해하고 있는지를
          확인합니다.
        </label>
      </div>
      <div class="my-3 d-flex flex-column justify-content-center align-items-center">
        <div>
          <label for="businessArea" class="preSB form-label fs-2">
            <span class="primeColor">1-1.</span> 생각하고 계시는 아이디어는 어느 분야에 속하나요?</label>
          <input type="text" class="form-control bg-light p-2 rounded" id="businessArea" style="border-style: none"
            placeholder="비즈니스 분야 입력" />
        </div>
        <div>
          <label class="preSB form-label fs-2"><span class="primeColor">1-2.</span> 관련 시장에 대해 얼마나 이해하고
            계시나요?</label>
          <div class="d-flex bg-light p-2 rounded align-items-center" style="width: 75rem; height: 5rem">
            <div class="form-check ms-3">
              <input class="form-check-input" type="radio" id="marketUnderstanding1" name="marketUnderstanding1"
                value="option1" v-model="marketUnderstanding1" />
              <label class="preM form-check-label fs-4" for="marketUnderstanding1">
                가. 전혀 몰라요
              </label>
            </div>
            <div class="form-check ms-5">
              <input class="preM form-check-input" type="radio" id="marketUnderstanding2" name="marketUnderstanding1"
                value="option2" v-model="marketUnderstanding2" />
              <label class="form-check-label fs-4" for="marketUnderstanding2">
                나. 경험이 있어요
              </label>
            </div>
            <div class="form-check ms-5">
              <input class="preM form-check-input" name="marketUnderstanding1" type="radio" id="marketUnderstanding3"
                value="option3" v-model="marketUnderstanding3" />
              <label class="form-check-label fs-4" for="marketUnderstanding3">
                다. 전문가 수준이에요
              </label>
            </div>
          </div>
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-2"><span class="preSB primeColor">1-3.</span> 목표 시장에서 일어나고
            있는 눈
            여겨 볼 만한 변화는 어떠한 것들이 있나요?</label>
          <input type="text" class="form-control bg-light p-2 rounded mb-5" style="height: 9rem; border-style: none"
            id="marketChanges" placeholder="시장 변화에 대한 관찰 입력" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marketUnderstanding1: false, // 체크박스의 선택 여부를 추적하는 데이터 속성
      marketUnderstanding2: false, // 체크박스의 선택 여부를 추적하는 데이터 속성
      marketUnderstanding3: false, // 체크박스의 선택 여부를 추적하는 데이터 속성
    };
  },
  computed: {
    // 체크박스 배경 이미지에 대한 스타일을 계산된 속성으로 설정합니다.
    checkboxIconUrl1() {
      // 체크박스 이미지 경로를 계산된 속성으로 반환합니다.
      return this.marketUnderstanding1 ? require("@/assets/checkBox.svg") : "";
    },
    checkboxIconUrl2() {
      // 체크박스 이미지 경로를 계산된 속성으로 반환합니다.
      return this.marketUnderstanding2 ? require("@/assets/checkBox.svg") : "";
    },
    checkboxIconUrl3() {
      // 체크박스 이미지 경로를 계산된 속성으로 반환합니다.
      return this.marketUnderstanding3 ? require("@/assets/checkBox.svg") : "";
    },
  },
};
</script>

<style scoped>
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

.form-control {
  width: 75rem;
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
input[type="radio"]+label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="radio"]+label:before {
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
input[type="radio"]:checked+label:before {
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
</style>
