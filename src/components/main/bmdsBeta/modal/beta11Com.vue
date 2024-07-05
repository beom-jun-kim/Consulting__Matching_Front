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
        <div class="d-flex justify-content-between" style="width: 37rem">
          <img src="@/assets/basicBulb.png" alt="돋보기" style="width: 50px; height: 50px" />
          <div class="preEB" style="font-size: 35px; color: #f75943">
            STEP 03 :
          </div>
          <div class="preEB" style="font-size: 35px">
            아이디어 컨셉 정의 및 개발
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">
        3-1 : 고객관점 불편요소(pain point) 탐색 및 원인 분석
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 30px">
          <span class="primeColor">1.</span> 고객관점에서 불편요소를 정의하고
          원인을 분석합니다.
        </label>
      </div>
      <div class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem; padding-left: 3rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">1-1.</span> 제품 분야에서 우리가 해결하고자
            하는 고객의 결정적인(Critical) 불편함(pain point)을 작성해
            봅니다.</label>
          <textarea type="text" class="form-control2 bg-light p-2 rounded preM" id="businessArea"
            style="border: none; resize: none"
            placeholder="ex.제품이 가지고 있는 기능,성능,품질,디자인,서비스,구매조건 등에서 고객이 가장 불편하다고 생각하는 항목을 작성하세요."
            v-model="question1"></textarea>
        </div>
        <div>
          <label for="businessArea2" class="preSB form-label fs-4"><span class="primeColor">1-2.</span> 서비스 분야에서 우리가
            해결하고자 하는 고객의 결정적인(Critical) 불편함(pain point)을
            작성해 봅니다.</label>
          <textarea type="text" class="form-control2 bg-light p-2 rounded preM" id="businessArea2"
            style="border: none; resize: none"
            placeholder="ex.서비스가 가지고 있는 기능,성능,품질,디자인,서비스,구매조건 등에서 고객이 가장 불편하다고 생각하는 항목을 작성하세요."
            v-model="question2"></textarea>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt12">저장</b-button>
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      question1: "", // 1-1-1
      question2: "", // 1-1-2
    };
  },
  methods: {
    saveBetaPpt12() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
        };
        BetaService.saveBetaPpt12(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt12(this.$route.params.id);
          })
          .catch(() => { });
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt12(id) {
      BetaService.getBetaPpt12(id)
        .then((res) => {
          this.question1 = res.data.question1;
          this.question2 = res.data.question2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt12(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 46rem;
  background-color: #f75943;
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
  color: #f75943;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}
</style>
