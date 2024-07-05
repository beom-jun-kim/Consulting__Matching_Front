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
      <div class="basicContentBar preSB">
        3-1 : 고객관점 불편요소(pain point) 탐색 및 원인 분석
      </div>
    </div>

    <div style="width: 81rem; height: 37rem">
      <div
        class="mt-2 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="mb-3 mt-3" style="width: 75rem; border-radius: 20px">
          <div
            for="businessArea"
            class="preSB form-label mb-3"
            style="font-size: 27px"
          >
            <span class="primeColor">1-3.</span> 우리가 해결하고자 하는 고객
            불편요소를 선정하고 불편함의 내용을 상세하게 작성한 다음
            우선순위화를<br />
            합니다.
          </div>
          <div
            class="form-control bg-light p-2 mb-4 preM"
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
          <label class="preSB form-label" style="font-size: 27px"
            ><span class="primeColor">1-4.</span> 고객의 불편함을 일으키는
            근본적인 원인을 탐색합니다.</label
          >
          <div
            class="form-control bg-light p-2 mb-5 preM"
            id="businessArea"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
              font-size: 25px;
              width: 74rem;
              height: 10.5rem;
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
      question1: "", // 1-1-1
      question2: "", // 1-1-2
    };
  },
  methods: {
    getBetaPpt13(id) {
      BetaService.getBetaPpt13(id)
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
    this.getBetaPpt13(this.$route.params.id);
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
