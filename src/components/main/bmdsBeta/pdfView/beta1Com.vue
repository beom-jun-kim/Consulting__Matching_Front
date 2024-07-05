<template>
  <div class="body">
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem">
        Copyright 2023. MERAKL Inc. all rights reserved.
      </div>
      <div>
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start">
      <div class="d-flex">
        <div class="d-flex justify-content-between">
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

    <div>
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
  background-size: contain;
  background-position: center;
}

.basicContentBar {
  border-radius: 7px;
  background: #fef1d2;
  display: flex;
  justify-content: start;
  align-items: center;
}

@media print {
  /* 프린트 전체에 대한 기본 설정 */
  body {
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
    font-size: 12pt; /* 프린트에 적합한 글꼴 크기 */
  }

  /* 이미지 컨테이너 크기 조정 */
  .image-container {
    width: 100%; /* 프린트 페이지 너비에 맞춤 */
    height: auto; /* 높이는 자동으로 조정 */
    position: relative;
    overflow: hidden;
    background-size: contain;
    background-position: center;
  }

  /* 기본 콘텐츠 바 스타일 조정 */
  .basicContentBar {
    border-radius: 0; /* 프린트에는 둥근 모서리 제거 */
    background: none; /* 프린트에는 배경색 제거 */
  }

  /* 기타 필요한 스타일 조정 */
}
</style>
