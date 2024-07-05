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
      <div class="basicContentBar preSB">3-2 : 해결안 설계</div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">2.</span> 고객의 욕구를 정확하게 해결하기
          위해 아이디어를 구체화하고 고객이 얻을 수 있는 혜택과 구매 가능성을
          높이기 위한 제품 구매 요소(Key Buying Factor)를 설계합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 32rem; padding-left: 3rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">2-1.</span> 고객의 불편함을 일으키는
            근본적인 원인을 우리가 해결하고자 하는 문제로 정의하세요.</label
          >
          <textarea
            type="text"
            class="form-control2 bg-light p-2 rounded preM"
            id="businessArea"
            style="border: none; resize: none"
            placeholder="ex.고객 불편 사항의 근본적인 원인을 해결하기 위하여 우리의 문제로 작성하여 주세요."
            v-model="question1"
          ></textarea>
        </div>
        <div>
          <label for="businessArea2" class="preSB form-label fs-4"
            ><span class="primeColor">2-2.</span> 문제를 해결하기 위한 창의적인
            아이디어와 이를 구현하는 방법(Method)을 구체적으로 작성하여
            봅니다.</label
          >
          <textarea
            type="text"
            class="form-control2 bg-light p-2 rounded preM"
            id="businessArea2"
            style="border: none; resize: none"
            placeholder="ex.문제 해결을 위한 아이디어를 구체적으로 작성하여 주세요."
            v-model="question2"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt14"
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
    };
  },
  methods: {
    saveBetaPpt14() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
        };
        BetaService.saveBetaPpt14(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt14(this.$route.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt14(id) {
      BetaService.getBetaPpt14(id)
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
    this.getBetaPpt14(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 20rem;
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
  height: 12rem;
}
</style>
