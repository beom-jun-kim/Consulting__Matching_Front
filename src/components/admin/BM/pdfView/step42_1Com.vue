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
        <div class="d-flex justify-content-between" style="width: 34rem">
          <img
            src="@/assets/beta/step4큐브.png"
            alt="큐브"
            style="width: 60px; height: 60px"
          />
          <div class="preEB" style="font-size: 35px; color: #4264ae">
            STEP 04 :
          </div>
          <div class="preEB" style="font-size: 35px">제품 또는 서비스 개발</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar" style="background-color: #4264ae">
        4-1 : 제품(서비스) 핵심요소 정의
      </div>
    </div>

    <div style="width: 81rem; height: 42.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 25px; width: 81rem"
        >
          <span class="primeColor">1-2.</span>
          고객 요구사항의 핵심인 가장 중요한 부분과 경쟁적인 부분, 고객이 얻을
          수 있는 매력적인 부분을 확인하고 제품/서비스 설계에<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제대로
          반영하기 위한 방안을 고민해 봅시다.
        </label>
        <div
          class="d-flex flex-column justify-content-between align-items-center step42Img"
          style="width: 100%; height: 38rem"
        >
          <div class="box1 preM text-center">
            <div
              style="display: flex; border-bottom: #9ab1de 0.5px dotted"
              class="d-flex justify-content-center align-items-center mb-1"
              v-for="(item, index) in quadrant2"
              :key="index"
            >
              <div style="flex: 1.5">
                {{ item.category }}
              </div>
              <div style="flex: 8.5">
                {{ item.content }}
              </div>
            </div>
          </div>
          <div class="box2 preM text-center">
            <div
              style="display: flex; border-bottom: #5e7dc2 0.5px dotted"
              class="d-flex justify-content-center align-items-center mb-1"
              v-for="(item, index) in quadrant1"
              :key="index"
            >
              <div style="flex: 1.5">
                {{ item.category }}
              </div>
              <div style="flex: 8.5">
                {{ item.content }}
              </div>
            </div>
          </div>

          <div class="box3 preM text-center">
            <div
              style="display: flex; border-bottom: #36518e 0.5px dotted"
              class="d-flex justify-content-center align-items-center mb-1"
              v-for="(item, index) in quadrant3"
              :key="index"
            >
              <div style="flex: 1.5">
                {{ item.category }}
              </div>
              <div style="flex: 8.5">
                {{ item.content }}
              </div>
            </div>
          </div>
          <div class="box4 preM text-center">
            <div
              style="display: flex; border-bottom: #1e2d4e 0.5px dotted"
              class="d-flex justify-content-center align-items-center mb-1"
              v-for="(item, index) in quadrant4"
              :key="index"
            >
              <div style="flex: 1.5">
                {{ item.category }}
              </div>
              <div style="flex: 8.5">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step42_1 from "../modal/js/step42_1.js";
export default {
  name: "step42_1Com",
  ...step42_1,
};
</script>

<style scoped>
.box1 {
  position: absolute;
  top: 3rem;
  left: 8rem;
  width: 33rem;
  height: 11rem;
  padding: 0.8rem;
}
.box2 {
  position: absolute;
  top: 3rem;
  left: 46rem;
  width: 33rem;
  padding: 0.8rem;
  height: 11rem;
}
.box3 {
  position: absolute;
  top: 20rem;
  left: 8rem;
  width: 33rem;
  padding: 0.8rem;
  height: 11rem;
}
.box4 {
  position: absolute;
  top: 20rem;
  left: 46rem;
  width: 33rem;
  padding: 0.8rem;
  height: 11rem;
}
.step42Img {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow: hidden; */
  background-image: url("../../../../assets/buildup/step42.png");
  background-size: cover;
  background-position: center;
}
.basicContentBar {
  width: 25rem;
  background-color: rgb(249, 156, 27);
  color: white;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: #4264ae;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.blueProperty {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: white;
  background: #4264ae;
  border-radius: 5px;
}

.blueProperty2 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: white;
  background: #748fca;
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
.check1 {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
.check1 + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
.check1 + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 2.8rem;
  /* 체크 표시 크기 조절 */
  height: 2.5rem;
  /* 체크 표시 크기 조절 */
  border: 0px solid #000;
  /* 체크 표시의 외곽선 스타일 지정 */
  background-color: none;
  /* 체크 표시의 배경색 지정 */
  border-radius: 4px;
  /* 체크 표시의 둥근 테두리 만들기 */
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
.check1:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 50px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 29px;
  /* 체크 마크의 높이 조절 */
  color: #4264ae;
  /* 체크 마크의 색상 지정 */
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
.check3 {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
.check3 + label {
  position: relative;
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
.check3 + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 3px;
  width: 2rem;
  /* 체크 표시 크기 조절 */
  height: 2rem;
  /* 체크 표시 크기 조절 */
  border: 0px solid #000;
  /* 체크 표시의 외곽선 스타일 지정 */
  background-color: none;
  /* 체크 표시의 배경색 지정 */
  border-radius: 4px;
  /* 체크 표시의 둥근 테두리 만들기 */
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
.check3:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 50px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 29px;
  /* 체크 마크의 높이 조절 */
  border: 2px solid #4264ae;
  border-radius: 50%;
  /* 체크 마크의 색상 지정 */
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
.check2 {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
.check2 + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
.check2 + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4.2rem;
  /* 체크 표시 크기 조절 */
  height: 2.5rem;
  /* 체크 표시 크기 조절 */
  border: 0px solid #000;
  /* 체크 표시의 외곽선 스타일 지정 */
  background-color: none;
  /* 체크 표시의 배경색 지정 */
  border-radius: 4px;
  /* 체크 표시의 둥근 테두리 만들기 */
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
.check2:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 50px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 29px;
  /* 체크 마크의 높이 조절 */
  color: #4264ae;
  /* 체크 마크의 색상 지정 */
}
</style>
