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
        <div class="d-flex justify-content-between" style="width: 38rem">
          <img src="@/assets/beta/step4큐브.png" alt="큐브" style="width: 60px; height: 60px" />
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
      <div class="preSB basicContentBar" style="background-color: #4264ae">
        4-1 : 제품 또는 서비스 정의
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 30px">
          <span class="primeColor">1.</span> 고객이 진정으로 원하는 우리만의
          제품과 서비스를 구체적으로 설계하여 봅니다.
        </label>
      </div>
      <div class="my-3 d-flex flex-column justify-content-between align-items-center" style="height: 34rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">1-1.</span> 기본적 기능/성능/품질(반드시
            있어야 하는 것)</label>
          <input type="text" class="form-control bg-light p-2 rounded preM" id="businessArea" style="border-style: none"
            placeholder="필수적 요소가 무엇일까요?" v-model="question1" />
        </div>
        <div>
          <label for="businessArea2" class="preSB form-label fs-4"><span class="primeColor">1-2.</span> 경쟁적 기능/성능/품질(다른
            경쟁업체 제품/서비스와 비교할 수 있는 것)</label>
          <input type="text" class="form-control bg-light p-2 rounded preM" id="businessArea2" style="border-style: none"
            placeholder="비교 우위적인 요소를 무엇일까요?" v-model="question2" />
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-4"><span class="preSB primeColor">1-3.</span> 매력적
            기능/성능/품질(다른 경젱업체와 비교하여 월등히 우수하거나 완전히
            다른 것)</label>
          <textarea type="text" class="form-control bg-light p-2 rounded preM"
            style="height: 9rem; border: none; resize: none" id="marketChanges" placeholder="매력적인 요소는 무엇일까요?"
            v-model="question3"></textarea>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt18">저장</b-button>
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
      question3: "",
    };
  },
  methods: {
    saveBetaPpt18() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
        };
        BetaService.saveBetaPpt18(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt18(this.$route.params.id);
          })
          .catch(() => { });
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt18(id) {
      BetaService.getBetaPpt18(id)
        .then((res) => {
          this.question1 = res.data.question1;
          this.question2 = res.data.question2;
          this.question3 = res.data.question3;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt18(this.$route.params.id);
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
</style>
