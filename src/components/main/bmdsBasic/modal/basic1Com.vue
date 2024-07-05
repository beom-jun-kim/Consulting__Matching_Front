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
        <div class="d-flex justify-content-between" style="width:19rem;">
          <img src="@/assets/bmds3/basicIcon1.png" alt="돋보기" style="width:50px; height:50px;">
          <div class="preEB" style="font-size: 30px; color: #FA9D1B;">
            STEP 01 :
          </div>
          <div class="preEB" style="font-size: 30px;">
            기회탐색
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar">
        <div class="preM basicContent">
          시장을 이해하고 고객의 욕구와 잠재 수요를 탐색하여 시장에서의 기회를 발굴하는 과정입니다.
        </div>
      </div>
    </div>

    <div style="width: 81rem; height: 38.5rem;">
      <div class="preM d-flex justify-content-center align-items-center"
        style="width:100%; height:10rem; font-size:28px;">
        "아이디어가 속한 시장의 환경 분석, 고객의 불편사항, 불충족 니즈, 요구사항 도출, 해결 가능성 확인"
      </div>
      <div class="d-flex justify-content-center align-items-center" style="margin-right:7.2rem;">
        <div class="dfmr2">
          <div class="d-flex justify-content-center align-items-center"
            style="background:#FDB90F; width:25.2rem; height:8rem; color:white; font-size:27px;">
            <div style="margin-left:1rem;">1-1 : 아이템이 속한 시장 이해</div>
          </div>
          <div class="minTri1"></div>
          <div class="minTriWhite"></div>
        </div>
        <div class="dfmr2">
          <div class="d-flex justify-content-center align-items-center"
            style="background:#FCAA16; width:25.2rem; height:8rem; color:white; font-size:27px;">
            <div style="margin-left:4rem;">1-2 : 고객의 불편사항 파악</div>
          </div>
          <div class="minTri2"></div>
          <div class="minTriWhite"></div>
        </div>
        <div class="dfmr2">
          <div class="d-flex justify-content-center align-items-center"
            style="background:#FA9E1B; width:25.2rem; height:8rem; color:white; font-size:25px;">
            <div style="margin-left:4rem;">1-3 : 아이템 해결 가능성 확인</div>
          </div>
          <div class="minTri3"></div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-4">
        <div class="d-flex justify-content-between" style="width:66rem;">
          <div style="width:200px; height:100px;">
            <div class="dotted-line">
            </div>
            <div class="d-flex justify-content-center align-items-center mt-3" style="width:200px;">
              <div class="dot"></div>
            </div>
          </div>
          <div style="width:200px; height:100px;">
            <div class="dotted-line">
            </div>
            <div class="d-flex justify-content-center align-items-center mt-3" style="width:200px;">
              <div class="dot"></div>
            </div>
          </div>
          <div style="width:200px; height:100px;">
            <div class="dotted-line">
            </div>
            <div class="d-flex justify-content-center align-items-center mt-3" style="width:200px;">
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-5">
        <div class="d-flex justify-content-between align-items-center" style="width:73rem;">
          <div style="width:20rem; height:8rem; font-size:19px;">준비하고 있는 아이템과 관련하여 창업자가 가진 역량 수준을 파악하고 아이템이 속한 시장 영역에서의
            뚜렷한 변화 정도를 이해하는
            단계입니다.</div>
          <div style="width:20rem; height:8rem; font-size:19px;">잠재 수요 고객을 발견하고 그들이 가지고 있는 통점(pain-point)과 수요(Demand)를
            탐색하여 시장 기회요소를 발굴하는
            단계입니다.</div>
          <div style="width:20rem; height:8rem; font-size:19px;">고객이 가지고 있는 불편함을 줄이기 위하여 고객입장에서 비용 지불 의사가 충분히 있는지를 확인하는
            단계입니다.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dfmr2 {
  margin-right: -117px;
  display: flex;
}

.minTri1 {
  width: 0;
  height: 0;
  border-top: 4rem solid transparent;
  border-bottom: 4rem solid transparent;
  border-left: 4rem solid #FDB90F;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}

.minTri2 {
  width: 0;
  height: 0;
  border-top: 4rem solid transparent;
  border-bottom: 4rem solid transparent;
  border-left: 4rem solid #FCAA16;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}

.minTri3 {
  width: 0;
  height: 0;
  border-top: 4rem solid transparent;
  border-bottom: 4rem solid transparent;
  border-left: 4rem solid #FA9E1B;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}

.minTriWhite {
  width: 0;
  height: 0;
  border-top: 4rem solid transparent;
  border-bottom: 4rem solid transparent;
  border-left: 4rem solid white;
  position: relative;
  top: 0;
  left: -53px;
  z-index: 1;
}

.dotted-line {
  border-right: 3px dotted #FCAA16;
  width: 100px;
  height: 100px;
}

.dot {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin: 4px 3.5px 4px 0;
}

.dot:nth-child(1) {
  background-color: #FDB90F;
}

.dot:nth-child(2) {
  background-color: #FCAA16;
}

.dot:nth-child(3) {
  background-color: #FA9E1B;
}
</style>
