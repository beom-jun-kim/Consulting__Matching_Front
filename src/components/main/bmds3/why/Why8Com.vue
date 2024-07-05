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
    <div
      class="d-flex justify-content-start"
      style="height: 5rem; margin-left: 1rem"
    >
      <div class="d-flex">
        <div
          style="
            font-size: 6rem;
            width: 6rem;
            color: rgba(236, 226, 238, 1);
            margin: -2.7rem 1.5rem 0 -7.5rem;
          "
        >
          02
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Customer and Problem Definition</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            3) 문제 탐색 및 선정
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        "
      >
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          고객의 불만사항(Pain Point)과 기존 제품(서비스)으로 충족되지 않는
          니즈를 탐색합니다. 또한, 문제의 심각도를 평가하여 핵심 문제로 채택할지
          판단합니다.
        </div>
      </div>
    </div>
    <div class="d-flex mt-4">
      <fieldset class="overlay d-flex align-items-center flex-column">
        <legend
          style="
            color: rgb(199, 121, 196);
            margin-top: -1rem;
            background: white;
            width: 15rem;
            height: 6rem;
          "
        >
          문제 탐색<br />Problem Exploration
        </legend>
        <div class="d-flex justify-content-evenly w-100" style="height: 30rem">
          <div>
            <div class="colorPink">고객 불만사항<br />(Pain point)</div>
            <div id="complaint" class="border"></div>
          </div>
          <div>
            <div class="colorPink">고객 불충족 니즈<br />(Unmet needs)</div>
            <div id="unmetNeed" class="border"></div>
          </div>
          <div>
            <div class="colorPink">고객 요구사항<br />(Requirements)</div>
            <div id="requirement" class="border"></div>
          </div>
        </div>
        <!-- 문제 추가하기 버튼과 모달창 -->
        <div class="my-3">
          <b-button class="btn btn-sm" @click="$bvModal.show('modal-scoped')"
            >추가하기</b-button
          >

          <b-modal id="modal-scoped">
            <template #modal-header="{ close }">
              <div class="d-flex justify-content-end w-100">
                <b-button size="sm" variant="outline-danger" @click="close()">
                  X
                </b-button>
              </div>
            </template>
            <div>
              <div>
                <label for="severity">문제 심각도:</label>
                <select v-model="severity">
                  <option value="high">상</option>
                  <option value="medium">중</option>
                  <option value="low">하</option>
                </select>
              </div>
              <div>
                <label for="issueType">문제 분류:</label>
                <select v-model="issueType">
                  <option value="complaint">고객 불만사항</option>
                  <option value="unmetNeed">고객 불충족 니즈</option>
                  <option value="requirement">고객 요구사항</option>
                </select>
              </div>
              <div>
                <label for="content">내용:</label>
                <input type="text" v-model="content" />
              </div>
            </div>
            <template #modal-footer="{ cancel }">
              <b-button size="sm" variant="success" @click="saveData">
                OK
              </b-button>
              <b-button size="sm" variant="danger" @click="cancel()">
                Cancel
              </b-button>
            </template>
          </b-modal>
        </div>
      </fieldset>
      <div>
        <fieldset class="overlay2 d-flex align-items-center flex-column">
          <legend
            style="
              color: rgb(199, 121, 196);
              margin-top: -1rem;
              background: white;
              width: 15rem;
              height: 6rem;
            "
          >
            문제 정의<br />Problem definition
          </legend>
          <textarea
            style="width: 100%; height: 500px; font-size: 15px; border: none"
            v-model="probDefinition"
          ></textarea>
        </fieldset>
        <button
          class="btn btn-sm btn-primary"
          style="float: right; margin-top: 6px"
          @click="saveIssues"
        >
          임시저장
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      customerIssues: [], // 고객 불만 사항
      probDefinition: "", // 문제 정의
      content: "", // 내용
      severity: "", // 문제의 심각도
      issueType: "", // 어디에 입력할것인지
    };
  },

  methods: {
    saveData() {
      // 저장 로직을 여기에 추가하면 됩니다.
      this.probSave(this.severity, this.issueType, this.content);
    },
    probSave(severity, issueType, content) {
      if (this.severity == "" && this.issueType == "" && this.content == "") {
        alert("항목을 입력해주세요.");
      }
      this.customerIssues.push({ content, severity, issueType });
      const parentElement = document.getElementById(issueType); // 'border' ID를 가진 요소를 가져옵니다.

      // 새로운 div 요소를 생성합니다.
      const newDiv = document.createElement("div");
      newDiv.classList.add("d-flex", "justify-content-evenly");
      newDiv.style.width = "100%";
      newDiv.style.height = "2.5rem";
      newDiv.style.border = "1px solid black";

      // div 안에 들어갈 내용을 추가합니다.
      const div1 = document.createElement("div");
      div1.textContent = severity;

      const div2 = document.createElement("div");
      div2.textContent = content;

      const deleteButton = document.createElement("p");
      deleteButton.textContent = "X";
      deleteButton.style.cursor = "pointer";

      // 클릭 이벤트를 추가합니다.
      deleteButton.addEventListener("click", (event) => {
        this.deleteProblem(event);
      });

      newDiv.appendChild(div1);
      newDiv.appendChild(div2);
      newDiv.appendChild(deleteButton);

      // 부모 요소에 새로운 div를 추가합니다.
      parentElement.appendChild(newDiv);
      this.issueType = "";
      this.content = "";
      this.severity = "";
    },
    deleteProblem(event) {
      // 삭제 버튼을 눌렀을 때 실행할 로직을 작성합니다.

      const parentElement = event.target.parentElement;
      const deleteButton = event.target;
      const issueId = deleteButton.getAttribute("data-id");
      BMDSService.removeCustomerIssues(issueId);
      parentElement.remove();
    },

    saveIssues() {
      if (confirm("저장하시겠습니까?")) {
        var explorationDatas = [];
        for (let customerIssue of this.customerIssues) {
          explorationDatas.push({
            issueType: customerIssue.issueType,
            content: customerIssue.content,
            severity: customerIssue.severity,
          });
        }
        var probDefinitionData = {
          content: this.probDefinition,
        };

        BMDSService.saveProblemDefinition(
          this.$route.params.id,
          probDefinitionData
        )
          .then(() => {
            BMDSService.saveCustomerIssues(
              this.$route.params.id,
              explorationDatas
            )
              .then(() => {})
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getCpd(id) {
      BMDSService.getCustomerIssues(id)
        .then((res) => {
          for (let ci of res.data.customerIssues) {
            this.customerIssues.push(ci);
          }
          this.probDefinition = res.data.problemDefinitions[0].content;
          this.getSave();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSave() {
      if (this.customerIssues.length < 1) {
        alert("기존에 작성된 내용이 없습니다.");
      }
      for (let issue of this.customerIssues) {
        let issueType = issue.issueType;
        let content = issue.content;
        let severity = issue.severity;
        let id = issue.issue_id;

        const parentElement = document.getElementById(issueType); // 'border' ID를 가진 요소를 가져옵니다.

        // 새로운 div 요소를 생성합니다.
        const newDiv = document.createElement("div");
        newDiv.classList.add("d-flex", "justify-content-evenly");
        newDiv.style.width = "100%";
        newDiv.style.height = "2.5rem";
        newDiv.style.border = "1px solid black";

        // div 안에 들어갈 내용을 추가합니다.
        const div1 = document.createElement("div");
        div1.textContent = severity;

        const div2 = document.createElement("div");
        div2.textContent = content;

        const deleteButton = document.createElement("p");
        deleteButton.textContent = "X";
        deleteButton.style.cursor = "pointer";
        deleteButton.setAttribute("data-id", id);

        // 클릭 이벤트를 추가합니다.
        deleteButton.addEventListener("click", (event) => {
          this.deleteProblem(event);
        });

        newDiv.appendChild(div1);
        newDiv.appendChild(div2);
        newDiv.appendChild(deleteButton);

        // 부모 요소에 새로운 div를 추가합니다.
        parentElement.appendChild(newDiv);
      }
    },
  },

  mounted() {
    this.getCpd(this.$route.params.id);
  },
};
</script>

<style scoped>
.overlay {
  width: 55rem;
  min-height: 40rem;
  font-size: 1.5rem;
  text-align: center;
  border: 7px solid rgba(235, 230, 234, 0.9);
  margin-right: 2rem;
}

.overlay2 {
  width: 25rem;
  min-height: 38rem;
  background: white;
  font-size: 5px;
  text-align: center;
  border: 7px solid rgba(235, 230, 234, 0.9);
}

.border {
  border: 1px solid black;
  width: 15rem;
  height: 25rem;
  margin-top: 2rem;
}

.colorPink {
  color: rgb(199, 121, 196);
  font-size: 20px;
}

/* 커스텀 버튼 스타일 */
.my-custom-button {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

/* 커스텀 모달 스타일 */
.my-custom-modal {
  background-color: #f0f0f0;
}
</style>
