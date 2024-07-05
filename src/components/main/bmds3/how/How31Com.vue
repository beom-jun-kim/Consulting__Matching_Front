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
          11
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Feedback</div>
          <div style="font-size: 2rem; color: #1968C1;">
            핵심성과지표(KPI)
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
          실제 비즈니스 성장에 기여할 수 있는 핵심 원인이 되는 실행 지표를 선정하고 사업화 단계별 성장 추이를 살펴봅니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:43rem; border-bottom:2px solid #1968C1;">
      <div class="d-flex justify-content align-items-center">
        <div class="KpiCate">구분</div>
        <div class="KpiCateOdd">평가지표</div>
        <div class="KpiCate">운영정의</div>
        <div class="KpiCateOdd">단위</div>
        <div class="KpiCate">산식</div>
        <div class="KpiCateOdd">측정치</div>
        <div class="KpiCate">변화율</div>
        <div class="KpiCateOdd">변동원인</div>
        <div class="KpiCate">전략수립</div>
      </div>
      <div style="height:40.5rem; overflowY:scroll;">
        <div class="d-flex justify-content-center align-items-center">
          <div class="KpiInputEx d-flex justify-content-center align-items-center">Ex. 구분</div>
          <div class="KpiInputExOdd d-flex justify-content-center align-items-center">지표명</div>
          <div class="KpiInputEx d-flex justify-content-center align-items-center">정의</div>
          <div class="KpiInputExOdd d-flex justify-content-center align-items-center">%,원,시간</div>
          <div class="KpiInputEx d-flex justify-content-center align-items-center">올해매출액-작년매출액*100</div>
          <div class="KpiInputExOdd d-flex justify-content-center align-items-center">월별...</div>
          <div class="KpiInputEx d-flex justify-content-center align-items-center">재작년 증가율</div>
          <div class="KpiInputExOdd d-flex justify-content-center align-items-center">새로운 신제품 개발 이유</div>
          <div class="KpiInputEx d-flex justify-content-center align-items-center">원인 해소 방법(ex.휴가 제거)</div>
        </div>
        <div v-for="(kpi, i) in Kpi" :key="i" class="d-flex justify-content-center align-items-center">
          <textarea class="KpiInput d-flex justify-content-center align-items-center" v-model="kpi.division"></textarea>
          <textarea class="KpiInputOdd d-flex justify-content-center align-items-center" v-model="kpi.divName"></textarea>
          <textarea class="KpiInput d-flex justify-content-center align-items-center" v-model="kpi.def"></textarea>
          <textarea class="KpiInputOdd d-flex justify-content-center align-items-center" v-model="kpi.unit"></textarea>
          <textarea class="KpiInput d-flex justify-content-center align-items-center" v-model="kpi.arithmetic"></textarea>
          <textarea class="KpiInputOdd d-flex justify-content-center align-items-center"
            v-model="kpi.measurements"></textarea>
          <textarea class="KpiInput d-flex justify-content-center align-items-center"
            v-model="kpi.rateOfChange"></textarea>
          <textarea class="KpiInputOdd d-flex justify-content-center align-items-center" v-model="kpi.cause"></textarea>
          <textarea class="KpiInput d-flex justify-content-center align-items-center" v-model="kpi.stratch"></textarea>
          <button class="d-flex justify-content-center align-items-center" @click="delKpi(i)"
            style="width:1rem; height:1rem; background:#F2F2F2; font-size:15px; margin:0 0 142px -16px;">
            X
          </button>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addKpi">추가하기</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="saveKpi">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Kpi: [
        {
          division: "", // 구분
          divName: "", // 평가지표
          def: "", // 운영정의
          unit: "", // 단위
          arithmetic: "", // 산식
          measurements: "", // 측정치
          rateOfChange: "", // 변화율
          cause: "", // 변동원인
          stratch: "" // 전략 수립
        }
      ]
    };
  },
  methods: {
    saveKpi() {
      console.log(this.Kpi);
    },
    addKpi() {
      this.Kpi.push({
        division: "", // 구분
        divName: "", // 평가지표
        def: "", // 운영정의
        unit: "", // 단위
        arithmetic: "", // 산식
        measurements: "", // 측정치
        rateOfChange: "", // 변화율
        cause: "", // 변동원인
        stratch: "" // 전략 수립
      });
    },
    delKpi(i) {
      this.Kpi.splice(i, 1);
    }
  },
};
</script>

<style scoped>
.KpiCate {
  width: 142px;
  height: 2.5rem;
  background: #1968C1;
  color: white;
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.KpiCateOdd {
  width: 143px;
  height: 2.5rem;
  background: #1968C1;
  color: white;
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: #D1D1D1;
}


.KpiInputEx {
  width: 142px;
  height: 10rem;
  resize: none;
  text-align: center;
  font-size: 20px;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: #D1D1D1;
  background: #F2F2F2;
}

.KpiInputExOdd {
  width: 143px;
  height: 10rem;
  resize: none;
  text-align: center;
  font-size: 20px;
  border-width: 0 2px 2px 2px;
  border-style: solid;
  border-color: #D1D1D1;
  background: #F2F2F2;
}

.KpiInput {
  width: 9rem;
  height: 10rem;
  resize: none;
  text-align: center;
  font-size: 20px;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: #D1D1D1;
}

.KpiInputOdd {
  width: 9rem;
  height: 10rem;
  resize: none;
  text-align: center;
  font-size: 20px;
  border-width: 0 2px 2px 2px;
  border-style: solid;
  border-color: #D1D1D1;
}
</style>