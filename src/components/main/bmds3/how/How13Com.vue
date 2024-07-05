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
    <div class="d-flex justify-content-start" style="height: 5rem; margin-left:1rem;">
      <div class="d-flex">
        <div style="
            font-size: 6rem;
            width: 6rem;
            color: #DAE3F3;
            margin: -2.7rem 1.5rem 0 -7.5rem;
          ">
          09
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Activities</div>
          <div style="font-size: 2rem; color: #1968C1;">
            2) Problem - Solution Fit
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: #DAE3F3;
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          제품(서비스) 설계 시 고객이 가진 불만과 니즈를 충분히 반영하기 위해 고객을 대상으로 반드시 파악해야 할 설문지를 구성합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column justify-content-between mt-3" style="height:45rem;">
      <div style="width:81rem; height:20rem;">
        <div style="width:10rem; height:2rem; font-size:20px; margin:0 0 1rem 1rem;">① 고객인터뷰</div>
        <div class="d-flex flex-column justify-content-between w-100">
          <div class="d-flex justify-content-between mb-4" style="width:100%;height:8rem;">
            <div class="d-flex" style="border-top:1px solid black; width:39rem;height:8rem;">
              <div style="width:5%; height:7rem;">
                <div class="d-flex justify-content-center align-items-center"
                  style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
                  <div>1</div>
                </div>
              </div>
              <div class="d-flex mt-3" style="width:95%; height:7rem;">
                <h5 style="color:#1968C1; margin-right:10px;">인터뷰 목적</h5>
                <textarea style="width:80%; height:7rem; background:#F2F2F2; font-size:15px;"
                  v-model="interView.purpose"></textarea>
              </div>
            </div>
            <div class="d-flex" style="border-top:1px solid black; width:39rem;height:8rem;">
              <div style="width:5%; height:7rem;">
                <div class="d-flex justify-content-center align-items-center"
                  style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
                  <div>2</div>
                </div>
              </div>
              <div class="d-flex mt-3" style="width:95%; height:7rem;">
                <h5 style="color:#1968C1; margin-right:10px;">인터뷰 대상</h5>
                <div style="width:80%; height:7rem; font-size:20px;">
                  <div style="margin-left:3rem;">
                    <input type="radio" id="target1" name="targets" value="최종수용자" v-model="interView.target" />
                    <label for="target1">최종수용자</label>
                    <input type="radio" id="target2" name="targets" value="구매영향자" v-model="interView.target" />
                    <label for="target2">구매영향자</label>
                    <input type="radio" id="target3" name="targets" value="의사결정자" v-model="interView.target" />
                    <label for="target3">의사결정자</label>
                    <input type="radio" id="target4" name="targets" value="잠재고객" v-model="interView.target" />
                    <label for="target4">잠재고객</label><br />
                    <input type="radio" id="target5" name="targets" value="기타" v-model="interView.target" />
                    <label for="target5" style="width: 3rem; line-height: 15px; margin-bottom: 1rem;">기타</label>
                    <input type="text" style="width:80%; height:2rem; border:1px solid black;" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mb-4" style="width:100%;height:8rem;">
            <div class="d-flex" style="border-top:1px solid black; width:39rem;height:8rem;">
              <div style="width:5%; height:7rem;">
                <div class="d-flex justify-content-center align-items-center"
                  style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
                  <div>3</div>
                </div>
              </div>
              <div class="d-flex mt-3" style="width:95%; height:7rem;">
                <h5 style="color:#1968C1; margin-right:10px;">시장 가설과<br />수집 데이터</h5>
                <textarea style="width:80%; height:7rem; background:#F2F2F2; font-size:15px;"
                  v-model="interView.collectedData"></textarea>
              </div>
            </div>
            <div class="d-flex" style="border-top:1px solid black; width:39rem;height:8rem;">
              <div style="width:5%; height:7rem;">
                <div class="d-flex justify-content-center align-items-center"
                  style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
                  <div>4</div>
                </div>
              </div>
              <div class="d-flex mt-3" style="width:95%; height:7rem;">
                <h5 style="color:#1968C1; margin-right:10px;">인터뷰 방식</h5>
                <div style="width:80%; height:7rem; font-size:20px;">
                  <div style="margin-left:3rem;">
                    <input type="radio" id="method1" name="methods" value="FGI" v-model="interView.method" />
                    <label for="method1">FGI</label>
                    <input type="radio" id="method1" name="methods" value="대면인터뷰" v-model="interView.method" />
                    <label for="method1">대면인터뷰</label>
                    <input type="radio" id="method2" name="methods" value="전화인터뷰" v-model="interView.method" />
                    <label for="method2">전화인터뷰</label>
                    <input type="radio" id="method3" name="methods" value="서면인터뷰" v-model="interView.method" />
                    <label for="method3">서면인터뷰</label><br />
                    <input type="radio" id="method4" name="methods" value="기타" v-model="interView.method" />
                    <label for="method4" style="width: 3rem; line-height: 15px; margin-bottom: 1rem;">기타</label>
                    <input type="text" style="width:80%; height:2rem; border:1px solid black;" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex mt-3" style="width:100%; height:22rem; border-top:1px solid black;">
        <div style="width:2rem; height:7rem;">
          <div class="d-flex justify-content-center align-items-center"
            style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
            <div>5</div>
          </div>
        </div>
        <div class="d-flex mt-3" style="width:100%; height:17rem;">
          <h5 style="color:#1968C1; margin-right:10px;">예상 질문지</h5>
          <div class="d-flex flex-column">
            <div class=" d-flex">
              <div class="d-flex justify-content-center align-items-center"
                style="width:825px; height:3rem; background:#1968C1; color:white; font-size:20px;">예상 질문</div>
              <div class="d-flex justify-content-center align-items-center"
                style="width:325px; height:3rem; background:#1968C1; color:white; font-size:20px; border-left:1px solid #C2C2C2;">
                답변 방식</div>
            </div>
            <div style=" height:18rem; overflowY:scroll;">
              <div v-for="(d, i) in interView.expectedQuestionnaire" :key="i" class="d-flex" style="font-size:20px;">
                <div class="d-flex" style="width:825px; height:3rem;border-bottom:1px solid #C2C2C2;">
                  <button type="button" class="d-flex justify-content-center align-items-center"
                    style="width:5%; height:100%;" @click="delQuest(i)">X</button>
                  <div class="d-flex justify-content-center align-items-center" style="width:5%; height:100%;">Q.</div>
                  <input type="text" style="width:90%;" v-model="d.question">
                </div>
                <div class=" d-flex" style="border-bottom:1px solid #C2C2C2;border-left:1px solid #C2C2C2;">
                  <div class="d-flex justify-content-between align-items-center"
                    style="font-size:15px; width:260px; margin-left:3rem;">
                    <input type="radio" :id="'answerMethod1_' + i" :name="'answerMethods_' + i" value="객관식"
                      v-model="d.answerMethod" />
                    <label class="label" :for="'answerMethod1_' + i">객관식</label>
                    <input type="radio" :id="'answerMethod2_' + i" :name="'answerMethods_' + i" value="서술식"
                      v-model="d.answerMethod" />
                    <label class="label" :for="'answerMethod2_' + i">서술식</label>
                    <input type="radio" :id="'answerMethod3_' + i" :name="'answerMethods_' + i" value="채점식"
                      v-model="d.answerMethod" />
                    <label class="label" :for="'answerMethod3_' + i">채점식</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveInteview">임시저장</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addQuest">질문지추가</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interView: { // 인터뷰
        purpose: "", // 인터뷰목적
        target: "최종수용자", // 인터뷰대상
        collectedData: "", // 시장가설과수집데이터
        method: "FGI", // 인터뷰방식
        expectedQuestionnaire: [ // 예상질문지
          {
            question: "", // 예상질문
            answerMethod: "객관식" // 답변탐색
          },
        ]
      },
    };
  },
  methods: {
    addQuest() {
      this.interView.expectedQuestionnaire.push({
        question: "", // 예상질문
        answerMethod: "객관식" // 답변탐색
      });
    },
    delQuest(i) {
      this.interView.expectedQuestionnaire.splice(i, 1);
    },
    saveInteview() {
      console.log(this.interView);
    }
  },
};
</script>

<style scoped>
/* 라디오 버튼 숨기기 */
input[type="radio"] {
  display: none;
}

label {
  width: 9rem;
  line-height: 15px;
  margin-bottom: 1rem;
}

.label {
  width: 3rem;
}

/* 체크박스 스타일 설정 */
input[type="radio"]+label {
  position: relative;
  cursor: pointer;
}

/* 체크박스 모양 설정 */
input[type="radio"]+label:before {
  content: "";
  position: absolute;
  left: -2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 4px;
}

/* 라디오 버튼이 선택됐을 때 체크박스 스타일 변경 */
input[type="radio"]:checked+label:before {
  content: "\2713";
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  line-height: 0;
  color: #1968C1;
}

input[type='text'],
textarea {
  border: none;
}
</style>
