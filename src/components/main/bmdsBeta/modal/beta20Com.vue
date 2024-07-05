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
          <img
            src="@/assets/beta/step4큐브.png"
            alt="큐브"
            style="width: 60px; height: 60px"
          />
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

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">4.</span> 필요한 자금을 파악하고 조달 방안을
          마련합니다.
        </label>
        <table class="table1 preM">
          <thead>
            <tr>
              <th>항목</th>
              <th>산출기준</th>
              <th>비용</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <!-- 9개의 추가 행을 생성합니다. -->
            <tr v-for="(row, i) in 9" :key="i">
              <td>
                <input
                  type="text"
                  style="margin: 0; border: none"
                  :placeholder="i === 0 ? 'Ex)임차보증금' : ''"
                  v-model="item_1[i]"
                />
              </td>
              <td>
                <input
                  type="text"
                  style="margin: 0; border: none"
                  placeholder=""
                  v-model="standard_1[i]"
                />
              </td>
              <td>
                <input
                  type="text"
                  style="margin: 0; border: none"
                  :placeholder="i === 0 ? 'Ex)35,000,000' : ''"
                  :value="formatAmount(amount_1[i])"
                  @input="updateAmount_1(i, $event)"
                />
              </td>
              <td>
                <input
                  type="text"
                  style="margin: 0; border: none"
                  :placeholder="i === 0 ? 'Ex)사업후 현금 유입' : ''"
                  v-model="ect_1[i]"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table2 preM mt-3">
          <thead>
            <tr>
              <th>조달 방안</th>
              <th>조달 비용</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <!-- 4개의 추가 행을 생성합니다. -->
            <tr v-for="(row, i) in 4" :key="i">
              <td>
                <input
                  type="text"
                  style="margin: 0; border: none"
                  :placeholder="i === 0 ? 'Ex)본인자금' : ''"
                  v-model="plan_2[i]"
                />
              </td>
              <td>
                <input
                  type="text"
                  style="margin: 0; border: none; width: 90%"
                  placeholder="Ex)"
                  :value="formatAmount(amount_2[i])"
                  @input="updateAmount_2(i, $event)"
                />
              </td>
              <td>
                <input
                  type="text"
                  style="margin: 0; border: none"
                  placeholder="Ex)"
                  v-model="ect_2[i]"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <b-button
          class="btn btn-sm my-2"
          style="float: right"
          @click="saveBetaPpt21"
          >저장</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      item_1: Array.from({ length: 9 }, () => ""),
      standard_1: Array.from({ length: 9 }, () => ""),
      amount_1: Array.from({ length: 9 }, () => ""),
      ect_1: Array.from({ length: 9 }, () => ""),
      plan_2: Array.from({ length: 4 }, () => ""),
      amount_2: Array.from({ length: 4 }, () => ""),
      ect_2: Array.from({ length: 4 }, () => ""),
    };
  },
  methods: {
    formatAmount(value) {
      // Format the value with commas
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    updateAmount_1(index, event) {
      // Remove commas and update the amount array
      this.amount_1[index] = event.target.value.replace(/,/g, "");
    },
    updateAmount_2(index, event) {
      // Remove commas and update the amount array
      this.amount_2[index] = event.target.value.replace(/,/g, "");
    },
    saveBetaPpt21() {
      var ppt21_1 = {
        item1: this.item_1[0],
        item2: this.item_1[1],
        item3: this.item_1[2],
        item4: this.item_1[3],
        item5: this.item_1[4],
        item6: this.item_1[5],
        item7: this.item_1[6],
        item8: this.item_1[7],
        item9: this.item_1[8],
        standard1: this.standard_1[0],
        standard2: this.standard_1[1],
        standard3: this.standard_1[2],
        standard4: this.standard_1[3],
        standard5: this.standard_1[4],
        standard6: this.standard_1[5],
        standard7: this.standard_1[6],
        standard8: this.standard_1[7],
        standard9: this.standard_1[8],
        amount1: this.amount_1[0],
        amount2: this.amount_1[1],
        amount3: this.amount_1[2],
        amount4: this.amount_1[3],
        amount5: this.amount_1[4],
        amount6: this.amount_1[5],
        amount7: this.amount_1[6],
        amount8: this.amount_1[7],
        amount9: this.amount_1[8],
        ect1: this.ect_1[0],
        ect2: this.ect_1[1],
        ect3: this.ect_1[2],
        ect4: this.ect_1[3],
        ect5: this.ect_1[4],
        ect6: this.ect_1[5],
        ect7: this.ect_1[6],
        ect8: this.ect_1[7],
        ect9: this.ect_1[8],
      };
      var ppt21_2 = {
        plan1: this.plan_2[0],
        plan2: this.plan_2[1],
        plan3: this.plan_2[2],
        plan4: this.plan_2[3],
        amount1: this.amount_2[0],
        amount2: this.amount_2[1],
        amount3: this.amount_2[2],
        amount4: this.amount_2[3],
        ect1: this.ect_2[0],
        ect2: this.ect_2[1],
        ect3: this.ect_2[2],
        ect4: this.ect_2[3],
      };
      if (confirm("저장하시겠습니까?")) {
        var data = {
          ppt21_1,
          ppt21_2,
        };
        BetaService.saveBetaPpt21(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt21(this.$router.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt21(id) {
      BetaService.getBetaPpt21(id)
        .then((res) => {
          this.item_1 = [
            res.data.ppt21_1.item1,
            res.data.ppt21_1.item2,
            res.data.ppt21_1.item3,
            res.data.ppt21_1.item4,
            res.data.ppt21_1.item5,
            res.data.ppt21_1.item6,
            res.data.ppt21_1.item7,
            res.data.ppt21_1.item8,
            res.data.ppt21_1.item9,
          ];

          this.standard_1 = [
            res.data.ppt21_1.standard1,
            res.data.ppt21_1.standard2,
            res.data.ppt21_1.standard3,
            res.data.ppt21_1.standard4,
            res.data.ppt21_1.standard5,
            res.data.ppt21_1.standard6,
            res.data.ppt21_1.standard7,
            res.data.ppt21_1.standard8,
            res.data.ppt21_1.standard9,
          ];

          this.amount_1 = [
            res.data.ppt21_1.amount1,
            res.data.ppt21_1.amount2,
            res.data.ppt21_1.amount3,
            res.data.ppt21_1.amount4,
            res.data.ppt21_1.amount5,
            res.data.ppt21_1.amount6,
            res.data.ppt21_1.amount7,
            res.data.ppt21_1.amount8,
            res.data.ppt21_1.amount9,
          ];

          this.ect_1 = [
            res.data.ppt21_1.ect1,
            res.data.ppt21_1.ect2,
            res.data.ppt21_1.ect3,
            res.data.ppt21_1.ect4,
            res.data.ppt21_1.ect5,
            res.data.ppt21_1.ect6,
            res.data.ppt21_1.ect7,
            res.data.ppt21_1.ect8,
            res.data.ppt21_1.ect9,
          ];

          this.plan_2 = [
            res.data.ppt21_2.plan1,
            res.data.ppt21_2.plan2,
            res.data.ppt21_2.plan3,
            res.data.ppt21_2.plan4,
          ];

          this.amount_2 = [
            res.data.ppt21_2.amount1,
            res.data.ppt21_2.amount2,
            res.data.ppt21_2.amount3,
            res.data.ppt21_2.amount4,
          ];
          this.ect_2 = [
            res.data.ppt21_2.ect1,
            res.data.ppt21_2.ect2,
            res.data.ppt21_2.ect3,
            res.data.ppt21_2.ect4,
          ];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt21(this.$route.params.id);
  },
};
</script>

<style scoped>
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
  /* 테이블의 전체 너비 */
  border-collapse: collapse;
  /* 테두리가 겹치게 설정 */
  font-size: 1.3rem;
}

.table1 th,
.table1 td,
.table2 th,
.table2 td {
  border: 1px solid #d2d2d2;
  /* 테두리 설정 */
  text-align: center;
  /* 텍스트 중앙 정렬 */
}

.table1 th,
.table1 td {
  width: 25%;
  /* table1의 각 열 너비를 전체의 25%로 설정 */
}

.table2 th:nth-child(1),
.table2 td:nth-child(1) {
  width: 25%;
  /* table2의 첫 번째 열 너비를 전체의 30%로 설정 */
}

.table2 th:nth-child(2),
.table2 td:nth-child(2) {
  width: 50%;
  /* table2의 두 번째 열 너비를 전체의 40%로 설정 */
}

.table2 th:nth-child(3),
.table2 td:nth-child(3) {
  width: 25%;
  /* table2의 세 번째 열 너비를 전체의 30%로 설정 */
}

th {
  background-color: #4264ae;
  color: white;
}

table tr:last-child td {
  border-bottom: #4264ae 1px solid;
}
</style>
