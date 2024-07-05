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
        <div class="d-flex justify-content-between" style="width: 24rem">
          <img
            src="@/assets/beta/step06집.png"
            alt="사람"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #0098d5">
            STEP 06 :
          </div>
          <div class="preEB" style="font-size: 35px">시장 론칭</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">
        6-1 : 인바운드/아웃바운드 채널 설계
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">1.</span> 고객과 의사소통하기 위한 마케팅
          채널을 정의하고 설계합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 33rem; padding-left: 3rem"
      >
        <div>
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">1-1.</span> 우리가 제공하는 제품 또는
            서비스에 대해 최종 목표 고객이 가장 이해하기 쉽고 접근하기 쉬운
            마케팅 채널은 무엇입니까?</label
          >
          <div
            class="form-control1 bg-light p-2 rounded preM fs-4 mb-4"
            id="businessArea"
            style="border: none; resize: none; height: 7rem"
            v-html="formattedQuestion1"
          ></div>
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">1-2.</span> 여러가지 채널들을 우선
            순위화하고 각 채널 단위로 실행 계획을 수립합니다.</label
          >
          <input
            disabled
            type="text"
            class="form-control bg-light p-2 rounded preM fs-4 mb-4"
            id="businessArea"
            style="border: none; resize: none"
            placeholder="ex. 예시 필요."
            v-model="question2"
          />
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">1-2.</span> 각 채널에 필요한 활동을
            구체적으로 수행하시기 바랍니다.</label
          >
          <input
            disabled
            type="text"
            class="form-control bg-light p-2 rounded preM fs-4"
            id="businessArea"
            style="border: none; resize: none"
            placeholder="ex. 예시 필요."
            v-model="question3"
          />
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
      question3: "",
    };
  },
  methods: {
    getBetaPpt27(id) {
      BetaService.getBetaPpt27(id)
        .then((res) => {
          this.question1 = res.data.question1;
          this.question2 = res.data.question2;
          this.question3 = res.data.question3;
        })
        .catch(() => {});
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
  },
  mounted() {
    this.getBetaPpt27(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 30rem;
  background-color: #0098d5;
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
  color: #0098d5;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control1 {
  width: 75rem;
  height: 12rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}

.form-control3 {
  width: 75rem;
  height: 28rem;
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
