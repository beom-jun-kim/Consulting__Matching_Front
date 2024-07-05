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
          <img src="@/assets/bmds3/basicIcon1.png" alt="돋보기" style="width: 50px; height: 50px" />
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

    <div style="width: 81rem; height: 41.5rem">
      <div class="preM d-flex justify-content-center align-items-center" style="width: 100%; height: 9rem;">
        <div style="width:62rem; font-size: 25px; text-align:center;">
          "아이디어가 속한 시장의 환경을 분석하여 고객의 불편사항이나 불 충족 니즈 또는 요구사항을 도출하고
          고객이 해결을 필요로 하는 문제에 대하여 해결 가능성을 확인합니다. "
        </div>
      </div>

      <div class="image-container" style="margin-right: 7.2rem"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step10Com',
}
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
