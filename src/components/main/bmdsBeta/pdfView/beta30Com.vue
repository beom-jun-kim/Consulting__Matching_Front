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
      <div class="basicContentBar preSB">7-1 : 고객 반응 데이터 지표 설계</div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">1.</span> 제품 또는 서비스가 시장에 진입한
          이후 시장에서 일어나는 일들을 확인하고 분석합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem; padding-left: 3rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-1.</span> 고객 반응 데이터를 확인하기
            위하여 우리는 어떠한 데이터를 확인해야 합니까?</label
          >
          <div
            class="form-control3 bg-light p-3 rounded preM fs-4"
            id="businessArea"
            style="border: none; resize: none"
            v-html="formattedQuestion1"
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
    };
  },
  methods: {
    getBetaPpt31(id) {
      BetaService.getBetaPpt31(id)
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
      const maxLineLength = 80;
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
    this.getBetaPpt31(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 30rem;
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
input:disabled {
  color: #000;
  opacity: 1;
}
textarea:disabled {
  color: #000;
  opacity: 1;
}
</style>
