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
      <div class="basicContentBar preSB">5-1 : MVP 설계 및 제작</div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <!-- <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 25px"
        >
          <span class="primeColor">1.</span> 우리 제품 또는 서비스가 생각했던
          만큼 정말 잘 팔릴 것인지를 확인하기 위하여 실제 수요 고객을 대상으로
          검증할 수 <br />있는 MVP<span style="font-size: 17px"
            >(최소기능제품)</span
          >를 설계하고 구현합니다.
        </label>
      </div> -->
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-2.</span> 시장에서 검증할 수 있는
            수준으로 창의적이고 혁신적인 MVP를 구현합니다.
          </label>
          <div
            class="step51Img my-3 d-flex flex-column justify-content-between align-items-center"
            id="businessArea"
            style="width: 78rem; height: 37rem"
          >
            <div class="preEB d-flex justify-content-center align-items-center">
              <div style="color: #0982d5; font-size: 20px">
                가장 적합한 MVP&nbsp;&nbsp;&nbsp;:
              </div>
              <div
                type="text"
                class="transparent-input ms-3 d-flex justify-content-center align-items-center"
                style="
                  border-top: none;
                  border-left: none;
                  border-right: none;
                  border-bottom: #0982d5 2px solid !important;
                  width: 45rem;
                  height: 3rem;
                  font-size: 20px;
                  color: #0982d5;
                "
                placeholder="텍스트를 작성하세요."
                v-html="title54_1"
              />
            </div>
            <div
              class="d-flex justify-content-center align-items-center mt-4"
              style="
                width: 76rem;
                height: 31rem;
                background: #e7e6e6;
                border-radius: 25px;
              "
            >
              <div
                class="d-flex justify-content-center align-items-center"
                style="
                  width: 75rem;
                  height: 30rem;
                  background: #b3b3b3;
                  border-radius: 25px;
                "
              >
                <div
                  style="
                    width: 74rem;
                    height: 29rem;
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
                        width: 74rem;
                        height: 25rem;
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
                        v-if="pathUrl54_1"
                        class="productImg"
                        :style="{ backgroundImage: 'url(' + pathUrl54_1 + ')' }"
                        @click.stop
                      ></div>
                    </div>
                  </div>
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
import step54 from "../modal/js/step54.js";
export default {
  name: "step54Com",
  ...step54,
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
  width: 22rem;
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

.ga {
  display: none;
  vertical-align: middle;
}

label {
  vertical-align: middle;
}

.ga + label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.ga + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 4.5px;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 4px;
}

.ga:checked + label:before {
  content: "\2713";
  position: absolute;
  left: 0;
  top: 4.5px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 0;
  color: rgb(249, 156, 27);
}
</style>
