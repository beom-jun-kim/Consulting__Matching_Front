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
          수집된 데이터를 바탕으로 시장에서 생존가능한 최소 요건 제품(MVP,Minimum Viable Product)을 설계하고 시장가치가 있는지 검증하기 위한 방안을 마련합니다.
        </div>
      </div>
    </div>

    <div class="d-flex mt-3" style="height:44rem;">
      <div class="d-flex justify-content-start align-items-center image-container" style="width:30rem; height:100%;">
        <img src="../../../../assets/bmds3/제품서비스.png" alt="">
      </div>
      <div class="d-flex flex-column justify-content-between" style="width:51rem; height:100%;">
        <textarea style="width:51rem; height:21.5rem; font-size:15px; background:#F2F2F2;"
          v-model="innovation2.performance"></textarea>
        <textarea style="width:51rem; height:21.5rem; font-size:15px; background:#F2F2F2;"
          v-model="innovation2.structure"></textarea>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveInno2">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innovation2: { // 이노베이션1
        performance: "", // 제품성능
        structure: "", // 제품구조
      }
    };
  },
  methods: {
    saveInno2() {
      console.log(this.innovation2);
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