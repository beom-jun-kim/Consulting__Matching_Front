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
        <div class="d-flex justify-content-between" style="width: 24rem">
          <img src="@/assets/beta/step06집.png" alt="큐브" style="width: 60px; height: 60px" />
          <div class="preEB" style="font-size: 35px; color: #0098d5">
            STEP 06 :
          </div>
          <div class="preEB" style="font-size: 35px">시장 론칭</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="width: 37rem !important">
        6-3 : 수익구조 및 가격전략 수립
      </div>
    </div>

    <div style="width: 81rem; height: 41.5rem">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 28px">
          <span class="primeColor">3.</span> 고객을 확보하고 고객과의 관계
          개선을 위해 수익구조와 가격전략을 수립합니다.<br />
          <span style="font-size: 20px; margin-left: 1.8rem">(수익구조 설계는 고객을 발굴하고 충성 고객을 지속적으로 유지하며
            고객 확장할 수 있는 구조로 설계합니다.)</span>
        </label>
      </div>

      <div class="my-3 d-flex justify-content-between align-items-center step63Img"
        style="height: 32.5rem; width: 79.4rem">
        <!-- 1번 박스 -->
        <div class="d-flex flex-column justify-content-between align-items-center"
          style="width: 23.6rem; height: 32rem; border-radius: 5%">
          <!-- title 입력란 -->
          <div class="d-flex justify-content-center align-items-center" style="width: 100%; height: 3.5rem">
            <div type="text" v-html="title64_1"
              class="form-control preM d-flex justify-content-center align-items-center transparent-input testPlace"
              style="
                color: white;
                width: 80%;
                font-size: 25px;
                text-align: center;
              " placeholder="BASIC" />
          </div>
          <!-- 가격, 사용자 입력란 -->
          <div class="d-flex flex-column justify-content-center align-items-center" style="height: 10rem">
            <div class="d-flex justify-content-between align-items-center" style="width: 19.6rem; margin-top: 30px">
              <div type="text" v-html="price64_1"
                class="form-control preM d-flex justify-content-center align-items-center transparent-input placeholderColor"
                style="width: 8.6rem; font-size: 20px; text-align: center" placeholder="9,500$" />
              <div type="text" v-html="player64_1"
                class="form-control preM d-flex justify-content-center align-items-center transparent-input placeholderColor"
                style="width: 6.8rem; font-size: 20px; text-align: center" placeholder="10대~20대" />
            </div>
          </div>
          <!-- 패키징 -->
          <div class="d-flex flex-column justify-content-between align-items-center"
            style="height: 18.5rem; padding: 2rem">
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_1" class="form-check-input" type="checkbox" id="check1" value="false"
                @click.prevent />
              <label class="preM form-check-label fs-5" for="check1">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_1_1)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " placeholder="영상화질" />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_1_1)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " placeholder="좋음" />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_2" class="form-check-input" type="checkbox" id="check2" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check2">
                <div type="text" class="preM transparent-input" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " placeholder="해상도" v-html="getTruncatedText(packageTitle64_1_2)" />
              </label>
              <div type="text" class="preM transparent-input" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " placeholder="720p" v-html="getTruncatedText(packageContent64_1_2)" />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_3" class="form-check-input" type="checkbox" id="check3" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check3">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_1_3)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " placeholder="동시 시청" />
              </label>
              <div type="text" class="preM transparent-input" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " placeholder="1명" v-html="getTruncatedText(packageContent64_1_3)" />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_4" class="form-check-input" type="checkbox" id="check4" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check4">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_1_4)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " placeholder="콘텐츠" />
              </label>
              <div type="text" class="preM transparent-input" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " placeholder="제한없음" v-html="getTruncatedText(packageContent64_1_4)" />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_5" class="form-check-input" type="checkbox" id="check5" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check5">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_1_5)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " placeholder="사용 디바이스" />
              </label>
              <div type="text" class="preM transparent-input" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " placeholder="1개" v-html="getTruncatedText(packageContent64_1_5)" />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_6" class="form-check-input" type="checkbox" @click.prevent id="check6"
                value="false" />
              <label class="preM form-check-label fs-5" for="check6">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_1_6)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " v-html="getTruncatedText(packageContent64_1_6)" />
            </div>
          </div>
        </div>
        <!-- 2번 박스 -->
        <div class="d-flex flex-column justify-content-between align-items-center"
          style="width: 23.6rem; height: 32rem; border-radius: 5%">
          <!-- title 입력란 -->
          <div class="d-flex justify-content-center align-items-center" style="width: 100%; height: 3.5rem">
            <div type="text" v-html="title64_2"
              class="form-control preM d-flex justify-content-center align-items-center transparent-input testPlace"
              style="
                color: white;
                width: 80%;
                font-size: 25px;
                text-align: center;
              " placeholder="Title" />
          </div>
          <!-- 가격, 사용자 입력란 -->
          <div class="d-flex flex-column justify-content-center align-items-center" style="height: 10rem">
            <div class="d-flex justify-content-between align-items-center" style="width: 19.6rem; margin-top: 30px">
              <div type="text" v-html="getTruncatedText(price64_2)"
                class="form-control preM d-flex justify-content-center align-items-center transparent-input placeholderColor"
                style="width: 8.6rem; font-size: 20px; text-align: center" />
              <div type="text" v-html="getTruncatedText(player64_2)"
                class="form-control preM d-flex justify-content-center align-items-center transparent-input placeholderColor"
                style="width: 6.8rem; font-size: 20px; text-align: center" />
            </div>
          </div>
          <!-- 패키징 -->
          <div class="d-flex flex-column justify-content-between align-items-center"
            style="height: 18.5rem; padding: 2rem">
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_7" class="form-check-input" type="checkbox" id="check7" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check7">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_2_1)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_2_1)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_8" class="form-check-input" type="checkbox" id="check8" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check8">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_2_2)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_2_2)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_9" class="form-check-input" type="checkbox" id="check9" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check9">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_2_3)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_2_3)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_10" class="form-check-input" type="checkbox" id="check10" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check10">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_2_4)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_2_4)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_11" class="form-check-input" type="checkbox" id="check11" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check11">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_2_5)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_2_5)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_12" class="form-check-input" type="checkbox" id="check12" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check12">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_2_6)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_2_6)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
          </div>
        </div>
        <!-- 3번 박스 -->
        <div class="d-flex flex-column justify-content-between align-items-center"
          style="width: 23.6rem; height: 32rem; border-radius: 5%">
          <!-- title 입력란 -->
          <div class="d-flex justify-content-center align-items-center" style="width: 100%; height: 3.5rem">
            <div type="text" v-html="title64_3"
              class="form-control preM d-flex justify-content-center align-items-center transparent-input testPlace"
              style="
                color: white;
                width: 80%;
                font-size: 25px;
                text-align: center;
              " placeholder="Title" />
          </div>
          <!-- 가격, 사용자 입력란 -->
          <div class="d-flex flex-column justify-content-center align-items-center" style="height: 10rem">
            <div class="d-flex justify-content-between align-items-center" style="width: 19.6rem; margin-top: 30px">
              <div type="text" v-html="getTruncatedText(price64_3)"
                class="form-control preM d-flex justify-content-center align-items-center transparent-input placeholderColor"
                style="width: 8.6rem; font-size: 20px; text-align: center" />
              <div type="text" v-html="getTruncatedText(player64_3)"
                class="form-control preM d-flex justify-content-center align-items-center transparent-input placeholderColor"
                style="width: 6.8rem; font-size: 20px; text-align: center" />
            </div>
          </div>
          <!-- 패키징 -->
          <div class="d-flex flex-column justify-content-between align-items-center"
            style="height: 18.5rem; padding: 2rem">
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_13" class="form-check-input" type="checkbox" id="check13" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check13">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_3_1)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_3_1)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_14" class="form-check-input" type="checkbox" id="check14" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check14">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_3_2)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_3_2)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_15" class="form-check-input" type="checkbox" id="check15" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check15">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_3_3)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_3_3)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_16" class="form-check-input" type="checkbox" id="check16" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check16">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_3_4)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_3_4)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_17" class="form-check-input" type="checkbox" id="check17" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check17">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_3_5)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_3_5)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width: 19.6rem; height: 2rem; padding-left: 0">
              <input v-model="check64_18" class="form-check-input" type="checkbox" id="check18" @click.prevent
                value="false" />
              <label class="preM form-check-label fs-5" for="check18">
                <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageTitle64_3_6)" style="
                    width: 12rem;
                    height: 2rem;
                    font-size: 17px;
                    border-bottom: 1px solid #c0c0c0;
                  " />
              </label>
              <div type="text" class="preM transparent-input" v-html="getTruncatedText(packageContent64_3_6)" style="
                  width: 5.6rem;
                  height: 2rem;
                  text-align: end;
                  font-size: 17px;
                  border-bottom: 1px solid #c0c0c0;
                " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step64 from "../modal/js/step64.js";
