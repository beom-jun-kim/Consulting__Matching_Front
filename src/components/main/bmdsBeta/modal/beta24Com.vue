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
        <div class="d-flex justify-content-between" style="width: 31rem">
          <img
            src="@/assets/beta/step05사람.png"
            alt="큐브"
            style="width: 60px; height: 60px"
          />
          <div class="preEB" style="font-size: 35px; color: #0982d5">
            STEP 05 :
          </div>
          <div class="preEB" style="font-size: 35px">MVP 및 고객 평가</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar">
        5-3 : 시장 최적화 제품/서비스 구현
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">3.</span> 고객 평가를 진행하면서 얻은
          데이터를 기반으로 제품 또는 서비스를 신속하게 개선하여 시장 최적화된
          제품/서비스를 구현합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">1-1.</span> 고객 평가에서 얻은 데이터에서
            우리 제품/서비스에 대한 고객의 의견은 무언인가요?</label
          >
          <input
            type="text"
            class="form-control bg-light p-2 rounded preM"
            id="businessArea"
            style="border-style: none"
            placeholder="고객의 피드백 의견을 작성하세요."
            v-model="question1"
          />
        </div>
        <div>
          <label for="businessArea2" class="preSB form-label fs-4"
            ><span class="primeColor">1-2.</span> 고객의 의견을 어떻게 제품과
            서비스에 적용할 것인지를 작성하여 주세요.</label
          >
          <input
            type="text"
            class="form-control bg-light p-2 rounded preM"
            id="businessArea2"
            style="border-style: none"
            placeholder="고객의 의견을 어떻게 반영하실 것인지 작성하세요."
            v-model="question2"
          />
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-4"
            ><span class="preSB primeColor">1-3.</span> 시장 최적화된 상용화
            제품/서비스를 설계하고 구현하여 시장 침투를 위해 본격적인 준비를
            합니다.</label
          >
          <textarea
            type="text"
            class="form-control bg-light p-2 rounded preM"
            style="height: 9rem; border: none; resize: none"
            id="marketChanges"
            placeholder="최종 제품/서비스를 설계합니다."
            v-model="question3"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt25"
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
      question1: "", // 1-1-1
      question2: "", // 1-1-2
      question3: "",
    };
  },
  methods: {
    saveBetaPpt25() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
        };
        BetaService.saveBetaPpt25(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt25(id) {
      BetaService.getBetaPpt25(id)
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
    this.getBetaPpt25(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 30rem;
  height: 3.5rem;
  background-color: #0982d5;
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: #0982d5;
}

.form-control {
  width: 75rem;
  height: 5rem;
}
</style>
