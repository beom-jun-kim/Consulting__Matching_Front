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
            color: rgba(236, 226, 238, 1);
            margin: -2.7rem 1.5rem 0 -7.5rem;
          ">
          03
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Alternatives analysis</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            3) 기존대안 분석
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          기존 대안(경쟁사)들의 문제 해결 방식, 주요 성능, 강약점 등을 분석하여 문제 해결 강도를 파악합니다.
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-3" style="height:40rem;">
      <div class="d-flex flex-column justify-content-between" style="margin-right:1rem;">
        <div
          style="background:rgb(199, 121, 196); color:white; width:12rem; height:35px; font-size:20px; text-align:center;">
          구분</div>
        <div class="alter">
          <div style="margin-right:15px;">
            문제 해결 방식
          </div>
        </div>
        <div class="alter">
          <div style="margin-right:15px;">
            주요 성능 평가
          </div>
        </div>
        <div class="alter2">
          <div>
            대안의 강점
          </div>
        </div>
        <div class="alter2">
          <div>
            대안의 약점
          </div>
        </div>
        <div class="alter3">
          <div>
            문제 해결 강도
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between w-100">
        <div v-for="(comp, index ) in 3" :key="index"
          class="d-flex flex-column justify-content-between align-items-center companText">
          <div class="company">{{ comp }}</div>
          <textarea v-model="comp.probSolvMethod" class="textHeight probSolvMethod"></textarea>
          <textarea v-model="comp.keyPerfEvaluation" class="textHeight keyPerfEvaluation"></textarea>
          <textarea v-model="comp.strengOfAlter" class="textHeight strengOfAlter"></textarea>
          <textarea v-model="comp.weakOfAlter" class="textHeight weakOfAlter"></textarea>
          <div class="d-flex align-items-center justify-content-evenly checkB probSolvIntensity">
            <input type="radio" :id="'sang_' + index" v-model="comp.probSolvIntensity" value="상" /><label
              :for="'sang_' + index">상</label>
            <input type="radio" :id="'jung_' + index" v-model="comp.probSolvIntensity" value="중" /><label
              :for="'jung_' + index">중</label>
            <input type="radio" :id="'haa_' + index" v-model="comp.probSolvIntensity" value="하" /><label
              :for="'haa_' + index">하</label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="testSave">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      analyOfExistAlter: [ // 기존대안 분석
        {
          probSolvMethod: "", // 문제 해결 방식
          keyPerfEvaluation: "", // 주요 성능 평가
          strengOfAlter: "", // 대안의 강점
          weakOfAlter: "", // 대안의 약점
          probSolvIntensity: "" // 문제 해결 강도
        },
      ],
    };
  },
  methods: {
    testSave() {
      console.log(this.analyOfExistAlter);
    }
  },
};
</script>

<style scoped>
input[type="radio"] {
  display: none !important;
}

.alter {
  background: rgba(236, 226, 238, 1);
  color: rgb(199, 121, 196);
  width: 12rem;
  height: 7.5rem;
  font-size: 20px;
  text-align: right;
  display: flex;
  justify-content: right;
  align-items: center;
}

.alter2 {
  background: rgba(236, 226, 238, 1);
  color: rgb(199, 121, 196);
  width: 12rem;
  height: 7.5rem;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.alter3 {
  background: rgba(236, 226, 238, 1);
  color: rgb(199, 121, 196);
  width: 12rem;
  height: 4rem;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.company {
  background: rgb(199, 121, 196);
  color: white;
  width: 100%;
  height: 35px;
  font-size: 20px;
  text-align: center;
}

.textHeight {
  width: 100%;
  height: 7.5rem;
}

.companText {
  width: 22rem;
  font-size: 15px;
}

.checkB {
  background: #E7E6E6;
  font-size: 20px;
  width: 100%;
  height: 4rem;
}
</style>
