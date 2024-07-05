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
            4) Business Model Fit
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
          고객 가치 혁신에 기반한 수익 창출과 효율적인 운영구조를 통해 비용(Cost)을 줄이고 그 잉여자원이 고객 혜택으로 돌아갈 수 있도록 전략을 수립합니다.
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between mt-3" style="width:81rem;height:43rem;">
      <div class="d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-center align-items-center"
          style="width:12rem; height:2.5rem; background:#8FAADC; color:white; font-size:18px; margin-left:2rem;">
          검증 항목
        </div>
        <div class="d-flex align-items-center">
          <div style="width:4rem; height:4rem; border:2px solid #8FAADC; border-radius:35px; background:white;z-index:2;">
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="width:12rem; height:6rem; background:#DAE3F3;margin-left:-2rem;color:#1968C1;font-size:18px;z-index:1;">
            수익모델</div>
        </div>
        <div class="d-flex align-items-center">
          <div style="width:4rem; height:4rem; border:2px solid #8FAADC; border-radius:35px; background:white;z-index:2;">
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="width:12rem; height:6rem; background:#DAE3F3;margin-left:-2rem;color:#1968C1;font-size:18px;z-index:1;">
            프로세스</div>
        </div>
        <div class="d-flex align-items-center">
          <div style="width:4rem; height:4rem; border:2px solid #8FAADC; border-radius:35px; background:white;z-index:2;">
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="width:12rem; height:6rem; background:#DAE3F3;margin-left:-2rem;color:#1968C1;font-size:18px;z-index:1;">
            시장수요</div>
        </div>
        <div class="d-flex align-items-center">
          <div style="width:4rem; height:4rem; border:2px solid #8FAADC; border-radius:35px; background:white;z-index:2;">
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="width:12rem; height:6rem; background:#DAE3F3;margin-left:-2rem;color:#1968C1;font-size:18px;z-index:1;">
            채널</div>
        </div>
        <div class="d-flex align-items-center">
          <div style="width:4rem; height:4rem; border:2px solid #8FAADC; border-radius:35px; background:white;z-index:2;">
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="width:12rem; height:6rem; background:#DAE3F3;margin-left:-2rem;color:#1968C1;font-size:18px;z-index:1;">
            생산(양산화)</div>
        </div>
        <div class="d-flex align-items-center">
          <div style="width:4rem; height:4rem; border:2px solid #8FAADC; border-radius:35px; background:white;z-index:2;">
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="width:12rem; height:6rem; background:#DAE3F3;margin-left:-2rem;color:#1968C1;font-size:18px;z-index:1;">
            고객경험</div>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-center align-items-center"
          style="width:66rem; height:2.5rem; background:#8FAADC; color:white; font-size:18px;">
          주요 내용
        </div>
        <textarea class="d-flex justify-content-center align-items-center"
          style="width:66rem; height:6rem; font-size:15px; border:3px solid #E7E6E6;" v-model="modelFit.profitModel">
          </textarea>
        <textarea class="d-flex justify-content-center align-items-center"
          style="width:66rem; height:6rem; font-size:15px; border:3px solid #E7E6E6;" v-model="modelFit.process">
          </textarea>
        <textarea class="d-flex justify-content-center align-items-center"
          style="width:66rem; height:6rem; font-size:15px; border:3px solid #E7E6E6;" v-model="modelFit.demand">
          </textarea>
        <textarea class="d-flex justify-content-center align-items-center"
          style="width:66rem; height:6rem; font-size:15px; border:3px solid #E7E6E6;" v-model="modelFit.channel">
          </textarea>
        <textarea class="d-flex justify-content-center align-items-center"
          style="width:66rem; height:6rem; font-size:15px; border:3px solid #E7E6E6;" v-model="modelFit.production">
          </textarea>
        <textarea class="d-flex justify-content-center align-items-center"
          style="width:66rem; height:6rem; font-size:15px; border:3px solid #E7E6E6;" v-model="modelFit.experience">
          </textarea>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveModelFit">임시저장</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modelFit: { // 비즈니스모델핏
        profitModel: "", // 수익모델
        process: "", // 프로세스
        demand: "", // 시장수요
        channel: "", // 채널
        production: "", // 생산
        experience: "", // 고객 경험
      }
    }
  },
  methods: {
    saveModelFit() {
      console.log(this.modelFit);
    }
  }
}
</script>

<style scoped>
textarea {
  border: none
}
</style>