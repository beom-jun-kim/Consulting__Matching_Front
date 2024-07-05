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
      <div class="basicContentBar preSB mb-4" style="width: 20rem">
        3-2 : 해결안 설계
      </div>
    </div>

    <div style="width: 81rem; height: 37rem">
      <div
        class="mt-2 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="mb-3" style="width: 75rem; border-radius: 20px">
          <label
            for="businessArea"
            class="preSB form-label mb-3"
            style="font-size: 27px"
          >
            <span class="primeColor">2-3.</span> 우리가 문제를 해결함으로써
            고객이 얻을 수 있는 혜택과 가치가 더욱 분명해 졌나요?<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(고객에게
            직접 확인하거나 정략적 수치로 나타내어 주세요.)
          </label>
          <div
            class="form-control bg-light p-3 mb-3 preM"
            id="businessArea"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
              font-size: 25px;
              width: 74rem;
              height: 12rem;
            "
            v-html="formattedQuestion1"
          ></div>
          <label class="preSB form-label mb-4" style="font-size: 27px"
            ><span class="primeColor">2-4.</span> 우리 제품은 수요 고객에게
            결정적인 구매 요소를 충분히 제공하고 있나요?(핵심 구매요소를
            설계합니다.)</label
          >
          <div
            class="form-control bg-light p-3 mb-5 preM"
            id="businessArea"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
              font-size: 25px;
              width: 74rem;
              height: 12rem;
            "
            v-html="formattedQuestion2"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      question1: "누가", // 1-1-1
      question2: "언제", // 1-1-2
    };
  },
  methods: {
    getBetaPpt15(id) {
      BetaService.getBetaPpt15(id)
        .then((res) => {
          this.question1 = res.data.question1;
          this.question2 = res.data.question2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    formattedQuestion1() {
      let formattedText = this.question1.replace(/\n/g, "<br>");

      // 50자마다 <br> 추가하기
      const maxLineLength = 50;
      let result = "";
      while (formattedText.length > 0) {
        // 최대 길이까지의 부분 문자열 추출
        let part = formattedText.substring(0, maxLineLength);
        // 나머지 문자열 업데이트
        formattedText = formattedText.substring(maxLineLength);

        // 결과 문자열에 부분 문자열과 줄바꿈 추가
        result += part + "<br>";
      }

      return result;
    },
    formattedQuestion2() {
      let formattedText = this.question2.replace(/\n/g, "<br>");

      // 50자마다 <br> 추가하기
      const maxLineLength = 50;
      let result = "";
      while (formattedText.length > 0) {
        // 최대 길이까지의 부분 문자열 추출
        let part = formattedText.substring(0, maxLineLength);
        // 나머지 문자열 업데이트
        formattedText = formattedText.substring(maxLineLength);

        // 결과 문자열에 부분 문자열과 줄바꿈 추가
        result += part + "<br>";
      }

      return result;
    },
  },
  mounted() {
    this.getBetaPpt15(this.$route.params.id);
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
  width: 81rem;
  height: 5rem;
}

.form-control2 {
  width: 81rem;
  height: 10rem;
}
textarea:disabled {
  color: #000;
  opacity: 1;
}
</style>
