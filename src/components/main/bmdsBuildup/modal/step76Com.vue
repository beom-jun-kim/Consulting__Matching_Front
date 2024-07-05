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
          <img src="@/assets/beta/step07로켓.png" alt="큐브" style="width: 60px; height: 60px" />
          <div class="preEB" style="font-size: 35px; color: #53c5c0">
            STEP 07 :
          </div>
          <div class="preEB" style="font-size: 35px">
            고객 개발 및 시장 확장
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">
        7-3 : 성장을 위한 준비 및 비즈니스 로드맵 계획 수립
      </div>
    </div>
    <div class="modal-wrap">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 25px">
          <span class="primeColor">3.</span> 향후 우리가 성장하기 위해서는 단기,
          중기, 장기적으로 무엇을 할 계획인가요?
        </label>
      </div>
      <div class="my-3 d-flex flex-column justify-content-between align-items-center" style="height: 46rem">
        <div>
          <div class="step71Img my-3 d-flex flex-column justify-content-end align-items-center" id="businessArea"
            style="width: 80rem; height: 34rem">
            <div class="d-flex flex-column justify-content-start align-items-center preM"
              style="width: 100%; height: 25rem; margin-bottom: 2rem">
              <div class="d-flex justify-content-between align-items-end"
                style="width: 100%; height: 10rem; margin-top: 4rem">
                <textarea placeholder="제품/서비스,매출,고용,투자 유치,특허,정부지원사업 참여,인증 등" v-model="goal76_1" style="
                    resize: none;
                    border: none;
                    outline: none;
                    width: 13rem;
                    height: 6rem;
                    margin: 0 0 1.5rem 2.5rem;
                  "></textarea>
                <textarea placeholder="텍스트를 작성하세요." v-model="goal76_2" style="
                    resize: none;
                    border: none;
                    outline: none;
                    width: 14rem;
                    height: 7.5rem;
                    margin: 0 3rem 1rem 0;
                  "></textarea>
                <textarea placeholder="텍스트를 작성하세요." v-model="goal76_3" style="
                    resize: none;
                    border: none;
                    outline: none;
                    width: 17rem;
                    height: 8.5rem;
                    margin: 0 4.5rem 0 0;
                  "></textarea>
              </div>
              <div class="d-flex justify-content-between align-items-end" style="width: 100%; height: 10rem">
                <textarea placeholder="전국 매장 50개 확장, 취급상품 30종 이상 확보 등" v-model="activity76_1" style="
                    width: 13rem;
                    height: 4rem;
                    margin: 0 0 5.5rem 2.5rem;
                    resize: none;
                    border: none;
                    outline: none;
                  "></textarea>
                <textarea placeholder="텍스트를 작성하세요." v-model="activity76_2" style="
                    width: 14rem;
                    height: 5.5rem;
                    margin: 0 3rem 3.5rem 0;
                    resize: none;
                    border: none;
                    outline: none;
                  "></textarea>
                <textarea placeholder="텍스트를 작성하세요." v-model="activity76_3" style="
                    width: 13rem;
                    height: 6.5rem;
                    margin: 0 8rem 1.5rem 0;
                    resize: none;
                    border: none;
                    outline: none;
                  "></textarea>
              </div>
            </div>
          </div>
        </div>
        <textarea placeholder="메모..." v-model="memo"
          style="width:76rem; height: 100px !important; resize: none; border: none;"
          class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep74">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step76 from "./js/step76.js";
export default {
  name: "step76Com",
  ...step76,
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
  width: 40rem;
  background-color: #53c5c0;
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
  color: #53c5c0;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}

.form-control3 {
  width: 75rem;
  height: 28rem;
}

.step71Img {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow: hidden; */
  background-image: url("../../../../assets/buildup/step76.png");
  background-size: cover;
  background-position: center;
}

input[type="checkbox"] {
  display: none;
  vertical-align: middle;
}

label {
  vertical-align: middle;
}

input[type="checkbox"]+label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

input[type="checkbox"]+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 27px;
  height: 27px;
  border: 1px solid #000;
  background-color: #fff;
}

input[type="checkbox"]:checked+label:before {
  content: "\2713";
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  line-height: 9px;
  color: #0982d5;
}
</style>
