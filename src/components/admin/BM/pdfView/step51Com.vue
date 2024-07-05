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
      <div class="my-3">
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
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-1.</span> 우리의 현재 상황에 가장 적합한
            MVP를 설계합니다.
            <span style="font-size: 17px"
              >(최대 3개까지 선택 가능합니다.)</span
            ></label
          >
          <div
            class="step51Img my-3 d-flex flex-column justify-content-between align-items-center"
            id="businessArea"
            style="width: 78rem; height: 30rem"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 60px"
                >
                  <div style="margin: -32px 0 0 59px">
                    <div
                      v-if="disableCheckboxes(1)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_1"
                      v-model="check51_1"
                      style="z-index: 1"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-4" for="step51_1">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 60px"
                >
                  <div style="margin: -32px 0 0 44px">
                    <div
                      v-if="disableCheckboxes(2)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_2"
                      v-model="check51_2"
                      style="z-index: 1"
                      @click.prevent
                    />
                    <label class="preM form-check-label fs-4" for="step51_2">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 60px"
                >
                  <div style="margin: -32px 0 0 5px">
                    <div
                      v-if="disableCheckboxes(3)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_3"
                      v-model="check51_3"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_3">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 60px"
                >
                  <div style="margin: -32px 0 0 15px">
                    <div
                      v-if="disableCheckboxes(4)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_4"
                      v-model="check51_4"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_4">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 60px"
                >
                  <div style="margin: -32px 0 0 39px">
                    <div
                      v-if="disableCheckboxes(5)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_5"
                      v-model="check51_5"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_5">
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 70px"
                >
                  <div style="margin: -32px 0 0 26px">
                    <div
                      v-if="disableCheckboxes(6)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_6"
                      v-model="check51_6"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_6">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 70px"
                >
                  <div style="margin: -32px 0 0 25px">
                    <div
                      v-if="disableCheckboxes(7)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_7"
                      v-model="check51_7"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_7">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 70px"
                >
                  <div style="margin: -32px 0 0 23px">
                    <div
                      v-if="disableCheckboxes(8)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_8"
                      v-model="check51_8"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_8">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 70px"
                >
                  <div style="margin: -32px 0 0 28px">
                    <div
                      v-if="disableCheckboxes(9)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_9"
                      v-model="check51_9"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_9">
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-column justify-content-end align-items-center"
                style="width: 15.6rem; height: 15rem"
              >
                <div
                  class="d-flex justify-content-start align-items-center"
                  style="width: 100%; height: 3rem; margin-bottom: 70px"
                >
                  <div style="margin: -32px 0 0 71px">
                    <div
                      v-if="disableCheckboxes(10)"
                      style="
                        width: 27px;
                        height: 27px;
                        background: gray;
                        z-index: 3;
                        position: absolute;
                        margin-top: 14px;
                      "
                    ></div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="step51_10"
                      v-model="check51_10"
                      @click.prevent
                      style="z-index: 1"
                    />
                    <label class="preM form-check-label fs-4" for="step51_10">
                    </label>
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
import step51 from "../modal/js/step51.js";
export default {
  name: "step51Com",
  ...step51,
};
</script>

<style scoped>
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

.step51Img {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow: hidden; */
  background-image: url("../../../../assets/buildup/step51.png");
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

input[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 27px;
  height: 27px;
  border: 1px solid #000;
  background-color: #fff;
}

input[type="checkbox"]:checked + label:before {
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