export default {
  name: "step64Com",
  ...step64,
};
</script>

<style scoped>
.step63Img {
  background-image: url("@/assets/buildup/step63.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.basicContentBar {
  width: 46rem;
  background-color: #0098d5;
  color: white;
  border-radius: 12px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholderColor {
  font-size: 20px;
  color: #c0c0c0;
}

.testPlace::placeholder {
  text-align: center;
  color: white;
}

.testPlace:focus {
  background-color: transparent;
  outline: none;
}

.primeColor {
  color: #0098d5;
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
  top: 6px;
  width: 20px;
  /* 체크 표시 크기 조절 */
  height: 20px;
  /* 체크 표시 크기 조절 */
  border: 2px solid #c0c0c0;
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
  color: #0098d5;
  /* 체크 마크의 색상 지정 */
}

.redPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
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

.transparent-input {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  height: 3rem;
}

.ThirdProperty {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight:nth-child(1) {
  flex-grow: 2;
}

.ThirdPropertyLeftRight:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight:nth-child(3) {
  flex-grow: 5;
}

.ThirdPropertyTopDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
  border-radius: 30px;
  color: white;
}

.ThirdtextareaCss {
  padding: 15px;
  width: 100%;
  height: 12rem;
  background: linear-gradient(180deg, #fdc6bf, #fff);
  border: none;
  resize: none;
  outline: none;
}

.custom-divider {
  border: 0;
  /* 기본 테두리 제거 */
  height: 1px;
  /* 선의 두께 */
  background-color: black;
  /* 선의 색상 */
  margin: 0;
  /* 상하 마진 제거 */
}

.ThirdProperty2 {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight2:nth-child(1) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(3) {
  flex-grow: 3;
}

.ThirdPropertyTopDown2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
  border-radius: 30px;
  color: white;
}

.transparent-input textarea {
  resize: none;
  /* 크기 조절 비활성화 */
  padding: 10px;
  /* 상하 패딩으로 수직 중앙에 가깝게 */
}

.d-flex.align-items-center {
  display: flex;
  width: 100%;
  height: 2.9rem;
}

.d-flex.align-items-center>.label {
  flex: 3;
  /* label의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.d-flex.align-items-center>textarea {
  flex: 7;
  /* textarea의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.form-control.transparent-input.preM {
  padding: 0;
  /* 필요한 경우 패딩 조절 */
}

select.form-control,
textarea.form-control {
  height: 3rem;
  /* Same height for both */
  resize: none;
  /* other styling properties */
}
</style>
