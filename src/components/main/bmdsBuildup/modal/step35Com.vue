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
      <div class="basicContentBar preSB mb-4" style="width: 20rem">
        3-2 : 해결안 설계
      </div>
    </div>

    <div class="modal-wrap">
      <div class="my-3 d-flex justify-content-start align-items-center" style="height: 47rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">2-2.</span> 문제를 해결하기 위한 창의적인
            아이디어와 이를 구현하는 방법<span style="font-size: 17px">(Method)</span>을 구체적으로 작성하여 봅니다.</label>
          <div class="d-flex flex-column justify-content-between align-items-center"
            style="width: 74rem; height: 36.5rem; margin-top: 1rem">
            <div class="d-flex justify-content-between align-items-center">
              <div class="preSB d-flex justify-content-center align-items-center"
                style="font-size: 25px; width: 24rem; color: #f75943">
                문제정의
              </div>
              <div class="preSB d-flex justify-content-center align-items-center"
                style="font-size: 25px; width: 10rem; color: #f75943">
                해결방향
              </div>
              <div class="preSB d-flex justify-content-center align-items-center"
                style="font-size: 25px; width:38rem; color: #f75943">
                해결방식<span style="font-size: 17px">(구현방안)</span>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex justify-content-center align-items-center">
                <div class="preB d-flex justify-content-center align-items-center" style="
                    width: 4rem;
                    height: 4rem;
                    font-size: 70px;
                    color: #f75943;
                    background: white;
                    margin-right: -2rem;
                    z-index: 2;
                  ">
                  1
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="
                  width: 100%;
                  height: 10.5rem;
                  border: 3px solid #f75943;
                  border-radius: 15px;
                  padding: 10px 20px 10px 0;
                  z-index: 1;
                ">
                <div style="
                    width: 22rem;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;
                    padding: 2rem;
                  ">
                  <select class="form-control transparent-input preM" v-model="cause1" style="
                      color: grey;
                      width:100%;
                      height: 100%;
                      border: none;
                    ">
                    <option disabled value="">문제정의를 선택해주세요.</option>
                    <option v-for="(item, idx) in problemList" :key="idx" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="d-flex flex-column align-items-center preM" style="width: 10rem; height: 100%">
                  <input v-model="direction1_1" type="text" style="
                      width: 10rem;
                      height: 33%;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      outline: none;
                      text-align: center;
                    " placeholder="경량화" />
                  <input v-model="direction1_2" type="text" style="
                      width: 10rem;
                      height: 39%;
                      border-width: 1px;
                      border-style: solid;
                      border-color: #f75943;
                      outline: none;
                      text-align: center;
                    " />
                  <input v-model="direction1_3" type="text" style="
                      width: 10rem;
                      height: 33%;
                      border-width: 0 1px;
                      border-style: solid;
                      outline: none;
                      border-color: #f75943;
                      text-align: center;
                    " />
                </div>
                <div class="d-flex flex-column align-items-center preM" style="width:38rem; height: 100%">
                  <textarea v-model="solution1_1" style="
                      width:38rem;
                      height: 33%;
                      border: none;
                      outline: none;
                      text-align: center;
                      resize: none;
                    " placeholder="스틸 소재에서 알루미늄 소재로 교체하게 되면 무게가 00g 감소하게 될 것이다." />
                  <textarea v-model="solution1_2" style="
                      width:38rem;
                      height: 39%;
                      border-width: 1px 0;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      outline: none;
                      resize: none;
                    " />
                  <textarea v-model="solution1_3" style="
                      width:38rem;
                      height: 33%;
                      border: none;
                      outline: none;
                      text-align: center;
                      resize: none;
                    " />
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex justify-content-center align-items-center">
                <div class="preB d-flex justify-content-center align-items-center" style="
                    width: 4rem;
                    height: 4rem;
                    font-size: 70px;
                    color: #f75943;
                    background: white;
                    margin-right: -2rem;
                    z-index: 2;
                  ">
                  2
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="
                  width: 100%;
                  height: 10.5rem;
                  border: 3px solid #f75943;
                  border-radius: 15px;
                  padding: 10px 20px 10px 0;
                  z-index: 1;
                ">
                <div style="
                    width: 22rem;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;
                    padding: 2rem;
                  ">
                  <select class="form-control transparent-input preM" v-model="cause2" style="
                      color: grey;
                      width:100%;
                      height: 100%;
                      border: none;
                    ">
                    <option disabled>문제정의를 선택해주세요.</option>
                    <option v-for="(item, idx) in problemList" :key="idx" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="d-flex flex-column align-items-center preM" style="width: 10rem; height: 100%">
                  <input v-model="direction2_1" type="text" style="
                      width: 10rem;
                      height: 33%;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      outline: none;
                    " />
                  <input v-model="direction2_2" type="text" style="
                      width: 10rem;
                      height: 39%;
                      border-width: 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      outline: none;
                    " />
                  <input v-model="direction2_3" type="text" style="
                      width: 10rem;
                      height: 33%;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      outline: none;
                    " />
                </div>
                <div class="d-flex flex-column align-items-center preM" style="width:38rem; height: 100%">
                  <textarea v-model="solution2_1" style="
                      width:38rem;
                      height: 33%;
                      border: none;
                      outline: none;
                      text-align: center;
                      resize: none;
                    " />
                  <textarea v-model="solution2_2" style="
                      width:38rem;
                      height: 39%;
                      border-width: 1px 0;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      resize: none;
                      outline: none;
                    " />
                  <textarea v-model="solution2_3" style="
                      width:38rem;
                      height: 33%;
                      border: none;
                      outline: none;
                      text-align: center;
                      resize: none;
                    " />
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex justify-content-center align-items-center">
                <div class="preB d-flex justify-content-center align-items-center" style="
                    width: 4rem;
                    height: 4rem;
                    font-size: 70px;
                    color: #f75943;
                    background: white;
                    margin-right: -2rem;
                    z-index: 2;
                  ">
                  3
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="
                  width: 100%;
                  height: 10.5rem;
                  border: 3px solid #f75943;
                  border-radius: 15px;
                  padding: 10px 20px 10px 0;
                  z-index: 1;
                ">
                <div style="
                    width: 22rem;
                    height: 100%;
                    border: none;
                    outline: none;
                    text-align: center;
                    padding: 2rem;
                  ">
                  <select class="form-control transparent-input preM" v-model="cause3" style="
                      color: grey;
                      width:100%;
                      height: 100%;
                      border: none;
                    ">
                    <option disabled>문제정의를 선택해주세요.</option>
                    <option v-for="(item, idx) in problemList" :key="idx" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="d-flex flex-column align-items-center preM" style="width: 10rem; height: 100%">
                  <input v-model="direction3_1" type="text" style="
                      width: 10rem;
                      height: 33%;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      outline: none;
                    " />
                  <input v-model="direction3_2" type="text" style="
                      width: 10rem;
                      height: 39%;
                      border-width: 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      outline: none;
                    " />
                  <input v-model="direction3_3" type="text" style="
                      width: 10rem;
                      height: 33%;
                      border-width: 0 1px;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      outline: none;
                    " />
                </div>
                <div class="d-flex flex-column align-items-center preM" style="width:38rem; height: 100%">
                  <textarea v-model="solution3_1" style="
                      width:38rem;
                      height: 33%;
                      border: none;
                      outline: none;
                      text-align: center;
                      resize: none;
                    " />
                  <textarea v-model="solution3_2" style="
                      width:38rem;
                      height: 39%;
                      border-width: 1px 0;
                      border-style: solid;
                      border-color: #f75943;
                      text-align: center;
                      resize: none;
                      outline: none;
                    " />
                  <textarea v-model="solution3_3" style="
                      width:38rem;
                      height: 33%;
                      border: none;
                      outline: none;
                      text-align: center;
                      resize: none;
                    " />
                </div>
              </div>
            </div>
          </div>
          <textarea placeholder="메모..." v-model="memo" class="form-control bg-light p-2 rounded fs-4 preM my-4 memo">
            </textarea>
        </div>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep35One">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step35 from "./js/step35.js";
export default {
  name: "step35Com",
  ...step35,
};
</script>

<style scoped>
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

.memo {
  height: 100px;
  resize: none;
  border: none;
}
</style>
