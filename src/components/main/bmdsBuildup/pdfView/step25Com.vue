<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Business Model Design Solution
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="preEB d-flex justify-content-between" style="width: 38rem">
          <img
            src="@/assets/선물.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div style="font-size: 35px; color: #fa9d1b">STEP 02 :</div>
          <div style="font-size: 35px">아이디에이션(아이템 선정)</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar">2-4 : 아이템의 핵심가치 설계</div>
    </div>

    <div style="width: 81rem; height: 41.5rem; margin-top: 1rem">
      <div>
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">4.</span> 불편함을 해소하여 고객에게
          제공하고자 하는 가장 중요한 가치는 무엇입니까?
        </label>
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style="width: 81rem; height: 35rem; margin-top: 2rem"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          style="width: 100%; height: 8rem"
        >
          <div
            class="preEB"
            style="color: #fe7003; font-size: 25px; height: 3rem"
          >
            가치제안<span style="font-size: 17px">(Value Proposition)</span>
          </div>
          <div
            class="preM"
            style="
              width: 40rem;
              height: 5rem;
              resize: none;
              border: none;
              outline: none;
              background: #f2f2f2;
              text-align: center;
            "
            placeholder="고객에게 제공되는 우리만의 핵심가치를 작성하여 주세요."
            v-html="content25_1"
          ></div>
        </div>
        <img
          src="@/assets/buildup/arrow2.png"
          alt="핵심가치의 3요소(경쟁적, 차별적, 혜택과 가치)"
          style="width: 950.05px; height: 207.5px; margin-top: 1rem"
        />
        <div
          class="d-flex justify-content-between align-items-center"
          style="width: 97%"
        >
          <div>
            <div class="preSB elementsBlock">경쟁적 요소</div>
            <div class="preSB elementsDiscription">
              다른 경쟁제품/서비스와 비교하여<br />고객이 우수하다고 판단할 수
              있는<br />부분은 무엇일까요?
            </div>
          </div>
          <div>
            <div class="preSB elementsBlock">차별적 요소</div>
            <div class="preSB elementsDiscription">
              다른 경쟁제품/서비스와 비교하여<br />고객이 다르게 생각할 수
              있는<br />부분은 무엇일까요?
            </div>
          </div>
          <div>
            <div class="preSB elementsBlock">혜택과 가치</div>
            <div class="preSB elementsDiscription">
              고객이 얻을 수 있는 가장 중요한 혜택<br />(Benefit)은 무엇이며
              그것은<br />어느정도 일까요?
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center"
          style="width: 97%"
        >
          <div
            class="form-control p-4 rounded mb-1 d-flex flex-column justify-content-between align-items-center preM"
            style="width: 22rem; height: 10.6rem; background: #f2f2f2"
          >
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="1."
              v-model="competitor25_1"
              disabled
            />
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="2."
              v-model="competitor25_2"
              disabled
            />
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="3."
              v-model="competitor25_3"
              disabled
            />
          </div>
          <div
            class="d-flex justify-content-center align-items-center"
            style="width: 4rem; height: 10.6rem"
          >
            <img
              src="@/assets/buildup/plus.png"
              alt="플러스"
              style="width: 50px; height: 50px"
            />
          </div>
          <div
            class="form-control p-4 rounded mb-1 d-flex flex-column justify-content-between align-items-center preM"
            style="width: 22rem; height: 10.6rem; background: #f2f2f2"
          >
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="1."
              v-model="discrim25_1"
              disabled
            />
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="2."
              v-model="discrim25_2"
              disabled
            />
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="3."
              v-model="discrim25_3"
              disabled
            />
          </div>
          <div
            class="d-flex justify-content-center align-items-center"
            style="width: 4rem; height: 10.6rem"
          >
            <img
              src="@/assets/buildup/equale.png"
              alt="이꼴"
              style="width: 50px; height: 50px"
            />
          </div>
          <div
            class="form-control p-4 rounded mb-1 d-flex flex-column justify-content-between align-items-center preM"
            style="width: 22rem; height: 10.6rem; background: #f2f2f2"
          >
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="1."
              v-model="benefit25_1"
              disabled
            />
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="2."
              v-model="benefit25_2"
              disabled
            />
            <input
              type="text"
              style="
                width: 100%;
                height: 2.5rem;
                border: none;
                outline: none;
                background: #f2f2f2;
              "
              placeholder="3."
              v-model="benefit25_3"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step25 from "../modal/js/step25.js";
export default {
  name: "step25Com",
  ...step25,
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/POV.png");
  background-size: cover;
  background-position: center;
  z-index: 3;
  position: absolute;
  left: 38rem;
}

.basicContentBar {
  width: 29rem;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #fe7003;
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: rgb(249, 156, 27);
}

.primeBackgroundColor {
  background-color: rgb(249, 156, 27);
  color: white;
}

.elementsBlock {
  background-color: #fe7003;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 1.5rem;
  width: 22rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.elementsDiscription {
  text-align: center;
  font-size: 18px;
  margin: 1rem 0;
}

table input {
  width: 100%;
  box-sizing: border-box;
  /* 패딩과 테두리가 너비에 포함되도록 설정 */
  border: none;
  /* 테두리 스타일을 적용 */
  padding: 0.5em;
  /* 적절한 내부 패딩을 적용 */
  margin: 0;
  /* 기본 마진을 제거 */
  font-size: 0.9rem;
}

table {
  border-collapse: collapse;
  width: 20rem;
  /* 테이블의 너비를 조정하고 싶다면 여기 값을 변경하세요 */
}

th,
td {
  text-align: center;
  /* 텍스트 중앙 정렬 */
}

/* 테이블 외곽선 제거를 위해 table 태그에 직접 적용할 수 있습니다 */
table {
  border: none;
}
</style>
