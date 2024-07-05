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
            1) 경쟁사 분석
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
          고객들이 현재는 어떤 방법으로 문제를 해결하고 욕구를 충족시키고 있는지
          기존 대안(경쟁사)들에 대해 분석합니다.
        </div>
      </div>
    </div>
    <table class="table text-center mt-4 table-bordered">
      <thead>
        <tr style="background-color: rgb(199, 121, 196); color: white">
          <th>구분</th>
          <th v-for="(com, comIndex) in comLists" :key="comIndex">
            경쟁사 {{ comIndex + 1 }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, itemIndex) in tableItems" :key="itemIndex">
          <td style="background-color: rgba(236, 226, 238, 1)">
            {{ item.label }}
          </td>
          <td
            v-for="(com, comIndex) in comLists"
            :key="`com-${comIndex}-${itemIndex}`"
          >
            <input
              v-if="item.key.includes('.')"
              :value="getNestedValue(com, item.key)"
              @input="setNestedValue(com, item.key, $event.target.value)"
              class="form-control"
            />
            <input v-else v-model="com[item.key]" class="form-control" />
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addColumn" class="btn btn-primary">추가하기</button>
    <button
      class="btn btn-sm btn-primary"
      style="float: right; margin-top: 6px"
      @click="saveCom"
    >
      임시저장
    </button>
  </div>
</template>

<script>
/* eslint-disable */
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      tableItems: [
        { label: "경쟁사명", key: "company_name" },
        { label: "회사 규모", key: "company_size" },
        { label: "주요 고객", key: "main_customers" },
        { label: "핵심 고객가치", key: "core_customer_value" },
        { label: "시장 점유율", key: "market_share" },
        { label: "가격대", key: "price" },
        { label: "대표 상품/서비스", key: "mainProducts.0.product_name" }, // Adjusted for the first product's name
      ],
      comLists: [
        {
          competitor_id: null,
          company_name: "",
          company_size: "",
          main_customers: "",
          core_customer_value: "",
          market_share: 0,
          price: 0,
          mainProducts: [{ product_id: null, product_name: "" }], // Ensure this is an array
        },
      ],
    };
  },
  methods: {
    addColumn() {
      this.comLists.push({
        competitor_id: null,
        company_name: "",
        company_size: "",
        main_customers: "",
        core_customer_value: "",
        market_share: 0,
        mainProduct: [{ product_id: null, product_name: "" }],
        price: 0,
      });
    },

    saveCom() {
      if (confirm("저장하시겠습니까?")) {
        // 데이터 출력해서 확인
        console.log(
          "🚀 ~ file: Why9Com.vue:139 ~ saveCom ~ comLists:",
          JSON.parse(JSON.stringify(this.comLists))
        );
        // 서버에 저장하기 전에 데이터를 확인
        BMDSService.saveCompetitor(this.$route.params.id, this.comLists)
          .then((res) => {
            console.log("🚀 ~ file: Why9Com.vue:137 ~ .then ~ res:", res);
            // 성공적으로 저장되었음을 사용자에게 알리기
            alert("데이터가 성공적으로 저장되었습니다.");
            this.getCompetitor(this.$route.params.id);
          })
          .catch((err) => {
            console.error(err);
            // 오류 발생 시 사용자에게 알리기
            alert("데이터 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
          });
      }
    },

    getCompetitor(id) {
      BMDSService.getCompetitor(id)
        .then((res) => {
          console.log("🚀 ~ file: Why9Com.vue:150 ~ .then ~ res:", res);

          this.comLists = res.data.map((com) => ({
            ...com,
          }));
          console.log(
            "🚀 ~ file: Why9Com.vue:155 ~ this.comLists=res.data.map ~ this.comLists:",
            this.comLists
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 중첩된 값을 가져오는 메소드
    getNestedValue(obj, path) {
      return path.split(".").reduce((o, p) => o && o[p], obj);
    },

    // 중첩된 값을 설정하는 메소드
    setNestedValue(obj, path, value) {
      const keys = path.split(".");
      const lastKey = keys.pop();
      const lastObj = keys.reduce((o, k) => (o[k] = o[k] || {}), obj);
      lastObj[lastKey] = value;
    },
  },

  mounted() {
    this.getCompetitor(this.$route.params.id);
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
</style>
