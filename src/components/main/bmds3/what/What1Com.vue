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
            color: #FDF3D7;
            margin: -2.7rem 1.5rem 0 -7.5rem;
          ">
          04
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Solution</div>
          <div style="font-size: 2rem; color: #FFC000">
            1) 고객요구 품질 분석
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: #FDF3D7;
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          고객이 요구하고 있는 제품(서비스)의 품질이 어느 정도인지 파악하고 고객 인식 정도, 해결 욕구 정도, 실현가능성에 따라 우선순위화 합니다.
        </div>
      </div>
    </div>
    <div class="d-flex flex-column mt-3" style="height:38rem; border:0px solid #E7E6E6; overflow-y: auto;">
      <div class="d-flex justify-content-between w-100">
        <div class="title_y" style="width:20rem;">
          <div>고객요구 품질</div>
        </div>
        <div class="title_y" style="width:18rem;">
          <div>구분</div>
        </div>
        <!-- <div class="title_y" style="width:5rem;">
          <div>합계</div>
        </div>
        <div class="title_y" style="width:5rem;">
          <div>순위</div>
        </div> -->
        <div class="title_y" style="width:8rem;">
          <div>지표</div>
        </div>
        <div class="title_y" style="width:8rem;">
          <div>목표</div>
        </div>
        <div class="title_y" style="width:20rem;">
          <div>해결방안</div>
        </div>
        <div class="title_y" style="width:6rem;">
          <div>X</div>
        </div>
      </div>
      <div>
        <div v-for="(test, i) in custDemandQualAnalysis" :key="i" class="d-flex justify-content-between"
          style="border:2px solid #E7E6E6;">
          <div class="testBor2">
            <textarea style="width:20rem; height:100%; resize: vertical; text-align:center;"
              v-model="test.custRequirQuality"></textarea>
          </div>
          <div class="testBor2 d-flex flex-column align-items-center justify-content-center"
            style="width:18rem; height:100%;">
            <label for="fruit">요구사항:
              <select v-model="test.division" id="fruit">
                <option value="기본적">기본적</option>
                <option value="경쟁적">경쟁적</option>
                <option value="차별적">차별적</option>
              </select>
            </label>
            <label for="fruit">고객인식정도:
              <select v-model="test.custAwareLevel" id="fruit">
                <option value="5">매우높음(5점)</option>
                <option value="4">높음(4점)</option>
                <option value="3">보통(3점)</option>
                <option value="2">낮음(2점)</option>
                <option value="1">매우낮음(1점)</option>
              </select>
            </label>
            <label for="fruit">해결욕구정도:
              <select v-model="test.degreeOfDesire" id="fruit">
                <option value="5">매우높음(5점)</option>
                <option value="4">높음(4점)</option>
                <option value="3">보통(3점)</option>
                <option value="2">낮음(2점)</option>
                <option value="1">매우낮음(1점)</option>
              </select>
            </label>
            <label for="fruit">실현가능성:
              <select v-model="test.feasibility" id="fruit">
                <option value="5">매우높음(5점)</option>
                <option value="4">높음(4점)</option>
                <option value="3">보통(3점)</option>
                <option value="2">낮음(2점)</option>
                <option value="1">매우낮음(1점)</option>
              </select>
            </label>
          </div>
          <!-- <div class="testBor2">
            <input type="text" v-model="totalSum" style="width:5rem; height:100%; text-align:center;" />
          </div>
          <div class="testBor2">
            <input type="text" v-model="test.ranking" style="width:5rem; height:100%; text-align:center;" />
          </div> -->
          <div class="testBor2">
            <input type="text" v-model="test.indicators" style="width:8rem; height:100%; text-align:center;" />
          </div>
          <div class="testBor2">
            <input type="text" v-model="test.target" style="width:8rem; height:100%; text-align:center;" />
          </div>
          <div class="testBor2">
            <textarea style="width:20rem; height:100%; resize: vertical; text-align:center;"
              v-model="test.implePlan"></textarea>
          </div>
          <div class="button_x">
            <button type="button" @click="delRow(i)">X</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addRow">추가하기</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="saveRow">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      custDemandQualAnalysis: [ // 고객요구 품질 분석
        {
          custRequirQuality: "", // 고객요구 품질
          division: "", // 요구사항 구분
          custAwareLevel: "", // 고객인식정도
          degreeOfDesire: "", // 해결욕구정도
          feasibility: "", //실현가능성
          //sum: 0, // 합계
          //ranking: 0, // 우선순위
          indicators: "",// 지표
          target: "", // 목표
          implePlan: "" // 구현방안
        },
      ],
    };
  },
  methods: {
    addRow() {
      this.custDemandQualAnalysis.push({
        custRequirQuality: "", // 고객요구 품질
        division: "", // 요구사항 구분
        custAwareLevel: "", // 고객인식정도
        degreeOfDesire: "", // 해결욕구정도
        feasibility: "", //실현가능성
        //sum: 0, // 합계
        //ranking: 0, // 우선순위
        indicators: "",// 지표
        target: "", // 목표
        implePlan: "" // 구현방안
      })
    },
    delRow(index) {
      this.custDemandQualAnalysis.splice(index, 1);
    },
    saveRow() {
      console.log(this.custDemandQualAnalysis);
    },

  },
};
</script>

<style scoped>
.button_x {
  width: 6rem;
  height: 8.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="text"],
textarea {
  border: none;
  /* 테두리 없애기 */
  outline: none;
  /* 포커스 효과 제거 */
}

.testBor2 label {
  display: flex;
  justify-content: space-between;
  width: 14rem;
  margin: 5px 0 5px 0;
}

.title_y {
  height: 3rem;
  background: #FFC000;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.testBor {
  /* border: 1px solid black; */
  height: 8.5rem;
  font-size: 15px;
}

.testBor2 {
  border-right: 2px solid #E7E6E6;
  height: 8.5rem;
  font-size: 15px;
}
</style>
