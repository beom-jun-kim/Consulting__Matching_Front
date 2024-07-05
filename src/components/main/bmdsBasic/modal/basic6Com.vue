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
        2-1 : 목표시장 선정 및 확인
      </div>
    </div>

    <div style="width: 81rem; height: 37rem">
      <div class="my-3">
        <label for="businessArea" class="form-label" style="font-size: 27px;">
          <span class="primeColor">1.</span> 수요 고객이 존재하는 시장(Market)을 알아봅니다.
        </label>
      </div>
      <div class="my-3 d-flex flex-column justify-content-center align-items-center">
        <div>
          <label for="businessArea" class="form-label" style="font-size: 27px;">
            <span class="primeColor">1-1.</span> 어떠한 시장(마켓)을 생각하고 계시나요?
          </label>
          <input type="text" class="form-control bg-light p-2 rounded mb-3" id="businessArea"
            style="border: none; resize:none; outline:none; border-radius:15px; font-size:25px;"
            placeholder="ex. 반려동물시장, 카페시장, 유통시장 등" />
        </div>
        <div>
          <label class="form-label" style="font-size: 27px;">
            <span class="primeColor">1-2.</span> 목표로 하시는 시장(거점시장)을 선택해 볼까요?
          </label>
          <input type="text" class="form-control bg-light p-2 rounded mb-3" id="businessArea"
            style="border: none; resize:none; outline:none; border-radius:15px; font-size:25px;"
            placeholder="ex. 반려동물시장->반려동물용 사료 시장, 카페시장->베이커리카페 시장" />
        </div>
        <div>
          <label class="form-label" style="font-size: 27px;">
            <span class="primeColor">1-3.</span> 우리가 선정한 시장의 규모는 어느 정도이고 또 얼마나 성장하고 있나요?
          </label>
          <div class="d-flex justify-content-between align-items-center" style="width:75rem;">
            <div class="d-flex justify-content-between align-items-center"
              style="width:36.5rem; height:9rem; border:2px solid #FF8A02; border-radius:15px;">
              <div class="d-flex justify-content-center align-items-center" style="width:8rem;height:9rem;">
                <img src="@/assets/시장규모.png" alt="시장규모" style="width:90px;height:90px;">
              </div>
              <div class="d-flex flex-column justify-content-center align-items-start" style="width:28.5rem;height:8rem;">
                <div style="color: #FF8A02; font-size:25px; width:25.5rem;height:4rem;">시장규모
                </div>
                <input type="text" class="bg-light p-2 rounded mb-3" style="width:25.5rem;height:4rem; border:none;">
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center"
              style="width:36.5rem; height:9rem; border:2px solid #FF8A02; border-radius:15px;">
              <div class="d-flex justify-content-center align-items-center" style="width:8rem;height:9rem;">
                <img src="@/assets/평균성장률.png" alt="평균성장률" style="width:90px;height:90px;">
              </div>
              <div class="d-flex flex-column justify-content-center align-items-start" style="width:28.5rem;height:8rem;">
                <div style="color: #FF8A02; font-size:25px; width:25.5rem;height:4rem;">평균 성장률
                </div>
                <input type="text" class="bg-light p-2 rounded mb-3" style="width:25.5rem;height:4rem; border:none;">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marketUnderstanding1: false, // 체크박스의 선택 여부를 추적하는 데이터 속성
      marketUnderstanding2: false, // 체크박스의 선택 여부를 추적하는 데이터 속성
      marketUnderstanding3: false, // 체크박스의 선택 여부를 추적하는 데이터 속성
    };
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 26.1rem;
  background-color: #FA9D1B;
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholderColor {
  font-size: 20px;
  color: #818181;
}

.primeColor {
  color: rgb(249, 156, 27);
}

.form-control {
  width: 75rem;
  height: 5rem;
}
</style>
