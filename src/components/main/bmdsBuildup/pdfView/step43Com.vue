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
        <div class="d-flex justify-content-between" style="width: 35rem">
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
        4-2 : 제품 또는 서비스 스케치
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">2.</span> 제품이나 서비스를 고객에게 설명할
          수 있는 수준으로 시각적으로 표현해 봅니다.<span
            style="font-size: 17px"
            >(3D, 플로우 차트 등을 활용해 보세요)</span
          >
        </label>
      </div>
      <!-- <div class="image-container" style="margin-right: 7.2rem">
          추후 업로드 된 이미지 표시거나 엠바스 링크 필요
        </div> -->
      <div
        class="d-flex justify-content-center align-items-center mt-4"
        style="height: 36rem; background: #e7e6e6; border-radius: 25px"
      >
        <div
          class="d-flex justify-content-center align-items-center"
          style="
            width: 79rem;
            height: 35rem;
            background: #b3b3b3;
            border-radius: 25px;
          "
        >
          <div
            style="
              width: 78rem;
              height: 34rem;
              background: white;
              border-radius: 25px;
            "
          >
            <div @click="handleClick">
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                accept="image/*"
                @change="handleFileUpload"
              />
              <div
                class="d-flex flex-column align-items-center"
                style="
                  width: 78rem;
                  height: 34rem;
                  background: white;
                  border-radius: 25px;
                "
              >
                <!-- 스프링표현부분 -->
                <div class="d-flex justify-content-center">
                  <div
                    class="d-flex flex-row justify-content-evenly"
                    style="width: 75rem"
                  >
                    <div v-for="(t, i) in 25" :key="i">
                      <div
                        class="d-flex justify-content-center align-items-end"
                        style="
                          width: 1.5rem;
                          height: 1.5rem;
                          background: #e7e6e6;
                          margin: 1rem 0 1rem 0;
                        "
                      >
                        <div
                          style="
                            width: 15px;
                            height: 4rem;
                            background: #7f7f7f;
                            margin-bottom: 10px;
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 클릭 영역 -->
                <div
                  v-if="imgUrl43_1"
                  class="productImg"
                  :style="{ backgroundImage: 'url(' + imgUrl43_1 + ')' }"
                  @click.stop
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step43 from "../modal/js/step43.js";
export default {
  name: "step43Com",
  ...step43,
};
</script>

<style scoped>
.productImg {
  width: 75rem;
  height: 33rem;
  border-radius: 25px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

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
  color: #4264ae;
}

.form-control {
  width: 75rem;
  height: 5rem;
}
</style>
