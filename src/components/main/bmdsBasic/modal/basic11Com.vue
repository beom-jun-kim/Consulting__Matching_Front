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
        <div class="d-flex justify-content-between" style="width: 40rem">
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

    <div style="width: 81rem; height: 37rem; border: black solid 1px">
      <div>
        <label
          for="businessArea"
          class="form-label preSB"
          style="font-size: 27px"
        >
          <span class="primeColor">1.</span> 고객관점에서 불편요소를 정의하고
          원인을 분석합니다.<br />&nbsp;&nbsp;<span class="primeColor"
            >1-1. </span
          >제품 분야에서 우리가 해결하고자 하는 고객의 결정적인(Critical)
          불편함(pain point)을 선택해 봅시다.
        </label>
      </div>
      <div class="preM">
        <table>
          <tr>
            <th
              class="text-center"
              style="background-color: #f75943; color: white"
              colspan="2"
            >
              제품(제조) 분야에서의 고객 불편요소
            </th>
          </tr>
          <tr style="border-top: none !important">
            <td class="text-center" style="background-color: #fee2de">기능</td>
            <td>
              <div class="form-check ms-3">
                <input class="form-check-input" type="check" value="option1" />
                <label class="form-check-label fs-4" for="marketUnderstanding1">
                  가. 잘 모르겠어요
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-center" style="background-color: #fee2de">성능</td>
            <td></td>
          </tr>
          <tr>
            <td class="text-center" style="background-color: #fee2de">
              디자인
            </td>
            <td></td>
          </tr>
          <tr>
            <td class="text-center" style="background-color: #fee2de">품질</td>
            <td></td>
          </tr>
          <tr>
            <td class="text-center" style="background-color: #fee2de">
              서비스
            </td>
            <td></td>
          </tr>

          <tr>
            <td class="text-center" style="background-color: #fee2de">가격</td>
            <td></td>
          </tr>
          <tr>
            <td class="text-center" style="background-color: #fee2de">
              구매과정
            </td>
            <td></td>
          </tr>

          <tr>
            <td class="text-center" style="background-color: #fee2de">기타</td>
            <td></td>
          </tr>
        </table>
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
  color: rgb(249, 156, 27);
}

.form-control {
  width: 81rem;
  height: 5rem;
}

.form-control2 {
  width: 81rem;
  height: 10rem;
}

table {
  width: 100%; /* 테이블의 전체 너비 */
  border-collapse: collapse; /* 테두리가 겹치게 설정 */
}

th,
td {
  border: none; /* 테두리 설정 */
  border-top: #818181 1px solid;
}

td:first-child {
  width: 10%; /* 첫 번째 열의 너비를 전체의 10%로 설정 */
}

td:last-child {
  width: 90%; /* 두 번째 열의 너비를 전체의 90%로 설정 */
}

tr:last-child {
  border-bottom: #f75943 1px solid;
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
  top: 8.5px;
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
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 0;
  /* 체크 마크의 높이 조절 */
  color: rgb(249, 156, 27);
  /* 체크 마크의 색상 지정 */
}
</style>
