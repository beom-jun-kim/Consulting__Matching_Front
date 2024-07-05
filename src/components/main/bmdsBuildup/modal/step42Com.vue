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
          <img src="@/assets/beta/step4큐브.png" alt="큐브" style="width: 60px; height: 60px" />
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

    <div class="modal-wrap">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 25px; width: 80rem">
          <span class="primeColor">1-4.</span>
          고객이 진정으로 원하는 우리만의 제품과 서비스의 특징을 구체적으로
          작성하여 세부적인 항목과 품질적 특성으로 구분하고
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;중요도를
          선정합니다.
        </label>
        <div class="d-flex flex-column justify-content-between align-items-center" style="width: 100%; height: 43.5rem">
          <div class="d-flex justify-content-between align-items-center w-100">
            <div class="preSB blueProperty" style="width: 2.5rem; height: 3.5rem">
              No.
            </div>
            <div class="preSB blueProperty" style="width: 2.8rem; height: 3.5rem">
              기능
            </div>
            <div class="preSB blueProperty" style="width: 2.8rem; height: 3.5rem">
              성능
            </div>
            <div class="preSB blueProperty" style="width: 2.8rem; height: 3.5rem">
              품질
            </div>
            <div class="preSB blueProperty" style="width: 2.8rem; height: 3.5rem">
              디자인
            </div>
            <div class="preSB blueProperty" style="width: 43rem; height: 3.5rem">
              제품/서비스의 특징
            </div>
            <div class="d-flex flex-column justify-content-between align-items-center;" style="height: 3.5rem">
              <div class="preSB blueProperty" style="width: 13rem; height: 1.75rem">
                고객 요구 특성
              </div>
              <div class="d-flex justify-content-between align-items-center" style="height: 1.75rem">
                <div class="preSB blueProperty2" style="width: 4.2rem; border-radius: 5px">
                  필수
                </div>
                <div class="preSB blueProperty2" style="width: 4.2rem; border-radius: 5px">
                  경쟁
                </div>
                <div class="preSB blueProperty2" style="width: 4.2rem; border-radius: 5px">
                  차별
                </div>
              </div>
            </div>
            <div class="preSB blueProperty" style="width: 10rem; height: 3.5rem">
              중요도
            </div>
          </div>
          <div v-for="(num, i) in 11" :key="i" class="d-flex justify-content-between align-items-center w-100">
            <div class="preSB d-flex justify-content-center align-items-center" style="
                width: 2.5rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              ">
              {{ num }}
            </div>
            <input type="radio" class="preSB check1" :id="'test1' + num" :name="'step42_1' + num"
              v-model="category42_[num - 1]" value="기능" />
            <label class="preSB d-flex justify-content-center align-items-center" style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              " :for="'test1' + num">
            </label>
            <input type="radio" class="preSB check1" :id="'test2' + num" :name="'step42_1' + num"
              v-model="category42_[num - 1]" value="성능" />
            <label class="preSB d-flex justify-content-center align-items-center" style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              " :for="'test2' + num">
            </label>
            <input type="radio" class="preSB check1" :id="'test3' + num" :name="'step42_1' + num"
              v-model="category42_[num - 1]" value="품질" />
            <label class="preSB d-flex justify-content-center align-items-center" style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              " :for="'test3' + num">
            </label>
            <input type="radio" class="preSB check1" :id="'test4' + num" :name="'step42_1' + num"
              v-model="category42_[num - 1]" value="디자인" />
            <label class="preSB d-flex justify-content-center align-items-center" style="
                width: 2.8rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              " :for="'test4' + num">
            </label>

            <input type="text" class="preSB" style="
                width: 43rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              " v-model="content42_[num - 1]" />
            <input type="radio" class="preSB check2" :id="'test5' + num" :name="'step42_2' + num"
              v-model="character42_[num - 1]" value="기본" />
            <label class="preSB d-flex justify-content-center align-items-center" style="
                width: 4.2rem;
                height: 2.5rem;
                font-size: 15px;
                border: 1px solid black;
                border-radius: 5px;
              " :for="'test5' + num">
            </label>
            <input type="radio" class="preSB check2" :id="'test6' + num" :name="'step42_2' + num"
              v-model="character42_[num - 1]" value="경쟁" />
            <label class="preSB d-flex justify-content-center align-items-center" style="
                width: 4.2rem;
                height: 2.5rem;
                font-size: 15px;
                border: 1px solid black;
                border-radius: 5px;
              " :for="'test6' + num">
            </label>
            <input type="radio" class="preSB check2" :id="'test7' + num" :name="'step42_2' + num"
              v-model="character42_[num - 1]" value="매력" />
            <label class="preSB d-flex justify-content-center align-items-center" style="
                width: 4.2rem;
                height: 2.5rem;
                font-size: 15px;
                border: 1px solid black;
                border-radius: 5px;
              " :for="'test7' + num">
            </label>

            <div class="preSB d-flex justify-content-between align-items-center" style="
                width: 10rem;
                height: 2.5rem;
                border: 1px solid black;
                border-radius: 5px;
              ">
              <input type="radio" class="preSB check3" :id="'test8' + num" :name="'step42_3' + num"
                v-model="level42_[num - 1]" value="상" />
              <label class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px" :for="'test8' + num">상
              </label>
              <label class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px">
                /
              </label>
              <input type="radio" class="preSB check3" :id="'test9' + num" :name="'step42_3' + num"
                v-model="level42_[num - 1]" value="중" />
              <label class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px" :for="'test9' + num">중
              </label>
              <label class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px">
                /
              </label>
              <input type="radio" class="preSB check3" :id="'test10' + num" :name="'step42_3' + num"
                v-model="level42_[num - 1]" value="하" />
              <label class="preSB d-flex justify-content-center align-items-center"
                style="width: 2.5rem; height: 2.5rem; font-size: 15px" :for="'test10' + num">하
              </label>
            </div>

          </div>
          <textarea placeholder="메모..." v-model="memo"
            style="width:100%; height: 100px !important; resize: none; border: none;"
            class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
        </div>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm my-2" style="float: right" @click="saveBuildStep41">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step42 from "./js/step42.js";
export default {
  name: "step42Com",
  ...step42,
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

.check1 {
  display: none;
  vertical-align: middle;
}

label {
  vertical-align: middle;
}

.check1+label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.check1+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 2.8rem;
  height: 2.5rem;
  border: 0px solid #000;
  background-color: none;
  border-radius: 4px;
}

.check1:checked+label:before {
  content: "\2713";
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  line-height: 29px;
  color: #4264ae;

}

.check3 {
  display: none;
  vertical-align: middle;
}

label {
  vertical-align: middle;
}

.check3+label {
  position: relative;
  cursor: pointer;
}

.check3+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 3px;
  width: 2rem;
  height: 2rem;
  border: 0px solid #000;
  background-color: none;
  border-radius: 4px;
}

.check3:checked+label:before {
  content: "";
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  line-height: 29px;
  border: 2px solid #4264ae;
  border-radius: 50%;
}

.check2 {
  display: none;
  vertical-align: middle;
}

label {
  vertical-align: middle;
  margin: 0;
}

.check2+label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.check2+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4.2rem;
  height: 2.5rem;
  border: 0px solid #000;
  background-color: none;
  border-radius: 4px;
}

.check2:checked+label:before {
  content: "\2713";
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  line-height: 29px;
  color: #4264ae;
}
</style>
