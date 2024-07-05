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
        4-3 : 세부 추진 계획 수립
      </div>
    </div>

    <div class="modal-wrap">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 30px">
          <span class="primeColor">4.</span> 필요한 자금을 파악하고 조달 방안을
          마련합니다.
        </label>
        <table class="table1 preM">
          <thead>
            <tr>
              <th style="text-align: center">항목</th>
              <th style="text-align: center">산출기준</th>
              <th style="text-align: center">비용</th>
              <th style="text-align: center">비고</th>
            </tr>
          </thead>
          <tbody>
            <!-- 9개의 추가 행을 생성합니다. -->
            <tr v-for="(row, i) in 8" :key="i">
              <td>
                <input class="text-center" type="text" style="margin: 0; border: none"
                  :placeholder="i === 0 ? 'Ex)임차보증금' : ''" v-model="content45_[i]" />
              </td>
              <td>
                <input class="text-center" type="text" style="margin: 0; border: none" placeholder=""
                  v-model="standard45_[i]" />
              </td>
              <td>
                <input class="text-end" type="text" style="margin: 0; border: none"
                  :placeholder="i === 0 ? 'Ex)35,000,000' : ''" v-model="amount45_[i]" />
              </td>
              <td>
                <input class="text-center" type="text" style="margin: 0; border: none"
                  :placeholder="i === 0 ? 'Ex)사업후 현금 유입' : ''" v-model="ect45_[i]" />
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table2 preM mt-3">
          <thead>
            <tr>
              <th style="text-align: center">조달 방안</th>
              <th style="text-align: center">조달 비용</th>
              <th style="text-align: center">비고</th>
            </tr>
          </thead>
          <tbody>
            <!-- 4개의 추가 행을 생성합니다. -->
            <tr v-for="(row, i) in 4" :key="i">
              <td>
                <input class="text-center" type="text" style="margin: 0; border: none; width: 90%"
                  :placeholder="i === 0 ? 'Ex)본인자금' : ''" v-model="plan45_[i]" />
              </td>
              <td>
                <input class="text-end" type="text" style="margin: 0; border: none; width: 90%" placeholder="Ex)"
                  v-model="planAmount45_[i]" />
              </td>
              <td>
                <input class="text-center" type="text" style="margin: 0; border: none" placeholder="Ex)"
                  v-model="planEct45_[i]" />
              </td>
            </tr>
          </tbody>
        </table>
        <textarea placeholder="메모..." v-model="memo"
          style="width:100%; height: 100px !important; resize: none; border: none;"
          class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
      </div>
    </div>
    <!-- <b-button class="btn btn-sm my-2" style="float: right" @click="saveBuildStep44">저장</b-button> -->
  </div>
</template>

<script>
import step45 from "./js/step45.js";
export default {
  name: "step45Com",
  ...step45,
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

.basicContentBar {
  width: 25rem;
  background-color: rgb(249, 156, 27);
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

.table1,
.table2 {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.3rem;
}

.table1 td,
.table2 td {
  border: 1px solid #d2d2d2;
  text-align: center;
  padding: 15px 0;
}

.table1 th,
.table1 td {
  width: 25%;
}

.table2 th:nth-child(1),
.table2 td:nth-child(1) {
  width: 50%;
}

.table2 th:nth-child(2),
.table2 td:nth-child(2) {
  width: 25%;
}

.table2 th:nth-child(3),
.table2 td:nth-child(3) {
  width: 25%;
}

th {
  background-color: #4264ae;
  color: white;
  padding: 15px 0;
  font-size: 18px;
}

table tr:last-child td {
  border-bottom: #4264ae 3px solid;
}
</style>
