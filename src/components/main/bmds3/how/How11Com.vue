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
          <div style="font-size: 1rem">Core Activity</div>
          <div style="font-size: 2rem; color: #1968C1;">
            1) Problem - Solution Fit
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
          Problem-Solutoin Fit 단계는 우리 제품(Product)이 해결하고자 하는 문제나 충족시키고자 하는 니즈에 대해 가장 탁월한 솔루션(Solution)인지 검증하는 단계입니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:44.5rem;">
      <div class="image-container" style="width:100%; height:35.5rem;">
        <img src="../../../../assets/bmds3/솔루션핏.png" alt="솔루션">
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <div style="width:1275px;">
          <div class="d-flex justify-content-between mt-3" style="width:100%; height:8rem;">
            <div class="d-flex align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-end"
                style="background:#DAE3F3; width:296px; height:7rem;">
                <input type="radio" id="core1" name="cores" value="solution" v-model="probSolutionFit" />
                <label for="core1"><span style="font-size:16px;">* Problem-Solution Fit 단계에 해당되는 작성자는</span> <span
                    style="font-size:17px; color:red;">39p~45p</span><span style="font-size:15px;">를
                    작성해주세요.</span></label>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-end"
                style="background:#DAE3F3; width:296px; height:7rem;">
                <input type="radio" id="core2" name="cores" value="market" v-model="probSolutionFit" />
                <label for="core2"><span style="font-size:16px;">* Product-Market Fit 단계에<br />
                    해당되는 작성자는 </span> <span style="font-size:17px; color:red;">39p~45p</span><span
                    style="font-size:15px;">를
                    작성해주세요.</span></label>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-end"
                style="background:#DAE3F3; width:296px; height:7rem;">
                <input type="radio" id="core3" name="cores" value="model" v-model="probSolutionFit" />
                <label for="core3"><span style="font-size:16px;">* Business Model Fit 단계에<br />
                    해당되는 작성자는 </span> <span style="font-size:17px; color:red;">39p~45p</span><span
                    style="font-size:15px;">를
                    작성해주세요.</span></label>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-end"
                style="background:#DAE3F3; width:296px; height:7rem;">
                <input type="radio" id="core4" name="cores" value="innovation" v-model="probSolutionFit" />
                <label for="core4"><span style="font-size:16px;">* Business Model Innovation 단계에
                    해당되는 작성자는 </span> <span style="font-size:17px; color:red;">39p~45p</span><span
                    style="font-size:15px;">를
                    작성해주세요.</span></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveProbSolution">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      probSolutionFit: "solution" // 솔루션핏
    };
  },
  methods: {
    saveProbSolution() {
      console.log(this.probSolutionFit);
    }
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  /* 부모 요소에 대한 상대적인 너비 설정 */
  height: 100%;
  /* 부모 요소에 대한 상대적인 높이 설정 */
  position: relative;
  /* 위치 설정을 위해 relative를 사용합니다. */
  overflow: hidden;
  /* 내부 내용이 넘칠 경우를 대비하여 오버플로우를 숨깁니다. */
}

/* 이미지의 스타일을 정의합니다. */
.image-container img {
  width: 100%;
  /* 이미지를 부모 요소에 대한 100%로 설정하여 꽉 차게 만듭니다. */
  height: auto;
  /* 가로 비율을 유지하면서 세로 크기를 자동 조정합니다. */
}


/* 라디오 버튼 숨기기 */
input[type="radio"] {
  display: none;
}

label {
  width: 14rem;
  line-height: 15px;
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
  left: -3rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
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
  line-height: -1px;
  color: rgb(199, 121, 196);
}
</style>
