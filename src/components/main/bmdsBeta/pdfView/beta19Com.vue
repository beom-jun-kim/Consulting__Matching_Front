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
        <div class="d-flex justify-content-between" style="width: 38rem">
          <img
            src="@/assets/beta/step4큐브.png"
            alt="큐브"
            style="width: 60px; height: 60px"
          />
          <div class="preEB" style="font-size: 35px; color: #4264ae">
            STEP 04 :
          </div>
          <div class="preEB" style="font-size: 35px">
            아이디에이션(아이템 선정)
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar">4-3 : 제품 또는 서비스 정의</div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3 d-flex justify-content-between">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">3.</span> 사업 수행 일정을 작성하여
          봅니다.(추진일정 수립)
        </label>
        <div style="height: 0px">
          <img
            src="../../../../assets/세부추진계획수립.png"
            alt="수립"
            style="margin-top: -4rem"
          />
        </div>
      </div>
      <div class="mainText" style="border-bottom: 2px solid #4264ae">
        <div
          class="d-flex flex-column justify-content-between"
          style="height: 35rem"
        >
          <!-- 속성들 -->
          <div class="d-flex justify-content-between">
            <div class="planToSecNecesRes">사업 수행 내용</div>
            <div
              class="d-flex flex-column justify-content-between align-items-center"
              style="width: 48rem; height: 5rem"
            >
              <div class="planToSecNecesRes2">2024</div>
              <div class="d-flex">
                <!-- 1 ~ 12 -->
                <div
                  v-for="(month, i) in 12"
                  :key="i"
                  class="planToSecNecesRes3"
                >
                  {{ i + 1 }}
                </div>
              </div>
            </div>
          </div>
          <!-- 내용과 선택 월 -->
          <div style="width: 81rem; height: 30rem">
            <div v-for="(row, i) in checkboxes" :key="i" class="d-flex">
              <input
                disabled
                type="text"
                style="
                  width: 33rem;
                  height: 2.5rem;
                  border: none;
                  border-bottom: 2px solid #b9bcc0;
                "
                v-model="content[i]"
                class="preM"
              />
              <div
                class="d-flex"
                style="
                  width: 48rem;
                  height: 2.5rem;
                  border-left: 2px solid #808080;
                "
              >
                <label
                  v-for="(checkbox, j) in row"
                  :key="j"
                  :for="'customCheckbox' + i + 'n' + j"
                  class="customCheckboxLabel"
                  :style="{ backgroundColor: checkbox.backgroundColor }"
                >
                  <input
                    disabled
                    type="checkbox"
                    :id="'customCheckbox' + i + 'n' + j"
                    @change="toggleCheckbox(i, j, checkbox)"
                    v-model="value[i]"
                    :value="j + 1"
                    style="display: none"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      content: Array.from({ length: 12 }, () => ""),
      month: [],
      month2: Array.from({ length: 12 }, () => ""),
      checkboxes: Array.from({ length: 12 }, () =>
        Array.from({ length: 12 }, () => ({
          isChecked: false,
          backgroundColor: "#ffffff",
        }))
      ),
      value: [],
    };
  },
  methods: {
    toggleCheckbox(i, j, checkbox) {
      // 체크박스 상태를 업데이트합니다.
      checkbox.isChecked = !checkbox.isChecked;
      checkbox.backgroundColor = checkbox.isChecked ? "#4264AE" : "#ffffff";

      console.log(checkbox.isChecked);

      this.value[i] = [];

      // Update the array with checked checkboxes
      this.checkboxes[i].forEach((checkbox, index) => {
        if (checkbox.isChecked) {
          this.value[i].push(index + 1);
        }
      });
    },
    minMaxMonth() {
      // x값에 따라 그룹화
      const groupedByX = this.value.reduce((acc, values, index) => {
        const x = index + 1;
        if (!acc[x]) {
          acc[x] = [];
        }
        // Filter out empty strings ('') from values array
        const filteredValues = values.filter((value) => value !== "");
        acc[x] = acc[x].concat(filteredValues);
        return acc;
      }, {});

      // 각 그룹에서 y값의 최댓값과 최솟값 찾기
      const result = Object.entries(groupedByX).map(([x, yValues]) => {
        return {
          x: Number(x),
          max: yValues.length > 0 ? Math.max(...yValues) : 0,
          min: yValues.length > 0 ? Math.min(...yValues) : 0,
        };
      });

      // Update month2
      result.forEach(({ x, max, min }) => {
        this.month2[x - 1] = { max, min }; // Subtract 1 to match array index
      });
    },

    getBetaPpt20(id) {
      BetaService.getBetaPpt20(id)
        .then((res) => {
          this.content = [
            res.data.content1,
            res.data.content2,
            res.data.content3,
            res.data.content4,
            res.data.content5,
            res.data.content6,
            res.data.content7,
            res.data.content8,
            res.data.content9,
            res.data.content10,
            res.data.content11,
            res.data.content12,
          ];
          // 시작월과 끝월을 가져와서 사이값들과 같이 value에 저장
          this.value = Array.from({ length: 12 }, (_, i) => {
            const startMonth = res.data[`startMonth${i + 1}`];
            const endMonth = res.data[`endMonth${i + 1}`];
            return Array.from({ length: endMonth - startMonth + 1 }, (_, j) =>
              startMonth + j == 0 ? "" : startMonth + j
            );
          });
          this.checkboxes.forEach((row, rowIndex) => {
            row.forEach((checkbox, colIndex) => {
              const isChecked = this.value[rowIndex].includes(colIndex + 1);
              checkbox.isChecked = isChecked;
              checkbox.backgroundColor = isChecked ? "#4264AE" : "#ffffff";
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt20(this.$route.params.id);
  },
};
</script>

<style scoped>
.mainText {
  width: 81rem;
  height: 35rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.planToSecNecesRes {
  width: 33rem;
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
}

.checked {
  background-color: #4264ae;
}

input:disabled {
  color: #000;
  opacity: 1;
}
</style>
