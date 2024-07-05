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
    <div class="d-flex justify-content-start" style="height: 4rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 31rem">
          <img
            src="@/assets/beta/step05사람.png"
            alt="사람"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #0982d5">
            STEP 05 :
          </div>
          <div class="preEB" style="font-size: 35px">MVP 및 고객 평가</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">
        5-3 : 시장 최적화 제품/서비스 구현
      </div>
    </div>

    <div style="width: 81rem; height: 42.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 25px"
        >
          <span class="primeColor">3-3.</span> 고객의 의견과 피드백을 반영하여
          개선된 시장 최적화 제품/서비스를 구현합니다.
        </label>
      </div>
      <div
        class="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="step60Img my-3 d-flex flex-column justify-content-start align-items-center"
          id="businessArea"
          style="width: 66rem; height: 37rem; margin-top: 5px"
        >
          <div @click="handleClick" style="margin-top: 28px">
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              accept="image/*"
              @change="handleFileUpload"
            />
            <div
              class="d-flex justify-content-center align-items-center"
              style="width: 61rem; height: 30rem; background: white"
            >
              <!-- 클릭 영역 -->
              <div
                v-if="pathUrl60_1"
                class="productImg"
                :style="{ backgroundImage: 'url(' + pathUrl60_1 + ')' }"
                @click.stop
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step60 from "../modal/js/step60.js";
export default {
  name: "step60Com",
  ...step60,
};
</script>

<style scoped>
.productImg {
  width: 55rem;
  height: 28rem;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

.basicContentBar {
  width: 30rem;
  background-color: #0982d5;
  color: white;
  border-radius: 12px;
  font-size: 28px;
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

.step60Img {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow: hidden; */
  background-image: url("../../../../assets/buildup/step60.png");
  background-size: cover;
  background-position: center;
}
</style>
