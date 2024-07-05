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
        7-2 : 고객 반응 데이터 수집 및 분석
      </div>
    </div>
    <div style="width: 81rem; height: 41.5rem">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 25px">
          <span class="primeColor">2.</span> 고객이 제품/서비스를 사용하면서
          발생하는 데이터를 수집하고 분석할 수 있도록 사전 계획을 수립합니다.
        </label>
      </div>
      <div class="my-3 d-flex flex-column justify-content-between align-items-center" style="height: 35rem">
        <div>
          <!-- <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-1.</span> 우리의 경영 목표를 달성하기
            위하여 어떠한 고객 반응 데이터를 확인해야 할까요?
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
              style="font-size: 17px"
              >(아래에 몇가지 예제를 참조하세요.)</span
            ></label
          > -->
          <div class="step71Img my-3 d-flex flex-column justify-content-between align-items-center" id="businessArea"
            style="width: 81rem; height: 35rem"></div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <!-- <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt23"
        >저장</b-button
      > -->
    </div>
  </div>
</template>

<script>
export default {
  name: "step72Com",
};
</script>

<style scoped>
.basicContentBar {
  width: 26rem;
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
  background-image: url("../../../../assets/buildup/step72.png");
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
