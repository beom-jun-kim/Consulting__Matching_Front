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
        <div class="d-flex justify-content-between" style="width: 34rem">
          <img
            src="@/assets/beta/step07로켓.png"
            alt="집"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #53c5c0">
            STEP 07 :
          </div>
          <div class="preEB" style="font-size: 35px">
            고객 개발 및 시장 확장
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">
        7-3 : 성장을 위한 준비 단계 및 계획 수립
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">3.</span> 앞으로 우리가 성장하기 위해서는
          단기, 중기, 장기적으로 무엇을 할 계획인가요?
        </label>
        <div class="image-container" style="margin-right: 7.2rem"></div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <label
              for="businessArea"
              class="preSB form-label"
              style="font-size: 25.5px"
            >
              <span class="primeColor">3-1.</span> 단기 목표(1년 이내)</label
            >
            <div
              class="form-control bg-light p-3 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 15rem; width: 25.6rem"
              v-html="formattedQuestion1"
            ></div>
          </div>
          <div>
            <label
              for="businessArea"
              class="preSB form-label"
              style="font-size: 25.5px"
            >
              <span class="primeColor">3-1.</span> 중기 목표(2년~3년
              이내)</label
            >
            <div
              class="form-control bg-light p-3 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 15rem; width: 25.6rem"
              v-html="formattedQuestion2"
            ></div>
          </div>
          <div>
            <label
              for="businessArea"
              class="preSB form-label"
              style="font-size: 25.5px"
            >
              <span class="primeColor">3-1.</span> 장기 목표(4년~5년
              이내)</label
            >
            <div
              class="form-control bg-light p-3 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 15rem; width: 25.6rem"
              v-html="formattedQuestion3"
            ></div>
          </div>
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
      question1: "",
      question2: "",
      question3: "",
    };
  },
  methods: {
    getBetaPpt33(id) {
      BetaService.getBetaPpt33(id)
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
      // 먼저, 줄바꿈 문자를 <br>로 변환합니다.
      let formattedText = this.question1.replace(/\n/g, "<br>");

      // 50자마다 <br> 추가하기
      const maxLineLength = 25;
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
      // 먼저, 줄바꿈 문자를 <br>로 변환합니다.
      let formattedText = this.question2.replace(/\n/g, "<br>");

      // 50자마다 <br> 추가하기
      const maxLineLength = 25;
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
    formattedQuestion3() {
      // 먼저, 줄바꿈 문자를 <br>로 변환합니다.
      let formattedText = this.question3.replace(/\n/g, "<br>");

      // 50자마다 <br> 추가하기
      const maxLineLength = 25;
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
    this.getBetaPpt33(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 32rem;
  background-color: #53c5c0;
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
  color: #53c5c0;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}

.form-control3 {
  width: 75rem;
  height: 28rem;
}

.image-container {
  width: 81rem;
  height: 17rem;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/beta/31.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

input:disabled {
  color: #000;
  opacity: 1;
}
textarea:disabled {
  color: #000;
  opacity: 1;
}
</style>
