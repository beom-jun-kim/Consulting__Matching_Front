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
        <div class="d-flex justify-content-between" style="width: 30rem">
          <img src="@/assets/beta/step05사람.png" alt="사람" style="width: 50px; height: 50px" />
          <div class="preEB" style="font-size: 35px; color: #0982d5">
            STEP 05 :
          </div>
          <div class="preEB" style="font-size: 35px">MVP 및 고객 평가</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="width: 37rem !important">
        5-2 : 시장 검증 시나리오 설계 및 고객 반응 평가
      </div>
    </div>

    <div class="d-flex flex-column justify-content-between align-items-center" style="width:81rem; height:41.5rem;">
      <div style="height:43.5rem;">
        <div class="step58_1Img d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column justify-content-between align-items-center" style="width:38rem;height:100%;">
            <div style="width:38rem; height:3rem;"></div>
            <div class="d-flex justify-content-between align-items-center" style="width:38rem; height:38.5rem;">
              <div style="width:2.8rem; height:100%;"></div>
              <div class="d-flex flex-column justify-content-start align-items-start" style="width:35.2rem; height:100%;">
                <div
                  :style="{ width: '33.2rem', height: '7.5rem', background: this.computedAverage >= 9.0 && this.computedAverage <= 10 ? 'rgba(19, 210, 96, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '7rem', background: this.computedAverage >= 7.0 && this.computedAverage <= 8.9 ? 'rgba(184, 225, 53, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '7.2rem', background: this.computedAverage >= 5.0 && this.computedAverage <= 6.9 ? 'rgba(247, 202, 13, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '7rem', background: this.computedAverage >= 3.0 && this.computedAverage <= 4.9 ? 'rgba(241, 155, 61, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '10.5rem', background: this.computedAverage >= 0 && this.computedAverage <= 2.9 ? 'rgba(255, 110, 110, 0.2)' : '' }">
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-between align-items-center" style="width:37rem;height:100%;">
            <div style="width:37rem; height:3rem;"></div>
            <div class="d-flex justify-content-between align-items-center" style="width:37rem; height:38.5rem;">
              <div style="width:3rem; height:100%;"></div>
              <div class="d-flex flex-column justify-content-start align-items-start" style="width:34rem; height:100%;">
                <div
                  :style="{ width: '33.2rem', height: '7.5rem', background: this.computedAverage58 >= 9.0 && this.computedAverage58 <= 10 ? 'rgba(19, 210, 96, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '7rem', background: this.computedAverage58 >= 7.0 && this.computedAverage58 <= 8.9 ? 'rgba(184, 225, 53, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '7.2rem', background: this.computedAverage58 >= 5.0 && this.computedAverage58 <= 6.9 ? 'rgba(247, 202, 13, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '7rem', background: this.computedAverage58 >= 3.0 && this.computedAverage58 <= 4.9 ? 'rgba(241, 155, 61, 0.2)' : '' }">
                </div>
                <div
                  :style="{ width: '33.2rem', height: '10.5rem', background: this.computedAverage58 >= 0 && this.computedAverage58 <= 2.9 ? 'rgba(255, 110, 110, 0.2)' : '' }">
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
import step58_1 from "./js/step58_1.js";
export default {
  name: "step58_1Com",
  ...step58_1,
};
</script>

<style scoped>
.step58_1Img {
  width: 77rem;
  height: 41.5rem;
  position: relative;
  /* overflow: hidden; */
  background-image: url("../../../../assets/buildup/step58_1.png");
  background-size: cover;
  background-position: center;
}

.basicContentBar {
  width: 46rem;
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
</style>
