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
        <div class="d-flex justify-content-between" style="width: 22rem">
          <img
            src="@/assets/bmds3/basicIcon1.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #fa9d1b">
            STEP 01 :
          </div>
          <div class="preEB" style="font-size: 35px">기회탐색</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar">1-2 : 고객의 불편사항 파악</div>
    </div>

    <div style="width: 81rem; height: 38.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">2.</span> 시장내에서 잠재고객이 가지고 있는
          여러가지 불편사항과 니즈 및 요구사항을 확인해 봅니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <label
            for="businessArea"
            class="preSB form-label2"
            style="width: 74rem; font-size: 27px"
          >
            <span class="primeColor">2-1.</span> 고객으로 생각하는 사람 또는
            기업이 가지고 있는 불편한 점이나 요구사항 또는 필요로 하는
            것들(불충족 니즈)이 어떠한 게 있을까요?</label
          >
        </div>
        <div class="d-flex justify-content-between m-3" style="width: 78rem">
          <div class="preSB board fs-4 text-center">
            <span class="primeColor">고객의 불만사항(Pain Point)</span>
            <div
              class="bg-light p-2 rounded mb-1 mt-3 text-start"
              style="
                height: 22rem;
                border: none;
                width: 21rem;
                overflow: auto;
                word-wrap: break-word;
                color: #000 !important;
              "
              v-html="formattedQuestion1"
            ></div>
          </div>
          <div class="preSB d-flex board flex-column fs-4 text-center">
            <span class="primeColor">고객의 요구사항(Requirements)</span>
            <div
              class="bg-light p-2 rounded mb-1 mt-3 text-start"
              style="
                height: 22rem;
                border: none;
                width: 21rem;
                overflow: auto;
                word-wrap: break-word;
                color: #000 !important;
              "
              v-html="formattedQuestion2"
            ></div>
          </div>
          <div class="preSB d-flex board flex-column fs-4 text-center">
            <span class="primeColor">고객이 필요로 하는 것(Unmet Needs)</span>
            <div
              class="bg-light p-2 rounded mb-1 mt-3 text-start"
              style="
                height: 22rem;
                border: none;
                width: 21rem;
                overflow: auto;
                word-wrap: break-word;
                color: #000 !important;
              "
              v-html="formattedQuestion3"
            ></div>
          </div>
        </div>
      </div>
      <div class="text-end preM" style="color: gray; font-size: 1rem">
        Copyright 2023. MERAKL Inc. all rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      question1: "", // 2-1-1
      question2: "", // 2-1-2
      question3: "", // 2-1-3
    };
  },
  methods: {
    getBetaPpt4(id) {
      BetaService.getBetaPpt4(id)
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
  computed: {
    formattedQuestion1() {
      return this.question1.replace(/\n/g, "<br>");
    },
    formattedQuestion2() {
      return this.question2.replace(/\n/g, "<br>");
    },
    formattedQuestion3() {
      return this.question3.replace(/\n/g, "<br>");
    },
  },

  mounted() {
    this.getBetaPpt4(this.$route.params.id);
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
  color: rgb(249, 156, 27);
}

.form-label {
  display: inline-block;
  /* 레이블이 인라인 블록 요소처럼 행동하도록 설정 */
  text-indent: -2rem;
  /* 첫 줄을 왼쪽으로 이동하여 들여쓰기를 취소 */
  padding-left: 2rem;
  /* 첫 줄을 제외한 나머지 줄에 들여쓰기 적용 */
  width: calc(100% - 4rem);
  /* 레이블의 너비를 조정하여 줄바꿈 위치를 조정 */
}

.form-label2 {
  display: inline-block;
  text-indent: -2rem;
  width: calc(100% - 4rem);
}

.board {
  width: 25rem;
  height: 28rem;
  border: solid 1px rgb(249, 156, 27);
  border-radius: 0.5rem;
  padding: 25px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

textarea:disabled {
  color: black;
}
</style>
