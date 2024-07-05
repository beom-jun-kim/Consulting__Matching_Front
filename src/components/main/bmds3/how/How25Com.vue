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
            5) Business Model Innovation
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
          비즈니스모델 혁신 프레임워크를 작성해봅니다.
        </div>
      </div>
    </div>

    <div class="d-flex mt-3" style="height:44rem;">
      <div class="d-flex justify-content-start align-items-center image-container" style="width:30rem; height:100%;">
        <img src="../../../../assets/bmds3/구성.png" alt="">
      </div>
      <div class="d-flex flex-column justify-content-between" style="width:51rem; height:100%;">
        <textarea style="width:51rem; height:10.25rem; font-size:15px; background:#F2F2F2;"
          v-model="innovation1.profitModel"></textarea>
        <textarea style="width:51rem; height:10.25rem; font-size:15px; background:#F2F2F2;"
          v-model="innovation1.structure"></textarea>
        <textarea style="width:51rem; height:10.25rem; font-size:15px; background:#F2F2F2;"
          v-model="innovation1.partnerShip"></textarea>
        <textarea style="width:51rem; height:10.25rem; font-size:15px; background:#F2F2F2;"
          v-model="innovation1.process"></textarea>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveInno1">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innovation1: { // 이노베이션1
        profitModel: "", // 수익모델
        structure: "", // 기업구조
        partnerShip: "", // 파트너쉽
        process: "", // 프로세스
      }
    };
  },
  methods: {
    saveInno1() {
      console.log(this.innovation1);
    }
  },
};
</script>

<style scoped>
textarea {
  border: none;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto;
}
</style>