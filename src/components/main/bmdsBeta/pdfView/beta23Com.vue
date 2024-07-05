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
        <div class="d-flex justify-content-between" style="width: 30rem">
          <img
            src="@/assets/beta/step05사람.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #0982d5">
            STEP 05 :
          </div>
          <div class="preEB" style="font-size: 35px">MVP 및 고객 평가</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="height: 4rem">
        5-2 : 시장 검증 시나리오 설계
      </div>
    </div>

    <div style="width: 81rem; height: 38.5rem">
      <div class="mt-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">2.</span> 구현된 MVP로 시장 검증을 위해
          사용자 테스트 및 사용성 평가를 진행하여 필요한 데이터를 수집합니다.
        </label>
      </div>
      <div
        class="mt-2 d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <label for="businessArea2" class="preSB form-label fs-4"
            ><span class="primeColor">2-1.</span> 사용자 테스트 : 고객이 우리
            제품/서비스를 구매할 의향이 얼마나 있는가?</label
          >
          <div
            class="form-control bg-light p-2 rounded preM"
            id="businessArea2"
            style="border: none; resize: none"
            v-html="formattedQuestion1"
          ></div>
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-4"
            ><span class="preSB primeColor">2-2.</span> 고객이 우리
            제품/서비스를 사용하면서 불편함이나 개선할 부분은 무엇인가?</label
          >
          <div
            class="form-control bg-light p-2 rounded preM"
            style="height: 9rem; border: none; resize: none"
            id="marketChanges"
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
      question1: "",
      question2: "",
    };
  },
  methods: {
    getBetaPpt24(id) {
      BetaService.getBetaPpt24(id)
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
      // 먼저, 줄바꿈 문자를 <br>로 변환합니다.
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
      // 먼저, 줄바꿈 문자를 <br>로 변환합니다.
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
    this.getBetaPpt24(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 26.1rem;
  background-color: #0982d5;
  color: white;
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
  color: #0982d5;
}

.form-control {
  width: 75rem;
  height: 15rem;
}

textarea:disabled {
  color: #000;
  opacity: 1;
}
</style>
