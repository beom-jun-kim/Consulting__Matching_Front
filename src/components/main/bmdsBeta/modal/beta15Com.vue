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
          <img
            src="@/assets/basicBulb.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
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
      <div class="basicContentBar preSB">3-3 : 4P(with 4C) Mix 설계</div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 28px"
        >
          <span class="primeColor">3.</span> 제품/서비스에 대한 고객 인식 수준을
          향상시키고 수요 고객과 소통하기 위한 방안을 수립합니다. (4P 및 4C
          설계)
        </label>
        <textarea
          type="text"
          class="form-control2 bg-light p-2 rounded preM"
          id="businessArea"
          style="border: none; resize: none"
          placeholder="구체화된 아이템을 고객과 소통하기 위하여 4P(제품,유통,가격,프로모션)와 4C(가치,편의성,고객부담비용,커뮤니케이션) 관점에서 설계합니다."
          v-model="question1"
        ></textarea>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt16"
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
    };
  },
  methods: {
    saveBetaPpt16() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
        };
        BetaService.saveBetaPpt16(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt16(this.$route.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt16(id) {
      BetaService.getBetaPpt16(id)
        .then((res) => {
          this.question1 = res.data.question1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt16(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 26rem;
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
  width: 81rem;
  height: 32rem;
}
</style>
