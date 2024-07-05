<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <div style="color: gray; font-size: 1rem; margin: 1rem 1rem 0 0">
        Business Model Design Solution
      </div>
      <div>
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <!-- 제목 -->
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex">
        <div
          style="
            font-size: 6rem;
            width: 6rem;
            color: rgba(236, 226, 238, 1);
            margin: -2.7rem 1.5rem 0 -7.5rem;
          "
        >
          01
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Market Insight</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            3) 시장 트렌드
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="mb-5"
        style="
          width: 83rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
          margin-left: -1rem;
        "
      >
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          관련 시장에 대한 사회적 이슈와 경제적 이슈를 통해 시장의 흐름을
          살펴보고, 해당 이슈가 내 아이템에 긍정적 측면인지 부정적 측면인지
          분석합니다.
        </div>
      </div>
    </div>
    <!-- 제목 엔드 -->
    <div class="row justify-content-between">
      <div
        class="col-3 d-flex justify-content-center align-items-center issueBox"
        style="background-color: white; margin-left: 10%"
      >
        사회적 이슈
      </div>
      <div
        class="col-3 d-flex justify-content-center align-items-center issueBox"
        style="background-color: white; margin-right: 10%"
      >
        경제적 이슈
      </div>
    </div>

    <div class="row" style="background-color: #e7e6e6; z-index: 10">
      <div class="row d-flex justify-content-center" style="margin-top: 8%">
        <div class="col-5">
          <div
            id="socialIssuesPositive"
            class="p-3 border"
            style="background-color: white; width: 30rem; height: 15rem"
          ></div>
        </div>
        <div class="col-1">
          <div class="arrow-box-up" style="font-size: 1rem">긍정적요인</div>
        </div>
        <div class="col-5">
          <div
            id="economicIssuesPositive"
            class="p-3 border"
            style="background-color: white; width: 30rem; height: 15rem"
          ></div>
        </div>
      </div>
      <div class="row mt-3 mb-3 d-flex justify-content-center">
        <div class="col-5">
          <div
            id="socialIssuesNegative"
            class="p-3 border"
            style="background-color: white; width: 30rem; height: 15rem"
          ></div>
        </div>
        <div class="col-1">
          <div class="arrow-box-down" style="font-size: 1rem">부정적 요인</div>
        </div>
        <div class="col-5">
          <div
            id="economicIssuesNegative"
            class="p-3 border"
            style="background-color: white; width: 30rem; height: 15rem"
          ></div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveTrend"
        >임시저장</b-button
      >
      <b-button
        class="btn btn-sm"
        style="float: right"
        @click="$bvModal.show('myModal')"
        >추가하기</b-button
      >

      <b-modal id="myModal">
        <template #modal-header="{ close }">
          <div class="d-flex justify-content-end w-100">
            <b-button size="sm" variant="outline-danger" @click="close()">
              X
            </b-button>
          </div>
        </template>
        <div>
          <div>
            <label for="issue">이슈:</label>
            <select v-model="issue">
              <option value="social">사회적</option>
              <option value="economical">경제적</option>
            </select>
          </div>
          <div>
            <label for="factor">요인:</label>
            <select v-model="factor">
              <option value="positive">긍정적</option>
              <option value="negative">부정적</option>
            </select>
          </div>
          <div>
            <label for="content">내용:</label>
            <input type="text" v-model="content" />
          </div>
        </div>
        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="success" @click="saveMar"> OK </b-button>
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      marketTrend: {
        socialIssuesPositive: [],
        socialIssuesNegative: [],
        economicIssuesPositive: [],
        economicIssuesNegative: [],
      },
      issue: "", // 이슈
      factor: "", // 요인
      content: "", // 작성내용
      locat: "",
    };
  },
  methods: {
    saveMar() {
      this.marketSave(this.issue, this.factor, this.content);
    },
    marketSave(issue, factor, content) {
      if (issue == "social" && factor == "positive") {
        this.marketTrend.socialIssuesPositive.push({ content, issue, factor });
        this.locat = "socialIssuesPositive";
      } else if (issue == "social" && factor == "negative") {
        this.marketTrend.socialIssuesNegative.push({ content, issue, factor });
        this.locat = "socialIssuesNegative";
      } else if (issue == "economical" && factor == "positive") {
        this.marketTrend.economicIssuesPositive.push({
          content,
          issue,
          factor,
        });
        this.locat = "economicIssuesPositive";
      } else {
        this.marketTrend.economicIssuesNegative.push({
          content,
          issue,
          factor,
        });
        this.locat = "economicIssuesNegative";
      }

      const parentElement = document.getElementById(this.locat); // 'border' ID를 가진 요소를 가져옵니다.

      // 새로운 div 요소를 생성합니다.
      const newDiv = document.createElement("div");
      newDiv.classList.add("d-flex", "justify-content-evenly");
      newDiv.style.width = "100%";
      newDiv.style.height = "2.5rem";
      newDiv.style.border = "1px solid black";

      // div 안에 들어갈 내용을 추가합니다.
      const div1 = document.createElement("div");
      div1.textContent = content;

      const deleteButton = document.createElement("p");
      deleteButton.textContent = "X";
      deleteButton.style.cursor = "pointer";

      // 클릭 이벤트를 추가합니다.
      deleteButton.addEventListener("click", (event) => {
        this.deleteMarket(event);
      });

      newDiv.appendChild(div1);
      newDiv.appendChild(deleteButton);

      // 부모 요소에 새로운 div를 추가합니다.
      parentElement.appendChild(newDiv);
    },
    deleteMarket(event) {
      // 삭제 버튼을 눌렀을 때 실행할 로직을 작성합니다.
      const parentElement = event.target.parentElement;
      parentElement.remove();
    },
    saveTrend() {
      console.log(this.marketTrend);
    },
  },
};
</script>

