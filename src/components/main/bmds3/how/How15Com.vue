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
          수집된 데이터를 바탕으로 시장에서 생존가능한 최소 요건 제품(MVP,Minimum Viable Product)을 설계하고 시장가치가 있는지 검증하기 위한 방안을 마련합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column justify-content-between mt-3" style="height:45rem;">
      <div style="width:100%; height:100%;">
        <div style="width:16rem; height:2rem; font-size:20px; margin:0 0 1rem 1rem;">③ MVP(MVS) 설계 및 검증</div>
        <div class="d-flex justify-content-between" style="width:100%; height:42rem;">
          <div class="image-container" style="width:38rem; height:100%;">
            <img src="../../../../assets/bmds3/MVP.png" alt="">
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div style="width:30px; height:15px; background:#A6A6A6;"></div>
            <div class="miniArrow2"></div>
          </div>
          <div class="d-flex flex-column justify-content-between align-items-center" style="width:38rem; height:100%;">
            <div class="d-flex flex-column" style="width:38rem; height:13rem; border:1px solid #C2C2C2;">
              <div class="d-flex">
                <div class="d-flex align-items-center justify-content-center"
                  style="width:2rem; height:2rem; background:#1968C1; color:white; font-size:20px; border-radius:25px; margin:1rem 0 0 1rem;">
                  4
                </div>
                <div class="d-flex align-items-center justify-content-center"
                  style="height:2rem; font-size:20px; margin:1rem 0 0 1rem;">
                  Minimum + Viable</div>
              </div>
              <textarea style="width:100%; height:9rem; margin-top:1rem; font-size:20px;" v-model="data.mvp_4"></textarea>
            </div>
            <div class="d-flex justify-content-between" style="width:100%; height:13rem;">
              <div class="d-flex flex-column" style="width:18.5rem; height:13rem; border:1px solid #C2C2C2;">
                <div class="d-flex">
                  <div class="d-flex align-items-center justify-content-center"
                    style="width:2rem; height:2rem; background:#1968C1; color:white; font-size:20px; border-radius:25px; margin:1rem 0 0 1rem;">
                    2
                  </div>
                  <div class="d-flex align-items-center justify-content-center"
                    style="height:2rem; font-size:20px; margin:1rem 0 0 1rem;">
                    Minimum</div>
                </div>
                <textarea style="width:100%; height:9rem; margin-top:1rem; font-size:20px;"
                  v-model="data.mvp_2"></textarea>
              </div>
              <div class="d-flex flex-column" style="width:18.5rem; height:13rem; border:1px solid #C2C2C2;">
                <div class="d-flex">
                  <div class="d-flex align-items-center justify-content-center"
                    style="width:2rem; height:2rem; background:#1968C1; color:white; font-size:20px; border-radius:25px; margin:1rem 0 0 1rem;">
                    3
                  </div>
                  <div class="d-flex align-items-center justify-content-center"
                    style="height:2rem; font-size:20px; margin:1rem 0 0 1rem;">
                    Viable</div>
                </div>
                <textarea style="width:100%; height:9rem; margin-top:1rem; font-size:20px;"
                  v-model="data.mvp_3"></textarea>
              </div>
            </div>
            <div class="d-flex flex-column" style="width:100%; height:13rem; border:1px solid #C2C2C2;">
              <div class="d-flex">
                <div class="d-flex align-items-center justify-content-center"
                  style="width:2rem; height:2rem; background:#1968C1; color:white; font-size:20px; border-radius:25px; margin:1rem 0 0 1rem;">
                  1
                </div>
                <div class="d-flex align-items-center justify-content-center"
                  style="height:2rem; font-size:20px; margin:1rem 0 0 1rem;">
                  Products(Services)
                </div>
              </div>
              <textarea style="width:100%; height:9rem; margin-top:1rem; font-size:20px;" v-model="data.mvp_1"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveMVP">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: { // 모아서 보내기
        mvp_4: "", // Minimum+Viable
        mvp_2: "", // Minimum
        mvp_3: "", // Viable
        mvp_1: "", // Products
      },
    };
  },
  methods: {
    saveMVP() {
      console.log(this.data);
    }
  },
};
</script>

<style scoped>
.miniArrow2 {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #A6A6A6;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  width: 100%;
  height: auto;
}

textarea {
  border: none;
}
</style>