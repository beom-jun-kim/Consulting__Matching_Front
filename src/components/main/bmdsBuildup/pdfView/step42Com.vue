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

    <div
      style="width: 81rem; height: 41.5rem"
      class="d-flex flex-column justify-content-start align-items-center"
    >
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 25px; width: 81rem"
        >
          <span class="primeColor">1-4.</span>
          고객이 진정으로 원하는 우리만의 제품과 서비스의 특징을 구체적으로
          작성하여 세부적인 항목과 품질적 특성으로 구분하고
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;중요도를
          선정합니다.
        </label>
        <div
          class="d-flex flex-column justify-content-between align-items-center"
          style="width: 100%; height: 35rem"
        >
          <div class="d-flex justify-content-between align-items-center w-100">
            <div
              class="preSB blueProperty"
              style="width: 2.5rem; height: 3.5rem"
            >
              No.
            </div>
            <div
              class="preSB blueProperty"
              style="width: 2.8rem; height: 3.5rem"
            >
              기능
            </div>
            <div
              class="preSB blueProperty"
              style="width: 2.8rem; height: 3.5rem"
            >
              성능
            </div>
            <div
              class="preSB blueProperty"
              style="width: 2.8rem; height: 3.5rem"
            >
              품질
            </div>
            <div
              class="preSB blueProperty"
              style="width: 2.8rem; height: 3.5rem"
            >
              디자인
            </div>
            <div
              class="preSB blueProperty"
              style="width: 43rem; height: 3.5rem"
            >
              제품/서비스의 특징
            </div>
            <div
              class="d-flex flex-column justify-content-between align-items-center;"
              style="height: 3.5rem"
            >
              <div
                class="preSB blueProperty"
                style="width: 13rem; height: 1.75rem"
              >
                품질적 특성
              </div>
              <div
                class="d-flex justify-content-between align-items-center"
                style="height: 1.75rem"
              >
                <div
                  class="preSB blueProperty2"
                  style="width: 4.2rem; border-radius: 5px"
                >
                  기본
                </div>
                <div
                  class="preSB blueProperty2"
                  style="width: 4.2rem; border-radius: 5px"
                >
                  경쟁
                </div>
                <div
                  class="preSB blueProperty2"
                  style="width: 4.2rem; border-radius: 5px"
                >
                  매력
                </div>
              </div>
            </div>
            <div
              class="preSB blueProperty"
              style="width: 10rem; height: 3.5rem"
            >
              중요도
            </div>
          </div>
          <div
            v-for="(num, i) in 11"
            :key="i"
            class="d-flex justify-content-between align-items-center w-100"
          >
            <div
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 2.5rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              "
            >
              {{ num }}
            </div>
            <input
              type="radio"
              class="preSB check1"
              :id="'test1' + num"
              :name="'step42_1' + num"
              v-model="category42_[num - 1]"
              value="기능"
              @click.prevent
            />
            <label
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              "
              :for="'test1' + num"
            >
            </label>
            <input
              type="radio"
              class="preSB check1"
              :id="'test2' + num"
              :name="'step42_1' + num"
              v-model="category42_[num - 1]"
              value="성능"
              @click.prevent
            />
            <label
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              "
              :for="'test2' + num"
            >
            </label>
            <input
              type="radio"
              class="preSB check1"
              :id="'test3' + num"
              :name="'step42_1' + num"
              v-model="category42_[num - 1]"
              value="품질"
              @click.prevent
            />
            <label
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              "
              :for="'test3' + num"
            >
            </label>
            <input
              type="radio"
              class="preSB check1"
              :id="'test4' + num"
              :name="'step42_1' + num"
              v-model="category42_[num - 1]"
              value="디자인"
              @click.prevent
            />
            <label
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              "
              :for="'test4' + num"
            >
            </label>

            <div
              type="text"
              class="preSB"
              style="
                width: 43rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              "
              v-html="content42_[num - 1]"
            />
            <input
              type="radio"
              class="preSB check2"
              :id="'test5' + num"
              :name="'step42_2' + num"
              v-model="character42_[num - 1]"
              value="기본"
              @click.prevent
            />
            <label
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 4.2rem;
                height: 2.5rem;
                font-size: 15px;
                border: 1px solid black;
                border-radius: 5px;
              "
              :for="'test5' + num"
            >
            </label>
            <input
              type="radio"
              class="preSB check2"
              :id="'test6' + num"
              :name="'step42_2' + num"
              v-model="character42_[num - 1]"
              value="경쟁"
              @click.prevent
            />
            <label
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 4.2rem;
                height: 2.5rem;
                font-size: 15px;
                border: 1px solid black;
                border-radius: 5px;
              "
              :for="'test6' + num"
            >
            </label>
            <input
              type="radio"
              class="preSB check2"
              :id="'test7' + num"
              :name="'step42_2' + num"
              v-model="character42_[num - 1]"
              value="매력"
              @click.prevent
            />
            <label
              class="preSB d-flex justify-content-center align-items-center"
              style="
                width: 4.2rem;
                height: 2.5rem;
                font-size: 15px;
                border: 1px solid black;
                border-radius: 5px;
              "
              :for="'test7' + num"
            >
            </label>

            <div
              class="preSB d-flex justify-content-between align-items-center"
              style="
                width: 10rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              "
            >
              <input
                type="radio"
                class="preSB check3"
                :id="'test8' + num"
                :name="'step42_3' + num"
                v-model="level42_[num - 1]"
                value="상"
                @click.prevent
              />
              <label
                class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px"
                :for="'test8' + num"
                >상
              </label>
              <label
                class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px"
              >
                /
              </label>
              <input
                type="radio"
                class="preSB check3"
                :id="'test9' + num"
                :name="'step42_3' + num"
                v-model="level42_[num - 1]"
                value="중"
                @click.prevent
              />
              <label
                class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px"
                :for="'test9' + num"
                >중
              </label>
              <label
                class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px"
              >
                /
              </label>
              <input
                type="radio"
                class="preSB check3"
                :id="'test10' + num"
                :name="'step42_3' + num"
                v-model="level42_[num - 1]"
                value="하"
                @click.prevent
              />
              <label
                class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px"
                :for="'test10' + num"
                >하
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step42 from "../modal/js/step42.js";
export default {
  name: "step42Com",
  ...step42,
};
</script>

<style scoped>
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
