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
            <div class="basicContentBar3" style="background-color: #e6ebf6">
                <div class="preM basicContent">
                    아이디어의 컨셉에 적합한 제품 및 서비스를 구상하고 상세설계, 프로토타입 제작, 테스팅, 피봇팅(또는 리비전) 계획을 수립합니다.
                </div>
            </div>
        </div>

        <div style="width: 81rem; height: 41.5rem">
            <div class="preM d-flex justify-content-center align-items-center"
                style="width: 100%; height: 9rem; font-size: 28px; text-align:center;">
                <div>"제품/서비스의 핵심요소(기본적/경쟁적/매력적 요소) 정의<br />
                    제품/서비스 스케치<span style="font-size:17px;">(플로우 차트, 3D)</span>, 제품/서비스 구현 및 상용화를 위한 세부 추진 일정 수립"</div>
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
    height: 31.5rem;
    position: relative;
    overflow: hidden;
    background-image: url("../../../../assets/buildup/step04.png");
    background-size: cover;
    background-position: center;
}

.basicContentBar3 {
    width: 81rem;
    height: 4rem;
    border-radius: 7px;
    background: #fef1d2;
    display: flex;
    justify-content: start;
    align-items: center;
}

.basicContent {
    font-size: 25px;
    margin-left: 30px;
    line-height: 37px;
}
</style>
  