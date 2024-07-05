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
        <div class="d-flex justify-content-between" style="width: 24rem">
          <img
            src="@/assets/beta/step06집.png"
            alt="사람"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #0098d5">
            STEP 06 :
          </div>
          <div class="preEB" style="font-size: 35px">시장 론칭</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">6-3 : 수익구조 및 가격전략 수립</div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">3.</span> 고객을 확보하고 고객과의 관계
          개선을 위해 수익 구조와 가격전략을 수립힙니다.<br />&nbsp;&nbsp;&nbsp;&nbsp;(수익구조
          설계는 고객을 발굴하고 충성 고객을 지속적으로 유지하며 고객 확장을
          위한 구조로 설계합니다.)
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 33rem; padding-left: 1rem"
      >
        <div>
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">3-1.</span> 구매고객 및 구매대상은
            누구입니까?</label
          >
          <div class="d-flex justify-content-between align-items-center">
            <input
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 5rem; width: 24rem"
              placeholder="1."
              v-model="question1_1"
            />
            <input
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 5rem; width: 24rem"
              placeholder="2."
              v-model="question1_2"
            />
            <input
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 5rem; width: 24rem"
              placeholder="3."
              v-model="question1_3"
            />
          </div>
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">3-2.</span> 각각의 고객에게 제공되는 제품
            또는 서비스가 가지고 있는 특성은 무엇입니까?</label
          >
          <div class="d-flex justify-content-between align-items-center">
            <input
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 5rem; width: 24rem"
              placeholder="1."
              v-model="question2_1"
            />
            <input
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 5rem; width: 24rem"
              placeholder="2."
              v-model="question2_2"
            />
            <input
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 5rem; width: 24rem"
              placeholder="3."
              v-model="question2_3"
            />
          </div>
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">3-3.</span> 시장에서의 가격경쟁력을 갖추기
            위한 우리의 가격정책은 무엇입니까?</label
          >
          <textarea
            type="text"
            class="form-control bg-light p-2 rounded preM fs-4"
            id="businessArea"
            style="border: none; resize: none; height: 8rem"
            placeholder="ex. 시장침투가격, 초기고가전략, 프로모션가격전략, 동적가격전략, 라인업별 가격전략"
            v-model="question3"
          />
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt29"
        >저장</b-button
      >
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      question1_1: "",
      question1_2: "",
      question1_3: "",
      question2_1: "",
      question2_2: "",
      question2_3: "",
      question3: "",
    };
  },
  methods: {
    saveBetaPpt29() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1_1: this.question1_1,
          question1_2: this.question1_2,
          question1_3: this.question1_3,
          question2_1: this.question2_1,
          question2_2: this.question2_2,
          question2_3: this.question2_3,
          question3: this.question3,
        };
        BetaService.saveBetaPpt29(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt29(this.$route.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt29(id) {
      BetaService.getBetaPpt29(id)
        .then((res) => {
          (this.question1_1 = res.data.question1_1),
            (this.question1_2 = res.data.question1_2),
            (this.question1_3 = res.data.question1_3),
            (this.question2_1 = res.data.question2_1),
            (this.question2_2 = res.data.question2_2),
            (this.question2_3 = res.data.question2_3),
            (this.question3 = res.data.question3);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt29(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 30rem;
  background-color: #0098d5;
  color: white;
  border-radius: 12px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholderColor {
  font-size: 20px;
  color: #818181;
}

.primeColor {
  color: #0098d5;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control1 {
  width: 75rem;
  height: 12rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}

.form-control3 {
  width: 75rem;
  height: 28rem;
}
</style>
