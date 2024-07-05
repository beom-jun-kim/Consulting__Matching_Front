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
                <div class="d-flex justify-content-between" style="width: 34rem">
                    <img src="@/assets/beta/step4큐브.png" alt="큐브" style="width: 60px; height: 60px" />
                    <div class="preEB" style="font-size: 35px; color: #4264ae">
                        STEP 04 :
                    </div>
                    <div class="preEB" style="font-size: 35px">제품 또는 서비스 개발</div>
                </div>
            </div>
        </div>
        <div>
            <div class="preSB basicContentBar" style="background-color: #4264ae">
                4-1 : 제품(서비스) 핵심요소 정의
            </div>
        </div>

        <div style="width: 81rem; height: 41.5rem">
            <div class="my-3">
                <label for="businessArea" class="preSB form-label" style="font-size: 25px">
                    <span class="primeColor">1.</span> 고객이 진정으로 원하는 우리만의 제품과 서비스를 기본/경쟁/매력적 관점에서 구체적으로 설계하여 봅니다.
                </label>
                <div class="step41Img my-3 d-flex flex-column justify-content-between align-items-center" id="businessArea"
                    style="width: 81rem; height: 35rem"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "step41Com",
};
</script>
  
<style scoped>
.basicContentBar {
    width: 25rem;
    background-color: rgb(249, 156, 27);
    color: white;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.primeColor {
    color: #4264ae;
}

.form-control {
    width: 75rem;
    height: 5rem;
}

.step41Img {
    width: 100%;
    height: 100%;
    position: relative;
    /* overflow: hidden; */
    background-image: url("../../../../assets/buildup/step41.png");
    background-size: cover;
    background-position: center;
}
</style>
  