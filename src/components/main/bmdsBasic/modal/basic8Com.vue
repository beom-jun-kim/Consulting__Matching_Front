<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Business Model Design Solution
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 40rem">
          <img src="@/assets/선물.png" alt="돋보기" style="width: 50px; height: 50px" />
          <div style="font-size: 35px; color: #fa9d1b">STEP 02 :</div>
          <div style="font-size: 35px">아이디에이션(아이템 선정)</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar">
        2-3 : POV(Point of View) 정의
      </div>
    </div>

    <div style="width: 81rem; height: 37rem;">
      <div class="my-3">
        <label for="businessArea" class="form-label" style="font-size: 27px;">
          <span class="primeColor">3.</span> 고객의 관점에서 일어나는 상황을 생각하고 정리해 봅니다.(Point of View)
        </label>
      </div>
      <div class="d-flex justify-content-between align-items-center" style="width: 81rem; height: 30rem;">
        <div class="d-flex flex-column justify-content-between align-items-center"
          style="width: 27rem; height: 30rem;z-index:1;">
          <div style="width: 27rem; height: 8.5rem;">
            <div class="d-flex" style="margin-bottom:.5rem;">
              <img src="@/assets/누가.png" alt="돋보기" style="width: 50px; height: 50px; margin-right:.5rem;" />
              <div style="font-size: 35px">Who (누가)</div>
            </div>
            <input type="text" class="form-control bg-light p-2 mb-5" id="businessArea"
              style="border: none; resize:none; outline:none; border-radius:15px; font-size:25px;"
              placeholder="ex. 예시 필요" />
          </div>
          <div style="width: 27rem; height: 8.5rem;">
            <div class="d-flex" style="margin-bottom:.5rem;">
              <img src="@/assets/언제.png" alt="돋보기" style="width: 50px; height: 50px; margin-right:.5rem;" />
              <div style="font-size: 35px">When (언제)</div>
            </div>
            <input type="text" class="form-control bg-light p-2 mb-5" id="businessArea"
              style="border: none; resize:none; outline:none; border-radius:15px; font-size:25px;"
              placeholder="ex. 예시 필요" />
          </div>
          <div style="width: 27rem; height: 8.5rem;">
            <div class="d-flex" style="margin-bottom:.5rem;">
              <img src="@/assets/어디서.png" alt="돋보기" style="width: 50px; height: 50px; margin-right:.5rem;" />
              <div style="font-size: 35px">Where (어디서)</div>
            </div>
            <input type="text" class="form-control bg-light p-2 mb-5" id="businessArea"
              style="border: none; resize:none; outline:none; border-radius:15px; font-size:25px;"
              placeholder="ex. 예시 필요" />
          </div>

        </div>
        <div class="d-flex justify-content-center align-items-center image-container"
          style="width: 30rem; height: 25rem; margin-top:2rem;">
        </div>
        <div class="d-flex flex-column justify-content-between align-items-center"
          style="width: 27rem; height: 31rem;z-index:1;">
          <div style="width: 27rem; height: 8.5rem;">
            <div class="d-flex" style="margin-bottom:.5rem;">
              <img src="@/assets/무엇을.png" alt="돋보기" style="width: 50px; height: 50px; margin-right:.5rem;" />
              <div style="font-size: 35px">What (무엇을)</div>
            </div>
            <input type="text" class="form-control2 bg-light p-2 mb-5" id="businessArea"
              style="border: none; resize:none; outline:none; border-radius:15px; font-size:25px;"
              placeholder="ex. 예시 필요" />
          </div>
          <div style="width: 27rem; height: 8.5rem;">
            <div class="d-flex" style="margin-bottom:.5rem;">
              <img src="@/assets/왜.png" alt="돋보기" style="width: 50px; height: 50px; margin-right:.5rem;" />
              <div style="font-size: 35px">Why (왜)</div>
            </div>
            <input type="text" class="form-control bg-light p-2 mb-5" id="businessArea"
              style="border: none; resize:none; outline:none; border-radius:15px; font-size:25px;"
              placeholder="ex. 예시 필요" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/POV.png");
  background-size: cover;
  background-position: center;
  z-index: 3;
  position: absolute;
  left: 38rem;

}

.basicContentBar {
  width: 29rem;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #FA9D1B;
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: rgb(249, 156, 27);
}

.form-control {
  width: 27rem;
  height: 5rem;
}

.form-control2 {
  width: 27rem;
  height: 17rem;
}
</style>
