<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <div style="color: gray; font-size: 1rem; margin: 1rem 1rem 0 0">
        Business Model Design Solution
      </div>
      <div>
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex">
        <div
          style="
            font-size: 6rem;
            width: 6rem;
            color: rgba(236, 226, 238, 1);
            margin: -2.7rem 1.5rem 0 -7.5rem;
          "
        >
          03
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Partbers</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            2) 비교항목(Criteria) 선정
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        style="
          width: 83rem;
          height: 3.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
          margin-left: -1rem;
        "
      >
        <div style="font-size: 17px; margin-left: 39px; line-height: 26px">
          기존 대안(경쟁사)들의 경쟁 우위를 파악하기 위해 Criteria(비교항목)을
          선정하고 항목별 중요도(1~5점)를 매깁니다.<br />
          각 제품의 주요 성능을 평가하여 어느 제품이 가장 우세한지 파악합니다.
        </div>
      </div>
    </div>
    <table class="table text-center mt-4 table-bordered">
      <thead>
        <tr style="background-color: rgb(199, 121, 196); color: white">
          <td>비교항목</td>
          <td>중요도</td>
          <td>자사 기준</td>
          <td>경쟁사</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in comLists" :key="index">
          <td style="background-color: rgba(236, 226, 238, 1)">
            <input
              v-model="item.creteria"
              placeholder="비교항목 입력"
              style="border: none; background-color: rgba(236, 226, 238, 1)"
            />
          </td>
          <td>
            <div>
              <label v-for="i in 5" :key="i">
                <input
                  type="radio"
                  v-model="item.importance"
                  :value="i"
                  :name="'importance-' + index"
                />
                {{ i }}점
              </label>
            </div>
          </td>
          <td>
            <input
              v-model="item.ours.spec"
              placeholder="자사스펙 입력"
              style="border: none"
            />
            <div>
              <label v-for="i in 5" :key="i">
                <input type="radio" v-model="item.ours.value" :value="i" />
                {{ i }}점
              </label>
            </div>
          </td>
          <td>
            <input
              v-model="item.competitor.spec"
              placeholder="경쟁사스펙입력"
              style="border: none"
            />
            <div>
              <label v-for="i in 5" :key="i">
                <input
                  type="radio"
                  v-model="item.competitor.value"
                  :value="i"
                />
                {{ i }}점
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addRow" class="btn btn-primary">행 추가하기</button>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      comLists: [
        {
          creteria: "",
          importance: null,
          ours: {
            spec: "",
            value: null,
          },
          competitor: {
            spec: "",
            value: null,
          },
        },
      ],
    };
  },
  methods: {
    addRow() {
      this.comLists.push({
        creteria: "",
        importance: null,
        ours: {
          spec: "",
          value: null,
        },
        competitor: {
          spec: "",
          value: null,
        },
      });
    },
    getCriteria(id) {
      BMDSService.getCriteria(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getCriteria(this.$route.params.id);
  },
};
</script>

<style scoped>
.table-bordered td,
.table-bordered th {
  border: 5px solid rgba(255, 255, 255, 1); /* 기본값은 1px인데, 이를 2px로 늘립니다. */
  padding: 10px 15px; /* 셀 내부의 패딩을 조절하여 경계와 내용 사이에 거리를 둡니다. */
}
table {
  font-size: 1rem;
}
input[type="radio"] {
  display: block !important;
}
</style>
