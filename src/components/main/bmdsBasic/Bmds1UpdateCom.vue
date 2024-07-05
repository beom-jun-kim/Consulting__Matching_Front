<template>
  <div class="container mb-5">
    <h1 class="mb-4">Bmds1 수정</h1>
    <form>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="title">제목</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="bmds1.title"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="marketInsight">마켓 인사이트</label>
        <input
          type="text"
          class="form-control"
          id="marketInsight"
          v-model="bmds1.marketInsight"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="customerSelection">고객/문제 정의</label>
        <input
          type="text"
          class="form-control"
          id="customerSelection"
          v-model="bmds1.customerSelection"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="existingAlternatives">기존 대안 분석</label>
        <input
          type="text"
          class="form-control"
          id="existingAlternatives"
          v-model="bmds1.existingAlternatives"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="solution">해결안</label>
        <input
          type="text"
          class="form-control"
          id="solution"
          v-model="bmds1.solution"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="valueSelection">가치 선정</label>
        <input
          type="text"
          class="form-control"
          id="valueSelection"
          v-model="bmds1.valueSelection"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="keyResources">핵심 자원</label>
        <input
          type="text"
          class="form-control"
          id="keyResources"
          v-model="bmds1.keyResources"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="keyPartners">핵심 파트너</label>
        <input
          type="text"
          class="form-control"
          id="keyPartners"
          v-model="bmds1.keyPartners"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="revenueModel">수익모델</label>
        <input
          type="text"
          class="form-control"
          id="revenueModel"
          v-model="bmds1.revenueModel"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="keyActivities">핵심 활동</label>
        <input
          type="text"
          class="form-control"
          id="keyActivities"
          v-model="bmds1.keyActivities"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="customerExperienceDesign">고객 경험 설계</label>
        <input
          type="text"
          class="form-control"
          id="customerExperienceDesign"
          v-model="bmds1.customerExperienceDesign"
        />
      </div>
      <!-- 수정하려는 항목의 입력 필드 -->
      <div class="form-group">
        <label for="feedback">피드백</label>
        <input
          type="text"
          class="form-control"
          id="feedback"
          v-model="bmds1.feedback"
        />
      </div>

      <button class="btn btn-primary" @click.prevent="updateItem">제출</button>
      <button class="btn btn-primary" @click="state = 'BMLearning'">
        돌아가기
      </button>
    </form>
  </div>
</template>

<script>
import BMDataService from "@/services/main/BMDataService";

export default {
  data() {
    return {
      bmds1: {
        title: "",
        marketInsight: "",
        customerSelection: "",
        existingAlternatives: "",
        solution: "",
        valueSelection: "",
        keyResources: "",
        keyPartners: "",
        revenueModel: "",
        keyActivities: "",
        customerExperienceDesign: "",
        feedback: "",
      },
    };
  },
  methods: {
    updateItem() {
      //   const data = {
      //     // 여기에는 원래의 Bmds1 작성 데이터와 동일한 데이터가 들어갑니다.
      //     // 수정할 항목의 이름과 값을 추가하였습니다.
      //     title: this.title,
      //     marketInsight: this.marketInsight,
      //     customerSelection: this.customerSelection,
      //     existingAlternatives: this.existingAlternatives,
      //     solution: this.solution,
      //     valueSelection: this.valueSelection,
      //     keyResources: this.keyResources,
      //     keyPartners: this.keyPartners,
      //     revenueModel: this.revenueModel,
      //     keyActivities: this.keyActivities,
      //     customerExperienceDesign: this.customerExperienceDesign,
      //     feedback: this.feedback,
      //   };

      const id = this.$route.params.id;
      BMDataService.updateBM(id, this.bmds1)
        .then(() => {
          if (!alert("수정되었습니다.")) {
            window.location = `/main/bmds1/${id}`;
          }
        })
        .catch((e) => {
          alert(e);
        });
    },
    async getByBm(id) {
      await BMDataService.getBM(id)
        .then((response) => {
          this.bmds1 = response.data;
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
  mounted() {
    this.getByBm(this.$route.params.id);
  },
};
</script>

<style>
/* 필요한 스타일을 여기에 추가하세요. */
</style>
