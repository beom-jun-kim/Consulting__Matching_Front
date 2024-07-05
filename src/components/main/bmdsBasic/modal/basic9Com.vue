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
        <div class="d-flex justify-content-between" style="width: 40rem">
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
      <div class="basicContentBar">2-4 : 아이템의 핵심가치 설계</div>
    </div>

    <div style="width: 81rem; height: 37rem">
      <div>
        <label for="businessArea" class="form-label" style="font-size: 27px">
          <span class="primeColor">4.</span> 고객에게 제공하고자 하는 핵심가치는
          무엇입니까?
        </label>
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style="width: 81rem; height: 30rem"
      >
        <img
          style="margin-top: 5rem"
          src="@/assets/basicupdateCore.png"
          alt="핵심가치의 3요소(경쟁적, 차별적, 혜택과 가치)"
          width="950.05px"
          height="207.5px"
        />
        <div
          class="d-flex justify-content-between align-items-center"
          style="width: 97%"
        >
          <div>
            <div class="elementsBlock">경쟁적 요소</div>
            <div class="elementsDiscription">
              다른 경쟁제품/서비스와 비교하여<br />고객이 우수하다고 판단할 수
              있는<br />부분은 무엇일까요?
            </div>
            <textarea
              class="form-control bg-light p-2 rounded mb-1 mt-3"
              style="border-style: none; resize: none; height: 12.6rem"
              placeholder="ex. 반려동물시장, 카페시장, 유통시장 등"
            ></textarea>
          </div>
          <div>
            <div class="elementsBlock">차별적 요소</div>
            <div class="elementsDiscription">
              다른 경쟁제품/서비스와 비교하여<br />고객이 다르게 생각할 수
              있는<br />부분은 무엇일까요?
            </div>
            <textarea
              class="form-control bg-light p-2 rounded mb-1 mt-3"
              style="border-style: none; resize: none; height: 12.6rem"
              placeholder="ex. 반려동물시장 -> 반려동물용 사료 시장"
            ></textarea>
          </div>
          <div>
            <div class="elementsBlock">혜택과 가치</div>
            <div class="elementsDiscription">
              고객이 얻을 수 있는 혜택과<br />가치는 무엇이며 그것은<br />어느정도
              일까요?
            </div>
            <table>
              <tr
                class="primeBackgroundColor text-center"
                style="border-bottom: 1px solid #f8f8fa"
              >
                <!-- 행 -->
                <th>고객 혜택</th>
                <!-- 열 제목 -->
                <th
                  style="
                    border-left: #cccccc solid 1px;
                    border-right: #cccccc solid 1px;
                  "
                >
                  지표
                </th>
                <th>목표 수준</th>
              </tr>
              <tr>
                <td
                  style="
                    border-top: #cccccc solid 1px;
                    border-bottom: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.1" />
                </td>
                <td
                  style="
                    border-left: #cccccc solid 1px;
                    border-right: #cccccc solid 1px;
                    border-top: #cccccc solid 1px;
                    border-bottom: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.2" />
                </td>
                <td
                  style="
                    border-top: #cccccc solid 1px;
                    border-bottom: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.3" />
                </td>
              </tr>
              <tr>
                <td><input placeholder="ex.4" /></td>
                <td
                  style="
                    border-left: #cccccc solid 1px;
                    border-right: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.5" />
                </td>
                <td><input placeholder="ex.6" /></td>
              </tr>
              <tr>
                <td
                  style="
                    border-top: #cccccc solid 1px;
                    border-bottom: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.7" />
                </td>
                <td
                  style="
                    border-left: #cccccc solid 1px;
                    border-right: #cccccc solid 1px;
                    border-top: #cccccc solid 1px;
                    border-bottom: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.8" />
                </td>
                <td
                  style="
                    border-top: #cccccc solid 1px;
                    border-bottom: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.9" />
                </td>
              </tr>
              <tr>
                <td><input placeholder="ex.10" /></td>
                <td
                  style="
                    border-left: #cccccc solid 1px;
                    border-right: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.11" />
                </td>
                <td><input placeholder="ex.12" /></td>
              </tr>
              <tr>
                <td
                  style="
                    border-bottom: #fa9d1b 1px solid !important;
                    border-top: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.13" />
                </td>
                <td
                  style="
                    border-bottom: #fa9d1b 1px solid !important;
                    border-left: #cccccc solid 1px;
                    border-right: #cccccc solid 1px;
                    border-top: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.14" />
                </td>
                <td
                  style="
                    border-bottom: #fa9d1b 1px solid !important;
                    border-top: #cccccc solid 1px;
                  "
                >
                  <input placeholder="ex.15" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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
  width: 26.1rem;
  background-color: #fa9d1b;
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
  background-color: #fa9d1b;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 1.5rem;
  padding: 0.5rem;
  width: 20rem;
}

.elementsDiscription {
  text-align: center;
  font-size: 0.9rem;
}

table input {
  width: 100%;
  box-sizing: border-box; /* 패딩과 테두리가 너비에 포함되도록 설정 */
  border: none; /* 테두리 스타일을 적용 */
  padding: 0.5em; /* 적절한 내부 패딩을 적용 */
  margin: 0; /* 기본 마진을 제거 */
  font-size: 0.9rem;
}

table {
  border-collapse: collapse;
  width: 20rem; /* 테이블의 너비를 조정하고 싶다면 여기 값을 변경하세요 */
}

th,
td {
  text-align: center; /* 텍스트 중앙 정렬 */
}

/* 테이블 외곽선 제거를 위해 table 태그에 직접 적용할 수 있습니다 */
table {
  border: none;
}
</style>
