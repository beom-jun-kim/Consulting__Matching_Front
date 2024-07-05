<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Copyright 2023. MERAKL Inc. all rights reserved.
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 22rem">
          <img
            src="@/assets/bmds3/basicIcon1.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #fa9d1b">
            STEP 01 :
          </div>
          <div class="preEB" style="font-size: 35px">기회탐색</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar">
        <div class="preM basicContent">
          시장을 이해하고 고객의 욕구와 잠재 수요를 탐색하여 시장에서의 기회를
          발굴하는 과정입니다.
        </div>
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div
        class="preM d-flex justify-content-center align-items-center"
        style="width: 100%; height: 9rem; font-size: 28px"
      >
        "아이디어가 속한 시장의 환경 분석, 고객의 불편사항, 불충족 니즈,
        요구사항 도출, 해결 가능성 확인"
      </div>

      <div class="image-container" style="margin-right: 7.2rem"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image-container {
  width: 81rem;
  height: 31rem;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/기회탐색.png");
  z-index: 1;
  background-size: cover;
  background-position: center;
}
</style>
