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
            disabled
            type="text"
            class="form-control bg-light p-2 rounded preM"
            id="businessArea"
            style="border-style: none"
            placeholder="ex. 예시 필요"
            v-model="question1"
          />
        </div>
        <div>
          <label for="businessArea2" class="preSB form-label fs-4"
            ><span class="primeColor">1-2.</span> 고객의 의견을 어떻게 제품과
            서비스에 적용할 것인지를 작성하여 주세요.</label
          >
          <input
            disabled
            type="text"
            class="form-control bg-light p-2 rounded preM"
            id="businessArea2"
            style="border-style: none"
            placeholder="ex. 예시 필요"
            v-model="question2"
          />
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-4"
            ><span class="preSB primeColor">1-3.</span> 시장 최적화된 상용화
            제품/서비스를 설계하고 구현하여 시장 침투를 위해 본격적인 준비를
            합니다.</label
          >
          <div
            class="form-control bg-light p-2 rounded preM"
            style="height: 9rem; border: none; resize: none"
            id="marketChanges"
            v-html="formattedQuestion3"
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
      question3: "",
    };
  },
  methods: {
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
  computed: {
    formattedQuestion3() {
      // 먼저, 줄바꿈 문자를 <br>로 변환합니다.
      let formattedText = this.question3.replace(/\n/g, "<br>");

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
input:disabled {
  color: #000;
  opacity: 1;
}
textarea:disabled {
  color: #000;
  opacity: 1;
}
</style>
