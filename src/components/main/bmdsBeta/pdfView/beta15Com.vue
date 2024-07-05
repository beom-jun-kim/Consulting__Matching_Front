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

    <div style="width: 82rem; height: 40rem">
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
        <div
          class="form-control2 bg-light p-3 rounded preM"
          id="businessArea"
          style="border: none; resize: none; line-height: 2.5"
          v-html="formattedQuestion1"
        ></div>
      </div>
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
  computed: {
    formattedQuestion1() {
      // 먼저, 줄바꿈 문자를 <br>로 변환합니다.
      let formattedText = this.question1.replace(/\n/g, "<br>");

      // 50자마다 <br> 추가하기
      const maxLineLength = 100;
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

textarea:disabled {
  color: #000;
  opacity: 1;
}
</style>