<style scoped>
textarea {
  width: 98%;
}

.arrow-box-up {
  position: relative;
  background-color: #c179be;
  border: 1px solid #c179be;
  padding: 10px;
  /* 막대 부분 얇게 조절 */
  height: 100%;
  color: white;
  align-items: center;
}

.issueBox {
  border: 2px solid #c179be;
  position: relative;
  width: 20vmin;
  /* 예: 부모 요소의 너비를 설정 */
  height: 10vmin;
  /* 예: 부모 요소의 높이를 설정 */
  z-index: 1;
  margin-bottom: -5%;
}

.issueBox::before {
  content: "";
  position: absolute;
  right: calc(-1 * 20vmin / 3);
  /* 부모 요소의 너비의 1/3 */
  top: 50%;
  transform: translateY(-100%);

  border-top: calc(10vmin / 2) solid transparent;
  /* 부모 요소의 높이의 1/2 */
  border-left: calc(20vmin / 3) solid #c179be;
  /* 부모 요소의 너비의 1/3 */
}

.arrow-box-up::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  border-left: 60px solid transparent;
  /* 화살표 머리 크기 조절 */
  border-right: 60px solid transparent;
  /* 화살표 머리 크기 조절 */
  border-bottom: 40px solid #c179be;
  /* 화살표 머리 크기 조절 */
  z-index: 1;
}

.arrow-box-down {
  width: fit-content;
  position: relative;
  background-color: #7f7f7f;
  border: 1px solid #7f7f7f;
  padding: 10px;
  /* 막대 부분 얇게 조절 */
  height: 100%;
  color: white;
}

.arrow-box-down::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  border-left: 60px solid transparent;
  /* 화살표 머리 크기 조절 */
  border-right: 60px solid transparent;
  /* 화살표 머리 크기 조절 */
  border-top: 40px solid #7f7f7f;
  /* 화살표 머리 크기 조절 */
  z-index: 1;
}
</style>
