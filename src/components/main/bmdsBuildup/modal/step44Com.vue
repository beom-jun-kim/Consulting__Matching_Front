<template>
    <div class="container">
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
                    <div class="preEB" style="font-size: 35px">
                        제품 또는 서비스 개발
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="preSB basicContentBar">4-3 : 세부 추진 계획 수립</div>
        </div>

        <div class="modal-wrap">
            <div class="my-3 d-flex justify-content-between">
                <label for="businessArea" class="preSB form-label" style="font-size: 30px">
                    <span class="primeColor">3.</span> 사업 수행 일정을 작성하여
                    봅니다.(추진일정 수립)
                </label>
                <div style="height: 0px">
                    <img src="../../../../assets/세부추진계획수립.png" alt="수립" style="margin-top: -4rem" />
                </div>
            </div>
            <div class="mainText mt-3" style="border-bottom: 2px solid #4264ae">
                <div class="d-flex flex-column justify-content-between" style="height: 35rem">
                    <!-- 속성들 -->
                    <div class="d-flex justify-content-between">
                        <div class="planToSecNecesRes">사업 수행 내용</div>
                        <div class="d-flex flex-column justify-content-between align-items-center"
                            style="width: 48rem; height: 5rem">
                            <div class="planToSecNecesRes2">2024</div>
                            <div class="d-flex">
                                <!-- 1 ~ 12 -->
                                <div v-for="(month, i) in 12" :key="i" class="planToSecNecesRes3">
                                    {{ i + 1 }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 내용과 선택 월 -->
                    <div style="width: 80rem; height: 30rem">
                        <div v-for="(row, i) in checkboxes" :key="i" class="d-flex">
                            <input type="text" style="
                    width: 33rem;
                    height: 2.5rem;
                    border: none;
                    border-bottom: 2px solid #b9bcc0;
                  " v-model="content44_[i]" class="preM" />
                            <div class="d-flex" style="
                    width: 48rem;
                    height: 2.5rem;
                    border-left: 2px solid #808080;
                  ">
                                <label v-for="(checkbox, j) in row" :key="j" :for="'customCheckbox' + i + 'n' + j"
                                    class="customCheckboxLabel" :style="{ backgroundColor: checkbox.backgroundColor }">
                                    <input type="checkbox" :id="'customCheckbox' + i + 'n' + j"
                                        @change="toggleCheckbox(i, j, checkbox)" v-model="value44_[i]" :value="j + 1"
                                        style="display: none" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <textarea placeholder="메모..." v-model="memo"
                style="width:100%; height: 100px !important; resize: none; border: none;"
                class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
        </div>
        <!-- <div class="my-3">
            <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep43">저장</b-button>
        </div> -->
    </div>
</template>
  
<script>
import step44 from "./js/step44.js";
export default {
    name: "step44Com",
    ...step44
};
</script>
  
<style scoped>
.modal-wrap {
    width: 81rem;
    height: 41.5rem;
    overflow-y: scroll;
}

.modal-wrap::-webkit-scrollbar {
    width: 12px;
}

.modal-wrap::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 10px;
}

.modal-wrap::-webkit-scrollbar-track {
    background: none;
}

.mainText {
    width: 80rem;
    height: 34.5rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.planToSecNecesRes {
    width: 32rem;
    height: 5rem;
    color: white;
    font-size: 23px;
    background: #4264ae;
    display: flex;
    align-items: center;
    justify-content: center;
}

.planToSecNecesRes2 {
    width: 48rem;
    height: 2.5rem;
    color: white;
    font-size: 23px;
    background: #4264ae;
    border-bottom: 2px solid #b9bcc0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.planToSecNecesRes3 {
    width: 4rem;
    height: 2.5rem;
    color: white;
    font-size: 23px;
    background: #748fca;
    border-bottom: 2px solid #b9bcc0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.planToSecNecesRes3:nth-child(even) {
    border-width: 0 2px 2px 2px;
    border-style: solid;
    border-color: #b9bcc0;
}

.planToSecNecesRes3:nth-child(12) {
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: #b9bcc0;
}

.basicContentBar {
    width: 25rem;
    background-color: #4264ae;
    color: white;
    font-size: 30px;
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

.customCheckboxLabel {
    width: 4rem;
    height: 2.5rem;
    display: inline-block;
    border: 1px solid #ccc;
    cursor: pointer;
}

label {
    margin: 0;
}



.checked {
    background-color: #4264ae;
}
</style>
  